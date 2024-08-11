"use client";
import React, { FC } from "react";
import { useCheckBox } from "./../contexts/CheckBox";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const { setCheckbox } = useCheckBox();
  return (
    <>
      <h1 className="text-[32px]">Our Pricing</h1>
      <div className="mt-[32px] flex justify-center gap-[24px] text-neutral-lgrayishblue">
        <span>Annually</span>
        <input
          type="checkbox"
          defaultChecked={true}
          onChange={(e) => setCheckbox(e.target.checked)}
          className="peer absolute hidden h-0 w-0"
          id="switch"
        />
        <label
          className="relative block h-[30px] w-[60px] cursor-pointer rounded-[100px] bg-[#808080] indent-[-9999px] after:absolute after:left-[5px] after:top-[5px] after:h-[20px] after:w-[25px] after:rounded-[90px] after:bg-[#ffff] after:duration-300 peer-checked:bg-[#a3a8f0] peer-checked:after:left-[90%] peer-checked:after:translate-x-[-100%] peer-checked:hover:bg-[#a3a8f0b3]"
          htmlFor="switch"
        >
          Toggle
        </label>
        <span>Monthly</span>
      </div>
    </>
  );
};
