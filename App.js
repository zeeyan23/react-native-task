import 'react-native-gesture-handler';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import HistoryScreen from './components/HistoryScreen';
import CameraScreen from './components/CameraScreen';
import ProductScreen from './components/ProductsScreen';
import SettingsScreen from './components/SettingsScreen';

import HistoryIcon from './assets/bottomTabIcons/history.png';
import CameraIcon from './assets/bottomTabIcons/camera.png';
import ProductsIcon from './assets/bottomTabIcons/products.png';
import SettingsIcon from './assets/bottomTabIcons/settings.png';

import { Entypo } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.floatingButton}
    onPress={onPress}
  >
    <View style={styles.innerCircle}>{children}</View>
  </TouchableOpacity>
);


function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {

        if (route.name === 'HomeTab') {
          // Use Entypo icon for Home
          return (
            <Entypo
              name={focused ? 'home' : 'home'}
              size={size}
              color={color}
            />
          );
        }
        
        let iconName;
  
        if (route.name === 'HomeTab') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'History') {
          iconName = HistoryIcon;
        } else if (route.name === 'Camera') {
          iconName = CameraIcon;
        } else if (route.name === 'Products') {
          iconName = ProductsIcon;
        } else if (route.name === 'Settings') {
          iconName = SettingsIcon;
        }
  
        return (
          <Image
            source={iconName}
            style={{
              width: size,
              height: size,
              tintColor: color, 
              resizeMode:"contain"
            }}
          />
        );
      },
      tabBarActiveTintColor: '#0560FD',
      tabBarInactiveTintColor: '#6B6B6B',
    })}>
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ 
          title: 'Home', 
          headerShown: false
        }} />
      <Tab.Screen name="History" component={HistoryScreen} options={{ 
          title: 'History', 
          headerShown: false
        }} />
        <Tab.Screen name="Camera" component={CameraScreen} options={{
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}>
              <Image source={require('./assets/bottomTabIcons/camera.png')} style={styles.cameraIcon} />
            </CustomTabBarButton>
          ),
          headerShown: false,
        }}  />
        <Tab.Screen name="Products" component={ProductScreen} options={{ 
          title: 'Products', 
          headerShown: false
        }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ 
          title: 'Settings', 
          headerShown: false
        }} />
    </Tab.Navigator>
  );
}

// Drawer inside Home
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Logo" component={HomeTabs} options={{headerTitleAlign:"center", 
        headerTitleStyle:{color:'#0560FD', fontWeight:'bold'}}} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={DrawerNavigator} options={{ 
          title: 'Home', 
          headerShown: false 
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  floatingButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0560FD',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  cameraIcon: {
    width: 30,
    height: 30,
    tintColor: 'white',
    resizeMode:"contain"
  },
});
