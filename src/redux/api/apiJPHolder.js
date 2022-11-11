import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiJPHolder = createApi({

    reducerPath: 'apiJsonHolder',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({
        getPosts: builder.query({ query: () => '/posts' }),
        getPost: builder.query({ query: (id) => `/posts/${id}` }),
        getComments: builder.query({ query: () => `/comments` }),
        getComment: builder.query({ query: (id) => `/comments/${id}` })
    })

})

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useGetCommentsQuery,
    useGetCommentQuery } = apiJPHolder