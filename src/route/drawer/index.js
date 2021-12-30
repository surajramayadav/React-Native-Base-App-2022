import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from '../bottomTabs';
import CustomDrawerContent from '../../components/routeComponents/drawerComponents';
export default function Drawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />
      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  );
}
