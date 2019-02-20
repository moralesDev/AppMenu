import { DrawerNavigator } from 'react-navigation';

import Screen1 from '../components/screen1.js';
import Screen2 from '../components/screen2.js';

const DrawerScreen = DrawerNavigator({
	Screen1: {screen: Screen1},
	Screen2: {screen: Screen2}
},{
	headerMode: 'none'

})

export default DrawerScreen;