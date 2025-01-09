// src/ProductPage.js
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductPage = ({ products }) => {
  const { category, productId } = useParams()  // 從路由參數中獲取 category 和 productId
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    let isMounted = true
    // 根據 category 和 productId 動態構建 API URL
    axios
      .get(`http://localhost:8000/api/product/${category}/${productId}`)  // 動態路徑
      .then((response) => {
        console.log(response.data)
        setProduct(response.data)  // 假設 API 返回商品資料
        setLoading(false)
      })
      .catch((err) => {
        setError('Error fetching product data')
        setLoading(false)
      })

    return () => {
      isMounted = false  // 组件卸载时设置为 false，防止更新状态
    }
  }, [category, productId]) // 當 category 或 productId 改變時重新發送請求

  // 加載中狀態
  if (loading) {
    return <div>Loading...</div>
  }

  // 顯示錯誤
  if (error) {
    return <div>{error}</div>
  }

  const formattedDescription = product.description.replace(/(。)/g, '$1<br/><br/>')

  // 顯示商品資料
  if (product) {
    return (
      <div className='prodoct-page'>
        <img src={product.image} alt={product.name} />
        <div className='prodoct-container'>
          <h1>{product.name}</h1>
          {product.sizes && product.sizes.length > 0 ? (
            <ul>
              {product.sizes.map(size => (

                <li key={size.id}>

                  {size.size_name} - NTD. {Math.floor(size.price)}
                </li>
              ))}
            </ul>
          ) : (
            <li>NTD. {product.price}</li>
          )}
          <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />


        </div>
      </div>
    )
  }

  return <div>Product not found</div>  // 如果沒有找到商品資料
}


export default ProductPage
