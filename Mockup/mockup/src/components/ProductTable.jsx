import React from 'react'

function ProductTable({products}) {
  const rows = [];
  const lastCategory = null;

  products.forEach((product) =>{
    if(product.category !== lastCategory){
      rows.push(
        <ProductCategoryRow />
      )
    }
  })
  
  return (
    <div></div>
  )
}

export default ProductTable