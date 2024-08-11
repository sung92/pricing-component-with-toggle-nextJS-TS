"use client";
import React, { FC } from "react";
import { useCheckBox } from "./../contexts/CheckBox";

interface Plan {
  plan: string;
  price: string;
  storage: string;
  unit: string;
  users: string;
  upload: string;
}

interface CardsProps {}

export const Cards: FC<CardsProps> = ({}) => {
  const { checkbox } = useCheckBox();

  const basic: Plan = {
    plan: "Basic",
    price: checkbox ? "19.99" : "199.99",
    storage: "500",
    unit: "GB",
    users: "2",
    upload: "3",
  };

  const pro = {
    plan: "Professional",
    price: checkbox ? "24.99" : "249.99",
    storage: "1",
    unit: "T",
    users: "5",
    upload: "10",
  };

  const master = {
    plan: "Master",
    price: checkbox ? "39.99" : "399.99",
    storage: "2",
    unit: "T",
    users: "10",
    upload: "20",
  };

  return (
    <div className="mt-[72px] flex flex-col gap-[20px] desktop:flex-row desktop:justify-center desktop:gap-0">
      <Card plan={basic} />
      <CardPro plan={pro} />
      <Card plan={master} />
    </div>
  );
};

interface CardProps {
  plan: Plan;
}

const Card: FC<CardProps> = ({ plan }) => {
  return (
    <div className="rounded-[10px] bg-[#ffff] p-[48px] desktop:min-w-[23.4rem]">
      <h2 className="text-[18px] text-neutral-grayishblue">{plan.plan}</h2>
      <p className="flex items-center justify-center gap-[4px] border-b-[2px] border-solid border-neutral-vlgrayishblue pb-[8px] text-[72px] text-neutral-dgrayishblue">
        <span className="text-[40px]">$</span>
        {plan.price}
      </p>
      <ul className="m-0 mt-[16px] flex list-none flex-col gap-[15px] p-0 indent-0">
        <li className="border-b-[2px] border-solid border-neutral-vlgrayishblue pb-[16px]">
          {plan.storage} {plan.unit} Storage
        </li>
        <li className="border-b-[2px] border-solid border-neutral-vlgrayishblue pb-[16px]">
          {plan.users} Users Allowed
        </li>
        <li className="border-b-[2px] border-solid border-neutral-vlgrayishblue pb-[16px]">
          Send up to {plan.upload} GB
        </li>
      </ul>
      <a className="mt-[32px] block cursor-pointer rounded-[6px] bg-gradient-to-135 p-[12px] text-[13px] uppercase tracking-[1px] text-[#ffff] hover:bg-gradient-to-135-white hover:text-gradients-purple hover:outline hover:outline-1 hover:outline-gradients-purple">
        Learn More
      </a>
    </div>
  );
};

interface CardProps {
  plan: Plan;
}

const CardPro: FC<CardProps> = ({ plan }) => {
  return (
    <div className="rounded-[10px] bg-[#ffff] bg-gradient-to-135 p-[48px] desktop:min-w-[23.4rem] desktop:scale-y-[1.08]">
      <h2 className="text-[18px] text-[#ffff]">{plan.plan}</h2>
      <p className="flex items-center justify-center gap-[4px] border-b-[2px] border-solid border-neutral-lgrayishblue pb-[8px] text-[72px] text-[#fff]">
        <span>$</span>
        {plan.price}
      </p>
      <ul className="m-0 mt-[16px] flex list-none flex-col gap-[15px] p-0 indent-0">
        <li className="border-b-[2px] border-solid border-neutral-lgrayishblue pb-[16px] text-[#fff]">
          {plan.storage} {plan.unit} Storage
        </li>
        <li className="border-b-[2px] border-solid border-neutral-lgrayishblue pb-[16px] text-[#fff]">
          {plan.users} Users Allowed
        </li>
        <li className="border-b-[2px] border-solid border-neutral-lgrayishblue pb-[16px] text-[#fff]">
          Send up to {plan.upload} GB
        </li>
      </ul>
      <a className="mt-[32px] block cursor-pointer rounded-[6px] bg-gradient-to-135-white p-[12px] text-[13px] uppercase tracking-[1px] text-gradients-purple hover:bg-gradient-to-135 hover:text-gradients-purple hover:outline hover:outline-1 hover:outline-[#ffff]">
        Learn More
      </a>
    </div>
  );
};
