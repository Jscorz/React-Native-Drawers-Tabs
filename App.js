import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const BottomTab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			{/* <Drawer.Navigator */}
			<BottomTab.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: "#3c0a6b" },
					headerTintColor: "white",
					// drawerActiveBackgroundColor: "#f0e1ff",
					// drawerActiveTintColor: "#3c0a6b",
					// drawerStyle: { backgroundColor: "#ccc" },
					tabBarActiveTintColor: "#3c0a6b",
				}}
			>
				{/* <Drawer.Screen */}
				<BottomTab.Screen
					name='Welcome'
					component={WelcomeScreen}
					// options={{
					// 	drawerLabel: "Welcome Screen",
					// 	drawerIcon: ({ color, size }) => (
					// 		<Ionicons name='home' color={color} size={size} />
					// 	),
					// }}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name='home' color={color} size={size} />
						),
					}}
				/>
				{/* <Drawer.Screen */}
				<BottomTab.Screen
					name='User'
					component={UserScreen}
					// options={{
					// 	drawerIcon: ({ color, size }) => (
					// 		<Ioncion name='person' color={color} size={size} />
					// 	),
					// }}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name='person' color={color} size={size} />
						),
					}}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	);
}
