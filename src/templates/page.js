import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import React from "react"

const PageTemplate = (props, path) => {
  console.log(props)
  console.log(path)
  return (
    <React.Fragment>
      <h1>{props.data.page.name}</h1>
      {/*
        To add a cover:
        Add an image in your Google Doc first page header
        https://support.google.com/docs/answer/86629
      */}
      {/*{cover && <GatsbyImage image={getImage(cover.image)} />}*/}
      <MDXRenderer>{props.data.page.markdown}</MDXRenderer>
    </React.Fragment>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query Page($path: String!) {
    page: googleDocs(slug: {eq: $path}) {
      name
      markdown
    }
  }
`