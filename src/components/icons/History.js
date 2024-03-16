import * as React from 'react'
import Svg, {Path} from 'react-native-svg'
const SvgHistory = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    className=""
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      stroke="#000"
      d="M10.5.5C7 .5 3.9 2.4 2.3 5.3L0 3v6.5h6.5L3.7 6.7C5 4.2 7.5 2.5 10.5 2.5c4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5c-3.3 0-6-2.1-7.1-5H1.3c1.1 4 4.8 7 9.2 7 5.3 0 9.5-4.3 9.5-9.5S15.7.5 10.5.5ZM9 5.5v5.1l4.7 2.8.8-1.3-4-2.4V5.5H9Z"
      opacity={0.9}
    />
  </Svg>
)
export default SvgHistory
