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

export default function HomeScreen() {
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
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good morning 👋</Text>
          <Text style={styles.name}>Adisa</Text>
        </View>

        <TouchableOpacity
          style={styles.notificationButton}
          onPress={() => alert("You have no new notifications.")}
        >
          <Ionicons name="notifications-outline" size={23} color="#111827" />

          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      <View style={styles.hero}>
        <View style={styles.heroContent}>
          <Text style={styles.heroSmall}>WELCOME TO MYFIRSTAPP</Text>

          <Text style={styles.heroTitle}>Start Building 🚀</Text>

          <Text style={styles.heroDescription}>
            Learn, build and improve your mobile development skills.
          </Text>

          <TouchableOpacity
            style={styles.heroButton}
            onPress={() => router.push("/explore")}
          >
            <Text style={styles.heroButtonText}>Get Started</Text>

            <Ionicons name="arrow-forward" size={18} color="#2563EB" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.quickCard}
          onPress={() => router.push("/explore")}
        >
          <View style={styles.quickIconBlue}>
            <Ionicons name="book-outline" size={24} color="#2563EB" />
          </View>

          <Text style={styles.quickTitle}>Learn</Text>
          <Text style={styles.quickSubtitle}>Continue learning</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.quickCard}
          onPress={() => router.push("/explore")}
        >
          <View style={styles.quickIconPurple}>
            <Ionicons name="code-slash-outline" size={24} color="#7C3AED" />
          </View>

          <Text style={styles.quickTitle}>Projects</Text>
          <Text style={styles.quickSubtitle}>Build something</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Your Progress</Text>

      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <View>
            <Text style={styles.progressTitle}>Mobile Development</Text>

            <Text style={styles.progressSubtitle}>
              Keep going — you're doing great!
            </Text>
          </View>

          <Text style={styles.progressPercent}>25%</Text>
        </View>

        <View style={styles.progressBackground}>
          <View style={styles.progressFill} />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Recent Activity</Text>

      <View style={styles.activityCard}>
        <View style={styles.activityIcon}>
          <Ionicons name="checkmark-circle-outline" size={24} color="#16A34A" />
        </View>

        <View style={styles.activityContent}>
          <Text style={styles.activityTitle}>Started Mobile Development</Text>

          <Text style={styles.activityTime}>Recently</Text>
        </View>
      </View>

      <View style={styles.activityCard}>
        <View style={styles.activityIcon}>
          <Ionicons name="rocket-outline" size={24} color="#2563EB" />
        </View>

        <View style={styles.activityContent}>
          <Text style={styles.activityTitle}>Created your first app</Text>

          <Text style={styles.activityTime}>Recently</Text>
        </View>
      </View>
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

  greeting: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 4,
  },

  name: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
  },

  notificationButton: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  notificationDot: {
    position: "absolute",
    top: 11,
    right: 11,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EF4444",
  },

  hero: {
    backgroundColor: "#2563EB",
    borderRadius: 25,
    padding: 22,
    marginBottom: 28,
    elevation: 3,
  },

  heroContent: {
    width: "100%",
  },

  heroSmall: {
    fontSize: 10,
    fontWeight: "800",
    color: "#BFDBFE",
    letterSpacing: 1.3,
    marginBottom: 8,
  },

  heroTitle: {
    fontSize: 27,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  heroDescription: {
    fontSize: 13,
    lineHeight: 20,
    color: "#DBEAFE",
    marginBottom: 18,
  },

  heroButton: {
    height: 46,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  heroButtonText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#2563EB",
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 12,
  },

  quickActions: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 28,
  },

  quickCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    padding: 15,
    elevation: 1,
  },

  quickIconBlue: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  quickIconPurple: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#F5F3FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  quickTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 4,
  },

  quickSubtitle: {
    fontSize: 11,
    color: "#6B7280",
  },

  progressCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 17,
    marginBottom: 28,
    elevation: 1,
  },

  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  progressTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 4,
  },

  progressSubtitle: {
    fontSize: 11,
    color: "#6B7280",
  },

  progressPercent: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2563EB",
  },

  progressBackground: {
    height: 9,
    borderRadius: 5,
    backgroundColor: "#E5E7EB",
    overflow: "hidden",
  },

  progressFill: {
    width: "25%",
    height: "100%",
    backgroundColor: "#2563EB",
    borderRadius: 5,
  },

  activityCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    elevation: 1,
  },

  activityIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#F0FDF4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  activityContent: {
    flex: 1,
  },

  activityTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },

  activityTime: {
    fontSize: 11,
    color: "#9CA3AF",
  },
});
