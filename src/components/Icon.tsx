import React, { SVGProps } from "react";

export type IIcon = SVGProps<SVGSVGElement>;

export const PlusIcon = ({
  width = "16",
  stroke = "currentColor",
  height = "16",
}: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.9729 8.00004H8.63957M13.3062 8.00004H8.63957M8.63957 8.00004V3.33337M8.63957 8.00004V12.6667"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ShortAnsIcon = ({
  width = "20",
  stroke = "currentColor",
  height = "20",
}: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 7.5H10.8333"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LongAnsIcon = ({
  width = "20",
  stroke = "currentColor",
  height = "20",
}: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 5H10.8333"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 10H17.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 15H17.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DragIcon = ({
  width = "16",
  stroke = "currentColor",
  height = "16",
}: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <path
          d="M9.51465 7H9.51994M9.51465 12H9.51994M9.51465 17H9.51994M16.1761 7H16.1813M16.1761 12H16.1813M16.1761 17H16.1813"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const SelectIcon = ({
  width = "20",
  stroke = "currentColor",
  height = "20",
}: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_499_1208)">
        <path
          d="M10.0001 18.3334C14.6025 18.3334 18.3334 14.6025 18.3334 10.0001C18.3334 5.39771 14.6025 1.66675 10.0001 1.66675C5.39771 1.66675 1.66675 5.39771 1.66675 10.0001C1.66675 14.6025 5.39771 18.3334 10.0001 18.3334Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M10.0001 13.3334C11.841 13.3334 13.3334 11.841 13.3334 10.0001C13.3334 8.15913 11.841 6.66675 10.0001 6.66675C8.15913 6.66675 6.66675 8.15913 6.66675 10.0001C6.66675 11.841 8.15913 13.3334 10.0001 13.3334Z"
          fill="#0D0D0D"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_499_1208">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HashIcon = ({
  width = "20",
  stroke = "currentColor",
  height = "20",
}: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.97298 2.5L5.63965 17.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.7229 13.3334H2.7229"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18.9729 5.83337H3.9729"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15.6397 2.5L12.3064 17.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const UrlIcon = ({
  width = "20",
  stroke = "currentColor",
  height = "20",
}: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.91675 12.0835L12.0834 7.91675"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.0386 12.1746L16.2132 10C17.9289 8.28427 17.9289 5.50252 16.2132 3.78679C14.4975 2.07107 11.7157 2.07107 10 3.78679L7.82537 5.96142M12.1746 14.0386L10 16.2132C8.28427 17.929 5.50253 17.929 3.7868 16.2132C2.07107 14.4975 2.07107 11.7157 3.7868 10L5.96142 7.82538"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const ChevronDown = ({
  width = "20",
  stroke = "currentColor",
  height = "20",
}: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.63965 6L8.63965 10L12.6396 6"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const UpArrowIcon = ({
  width = "16",
  stroke = "currentColor",
  height = "16",
}: IIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.563 11.6318L11.4376 4.75711M11.4376 4.75711V11.3568M11.4376 4.75711H4.83799"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
