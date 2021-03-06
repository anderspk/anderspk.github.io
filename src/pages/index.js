import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout/layout"

import indexStyles from "./index.module.scss"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date
              description
              url
              repo
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <p className={indexStyles.aboutMe}>
        Hei! Jeg er en full-stack utvikler fra Oslo som liker å bygge ideer jeg
        kommer på, fra smått til stort.
      </p>
      <p className={indexStyles.aboutMe}>
        Ta gjerne kontakt hvis det er noe{" "}
        <span role="img" aria-label="smiley-face" className={indexStyles.emoji}>
          😄
        </span>
      </p>
      <ol className={indexStyles.projectsList}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li className={indexStyles.project} key={node.id}>
            <Link to={`/${node.fields.slug}`}>
              <Img
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                className={indexStyles.projectPreviewImage}
              />
            </Link>
            <Link to={`/${node.fields.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <span className={indexStyles.date}>
              {new Date(node.frontmatter.date)
                .toLocaleDateString()
                .replace(/\//g, ".")}
            </span>
            <p>{node.frontmatter.description}</p>
            <ul className={indexStyles.links}>
              <li>
                <span role="img" aria-label="globe emoji">
                  🌍
                </span>
                <a href={node.frontmatter.url}>{node.frontmatter.url}</a>
              </li>
              {node.frontmatter.repo && (
                <li>
                  <span role="img" aria-label="coder emoji">
                    👨‍💻
                  </span>
                  <a href={node.frontmatter.repo}>{node.frontmatter.repo}</a>
                </li>
              )}
            </ul>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
