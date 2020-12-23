import React from "react";
import { KeyboardKey, KeyboardLayout, KeyboardWrapper } from "./Keyboard.styles";

const Keyboard = ({ rightToLeft, setRightToLeft, value, setValue }) => {
  const handleClick = (i) => {
    if (rightToLeft) {
      setValue(value + `-${i}`);
    } else {
      setValue(`${i}-` + value);
    }
  };
  const handleDelete = () => {
    const splitVal = value.split("-");
    if (rightToLeft) {
      setValue(splitVal.slice(0, splitVal.length - 1).join("-"));
    } else {
      setValue(splitVal.slice(1).join("-"));
    }
  };
  return (
      <KeyboardWrapper>
        <KeyboardLayout>
          <KeyboardKey onClick={() => handleClick("𐤙")}>𐤙</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤘")}>𐤘</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤗")}>𐤗</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤛")}>𐤛</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤚")}>𐤚</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤖")}>𐤖</KeyboardKey>
          <KeyboardKey className="row-start" onClick={() => handleClick("𐤀")}>
            𐤀
          </KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤁")}>𐤁</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤂")}>𐤂</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤃")}>𐤃</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤄")}>𐤄</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤅")}>𐤅</KeyboardKey>
          <KeyboardKey className="row-start" onClick={() => handleClick("𐤆")}>
            𐤆
          </KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤇")}>𐤇</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤈")}>𐤈</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤉")}>𐤉</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤊")}>𐤊</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤋")}>𐤋</KeyboardKey>
          <KeyboardKey className="row-start" onClick={() => handleClick("𐤌")}>
            𐤌
          </KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤍")}>𐤍</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤎")}>𐤎</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤏")}>𐤏</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤐")}>𐤐</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤑")}>𐤑</KeyboardKey>
          <KeyboardKey
            className="row-start flip"
            onClick={() => {
              setValue("");
              setRightToLeft(!rightToLeft);
            }}
            >
            ↹
          </KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤒")}>𐤒</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤓")}>𐤓</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤔")}>𐤔</KeyboardKey>
          <KeyboardKey onClick={() => handleClick("𐤕")}>𐤕</KeyboardKey>
          <KeyboardKey
            className="delete"
            onClick={() => {
              handleDelete();
            }}
            >
            ‎‎←
          </KeyboardKey>
          <KeyboardKey className="space row-start" onClick={() => handleClick(" ")}>
            space
          </KeyboardKey>
          <KeyboardKey className="return" onClick={() => handleClick("\n")}>
            ↵
          </KeyboardKey>
        </KeyboardLayout>
      </KeyboardWrapper>
  );
};

export default Keyboard;
