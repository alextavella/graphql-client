import React, { useState, useEffect, useContext } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import ProductContext from "../../store/product";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Separator from "../../components/Separator";
import { Container, Header, ListItem } from "./styles";

const GET_PRODUCT = gql`
  query {
    products(orderBy: "id_DESC") {
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
  const productContext = useContext(ProductContext);
  // console.log("productContext", productContext);

  const [productName, setProductName] = useState("Tenis maneiro");

  const { loading: loadingLoad, data: dataLoad } = useQuery(GET_PRODUCT);

  const [addProduct, { data: dataCreate }] = useMutation(ADD_PRODUCT);

  useEffect(() => {
    if (dataLoad) {
      // console.log(dataLoad.products);

      productContext.updateProducts(dataLoad.products);
    }
  }, [dataLoad]);

  useEffect(() => {
    if (dataCreate) {
      console.log("productCreated", dataCreate);

      productContext.updateProducts([dataCreate.product]);
      setProductName("");
    }
  }, [dataCreate]);

  function handleCreate() {
    if (!productName) return;

    addProduct({
      variables: {
        title: productName,
        price: 999.99,
        image:
          "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
      }
    });
  }

  if (loadingLoad) return <p>Loading...</p>;

  return (
    <Container>
      <Header>
        <Input
          value={productName}
          onChange={e => setProductName(e.target.value)}
        />
        <Button onClick={handleCreate}>Create</Button>
      </Header>

      <Separator />

      <ListItem>
        {productContext.product.items.map((item, index) => (
          <li key={index}>
            <img
              src={item.image || "https://via.placeholder.com/260"}
              alt={item.title}
            />
            <div>
              <strong>{item.title}</strong>
              <span>{item.price}</span>
            </div>
          </li>
        ))}
      </ListItem>
    </Container>
  );
}
