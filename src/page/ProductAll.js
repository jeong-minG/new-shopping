import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || ""; // 검색어 기본값 설정
    let url = `https://my-json-server.typicode.com/jeong-minG/shopping-db/products?q=${searchQuery}`;
    
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      let data = await response.json();
      
      // data.products가 배열인지 확인하고, 없으면 빈 배열로 설정
      setProductList(Array.isArray(data) ? data : data.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProductList([]); // 에러 발생 시 빈 배열로 설정
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.length > 0 ? ( // 상품이 있을 때만 map 실행
            productList.map((item) => (
              <Col lg={3} key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))
          ) : (
            <Col>
              <p>상품이 없습니다.</p> {/* 상품이 없을 때 메시지 표시 */}
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
