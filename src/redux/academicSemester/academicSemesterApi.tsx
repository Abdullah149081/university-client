import baseApi from '../api/baseApi';

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => '/academic-semesters',
    }),
  }),
});

export const { useGetAllSemestersQuery } = academicSemesterApi;