import * as React from 'react'
import Svg, {Path, Circle} from 'react-native-svg'
const SvgProfile = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className=""
    {...props}
  >
    <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <Circle cx={12} cy={7} r={4} />
  </Svg>
)
export default SvgProfile
