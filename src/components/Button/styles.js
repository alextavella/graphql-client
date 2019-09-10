import styled from 'styled-components';

export const Container = styled.button.attrs({
  type: 'button'
})`
  background: #323355;
  border: none;
  border-radius: 4px;
  color: white;
  height: 40px;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background: #323A55;
  }
`;
