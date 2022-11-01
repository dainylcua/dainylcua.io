import { GraphQLClient, gql } from "graphql-request"

const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}/environments/master`

const client = new GraphQLClient(CONTENTFUL_URL, {
  headers: {
    authorization: `Bearer ${process.env.TOKEN}`
  }
})

export const getExperiences = async () => {
  const experiencesQuery = gql`
    query {
      experienceCollection {
        items {
          company
          duration
          position
          responsibilities
          skills
        }
      }
    }
  `
  return client.request(experiencesQuery)
}

export const getProjects = () => {
  const projectsQuery = gql`
    query {
      projectCollection {
        items {
          title
          picture { url }
          liveUrl
          description
          ghUrls
          techStack
          date
          inProgress
        }
      }
    }
  `
  return client.request(projectsQuery)
}

export const getPosts = () => {
  const postsQuery = gql`
    query {
      externalBlogpostsCollection(order: date_DESC) {
        items {
          title
          date
          url
          description
          techStack
        }
      }
    }
  `
  return client.request(postsQuery)
}