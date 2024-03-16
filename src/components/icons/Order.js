import * as React from 'react'
import Svg, {Path} from 'react-native-svg'
const SvgOrder = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={24}
    height={24}
    viewBox="0 0 30 30"
    className=""
    {...props}
  >
    <Path
      d="M7 22V4h18v18a4 4 0 0 1-4 4"
      style={{
        fill: 'none',
        stroke: '#000',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10
      }}
    />
    <Path
      d="M17 22H4h0a4 4 0 0 0 4 4h13a4 4 0 0 1-4-4"
      style={{
        fill: 'none',
        stroke: '#000',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10
      }}
    />
    <Path
      d="M15 13h6M11 13h2M15 17h6M11 17h2M15 9h6M11 9h2"
      style={{
        fill: 'none',
        stroke: '#000',
        strokeWidth: 2,
        strokeLinejoin: 'round',
        strokeMiterlimit: 10
      }}
    />
    <Path d="M17 22H4a4 4 0 0 0 4 4h13a4 4 0 0 1-4-4" />
  </Svg>
)
export default SvgOrder
