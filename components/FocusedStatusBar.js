import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
// rnfe react native function component
const FocusedStatusBar = (props) => {
    // gives information on are we currently focusing the status bar
    const isFocused = useIsFocused()
    // props will contain background color
    // if not focused hide the status bar with null
  return isFocused ? <StatusBar animated={true} {...props} /> : null
}

export default FocusedStatusBar