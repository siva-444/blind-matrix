import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {JobDetailScreen, JobListScreen} from '@screens';

import type {StackNavigationOptions} from '@react-navigation/stack';

const Stack = createStackNavigator();
const HeaderBar: StackNavigationOptions['header'] = props => {
  const {} = props;
  return <View></View>;
};
const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="JobList"
      screenOptions={{
        headerTitleAlign: 'center',
        headerRight: ({tintColor, pressColor, pressOpacity}) => (
          <View style={{flexDirection: 'row', gap: 12, marginHorizontal: 16}}>
            <Icon name="filter-list" size={24} />
            <Icon name="notifications-none" size={24} />
          </View>
        ),
      }}>
      <Stack.Screen name="JobList" component={JobListScreen} />
      <Stack.Screen
        name="JobDetail"
        component={JobDetailScreen}
        options={{
          headerRight: ({tintColor, pressColor, pressOpacity}) => (
            <View style={{flexDirection: 'row', gap: 12, marginHorizontal: 16}}>
              <Icon name="more-vert" size={24} color={tintColor} />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
