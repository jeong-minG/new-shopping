import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Button, Dropdown, Alert} from 'react-bootstrap'
import { useParams } from 'react-router' 


const ProductDetail = () => {
  let {id} = useParams()
  const [product,setProduct]=useState(null) 
  const getProductDetail=async()=>{
    let url =`https://my-json-server.typicode.com/jeong-minG/shopping-db/db/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <Container>
      <Row>
        <Col className='product-img'>
        <img src={product?.img} alt={product?.title}/>
        </Col>
        <Col>
        <div>{product?.title}</div>
        <div>￦{product?.price}</div>
        <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail