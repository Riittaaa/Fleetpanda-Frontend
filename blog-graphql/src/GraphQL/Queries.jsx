import { gql } from "@apollo/client";
// export const GET_BLOGS = gql`
//   query GetBlogs($blogId: ID!) {
//     blogDetails(blogId: $blogId) {
//       id
//       status
//       title
//       content
//       userId
//       organizationId
//       createdAt
//       updatedAt
//     }
//   }
// `;

export const GET_BLOGS = gql`
  query {
    blogs(organizationId: 2) {
      id
      status
      title
      content
      userId
      organizationId
      createdAt
      updatedAt
    }
  }
`;

export const ADD_BLOG = gql`
  mutation CreateBlog($input: CreateBlogInput!) {
    createBlog(input: $input) {
      id
      status
      title
      content
      userId
      organizationId
      createdAt
      updatedAt
    }
  }
`;
