'use client';

import { useState, useRef, useEffect } from "react"
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native"
import { CameraView, useCameraPermissions } from "expo-camera"
import { SafeAreaView } from "react-native-safe-area-context"
import { Flashlight, Volume2 } from "lucide-react-native"

const WINE_RED = "#722F37"
const CHARCOAL = "#2D2D2D"
const { width, height } = Dimensions.get("window")

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions()
  const [flashEnabled, setFlashEnabled] = useState(false)
  const [isScanning, setIsScanning] = useState(true)

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>Requesting camera permission...</Text>
      </View>
    )
  }

  if (!permission.granted) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionTitle}>Camera Access Needed</Text>
          <Text style={styles.permissionText}>
            VinoCheck needs camera access to scan wine menus and bottles for price analysis.
          </Text>
          <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
            <Text style={styles.permissionButtonText}>Enable Camera</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing="back" enableTorch={flashEnabled}>
        <SafeAreaView style={styles.overlay}>
          {/* Top controls */}
          <View style={styles.topControls}>
            <TouchableOpacity
              style={[styles.controlButton, flashEnabled && styles.controlButtonActive]}
              onPress={() => setFlashEnabled(!flashEnabled)}
            >
              <Flashlight size={24} color={flashEnabled ? WINE_RED : "#FFFFFF"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
              <Volume2 size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* Scan frame */}
          <View style={styles.scanFrameContainer}>
            <View style={styles.scanFrame}>
              {/* Corner brackets */}
              <View style={[styles.corner, styles.topLeft]} />
              <View style={[styles.corner, styles.topRight]} />
              <View style={[styles.corner, styles.bottomLeft]} />
              <View style={[styles.corner, styles.bottomRight]} />
            </View>
          </View>

          {/* Instructions */}
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructionTitle}>Scan Wine Menu or Bottle</Text>
            <Text style={styles.instructionText}>
              Point camera at the wine list or bottle label to analyze pricing
            </Text>
          </View>
        </SafeAreaView>
      </CameraView>
    </View>
  )
}

const FRAME_SIZE = width * 0.75
const CORNER_SIZE = 40
const CORNER_THICKNESS = 4

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
  },
  topControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  controlButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  controlButtonActive: {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  scanFrameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scanFrame: {
    width: FRAME_SIZE,
    height: FRAME_SIZE * 1.2,
    position: "relative",
  },
  corner: {
    position: "absolute",
    width: CORNER_SIZE,
    height: CORNER_SIZE,
    borderColor: "#FFFFFF",
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: CORNER_THICKNESS,
    borderLeftWidth: CORNER_THICKNESS,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: CORNER_THICKNESS,
    borderRightWidth: CORNER_THICKNESS,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: CORNER_THICKNESS,
    borderLeftWidth: CORNER_THICKNESS,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: CORNER_THICKNESS,
    borderRightWidth: CORNER_THICKNESS,
  },
  instructionsContainer: {
    alignItems: "center",
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  instructionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 8,
    textAlign: "center",
  },
  instructionText: {
    fontSize: 14,
    color: "rgba(255,255,255,0.7)",
    textAlign: "center",
  },
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  permissionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 12,
    textAlign: "center",
  },
  permissionText: {
    fontSize: 16,
    color: "#A3A3A3",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 22,
  },
  permissionButton: {
    backgroundColor: WINE_RED,
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
  },
  permissionButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
})
