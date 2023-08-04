import * as React from "react"
import RehypeReact from "rehype-react"

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {

  },
}).Compiler

export default renderAst
