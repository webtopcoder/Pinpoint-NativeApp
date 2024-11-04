import Footer from "@/src/components/partner/Footer";
import Header from "@/src/components/partner/Header";
import Sidebar from "@/src/components/partner/Sidebar";
import useDimensions from "@/src/hooks/useDimension";
import {
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { View, Image } from "react-native";
import { Appbar, Menu, useTheme } from "react-native-paper";
import AddPost from "../(socialpost)/addpost";
import Drawer from "expo-router/drawer";
import { useState } from "react";
import Modal from "@/src/components/modals/modal";

export default function Layout() {
  const { height, width, isMobile } = useDimensions();
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return isMobile ? (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#000",
        drawerActiveBackgroundColor: colors.primary,
        drawerStyle: {
          backgroundColor: "#fff",
        },
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#000",
        drawerType: "slide",
        headerShown: true,
        header: ({ navigation, route, options }) => {
          return options.headerShown ? (
            <Appbar.Header mode="small" style={{ backgroundColor: "white" }}>
              {/* Left: Logo */}
              {route.name === "socials" ? (
                <>
                  <Appbar.Action
                    icon="menu"
                    onPress={() => navigation.toggleDrawer()} // Toggle the drawer
                    color="black"
                  />
                  <Image
                    source={require("../../../../assets/images/logo2.png")}
                    style={{ width: 150, height: 40 }}
                    resizeMode="contain"
                  />
                  <Appbar.Content title="" />
                  <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                      <Appbar.Action
                        icon="plus-circle-outline"
                        onPress={openMenu}
                      />
                    }
                    anchorPosition="bottom"
                    mode="flat"
                  >
                    <Modal
                      button={
                        <Menu.Item
                          onPress={() => {
                            closeMenu();
                            router.push("/addpost");
                          }}
                          leadingIcon="pencil-outline"
                          title="Create Post"
                        />
                      }
                    >
                      {(close) => <AddPost onClose={close} />}
                    </Modal>
                    <Menu.Item
                      leadingIcon="movie-open-play-outline"
                      onPress={() => {
                        closeMenu();
                        router.push("/camera");
                      }}
                      title="Create Story"
                    />
                    <Menu.Item
                      leadingIcon="cube-outline"
                      onPress={() => {
                        closeMenu();
                        router.push("/products/add");
                      }}
                      title="Add Product"
                    />
                    <Menu.Item
                      leadingIcon="account-outline"
                      onPress={() => {
                        closeMenu();
                        router.push("/services/add");
                      }}
                      title="Add Service"
                    />
                    <Menu.Item
                      leadingIcon="map-marker-outline"
                      onPress={() => {
                        closeMenu();
                        router.push("/locations/setup");
                      }}
                      title="Add Location"
                    />
                  </Menu>
                </>
              ) : (
                <>
                  <Appbar.BackAction onPress={() => router.back()} />
                  <Appbar.Content
                    title={options.title || route.name}
                    titleStyle={{
                      // fontSize: 18,
                      // fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                    style={{ alignItems: "center" }}
                  />
                  <Appbar.Action icon="" />
                </>
              )}
            </Appbar.Header>
          ) : null;
        },
      }}
    >
      <Drawer.Screen
        name="dashboard"
        options={{
          drawerLabel: "Dashboard",
          title: "Dashboard",
          drawerIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="leads"
        options={{
          drawerLabel: "Leads",
          headerShown: false,
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-edit-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="locations"
        options={{
          drawerLabel: "Locations",
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="location-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="products"
        options={{
          drawerLabel: "Products",
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="bag-handle-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="services"
        options={{
          drawerLabel: "Services",
          headerShown: false,
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="coupons"
        options={{
          headerShown: false,
          drawerLabel: "Coupons",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="ticket-percent-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="badges"
        options={{
          drawerLabel: "Badges",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="shield-star-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="polls"
        options={{
          drawerLabel: "Polls",
          drawerIcon: ({ color }) => (
            <SimpleLineIcons name="chart" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="socials"
        options={{
          drawerLabel: "Pinpoint Social",
          drawerIcon: ({ color }) => (
            <Image
              source={require("../../../../assets/images/logo_gray.png")}
              style={[{ height: 24, width: 24 }]}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="partnership"
        options={{
          drawerLabel: "Pinpoint Partnership",
          drawerIcon: ({ color }) => (
            <FontAwesome name="diamond" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={24} color={color} />
          ),
        }}
      />
    </Drawer>
  ) : (
    <View style={{ flexDirection: "row", flex: 1, backgroundColor: "#f5f5f5" }}>
      <Sidebar />
      <View style={{ height: height, overflow: "hidden", flex: 1 }}>
        <Header />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="dashboard" />
          <Stack.Screen name="leads" />
          <Stack.Screen name="locations" />
          <Stack.Screen name="products" />
          <Stack.Screen name="services" />
          <Stack.Screen name="partnership" />
          <Stack.Screen name="coupons" />
          <Stack.Screen name="socials" />
          <Stack.Screen name="polls" />
          <Stack.Screen name="settings" />
        </Stack>
        <Footer />
      </View>
    </View>
  );
}
