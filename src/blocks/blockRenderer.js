import React from "react";
import ProductCards from "./productCards/productCards";

const blockPrefix = "::block::"

const BlockRenderer = ({children}) => {
console.log(children)
  const tableHeading = children[0]?.props.children[0]?.props.children[0]?.props.children[0];
  const isBlock = tableHeading.startsWith(blockPrefix)

  const getBlockByTableHeading = (tableHeading) => {
    const blockName = tableHeading.replace(blockPrefix, "").toLowerCase();
    const tableBody = children[1]

    switch (blockName) {
      case (ProductCards.name.toLowerCase()):{
        return <ProductCards>{tableBody}
        </ProductCards>
      }
      default: {

        return <></>
      }
    }
  }

  return <>
    {
      isBlock
        ? getBlockByTableHeading(tableHeading)
        : <table>{children}</table>
    }
  </>
}

export default BlockRenderer;