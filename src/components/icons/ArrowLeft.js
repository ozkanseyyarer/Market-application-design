import * as React from 'react'
import Svg, {Path} from 'react-native-svg'
const SvgArrowLeft = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="gray"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className=""
    {...props}
  >
    <Path d="M19 12H5M12 19l-7-7 7-7" />
  </Svg>
)
export default SvgArrowLeft
