'use client';

import { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ChevronRight, Lock, Wine, Grape } from "lucide-react-native"

const WINE_RED = "#722F37"
const CHARCOAL = "#2D2D2D"
const CHARCOAL_LIGHT = "#3D3D3D"

interface WineCategory {
  id: string
  name: string
  icon: "red" | "white"
  locked: boolean
}

const redWines: WineCategory[] = [
  { id: "1", name: "Cabernet Sauvignon", icon: "red", locked: false },
  { id: "2", name: "Pinot Noir", icon: "red", locked: false },
  { id: "3", name: "Merlot", icon: "red", locked: false },
  { id: "4", name: "Malbec", icon: "red", locked: true },
  { id: "5", name: "Syrah / Shiraz", icon: "red", locked: true },
  { id: "6", name: "Zinfandel", icon: "red", locked: true },
  { id: "7", name: "Sangiovese", icon: "red", locked: true },
  { id: "8", name: "Tempranillo", icon: "red", locked: true },
]

const whiteWines: WineCategory[] = [
  { id: "1", name: "Chardonnay", icon: "white", locked: false },
  { id: "2", name: "Sauvignon Blanc", icon: "white", locked: false },
  { id: "3", name: "Pinot Grigio", icon: "white", locked: false },
  { id: "4", name: "Riesling", icon: "white", locked: true },
  { id: "5", name: "Moscato", icon: "white", locked: true },
  { id: "6", name: "Viognier", icon: "white", locked: true },
  { id: "7", name: "Gruner Veltliner", icon: "white", locked: true },
]

export default function TopWinesScreen() {
  const [activeTab, setActiveTab] = useState<"red" | "white">("red")
  const wines = activeTab === "red" ? redWines : whiteWines

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Top Wines</Text>

      {/* Tab switcher */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "red" && styles.tabActive]}
          onPress={() => setActiveTab("red")}
        >
          <Text style={[styles.tabText, activeTab === "red" && styles.tabTextActive]}>Red</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "white" && styles.tabActive]}
          onPress={() => setActiveTab("white")}
        >
          <Text style={[styles.tabText, activeTab === "white" && styles.tabTextActive]}>White</Text>
        </TouchableOpacity>
      </View>

      {/* Upgrade banner */}
      <TouchableOpacity style={styles.upgradeBanner}>
        <View style={styles.upgradeIcon}>
          <Wine size={20} color={WINE_RED} />
        </View>
        <Text style={styles.upgradeText}>Upgrade to Pro for full varietal access</Text>
        <ChevronRight size={18} color="#737373" />
      </TouchableOpacity>

      {/* Wine list */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.listCard}>
          {wines.map((wine, index) => (
            <TouchableOpacity
              key={wine.id}
              style={[styles.wineRow, index === wines.length - 1 && styles.wineRowLast]}
              disabled={wine.locked}
            >
              <View style={styles.wineIcon}>
                {wine.icon === "red" ? (
                  <Wine size={20} color={wine.locked ? "#525252" : WINE_RED} />
                ) : (
                  <Grape size={20} color={wine.locked ? "#525252" : "#F5D742"} />
                )}
              </View>
              <Text style={[styles.wineName, wine.locked && styles.wineNameLocked]}>{wine.name}</Text>
              {wine.locked ? (
                <Lock size={16} color="#525252" />
              ) : (
                <ChevronRight size={18} color="#737373" />
              )}
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CHARCOAL,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
  },
  tabContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    backgroundColor: CHARCOAL_LIGHT,
    borderRadius: 10,
    padding: 4,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  tabActive: {
    backgroundColor: CHARCOAL,
  },
  tabText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#737373",
  },
  tabTextActive: {
    color: "#FFFFFF",
  },
  upgradeBanner: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: CHARCOAL_LIGHT,
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },
  upgradeIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(114, 47, 55, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  upgradeText: {
    flex: 1,
    fontSize: 14,
    color: "#D4D4D4",
  },
  scrollView: {
    flex: 1,
  },
  listCard: {
    marginHorizontal: 20,
    backgroundColor: CHARCOAL_LIGHT,
    borderRadius: 12,
    overflow: "hidden",
  },
  wineRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#4D4D4D",
  },
  wineRowLast: {
    borderBottomWidth: 0,
  },
  wineIcon: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  wineName: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  wineNameLocked: {
    color: "#525252",
  },
  bottomSpacer: {
    height: 20,
  },
})
