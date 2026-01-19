import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Trash2, Info, ChevronRight, Clock } from "lucide-react-native"

const WINE_RED = "#722F37"
const CHARCOAL = "#2D2D2D"
const CHARCOAL_LIGHT = "#3D3D3D"

type MarkupRating = "great" | "good" | "fair" | "bad"

interface WineItem {
  id: string
  name: string
  producer: string
  image: string
  rating: MarkupRating
  scannedAt: string
  menuPrice: number
  retailPrice: number
  markup: number
}

const mockHistory: WineItem[] = [
  {
    id: "1",
    name: "Caymus Cabernet Sauvignon",
    producer: "Caymus Vineyards",
    image: "https://via.placeholder.com/80x100/722F37/FFFFFF?text=Wine",
    rating: "good",
    scannedAt: "2 days ago",
    menuPrice: 85,
    retailPrice: 45,
    markup: 89,
  },
  {
    id: "2",
    name: "Opus One 2019",
    producer: "Opus One Winery",
    image: "https://via.placeholder.com/80x100/722F37/FFFFFF?text=Wine",
    rating: "bad",
    scannedAt: "1 week ago",
    menuPrice: 650,
    retailPrice: 400,
    markup: 62,
  },
  {
    id: "3",
    name: "Cloudy Bay Sauvignon Blanc",
    producer: "Cloudy Bay",
    image: "https://via.placeholder.com/80x100/722F37/FFFFFF?text=Wine",
    rating: "great",
    scannedAt: "2 weeks ago",
    menuPrice: 52,
    retailPrice: 25,
    markup: 108,
  },
  {
    id: "4",
    name: "Dom Perignon 2012",
    producer: "Moet & Chandon",
    image: "https://via.placeholder.com/80x100/722F37/FFFFFF?text=Wine",
    rating: "fair",
    scannedAt: "3 weeks ago",
    menuPrice: 350,
    retailPrice: 200,
    markup: 75,
  },
  {
    id: "5",
    name: "Whispering Angel Rose",
    producer: "Chateau d'Esclans",
    image: "https://via.placeholder.com/80x100/722F37/FFFFFF?text=Wine",
    rating: "good",
    scannedAt: "1 month ago",
    menuPrice: 65,
    retailPrice: 22,
    markup: 195,
  },
]

const getRatingColor = (rating: MarkupRating) => {
  switch (rating) {
    case "great":
      return "#22C55E"
    case "good":
      return "#22C55E"
    case "fair":
      return "#EAB308"
    case "bad":
      return "#EF4444"
  }
}

const getRatingLabel = (rating: MarkupRating) => {
  switch (rating) {
    case "great":
      return "Great Value"
    case "good":
      return "Good Value"
    case "fair":
      return "Fair"
    case "bad":
      return "Overpriced"
  }
}

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.favoritesText}>Favorites</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Trash2 size={22} color="#737373" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Info size={22} color="#737373" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.title}>History</Text>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {mockHistory.map((wine, index) => (
          <TouchableOpacity key={wine.id} style={styles.wineCard}>
            <Image source={{ uri: wine.image }} style={styles.wineImage} />
            <View style={styles.wineInfo}>
              <Text style={styles.wineName} numberOfLines={1}>
                {wine.name}
              </Text>
              <Text style={styles.wineProducer}>{wine.producer}</Text>
              <View style={styles.ratingRow}>
                <View style={[styles.ratingDot, { backgroundColor: getRatingColor(wine.rating) }]} />
                <Text style={[styles.ratingText, { color: getRatingColor(wine.rating) }]}>
                  {getRatingLabel(wine.rating)}
                </Text>
              </View>
              <View style={styles.timeRow}>
                <Clock size={12} color="#737373" />
                <Text style={styles.timeText}>{wine.scannedAt}</Text>
              </View>
            </View>
            <ChevronRight size={20} color="#737373" />
          </TouchableOpacity>
        ))}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  favoritesText: {
    color: WINE_RED,
    fontSize: 16,
    fontWeight: "500",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
  scrollView: {
    flex: 1,
  },
  wineCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#404040",
  },
  wineImage: {
    width: 60,
    height: 80,
    borderRadius: 8,
    backgroundColor: CHARCOAL_LIGHT,
  },
  wineInfo: {
    flex: 1,
    marginLeft: 16,
  },
  wineName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 2,
  },
  wineProducer: {
    fontSize: 14,
    color: "#A3A3A3",
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
  },
  ratingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: "500",
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  timeText: {
    fontSize: 12,
    color: "#737373",
  },
  bottomSpacer: {
    height: 20,
  },
})
