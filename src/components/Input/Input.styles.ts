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
  width: 275px;
  min-width: 275px;
  font-size: 16px;
  resize: none;

  &.right {
    text-align: right;
  }

  &.left {
    text-align: left;
  }
`;

export const InputWrapper = styled.div`
  margin: 0 0 25px 0;
`;
