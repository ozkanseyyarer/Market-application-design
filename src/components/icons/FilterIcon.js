import * as React from 'react'
import Svg, {G, Path} from 'react-native-svg'
const SvgFilterIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#000"
    transform="rotate(90)"
    className=""
    {...props}
  >
    <G fill="#000" opacity={0.15}>
      <Path d="M21 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </G>
    <Path
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 4v6m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v6M12 4v12m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 8v12M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </Svg>
)
export default SvgFilterIcon
