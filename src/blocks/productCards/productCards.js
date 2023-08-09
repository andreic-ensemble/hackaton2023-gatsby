import React from "react";
import {getRowColumns, getRows} from "../blocks-utils";
import "./productCards.css"

const ProductCards = ({children}) => {
  const renderProductCard = (row, rowIndex) => {

    const columns = getRowColumns(row)
    console.log(columns)
    return <div key={rowIndex} className={"product-card"}>
      <div className={"product-card-image-wrapper"}>
        {row}
      </div>
    </div>
  }

  const rows = getRows(children)
  return <div className={"product-card-list-wrapper"}>
    {rows.map((row, rowIndex) => renderProductCard(row, rowIndex))}
  </div>
}

export default ProductCards;