import {graphql} from "gatsby"

import React from "react"
import renderAst from "../utils/render-ast";
import './page.css';

const PageTemplate = (props, path) => {
  console.log(props.data)
  console.log(path)
  return (
    <React.Fragment>
      {/*
        To add a cover:
        Add an image in your Google Doc first page header
        https://support.google.com/docs/answer/86629
      */}
      {/*{cover && <GatsbyImage image={getImage(cover.image)} />}*/}

      {
        renderAst(props.data.page.childMarkdownRemark.htmlAst)
      }
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
    }
  }
`