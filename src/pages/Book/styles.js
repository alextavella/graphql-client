import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 20px 0;
`;

export const BookLink = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  
  > li {
    background: white;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 10px 5px;

    &:last-child {
      margin-bottom: 0;
    }

    strong, span {
      display: block;
    }

    strong {
      color: black;
    }
    span {
      color: gray;
    }
  }
`;

