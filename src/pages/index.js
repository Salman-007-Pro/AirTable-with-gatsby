import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from "../components"
import SEO from "../components/seo"
const HomePage = ({
  data: {
    allAirtable: { projects },
  },
}) => {
  return (
    <Layout>
      <Hero projects={projects} />
      <About />
      <GridProjects projects={projects} title="latest projects" />
      <Survey />
      <Slider />
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  {
    allAirtable(
      limit: 4
      filter: { table: { eq: "Projects" } }
      sort: { fields: data___date, order: DESC }
    ) {
      projects: nodes {
        data {
          type
          name
          date(formatString: "MMMM Do, YYYY")
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        id
      }
    }
  }
`
