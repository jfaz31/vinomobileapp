'use client';

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Search, Info, Wine } from "lucide-react-native"

const WINE_RED = "#722F37"
const CHARCOAL = "#2D2D2D"
const CHARCOAL_LIGHT = "#3D3D3D"

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Search</Text>
          <TouchableOpacity style={styles.infoButton}>
            <Info size={22} color="#737373" />
          </TouchableOpacity>
        </View>

        {/* Search input */}
        <View style={styles.searchContainer}>
          <Search size={18} color="#737373" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search any wine..."
            placeholderTextColor="#737373"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Pro CTA Card */}
        <View style={styles.proCard}>
          <Text style={styles.proLabel}>PRO ACCESS</Text>
          <Text style={styles.proTitle}>Search any wine</Text>
          <Text style={styles.proDescription}>Access our database of 50,000+ wines with retail pricing and markup analysis.</Text>
          <TouchableOpacity style={styles.proButton}>
            <Text style={styles.proButtonText}>UPGRADE TO PRO</Text>
          </TouchableOpacity>
        </View>

        {/* Features list */}
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>Pro includes:</Text>
          <View style={styles.featureRow}>
            <Wine size={16} color={WINE_RED} />
            <Text style={styles.featureText}>Unlimited wine searches</Text>
          </View>
          <View style={styles.featureRow}>
            <Wine size={16} color={WINE_RED} />
            <Text style={styles.featureText}>Historical price tracking</Text>
          </View>
          <View style={styles.featureRow}>
            <Wine size={16} color={WINE_RED} />
            <Text style={styles.featureText}>Restaurant markup database</Text>
          </View>
          <View style={styles.featureRow}>
            <Wine size={16} color={WINE_RED} />
            <Text style={styles.featureText}>Personalized recommendations</Text>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CHARCOAL,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  infoButton: {
    padding: 4,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: CHARCOAL_LIGHT,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 10,
  },
  proCard: {
    marginHorizontal: 20,
    backgroundColor: CHARCOAL_LIGHT,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
  },
  proLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: WINE_RED,
    letterSpacing: 1,
    marginBottom: 8,
  },
  proTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
    textAlign: "center",
  },
  proDescription: {
    fontSize: 14,
    color: "#A3A3A3",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
  },
  proButton: {
    backgroundColor: WINE_RED,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 10,
  },
  proButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  featuresContainer: {
    marginHorizontal: 20,
    marginTop: 32,
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 16,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
  },
  featureText: {
    fontSize: 15,
    color: "#D4D4D4",
  },
})
