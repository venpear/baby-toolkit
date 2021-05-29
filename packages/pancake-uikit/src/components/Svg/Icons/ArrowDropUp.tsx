import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M8.754 4.91273C8.79267 4.9504 8.958 5.09263 9.094 5.22512C9.94933 6.00187 11.3493 8.02817 11.7767 9.08873C11.8453 9.2498 11.9907 9.65701 12 9.87457C12 10.083 11.952 10.2818 11.8547 10.4714C11.7187 10.7078 11.5047 10.8975 11.252 11.0014C11.0767 11.0683 10.552 11.1722 10.5427 11.1722C9.96867 11.2761 9.036 11.3333 8.00533 11.3333C7.02333 11.3333 6.12867 11.2761 5.546 11.191C5.53667 11.1813 4.88467 11.0774 4.66133 10.9637C4.25333 10.7552 4 10.348 4 9.91224L4 9.87457C4.01 9.59076 4.26333 8.99391 4.27267 8.99391C4.70067 7.9905 6.032 6.01096 6.91667 5.21538C6.91667 5.21538 7.144 4.99131 7.286 4.89389C7.49 4.74192 7.74267 4.66659 7.99533 4.66659C8.27733 4.66659 8.54 4.75166 8.754 4.91273Z" fill="#4E93EA"/>
    </Svg>
  );
};

export default Icon;
