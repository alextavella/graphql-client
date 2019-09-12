import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 20px 0;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  input {
    flex: 1;
  }
`;

export const ListItem = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  
  > li {
    background: white;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:last-child {
      margin-bottom: 0;
    }

    strong, span {
      display: block;
    }

    img {
      width: 130px;
      height: 130px;
    }
    img + strong {
      margin-left: 20px;
    }
    strong {
      color: black;
    }
  }
`;
