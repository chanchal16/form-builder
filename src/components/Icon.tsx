import React, { SVGProps } from "react";

export type IIcon = SVGProps<SVGSVGElement>;

export const PlusIcon = ({
  width = "16",
  stroke = "currentColor",
  height = "16",
  className,
}: IIcon) => {
  return (
    <svg
      className={className}
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
  className,
}: IIcon) => {
  return (
    <svg
      className={className}
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
  className,
}: IIcon) => {
  return (
    <svg
      className={className}
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
  className,
}: IIcon) => {
  return (
    <svg
      className={className}
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
  className,
}: IIcon) => {
  return (
    <svg
      className={className}
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
  className,
}: IIcon) => {
  return (
    <svg
      className={className}
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
  className,
}: IIcon) => {
  return (
    <svg
      className={className}
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
  className,
}: IIcon) => {
  return (
    <svg
      className={className}
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
  className,
}: IIcon) => {
  return (
    <svg
      className={className}
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

export const TickMark = ({
  width = "16",
  stroke = "currentColor",
  height = "16",
  className,
}: IIcon) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8.38091L6 11.1666L13 4.66663"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DraftIcon = ({
  width = "16",
  stroke = "currentColor",
  height = "16",
  className,
}: IIcon) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1668 7.33337V6.66671C13.1668 4.15255 13.1668 2.89547 12.3857 2.11442C11.6047 1.33337 10.3476 1.33337 7.83347 1.33337H7.16687C4.65272 1.33337 3.39564 1.33337 2.6146 2.11441C1.83355 2.89545 1.83354 4.15252 1.83352 6.66666L1.8335 9.33337C1.83347 11.8475 1.83346 13.1046 2.61448 13.8856C3.39553 14.6666 4.65265 14.6667 7.1668 14.6667"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.8335 4.66663H10.1668M4.8335 7.99996H10.1668"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.83347 13.8846V14.6667H9.61573C9.88867 14.6667 10.0251 14.6667 10.1478 14.6159C10.2705 14.565 10.367 14.4686 10.56 14.2756L13.7757 11.0596C13.9577 10.8776 14.0487 10.7866 14.0974 10.6885C14.19 10.5017 14.19 10.2824 14.0974 10.0956C14.0487 9.99744 13.9577 9.90644 13.7757 9.72444C13.5937 9.54244 13.5027 9.45144 13.4045 9.40277C13.2177 9.31024 12.9983 9.31024 12.8115 9.40277C12.7134 9.45144 12.6223 9.54244 12.4403 9.72444L9.2246 12.9404C9.0316 13.1334 8.93513 13.2298 8.88433 13.3525C8.83347 13.4752 8.83347 13.6116 8.83347 13.8846Z"
        stroke="#0D0D0D"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
