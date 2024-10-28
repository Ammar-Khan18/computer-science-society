import { SVGProps } from "react"
import { motion } from "framer-motion"
export const DownArrowSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // width={100}
    // height={100}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <motion.g 
      id="Down_arrow"
      animate={{y: [-5,15,-5]}}
      transition={{
        times: [0, 1],
        duration: 1,
        repeat: Infinity,
      }}>
      <path
        id="Vector 02 Top"
        d="M13 9L55 50M92.1102 9L50.1102 50"
        stroke="white"
        strokeWidth={7}
      />
      <path
        id="Vector 01 Top"
        d="M10.4448 9.49548L52.4448 50.4955M89.5551 9.49548L47.5551 50.4955"
        stroke="black"
        strokeWidth={7}
      />
      <path
        id="Vector 02 Bottom"
        d="M12.5552 35L54.5552 76M91.6654 35L49.6654 76"
        stroke="white"
        strokeWidth={7}
      />
      <path
        id="Vector 01 Bottom"
        d="M10 35.4955L52 76.4955M89.1102 35.4955L47.1102 76.4955"
        stroke="black"
        strokeWidth={7}
      />
    </motion.g>
  </svg>
)
