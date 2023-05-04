import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AddJobScreen, HomeScreen, TaskScreen, CalenderScreen} from '@screens';

import JobStack from './JobStack';

import type {FC} from 'react';
const Tab = createBottomTabNavigator();

interface TabBarIconsProp {
  focused: boolean;
  color: string;
  size: number;
  routeName: string;
}
const TabBarIcons: FC<TabBarIconsProp> = props => {
  const {focused, color, size, routeName} = props;
  let iconName;
  switch (routeName) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Jobs':
      iconName = 'business-center';
      break;
    case 'AddJob':
      iconName = 'queue';
      break;
    case 'Calender':
      iconName = 'calendar-today';
      break;
    case 'Task':
      iconName = 'content-paste';
      break;
    default:
      iconName = 'perm-media';
      break;
  }

  // You can return any component that you like here!
  return <Icon name={iconName} size={size} color={color} />;
};

const BottomStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerTitleAlign: 'center',
        headerRight: ({tintColor, pressColor, pressOpacity}) => (
          <View style={{flexDirection: 'row', gap: 12, marginHorizontal: 16}}>
            <Icon name="filter-list" size={24} />
            <Icon name="notifications-none" size={24} />
          </View>
        ),
        tabBarIcon: props => <TabBarIcons {...props} routeName={route.name} />,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Jobs"
        component={JobStack}
        options={{headerShown: false}}
      />
      <Tab.Screen name="AddJob" component={AddJobScreen} />
      <Tab.Screen name="Calender" component={CalenderScreen} />
      <Tab.Screen name="Task" component={TaskScreen} />
    </Tab.Navigator>
  );
};

export default BottomStack;
