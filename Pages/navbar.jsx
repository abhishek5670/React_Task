import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Next from './Next.jsx';

const Tab = createMaterialBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Home"
        component={Next}
        options={{
          tabBarIcon: 'home-account',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Next}
        options={{
          tabBarIcon: 'bell-outline',
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Next}
        options={{
          tabBarIcon: 'message-text-outline',
        }}
      />
    </Tab.Navigator>
  );
};
export default Navbar