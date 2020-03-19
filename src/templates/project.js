import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout/layout"
import projectStyles from "./project.module.scss"

const Project = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html },
  } = data

  return (
    <Layout>
      <div className={projectStyles.container}>
        <Img fixed={frontmatter.previewImage.childImageSharp.fixed} />
        <h1>
          {frontmatter.title}
          <span role="img" aria-label="fire emojis">
            🔥🔥🔥
          </span>
        </h1>
        <div
          className={projectStyles.blogPostContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
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
        previewImage {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default Project
