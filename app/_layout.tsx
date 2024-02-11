import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Stack } from "expo-router";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import TabOneScreen from "../app/(tabs)/index"
import TabTwoScreen from "../app/(tabs)/index"
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "red", headerShown: false, tabBarItemStyle: { marginBottom: -30 } }}>
      <Tab.Screen
        name="HomeScreen"
        component={TabOneScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen name="About" component={TabTwoScreen} options={{ tabBarShowLabel: false }} />
    </Tab.Navigator>
  );
};

export default function RootLayoutNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Tabs" component={Tabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}