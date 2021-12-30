import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import { ThemeProvider } from '../context/themeProvider';
import BottomTabs from './bottomTabs';
import { onBoarding } from '../screen';
import Drawer from './drawer';



const Stack = createStackNavigator();

export default function Navigation() {
  const DarkTheme = useSelector(state => state.dark);
  const {settheme} = useContext(ThemeProvider);
  React.useEffect(() => {
    settheme(DarkTheme.dark);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName="Home">
        <Stack.Screen name="OnBoarding" component={onBoarding} />
        <Stack.Screen name="Home" component={Drawer} />
        {/* <Stack.Screen name="BottomTabs" component={BottomTabs} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
