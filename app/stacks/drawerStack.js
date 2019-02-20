import { StackNavigator } from 'react-navigation';
import { TouchableHightlight,Text,View} from 'react-native';
import React from 'react';
import DrawerScreen from './drawerScreen.js'

const DrawerNavigation = StackNavigator({
	DrawerStack: {screen: DrawerScreen}
}, {
	headerMode: 'float',
	navigationOptions: ({navigation}) => ({
		headerStyle: {
			backgroundColor: 'rgb(255, 45, 85)',
			paddingLeft: 10,
			paddingRight: 10
		},
		title: 'Home',
		headerTintColor: 'white',
		headerLeft: <View>
						<TouchableHightlight onPress={() => {
								navigation.navigate('DrawerOpen');
							}}>
							<Text></Text>
						</TouchableHightlight>
					</View>
	})
})

export default DrawerNavigation;