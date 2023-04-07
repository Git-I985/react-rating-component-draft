import React, { useId } from "react";

interface StarProps {
  width?: number;
  height?: number;
  filledColor?: string;
  notFilledColor?: string;
  fillPercent?: number;
}

export const Star = (props: StarProps) => {
  const {
    width = 30,
    height = 30,
    filledColor = "#EFCE4A",
    notFilledColor = "lightgray",
    fillPercent = 100
  } = props;

  const id = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 53.867 53.867"
      xmlSpace="preserve"
    >
      <defs>
        <linearGradient id={id}>
          <stop offset={fillPercent + "%"} stopColor={filledColor} />
          <stop offset={fillPercent + "%"} stopColor={notFilledColor} />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M26.934 1.318L35.256 18.182 53.867 20.887 40.4 34.013 43.579 52.549 26.934 43.798 10.288 52.549 13.467 34.013 0 20.887 18.611 18.182z"
      ></path>
    </svg>
  );
};
