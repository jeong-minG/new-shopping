import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query,setQuery]=useSearchParams();

  const getProducts = async () => {
    let searchQuery=query.get('q') || ""
    let url = `https://my-json-server.typicode.com/jeong-minG/shopping-db/db?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data.products); // data에서 products 배열을 가져와야 합니다.
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, index) => ( // key prop 추가
            <Col lg={3} key={index}> 
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
