import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Sparkles, ChevronRight, TrendingDown } from "lucide-react-native"

const WINE_RED = "#722F37"
const CHARCOAL = "#2D2D2D"
const CHARCOAL_LIGHT = "#3D3D3D"

interface WineRec {
  id: string
  name: string
  producer: string
  image: string
  retailPrice: number
  typicalMarkup: number
  bestFor: string
}

const mockRecs: WineRec[] = [
  {
    id: "1",
    name: "Gruner Veltliner",
    producer: "Nikolaihof",
    image: "https://via.placeholder.com/80x100/722F37/FFFFFF?text=Wine",
    retailPrice: 18,
    typicalMarkup: 45,
    bestFor: "Seafood dinners",
  },
  {
    id: "2",
    name: "Malbec Reserva",
    producer: "Catena Zapata",
    image: "https://via.placeholder.com/80x100/722F37/FFFFFF?text=Wine",
    retailPrice: 22,
    typicalMarkup: 55,
    bestFor: "Steakhouses",
  },
  {
    id: "3",
    name: "Albarino",
    producer: "Martin Codax",
    image: "https://via.placeholder.com/80x100/722F37/FFFFFF?text=Wine",
    retailPrice: 15,
    typicalMarkup: 40,
    bestFor: "Tapas & light fare",
  },
]

export default function RecsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Sparkles size={28} color={WINE_RED} />
          <Text style={styles.title}>AI Picks</Text>
        </View>
        <Text style={styles.subtitle}>Smart value recommendations based on your history</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Best Value Wines</Text>
          <Text style={styles.sectionSubtitle}>Lowest typical markups at restaurants</Text>

          {mockRecs.map((wine) => (
            <TouchableOpacity key={wine.id} style={styles.wineCard}>
              <Image source={{ uri: wine.image }} style={styles.wineImage} />
              <View style={styles.wineInfo}>
                <Text style={styles.wineName}>{wine.name}</Text>
                <Text style={styles.wineProducer}>{wine.producer}</Text>
                <View style={styles.statsRow}>
                  <View style={styles.stat}>
                    <Text style={styles.statLabel}>Retail</Text>
                    <Text style={styles.statValue}>${wine.retailPrice}</Text>
                  </View>
                  <View style={styles.stat}>
                    <View style={styles.markupRow}>
                      <TrendingDown size={12} color="#22C55E" />
                      <Text style={styles.statLabel}>Avg Markup</Text>
                    </View>
                    <Text style={[styles.statValue, { color: "#22C55E" }]}>{wine.typicalMarkup}%</Text>
                  </View>
                </View>
                <Text style={styles.bestFor}>Best for: {wine.bestFor}</Text>
              </View>
              <ChevronRight size={20} color="#737373" />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.tipCard}>
          <View style={styles.tipHeader}>
            <Sparkles size={20} color={WINE_RED} />
            <Text style={styles.tipTitle}>Pro Tip</Text>
          </View>
          <Text style={styles.tipText}>
            Portuguese and Austrian wines typically have lower restaurant markups than popular regions like Napa or
            Burgundy.
          </Text>
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
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 4,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 15,
    color: "#A3A3A3",
    marginLeft: 38,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#737373",
    marginBottom: 16,
  },
  wineCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: CHARCOAL_LIGHT,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  wineImage: {
    width: 50,
    height: 70,
    borderRadius: 6,
    backgroundColor: "#4D4D4D",
  },
  wineInfo: {
    flex: 1,
    marginLeft: 12,
  },
  wineName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 2,
  },
  wineProducer: {
    fontSize: 13,
    color: "#A3A3A3",
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 6,
  },
  stat: {},
  statLabel: {
    fontSize: 11,
    color: "#737373",
  },
  statValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  markupRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  bestFor: {
    fontSize: 12,
    color: "#A3A3A3",
    fontStyle: "italic",
  },
  tipCard: {
    margin: 20,
    backgroundColor: CHARCOAL_LIGHT,
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 3,
    borderLeftColor: WINE_RED,
  },
  tipHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  tipText: {
    fontSize: 14,
    color: "#A3A3A3",
    lineHeight: 20,
  },
  bottomSpacer: {
    height: 20,
  },
})
