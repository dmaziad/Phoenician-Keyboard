import React, { ReactElement, useRef, useState } from "react";
import { CopyText, InputContainer, InputWrapper } from "./Input.styles";

const Input = ({ value }): ReactElement => {
  const inputRef = useRef(null)
  const fixVal = value.split("-").join("");
  const deleteSelection = () => {
    const selection = window.getSelection()
    if (!!selection) selection.empty();
  }
  const justCopiedUpdate = () => {
    setJustCopied(true);
    setTimeout(() => setJustCopied(false), 2000);
  }
  const copyToClipboard = () => {
    inputRef?.current.select();
    document.execCommand('copy');
    deleteSelection();
    justCopiedUpdate();
  }
  const [justCopied, setJustCopied] = useState(false);
  return (
    <InputWrapper>
      {justCopied ? <CopyText>Copied to Clipboard!</CopyText>
        : <CopyText onClick={() => copyToClipboard()}>Copy to clipboard</CopyText>
      }
      <InputContainer
        ref={inputRef}
        dir="rtl"
        readOnly={true}
        value={fixVal}
      />
    </InputWrapper>
  );
};

export default Input;
