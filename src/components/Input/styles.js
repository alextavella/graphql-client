import styled from 'styled-components';

export const Container = styled.input.attrs({
  type: 'text'
})`
  background: white;
  border: none;
  border-radius: 4px;
  color: gray;
  height: 40px;
  padding: 0 10px;
  outline: none;

  & + button {
    margin-left: 10px;
  }
`;
