import styled from "styled-components";

export const KeyboardWrapper = styled.div`
position: relative;
text-align: center;
margin: 0 auto 0 12.5%;
`;

export const KeyboardLayout = styled.div`
  width: 315px;
`;

export const KeyboardKey = styled.div`
  float: left;
  margin: 0 5px 5px 0;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #fff;
  border: 1px solid #c9c9c9;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  &:hover {
    float: left;
    margin: 0 5px 5px 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #fff;
    border: 1px solid #c9c9c9;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
  }
  &.delete,
  &.flip,
  &.return {
    width: 40px;
    background-color: gray;
  }
  &.lastitem {
    margin-right: 0;
  }
  &.row-start {
    clear: left;
  }
  &.space {
    width: 72.5%;
  }
`;
