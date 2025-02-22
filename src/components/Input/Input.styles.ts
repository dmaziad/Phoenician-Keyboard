import styled, { StyledComponent } from "styled-components";

export const CopyText = styled.p`
  text-align: right;
`;

export const InputContainer: StyledComponent<
  "textarea",
  any,
  {},
  never
> = styled.textarea`
  background-color: white;
  height: 25vh;
  min-width: 325px;
  max-width: 325px;
  width: 325px;
  font-size: 16px;
  resize: none;
  text-align: right;
`;

export const InputWrapper = styled.div`
  margin: 0 0 25px 5px;
`;
