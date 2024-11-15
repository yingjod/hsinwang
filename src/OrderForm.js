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
  const [allacc, setAllAcc] = useState([])

  const [productGroups, setProductGroups] = useState([
    { selectedCake: '', selectedCakeImage: '', selectedSizes: [], selectedSizeId: '', selectedFilling: [], selectedFillingId: '', selectedBase: [], selectedBaseId: '' }
  ])

  const [AccGroups, setAccGroups] = useState([
    { selectedAcc: '', selectedAccImage: '' }
  ])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/product/cake/')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok')
        return response.json()
      })
      .then((data) => {
        console.log("Cake data fetched:", data)
        setCake(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/product/sizes/')
      .then((response) => response.json())
      .then(setAllSizes)
      .catch(console.error)
  }, [])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/product/Fillings/')
      .then((response) => response.json())
      .then(setAllFilling)
      .catch(console.error)
  }, [])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/product/base/')
      .then((response) => response.json())
      .then(setAllBase)
      .catch(console.error)
  }, [])


  useEffect(() => {
    if (loading) {
      fetch('http://127.0.0.1:8000/api/product/acc/')
        .then((response) => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json()
        })
        .then((data) => {
          setAcc(data)
          setLoading(false) // 設置為 false，避免重複請求
        })
        .catch((error) => {
          setError(error)
          setLoading(false) // 即使發生錯誤，也要設置為 false
        })
    }
  }, [loading])  // 依賴項的設置要小心，避免無窮循環


  const handleCakeChange = (index, event) => {
    const selectedCakeId = event.target.value
    const updatedGroups = [...productGroups]

    updatedGroups[index].selectedCake = selectedCakeId
    const selectedCakeObj = cake.find((c) => c.id === parseInt(selectedCakeId))

    if (selectedCakeObj) {
      updatedGroups[index].selectedCakeImage = selectedCakeObj.image
      updatedGroups[index].selectedSizes = allSizes.filter(size => selectedCakeObj.sizes.includes(size.id))
      updatedGroups[index].selectedFilling = allFilling.filter(filling => selectedCakeObj.fillings.includes(filling.id))
      updatedGroups[index].selectedBase = allBase.filter(base => selectedCakeObj.bases.includes(base.id))
      updatedGroups[index].selectedCakeDescription = selectedCakeObj.description

    } else {
      updatedGroups[index].selectedSizes = []
      updatedGroups[index].selectedFilling = []
      updatedGroups[index].selectedBase = []
      updatedGroups[index].selectedCakeImage = ''
      updatedGroups[index].selectedCakeDescription = ''
    }
    setProductGroups(updatedGroups)
  }

  const handleSizeChange = (index, event) => {
    const updatedGroups = [...productGroups]
    updatedGroups[index].selectedSizeId = event.target.value
    setProductGroups(updatedGroups)
  }

  const handleFillingChange = (index, event) => {
    const updatedGroups = [...productGroups]
    updatedGroups[index].selectedFillingId = event.target.value
    setProductGroups(updatedGroups)
  }

  const handleBaseChange = (index, event) => {
    const updatedGroups = [...productGroups]
    updatedGroups[index].selectedBaseId = event.target.value
    setProductGroups(updatedGroups)
  }


  const handleAccChange = (index, event) => {
    const selectedAccId = event.target.value // 取得選擇的配件 ID
    const updatedAccGroups = [...AccGroups]

    updatedAccGroups[index].selectedAcc = selectedAccId // 更新選擇的 ID
    const selectedAccObj = acc.find((c) => c.id === parseInt(selectedAccId))// 查找選擇的配件對象

    if (selectedAccObj) {
      console.log("Selected accessory object:", selectedAccObj) // 確認選擇的對象
      updatedAccGroups[index].selectedAccImage = selectedAccObj.image
    } else {
      updatedAccGroups[index].selectedAcc = '' // 如果沒有選擇的配件，設為空字符串
      updatedAccGroups[index].selectedAccImage = ''
    }

    setAccGroups(updatedAccGroups) // 更新 AccGroups 的狀態
  }



  const addProductGroup = () => {
    setProductGroups([
      ...productGroups,
      { selectedCake: '', selectedCakeImage: '', selectedSizes: [], selectedSizeId: '', selectedFilling: [], selectedFillingId: '', selectedBase: [], selectedBaseId: '' }
    ])
  }


  const addAccGroup = () => {
    setAccGroups([
      ...AccGroups,
      { selectedAcc: '', selectedAccImage: '' }
    ])
  }


  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="order-form">
      {productGroups.map((group, index) => (
        <Form.Group className="mb-3" key={index}>
          <Form.Label>訂購蛋糕品項 - {index + 1}</Form.Label>

          {group.selectedCakeImage && (
            <div className="selected-cake-image">
              <img src={group.selectedCakeImage} alt="Selected Cake" className="cake-image" style={{ maxWidth: '20%', height: 'auto' }} />
            </div>
          )}


          {group.selectedCakeDescription && (
            <div className="cake-description">
              <p>{group.selectedCakeDescription}</p>
            </div>
          )}

          <Form.Select value={group.selectedCake} onChange={(e) => handleCakeChange(index, e)}>
            <option value="">選擇口味</option>
            {cake.map((cake) => (
              <option key={cake.id} value={cake.id}>
                {cake.name}
              </option>
            ))}
          </Form.Select>

          <br />

          <Form.Select value={group.selectedSizeId} onChange={(e) => handleSizeChange(index, e)}>
            <option value="">選擇尺寸</option>
            {group.selectedSizes.length > 0 ? (
              group.selectedSizes.map((size) => (
                <option key={size.id} value={size.id}>
                  {size.size_name} (${size.price})
                </option>
              ))
            ) : (
              <option disabled>請選擇蛋糕以顯示尺寸</option>
            )}
          </Form.Select>

          <br />

          <Form.Select value={group.selectedFillingId} onChange={(e) => handleFillingChange(index, e)}>
            <option value="">選擇餡料</option>
            {group.selectedFilling.length > 0 ? (
              group.selectedFilling.map((filling) => (
                <option key={filling.id} value={filling.id}>
                  {filling.filling_name} (${filling.additional_price})
                </option>
              ))
            ) : (
              <option disabled>請選擇蛋糕以顯示餡料</option>
            )}
          </Form.Select>

          <br />

          <Form.Select value={group.selectedBaseId} onChange={(e) => handleBaseChange(index, e)}>
            <option value="">選擇蛋糕體</option>
            {group.selectedBase.length > 0 ? (
              group.selectedBase.map((base) => (
                <option key={base.id} value={base.id}>
                  {base.base_name} (${base.additional_price})
                </option>
              ))
            ) : (
              <option disabled>請選擇蛋糕以顯示蛋糕體</option>
            )}
          </Form.Select>

          <Form.Label htmlFor="amount">數量</Form.Label>
          <Form.Control
            id="amount"
            type="number"
            placeholder="訂購數量"
            min="1"
            defaultValue="1"
          />

        </Form.Group>
      ))}



      {AccGroups.map((group, index) => (
        <Form.Group className="mb-3" key={index}>
          <Form.Label>加購購配件品項 - {index + 1}</Form.Label>


          {group.selectedAccImage && (
            <div className="selected-acc-image">
              <img src={group.selectedAccImage} alt="Selected Acc" className="acc-image" style={{ maxWidth: '20%', height: 'auto' }} />
            </div>
          )}


          <Form.Select value={group.selectedAcc} onChange={(e) => handleAccChange(index, e)}>
            <option value="">選擇品項</option>
            {acc.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.name}
              </option>
            ))}
          </Form.Select>

          <Form.Label htmlFor="amount">數量</Form.Label>
          <Form.Control
            id="amount"
            type="number"
            placeholder="訂購數量"
            min="1"
            defaultValue="1"
          />

        </Form.Group>
      ))}


      <Button variant="primary" onClick={addProductGroup}>再訂一顆</Button>
      <Button variant="primary" onClick={addAccGroup}>加購更多配件</Button>

    </div>

  )
}

export default OrderForm