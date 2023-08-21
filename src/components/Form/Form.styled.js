import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 20px 10px;
  max-width: 300px;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const StField = styled(Field)`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #6e6e6e;
  margin-top: 8px;
`;

export const Error = styled(ErrorMessage)`
  color: tomato;
`;

export const Btn = styled.button`
  border: 1px solid #858483;
  border-radius: 7px;
  cursor: pointer;
  padding: 5px 8px;
  max-width: 100px;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #d97d21;
    border: none;
  }
`;
