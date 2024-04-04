import React from "react";
import { RotatingLines } from "react-loader-spinner";

function LoaderSpinner() {
  return (
    <div className="w-full flex justify-center text-center h-[1000px] mt-24">
      <RotatingLines
        height="100px"
        width="100px"
        strokeColor="#fe5d42"
        strokeWidth="3"
      />
    </div>
  );
}

export default LoaderSpinner;
