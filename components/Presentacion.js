import React, { useState } from "react";
import {StyleSheet,ScrollView,View,Text,Image,Linking,Pressable,} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Presentacion() {
  const [presionado, setPresionado] = useState(false);

  const enviar = async () => {
    const url = "https://www.instagram.com/ciomara_83/";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("No se puede abrir el link");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.tarjeta}>
            <Text style={styles.text}>Soy Cio</Text>

            <Image
              source={require("../assets/cio.jpg")}
              style={styles.image}
            />

            <Pressable
              onPress={enviar}
              onPressIn={() => setPresionado(true)}
              onPressOut={() => setPresionado(false)}
              hitSlop={20}
              style={({ pressed }) => [
                styles.boton,
                pressed && styles.botonPresionado,
              ]}
            >
              <Text style={styles.texto}>
                {presionado ? "Presionando..." : "Mi Instagram"}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderWidth: 10,
    borderColor: "#fff",
    margin: 10,
    borderRadius: 15,
    padding: 20,
  },

  text: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: "cover",
    marginBottom: 20,
  },

  tarjeta: {
    backgroundColor: "#111",
    borderWidth: 1.5,
    borderColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 10,
  },

  boton: {
    backgroundColor: "#b57edc",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  
  botonPresionado: {
    backgroundColor: "#2ecc71", 
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },

  texto: {
    color: "#fff",
    fontSize: 16,
  },
});