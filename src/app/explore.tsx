import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ExploreScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

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
          <Text style={styles.smallTitle}>DISCOVER</Text>
          <Text style={styles.title}>Explore</Text>
        </View>

        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={22} color="#111827" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={20} color="#9CA3AF" />

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search anything..."
          placeholderTextColor="#9CA3AF"
          style={styles.searchInput}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      >
        {["All", "Coding", "Learning", "Ideas"].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              activeCategory === category && styles.categoryButtonActive,
            ]}
            onPress={() => setActiveCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                activeCategory === category && styles.categoryTextActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Featured</Text>

      <TouchableOpacity style={styles.featuredCard}>
        <View style={styles.featuredIcon}>
          <Ionicons name="phone-portrait-outline" size={30} color="#FFFFFF" />
        </View>

        <View style={styles.featuredContent}>
          <Text style={styles.featuredLabel}>FEATURED COURSE</Text>

          <Text style={styles.featuredTitle}>Mobile App Development</Text>

          <Text style={styles.featuredDescription}>
            Learn how to build beautiful mobile applications with React Native.
          </Text>

          <View style={styles.featuredBottom}>
            <View style={styles.rating}>
              <Ionicons name="star" size={15} color="#F59E0B" />

              <Text style={styles.ratingText}>4.9</Text>
            </View>

            <Text style={styles.students}>1.2k students</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Recommended</Text>

      <TouchableOpacity style={styles.courseCard}>
        <View style={styles.courseIconBlue}>
          <Ionicons name="logo-react" size={25} color="#2563EB" />
        </View>

        <View style={styles.courseContent}>
          <Text style={styles.courseTitle}>React Native</Text>
          <Text style={styles.courseSubtitle}>
            Build cross-platform mobile apps
          </Text>

          <View style={styles.courseMeta}>
            <Ionicons name="time-outline" size={14} color="#9CA3AF" />
            <Text style={styles.metaText}>8 hours</Text>

            <Ionicons name="star-outline" size={14} color="#9CA3AF" />
            <Text style={styles.metaText}>4.8</Text>
          </View>
        </View>

        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.courseCard}>
        <View style={styles.courseIconYellow}>
          <Ionicons name="logo-javascript" size={25} color="#CA8A04" />
        </View>

        <View style={styles.courseContent}>
          <Text style={styles.courseTitle}>JavaScript</Text>
          <Text style={styles.courseSubtitle}>Master modern JavaScript</Text>

          <View style={styles.courseMeta}>
            <Ionicons name="time-outline" size={14} color="#9CA3AF" />
            <Text style={styles.metaText}>10 hours</Text>

            <Ionicons name="star-outline" size={14} color="#9CA3AF" />
            <Text style={styles.metaText}>4.9</Text>
          </View>
        </View>

        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.courseCard}>
        <View style={styles.courseIconGreen}>
          <Ionicons name="server-outline" size={25} color="#16A34A" />
        </View>

        <View style={styles.courseContent}>
          <Text style={styles.courseTitle}>Backend Development</Text>
          <Text style={styles.courseSubtitle}>
            Learn APIs and server-side development
          </Text>

          <View style={styles.courseMeta}>
            <Ionicons name="time-outline" size={14} color="#9CA3AF" />
            <Text style={styles.metaText}>12 hours</Text>

            <Ionicons name="star-outline" size={14} color="#9CA3AF" />
            <Text style={styles.metaText}>4.7</Text>
          </View>
        </View>

        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
      </TouchableOpacity>

      <View style={styles.bottomSpace} />
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
    paddingBottom: 30,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  smallTitle: {
    fontSize: 11,
    fontWeight: "800",
    color: "#2563EB",
    letterSpacing: 1.5,
    marginBottom: 4,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
  },

  filterButton: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  searchBox: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 17,
    elevation: 1,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 13,
    color: "#111827",
  },

  categories: {
    paddingBottom: 25,
    gap: 9,
  },

  categoryButton: {
    height: 38,
    paddingHorizontal: 17,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  categoryButtonActive: {
    backgroundColor: "#2563EB",
  },

  categoryText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#6B7280",
  },

  categoryTextActive: {
    color: "#FFFFFF",
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 12,
  },

  featuredCard: {
    backgroundColor: "#2563EB",
    borderRadius: 22,
    padding: 18,
    flexDirection: "row",
    marginBottom: 28,
    elevation: 3,
  },

  featuredIcon: {
    width: 55,
    height: 55,
    borderRadius: 17,
    backgroundColor: "rgba(255,255,255,0.18)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  featuredContent: {
    flex: 1,
  },

  featuredLabel: {
    fontSize: 9,
    fontWeight: "800",
    color: "#BFDBFE",
    letterSpacing: 1,
    marginBottom: 5,
  },

  featuredTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 5,
  },

  featuredDescription: {
    fontSize: 11,
    lineHeight: 17,
    color: "#DBEAFE",
    marginBottom: 10,
  },

  featuredBottom: {
    flexDirection: "row",
    alignItems: "center",
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 14,
  },

  ratingText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#FFFFFF",
    marginLeft: 4,
  },

  students: {
    fontSize: 10,
    color: "#BFDBFE",
  },

  courseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    elevation: 1,
  },

  courseIconBlue: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  courseIconYellow: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "#FEFCE8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  courseIconGreen: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "#F0FDF4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  courseContent: {
    flex: 1,
  },

  courseTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 4,
  },

  courseSubtitle: {
    fontSize: 11,
    color: "#6B7280",
    marginBottom: 7,
  },

  courseMeta: {
    flexDirection: "row",
    alignItems: "center",
  },

  metaText: {
    fontSize: 10,
    color: "#9CA3AF",
    marginLeft: 4,
    marginRight: 12,
  },

  bottomSpace: {
    height: 20,
  },
});
