import {graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import React from "react"
import renderAst from "../utils/render-ast";
import "./product.css"

const PageTemplate = (props, path) => {
  return (
    <React.Fragment>

      <div className="productWrapper">
        <div>
          {<GatsbyImage image={getImage(props.data.page.cover.image)}/>}

        </div>

        <div>

          {
            renderAst(props.data.page.childMarkdownRemark.htmlAst)
          }
        </div>
      </div>

    </React.Fragment>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query Page($path: String!) {
    page: googleDocs(slug: {eq: $path}) {
      name
      childMarkdownRemark {
      htmlAst
    }
    cover {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`