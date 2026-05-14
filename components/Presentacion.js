import React, { useState } from "react";
import {StyleSheet,ScrollView,View,Text,Image,Linking,Pressable,Modal,} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Presentacion() {
  const [mostrarFotos, setMostrarFotos] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [modoOscuro, setModoOscuro] = useState(true);

  const [pressInstagram, setPressInstagram] = useState(false);
  const [pressFotos, setPressFotos] = useState(false);

  const enviar = async () => {
    const url = "https://www.instagram.com/ciomara_83/";
    const supported = await Linking.canOpenURL(url);
    if (supported) await Linking.openURL(url);
  };

  const fotos = [
    { img: require("../assets/cio2.jpg"), emoji: "🤍" },
    { img: require("../assets/cio3.jpg"), emoji: "✨" },
    { img: require("../assets/cio4.jpg"), emoji: "❤️" },
    { img: require("../assets/cio5.jpg"), emoji: "🌸" },
    { img: require("../assets/cio6.jpg"), emoji: "🔆" },
    { img: require("../assets/cio7.jpg"), emoji: "🌊" },
  ];

  const tema = {
    fondo: modoOscuro ? "#000" : "#f2f2f2",
    tarjeta: modoOscuro ? "#111" : "#fff",
    texto: modoOscuro ? "#fff" : "#000",
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: tema.fondo }]}>
      
      <View style={styles.header}>
        <Pressable onPress={() => setMenuOpen(!menuOpen)}>
          <Text style={styles.menuText}>☰</Text>
        </Pressable>

        {menuOpen && (
          <View style={styles.menu}>
            <Text style={styles.menuTitle}>Configuración</Text>

            <Pressable
              onPress={() => setModoOscuro(!modoOscuro)}
              style={styles.menuItem}
            >
              <Text style={styles.menuItemText}>
                {modoOscuro ? "Modo claro ☀️" : "Modo oscuro 🌙"}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => setMenuOpen(false)}
              style={styles.menuItem}
            >
              <Text style={styles.menuItemText}>Cerrar</Text>
            </Pressable>
          </View>
        )}
      </View>

      
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <View style={[styles.tarjeta, { backgroundColor: tema.tarjeta }]}>
            
            <Text style={[styles.text, { color: tema.texto }]}>
              Soy Cio
            </Text>

            <Image
              source={require("../assets/cio.jpg")}
              style={styles.image}
            />

            
            <Pressable
              onPress={enviar}
              onPressIn={() => setPressInstagram(true)}
              onPressOut={() => setPressInstagram(false)}
              style={[
                styles.boton,
                pressInstagram && styles.botonBordo,
              ]}
            >
              <Text style={styles.texto}>
                {pressInstagram ? "Presionado" : "Instagram"}
              </Text>
            </Pressable>

            
            <Pressable
              onPress={() => setMostrarFotos(!mostrarFotos)}
              onPressIn={() => setPressFotos(true)}
              onPressOut={() => setPressFotos(false)}
              style={[
                styles.botonFotos,
                pressFotos && styles.botonBordo,
              ]}
            >
              <Text style={styles.texto}>
                {pressFotos
                  ? "Presionado"
                  : mostrarFotos
                  ? "Ocultar Fotos"
                  : "Mis Fotos"}
              </Text>
            </Pressable>

            
            {mostrarFotos && (
              <View style={styles.galeria}>
                {fotos.map((foto, index) => (
                  <Pressable
                    key={index}
                    onPress={() => {
                      setFotoSeleccionada(foto);
                      setModalVisible(true);
                    }}
                    style={({ pressed }) => [
                      styles.cuadrado,
                      {
                        transform: [{ scale: pressed ? 0.97 : 1 }],
                        opacity: pressed ? 0.85 : 1,
                      },
                    ]}
                  >
                    <Image source={foto.img} style={styles.fotoGaleria} />
                  </Pressable>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <Pressable
            style={styles.cerrar}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textoCerrar}>X</Text>
          </Pressable>

          <Image source={fotoSeleccionada?.img} style={styles.fotoGrande} />

          <Text style={styles.emoji}>
            {fotoSeleccionada?.emoji}
          </Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  header: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 100,
  },

  menuText: {
    fontSize: 30,
    color: "#fff",
  },

  menu: {
    marginTop: 10,
    backgroundColor: "#222",
    padding: 12,
    borderRadius: 10,
  },

  menuTitle: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },

  menuItem: {
    paddingVertical: 6,
  },

  menuItemText: {
    color: "#fff",
  },

  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },

  tarjeta: {
    borderRadius: 20,
    padding: 20,
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
  },

  text: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
  },

  image: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginBottom: 20,
  },

  boton: {
    backgroundColor: "#b57edc",
    padding: 14,
    borderRadius: 10,
    width: 220,
    marginBottom: 15,
    alignItems: "center",
  },

  botonFotos: {
    backgroundColor: "#3498db",
    padding: 14,
    borderRadius: 10,
    width: 220,
    marginBottom: 20,
    alignItems: "center",
  },

  botonBordo: {
    backgroundColor: "#6b0f1a",
  },

  texto: {
    color: "#fff",
    fontWeight: "bold",
  },

  galeria: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },

  cuadrado: {
    width: "48%",
    aspectRatio: 1,
    marginBottom: 12,
    borderRadius: 18,
    overflow: "hidden",
  },

  fotoGaleria: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.95)",
    justifyContent: "center",
    alignItems: "center",
  },

  fotoGrande: {
    width: "90%",
    height: "70%",
    resizeMode: "contain",
  },

  cerrar: {
    position: "absolute",
    top: 60,
    right: 30,
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  textoCerrar: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },

  emoji: {
    fontSize: 40,
    marginTop: 15,
    color: "#fff",
  },
});