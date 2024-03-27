import { TAcademicSemester, TQueryParam, TResponseRedux } from '../../types';
import baseApi from '../api/baseApi';

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) => {
        // Create a new URLSearchParams object
        const param = new URLSearchParams();

        // Check if there are any query parameters
        if (args) {
          args.forEach((item: TQueryParam) => {
            param.append(item.name, item.value as string);
          });
        }

        return {
          url: '/academic-semesters',
          method: 'GET',
          params: param,
        };
      },
      // Transform the response to only return the data and meta
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => ({
        data: response.data,
        meta: response.meta,
      }),
    }),

    postAcademicSemester: builder.mutation({
      query: (data) => ({
        url: '/academic-semesters/create-academic-semester',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery, usePostAcademicSemesterMutation } =
  academicSemesterApi;
