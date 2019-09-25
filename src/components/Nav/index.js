import React, { useContext, useMemo } from "react";

import ProductContext from "../../store/product";

import { Container } from "./styles";

export default function Nav() {
  const productContext = useContext(ProductContext);

  const size = useMemo(() => productContext.product.items.length, [
    productContext
  ]);

  return (
    <Container>
      <h2>
        Apollo Application{" "}
        <span role="img" aria-label="foguete">
          🚀
        </span>
      </h2>
      <h3>{size}</h3>
    </Container>
  );
}
