import * as React from 'react'
import Svg, {Path} from 'react-native-svg'
const SvgDownicon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={3}
    className=""
    {...props}
  >
    <Path d="m6 9 6 6 6-6" />
  </Svg>
)
export default SvgDownicon
