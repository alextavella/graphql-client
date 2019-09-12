import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Separator from '../../components/Separator';
import { Container, Header, ListItem } from './styles';

const GET_PRODUCT = gql`
query {
  products(orderBy:"id_DESC") {
    id
    title
    price
    image
  }
}
`;

const ADD_PRODUCT = gql`
  mutation AddProduct($title: String!, $price: Float!, $image: String) {
    product: addProduct(title: $title, price: $price, image: $image) {
      title
      price
      image
    }
  }
`;

export default function Product() {
  const [productList, setProductList] = useState([]);
  const [productName, setProductName] = useState('Tenis maneiro');

  const { loading, data: productsLoaded } = useQuery(GET_PRODUCT);
  const [addProduct, { data: productCreated }] = useMutation(ADD_PRODUCT);

  useEffect(() => {
    if (productsLoaded) {
      console.log(productsLoaded.products);

      setProductList(productsLoaded.products);
    }
  }, [productsLoaded]);

  useEffect(() => {
    if (productCreated && productName) {
      setProductList([productCreated.product, ...productList]);
      setProductName('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productCreated]);

  function handleCreate() {
    if (!productName) return;

    addProduct({
      variables: {
        title: productName,
        price: 999.99,
        image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg'
      }
    });
  }

  if (loading) return <p>Loading...</p>

  return (
    <Container>

      <Header>
        <Input value={productName} onChange={(e) => setProductName(e.target.value)} />
        <Button onClick={handleCreate}>Create</Button>
      </Header>

      <Separator />

      <ListItem>
        {productList.map((product, index) => (
          <li key={index}>
            <img src={product.image || 'https://via.placeholder.com/260'} alt={product.title} />
            <strong>{product.title}</strong>
          </li>
        ))}
      </ListItem>
    </Container>
  );
}
