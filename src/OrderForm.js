import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function OrderForm() {
  const [cake, setCake] = useState([])
  const [allSizes, setAllSizes] = useState([])
  const [allFilling, setAllFilling] = useState([])
  const [allBase, setAllBase] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [acc, setAcc] = useState([])
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

  const [productGroups, setProductGroups] = useState([
    { selectedCake: '', selectedCakeImage: '', selectedSizes: [], selectedSizeId: '', selectedFilling: [], selectedFillingId: '', selectedBase: [], selectedBaseId: '' }
  ])

  const [AccGroups, setAccGroups] = useState([
    { selectedAcc: '', selectedAccImage: '' }
  ])

  useEffect(() => {
    let isMounted = true
    setLoading(true)

    // 使用 Promise.all 等待所有 API 請求完成
    const fetchData = async () => {
      try {
        const [cakeResponse, sizeResponse, fillingResponse, baseResponse, accResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/api/product/cake/`),
          fetch(`${API_BASE_URL}/api/product/sizes/`),
          fetch(`${API_BASE_URL}/api/product/Fillings/`),
          fetch(`${API_BASE_URL}/api/product/base/`),
          fetch(`${API_BASE_URL}/api/product/acc/`)
        ])

        if (!cakeResponse.ok || !sizeResponse.ok || !fillingResponse.ok || !baseResponse.ok || !accResponse.ok) {
          throw new Error('One or more responses were not ok')
        }

        const [cakes, sizes, fillings, bases, accs] = await Promise.all([
          cakeResponse.json(),
          sizeResponse.json(),
          fillingResponse.json(),
          baseResponse.json(),
          accResponse.json()
        ])

        setCake(cakes)
        setAllSizes(sizes)
        setAllFilling(fillings)
        setAllBase(bases)
        setAcc(accs)

      } catch (error) {
        setError(error)
      } finally {
        if (isMounted) {
          setLoading(false) // 只有在所有請求完成後設置為 false
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false // 組件卸載時防止更新狀態
    }
  }, [])

  // 處理錯誤訊息
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  // 處理蛋糕變更
  const handleCakeChange = (index, event) => {
    const selectedCakeId = event.target.value
    const updatedGroups = [...productGroups]

    updatedGroups[index].selectedCake = selectedCakeId

    const selectedCakeObj = cake.find((c) => c.id === parseInt(selectedCakeId))

    if (selectedCakeObj) {
      updatedGroups[index].selectedCakeImage = selectedCakeObj.image
      updatedGroups[index].selectedSizes = selectedCakeObj.sizes
      updatedGroups[index].selectedFilling = selectedCakeObj.fillings
      updatedGroups[index].selectedBase = selectedCakeObj.bases
      updatedGroups[index].selectedCakeDescription = selectedCakeObj.description
    } else {
      updatedGroups[index].selectedSizes = []
      updatedGroups[index].selectedFilling = []
      updatedGroups[index].selectedBase = []
      updatedGroups[index].selectedCakeImage = ''
      updatedGroups[index].selectedCakeDescription = ''
    }

    setProductGroups(updatedGroups)
  };

  // 處理配件變更
  const handleAccChange = (index, event) => {
    const selectedAccId = event.target.value
    const updatedAccGroups = [...AccGroups] // 獲取當前的 AccGroups 副本

    updatedAccGroups[index].selectedAcc = selectedAccId

    // 查找對應的配件對象
    const selectedAccObj = acc.find((a) => a.id === parseInt(selectedAccId))

    // 如果找到相應的配件，則更新配件圖像
    if (selectedAccObj) {
      updatedAccGroups[index].selectedAccImage = selectedAccObj.image
    } else {
      updatedAccGroups[index].selectedAccImage = ''
    }

    // 更新狀態
    setAccGroups(updatedAccGroups)
  };

  // 添加新的 product group
  const addProductGroup = () => {
    setProductGroups([
      ...productGroups,
      { selectedCake: '', selectedCakeImage: '', selectedSizes: [], selectedSizeId: '', selectedFilling: [], selectedFillingId: '', selectedBase: [], selectedBaseId: '' }
    ])
  }

  // 添加新的 acc group
  const addAccGroup = () => {
    setAccGroups([
      ...AccGroups,
      { selectedAcc: '', selectedAccImage: '' }
    ])
  }

  return (
    <div className="order-form">
      {/* 渲染表單內容 */}
      <Form>
        {productGroups.map((group, index) => (
          <Form.Group className="mb-3" key={index}>
            <Form.Label>訂購蛋糕品項 - {index + 1}</Form.Label>
            <Form.Select value={group.selectedCake} onChange={(e) => handleCakeChange(index, e)}>
              <option value="">選擇口味</option>
              {cake.map((cake) => (
                <option key={cake.id} value={cake.id}>
                  {cake.name}
                </option>
              ))}
            </Form.Select>

            <br />
            {/* 其他選擇項 */}
          </Form.Group>
        ))}

        {AccGroups.map((group, index) => (
          <Form.Group className="mb-3" key={index}>
            <Form.Label>加購配件 - {index + 1}</Form.Label>
            <Form.Select value={group.selectedAcc} onChange={(e) => handleAccChange(index, e)}>
              <option value="">選擇配件</option>
              {acc.map((acc) => (
                <option key={acc.id} value={acc.id}>
                  {acc.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        ))}

        <Button variant="primary" onClick={addProductGroup}>再訂一顆</Button>
        <Button variant="primary" onClick={addAccGroup}>加購更多配件</Button>
      </Form>
    </div>
  )

}

export default OrderForm
