import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    Alert,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function EditProfileScreen() {
  const [name, setName] = useState("Adisa");
  const [email, setEmail] = useState("adisa@example.com");
  const [username, setUsername] = useState("adisa");

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1200);
  };

  const saveProfile = () => {
    Alert.alert(
      "Profile Updated",
      "Your profile has been saved successfully.",
      [
        {
          text: "OK",
          onPress: () => router.back(),
        },
      ],
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
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
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={22} color="#111827" />
        </TouchableOpacity>

        <View style={styles.headerText}>
          <Text style={styles.smallTitle}>ACCOUNT</Text>
          <Text style={styles.headerTitle}>Edit Profile</Text>
        </View>

        <View style={styles.headerSpacer} />
      </View>

      {/* Profile Photo */}
      <View style={styles.photoSection}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>

          <TouchableOpacity style={styles.cameraButton} activeOpacity={0.7}>
            <Ionicons name="camera" size={17} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <Text style={styles.photoTitle}>Profile Photo</Text>

        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.changePhoto}>Change Photo</Text>
        </TouchableOpacity>
      </View>

      {/* Personal Information */}
      <Text style={styles.sectionTitle}>Personal Information</Text>

      {/* Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full Name</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#9CA3AF" />

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
            autoCapitalize="words"
          />
        </View>
      </View>

      {/* Email */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email Address</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#9CA3AF" />

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>

      {/* Username */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="at-outline" size={20} color="#9CA3AF" />

          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
            autoCapitalize="none"
          />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={saveProfile}
        activeOpacity={0.8}
      >
        <Ionicons name="checkmark-circle-outline" size={21} color="#FFFFFF" />

        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>

      {/* Cancel */}
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => router.back()}
        activeOpacity={0.7}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Your profile information is stored securely.
      </Text>
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
    paddingTop: 50,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  backButton: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  headerText: {
    flex: 1,
    marginLeft: 15,
  },

  headerSpacer: {
    width: 46,
  },

  smallTitle: {
    fontSize: 11,
    fontWeight: "800",
    color: "#2563EB",
    letterSpacing: 1.5,
    marginBottom: 4,
  },

  headerTitle: {
    fontSize: 27,
    fontWeight: "800",
    color: "#111827",
  },

  photoSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 24,
    alignItems: "center",
    marginBottom: 28,
    elevation: 2,
  },

  avatarContainer: {
    position: "relative",
    marginBottom: 12,
  },

  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "800",
  },

  cameraButton: {
    position: "absolute",
    right: -2,
    bottom: 2,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },

  photoTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 5,
  },

  changePhoto: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2563EB",
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 14,
  },

  inputGroup: {
    marginBottom: 17,
  },

  label: {
    fontSize: 12,
    fontWeight: "700",
    color: "#374151",
    marginBottom: 8,
  },

  inputContainer: {
    height: 54,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  input: {
    flex: 1,
    height: "100%",
    marginLeft: 11,
    fontSize: 14,
    color: "#111827",
  },

  saveButton: {
    height: 55,
    borderRadius: 17,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    marginTop: 10,
  },

  saveButtonText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  cancelButton: {
    height: 52,
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  cancelButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#374151",
  },

  footerText: {
    textAlign: "center",
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 22,
  },
});
