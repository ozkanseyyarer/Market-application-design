import * as React from 'react'
import Svg, {G, Path} from 'react-native-svg'
const SvgCategory = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    className=""
    {...props}
  >
    <G
      stroke="#130F26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipRule="evenodd"
    >
      <Path d="M21 6.674a3.674 3.674 0 1 1-7.348-.001 3.674 3.674 0 0 1 7.348 0M10.347 6.674a3.674 3.674 0 1 1-7.348 0 3.674 3.674 0 0 1 7.348 0M21 17.262a3.674 3.674 0 1 1-7.347-.001 3.674 3.674 0 0 1 7.347 0M10.347 17.262a3.673 3.673 0 1 1-7.346 0 3.673 3.673 0 0 1 7.346 0" />
    </G>
  </Svg>
)
export default SvgCategory
