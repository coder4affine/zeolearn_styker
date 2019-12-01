import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import LandingPage from './screens/landingPage/LandingPage';
import Login from './screens/login/Login';
import Login1 from './screens/login/Login1';
import Login2 from './screens/login/Login2';
import Explore from './screens/explore/Explore';
import Settings from './screens/settings/Settings';
import Dashboard from './screens/dashboard/Dashboard';
import MyModal from './screens/myModal/MyModal';
import CustomeDrawer from './components/CustomeDrawer';

const DashboadStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            style={{paddingLeft: 10}}
            name="menu"
            size={30}
          />
        ),
        title: 'Dashboard',
      };
    },
  },
});

const ExploreStack = createStackNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            style={{paddingLeft: 10}}
            name="menu"
            size={30}
          />
        ),
      };
    },
  },
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            style={{paddingLeft: 10}}
            name="menu"
            size={30}
          />
        ),
      };
    },
  },
});

const DashboardTab = createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboadStack,
    },
    Explore: {
      screen: ExploreStack,
    },
    Settings: {
      screen: SettingsStack,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let iconName = 'dashboard';
          if (routeName === 'Explore') {
            iconName = 'explore';
          }
          if (routeName === 'Settings') {
            iconName = 'settings-applications';
          }
          return <Icon name={iconName} size={30} color={tintColor} />;
        },
      };
    },
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const LoginStack = createStackNavigator({
  Login: {
    screen: Login,
  },
  Login1: {
    screen: Login1,
  },
  Login2: {
    screen: Login2,
  },
});
const RootNavigation = createStackNavigator(
  {
    App: {
      screen: DashboardTab,
    },
    MyModal: {
      screen: MyModal,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const AppDrawer = createDrawerNavigator(
  {
    AppDrawer: {
      screen: RootNavigation,
    },
  },
  {
    contentComponent: CustomeDrawer,
  },
);

export const App = createSwitchNavigator({
  Landing: {
    screen: LandingPage,
  },
  Login: {
    screen: LoginStack,
  },
  Dashboard: {
    screen: AppDrawer,
  },
});

export default createAppContainer(App);
