import * as React from "react"

function Arrow(props) {
  return (
    <svg
      width={31}
      height={20}
      viewBox="0 0 31 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.69.77L1 9.74m0 0l8.69 8.972M1 9.74h28.771"
        stroke={props.color}
        strokeWidth={0.997}
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  )
}

export default Arrow