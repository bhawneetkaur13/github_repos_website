import * as React from "react"
const BackIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    className="icon"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      fill="#007bff"
      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
    />
    <path
      fill="#007bff"
      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
    />
  </svg>
)
export default BackIcon
