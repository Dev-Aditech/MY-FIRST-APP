import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ProfileScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1200);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#2563EB"
          colors={["#2563EB"]}
        />
      }
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.smallTitle}>ACCOUNT</Text>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>

        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => router.push("/settings")}
          activeOpacity={0.7}
        >
          <Ionicons name="settings-outline" size={22} color="#111827" />
        </TouchableOpacity>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Adisa</Text>

          <Text style={styles.email}>adisa@example.com</Text>

          <Text style={styles.welcome}>Welcome to MyFirstApp</Text>
        </View>

        {/* Edit Profile */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => router.push("/edit-profile")}
          activeOpacity={0.7}
        >
          <Text style={styles.editIcon}>✏️</Text>
        </TouchableOpacity>
      </View>

      {/* Account */}
      <Text style={styles.sectionTitle}>Account</Text>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push("/edit-profile")}
        activeOpacity={0.7}
      >
        <View style={styles.iconBoxBlue}>
          <Ionicons name="person-outline" size={21} color="#2563EB" />
        </View>

        <View style={styles.menuContent}>
          <Text style={styles.menuTitle}>Profile Information</Text>

          <Text style={styles.menuSubtitle}>
            Edit your personal information
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
        <View style={styles.iconBoxPurple}>
          <Ionicons name="notifications-outline" size={21} color="#7C3AED" />
        </View>

        <View style={styles.menuContent}>
          <Text style={styles.menuTitle}>Notifications</Text>

          <Text style={styles.menuSubtitle}>Manage your notifications</Text>
        </View>

        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
      </TouchableOpacity>

      {/* Preferences */}
      <Text style={styles.sectionTitle}>Preferences</Text>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push("/settings")}
        activeOpacity={0.7}
      >
        <View style={styles.iconBoxGreen}>
          <Ionicons name="settings-outline" size={21} color="#16A34A" />
        </View>

        <View style={styles.menuContent}>
          <Text style={styles.menuTitle}>Settings</Text>

          <Text style={styles.menuSubtitle}>
            Customize your app preferences
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
        <View style={styles.iconBoxOrange}>
          <Ionicons name="shield-checkmark-outline" size={21} color="#EA580C" />
        </View>

        <View style={styles.menuContent}>
          <Text style={styles.menuTitle}>Privacy & Security</Text>

          <Text style={styles.menuSubtitle}>Protect your account and data</Text>
        </View>

        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
        <Ionicons name="log-out-outline" size={21} color="#DC2626" />

        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      {/* Version */}
      <Text style={styles.version}>MyFirstApp • Version 1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 35,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  smallTitle: {
    fontSize: 11,
    fontWeight: "800",
    color: "#2563EB",
    letterSpacing: 1.5,
    marginBottom: 4,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
  },

  settingsButton: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  profileCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
    elevation: 2,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "800",
  },

  profileInfo: {
    flex: 1,
    minWidth: 0,
    marginRight: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 3,
  },

  email: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 5,
  },

  welcome: {
    fontSize: 11,
    color: "#9CA3AF",
  },

  editButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },

  editIcon: {
    fontSize: 22,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 12,
    marginTop: 5,
  },

  menuItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    elevation: 1,
  },

  iconBoxBlue: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  iconBoxPurple: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#F5F3FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  iconBoxGreen: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#F0FDF4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  iconBoxOrange: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#FFF7ED",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  menuContent: {
    flex: 1,
  },

  menuTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },

  menuSubtitle: {
    fontSize: 11,
    color: "#6B7280",
  },

  logoutButton: {
    height: 54,
    borderRadius: 17,
    backgroundColor: "#FEF2F2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    marginTop: 20,
  },

  logoutText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#DC2626",
  },

  version: {
    textAlign: "center",
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 25,
  },
});
