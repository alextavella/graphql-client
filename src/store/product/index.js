import React, { useState } from "react";

const ProductContext = React.createContext();

export function ProductProvider({ children }) {
  const initialState = {
    items: [
      {
        image:
          "https://www.casasbahia-imagens.com.br/Eletrodomesticos/maquinadelavar/Acimade10kg/4168904/1164997420/lavadora-de-roupas-electrolux-13-kg-alta-capacidade-lt13b-branca-4168904.jpg",
        title: "Maquina de lavar roupa",
        price: 1999.99
      }
    ]
  };

  const [product, setProduct] = useState(initialState);

  function updateProducts(items) {
    setProduct({ items: [...items, ...product.items] });
  }

  const state = {
    product,
    updateProducts
  };

  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
}

export const ProductConsumer = ProductContext.Consumer;

export default ProductContext;
