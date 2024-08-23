import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({}); // 초기값을 빈 객체로 설정

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/jeong-minG/shopping-db/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} alt={product?.title} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>￦{product?.price}</div>
          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {/* product.size가 배열인지 확인 후 길이 체크 */}
              {Array.isArray(product.size) && product.size.length > 0 ? (
                product.size.map((item, index) => (
                  <Dropdown.Item key={index} href="#/action-1">
                    {item}
                  </Dropdown.Item>
                ))
              ) : (
                <Dropdown.Item disabled>사이즈 선택 불가</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
