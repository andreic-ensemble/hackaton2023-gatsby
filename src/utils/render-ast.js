import * as React from "react"
import RehypeReact from "rehype-react"
import BlockRenderer from "../blocks/blockRenderer";

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    table: BlockRenderer
  },
}).Compiler

export default renderAst
