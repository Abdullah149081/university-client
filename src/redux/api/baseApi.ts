import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { toast } from 'sonner';
import config from '../../config';
import { logOut, setUser } from '../features/auth/authSlice';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: config.URL,
  credentials: 'include', // send cookies
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).auth;
    if (token) {
      headers.set('Authorization', ` ${token}`);
    }
    return headers;
  },
});

const baseQueryRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 404) {
    toast.error('User not found');
  }

  if (result.error?.status === 401) {
    const res = await fetch(`${config.URL}/auth/refresh-token`, {
      method: 'POST',
      credentials: 'include',
    });
    const data = await res.json();

    if (data?.data?.accessToken) {
      const { user } = (api.getState() as RootState).auth;
      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryRefreshToken,
  endpoints: () => ({}),
});

export default baseApi;
