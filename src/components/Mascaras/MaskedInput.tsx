"use client";
import React from "react";
import InputMask from "react-input-mask-next";

interface MaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mask: string;
}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ mask, ...props }, ref) => (
    <InputMask mask={mask} inputRef={ref} {...props} />
  )
);

MaskedInput.displayName = "MaskedInput";
export default MaskedInput;
