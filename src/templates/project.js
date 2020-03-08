import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout/layout"

const Project = ({ data, pageContext: { slug } }) => {
  const {
    markdownRemark: { frontmatter, html },
  } = data

  return (
    <Layout>
      <h2>{frontmatter.title}</h2>
      <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Project
