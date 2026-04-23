import { StyleSheet, ScrollView, View, Text, Image, Button, Linking} from 'react-native';
import { SafeAreaView } from 'react-native/types_generated/index';

export default function Presentacion() {

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
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.tarjeta}>
            <Text style={styles.text}>Soy Cio</Text>

            <Image
              source={require("../assets/cio.jpg")}
              style={styles.image}
            />
          
            <View style={styles.buttonContainer}>
              <Button
                onPress={enviar}
                color="#000000"
                title="Mi Instagram"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderWidth: 10,
    borderColor: '#fff',
    margin: 10,
    borderRadius: 15,
  },

  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: 'cover',
    marginBottom: 20,
  },

  buttonContainer: {
    borderWidth: 2,
    borderColor: '#888',
    borderRadius: 10,
    marginTop: 10
  },
  tarjeta: {
  backgroundColor: '#111',
  borderWidth: 1.5,
  borderColor: '#fff',
  borderRadius: 20,

  padding: 20,
  alignItems: 'center',

  elevation: 10,

 
}
})