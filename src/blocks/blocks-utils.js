export const getRows = (children) => {
  return children.props.children
}

export const getRowColumns = (children) => {
  return children.props.children.map(x => x.props.children)
}