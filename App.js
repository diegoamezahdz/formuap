import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import image from './assets/mu4.png';

export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.subtitule}>Ingresa los datos de tu rancho</Text>

      <Image
        source={image}
        style={styles.image}
      />

      <TextInput
        placeholder="Nombre de la finca"
        style={styles.textInput}
      />
      
      <TextInput
        placeholder='Tipo de proposito'
        style={styles.textInput}
      />
      <View style={{ flexDirection: 'row', width: '47.6%', justifyContent: 'center' }}>
        <TextInput
          placeholder='Producción'
          style={styles.textInput}
        />

        <TextInput
          placeholder='Proposito'
          style={styles.textInput}
        />
      </View>

      <TextInput
        placeholder='Espacio del terreno'
        style={styles.textInput}
      />

      <TouchableOpacity
        style={styles.buttont}>

        <Text style={styles.textButton}>Selecciona una imagen</Text>
      </TouchableOpacity>

      <Text style={styles.subtitule2}>Ubicación</Text>

      <View style={{ flexDirection: 'row', width: '47.6%', justifyContent: 'center' }}>
        <TextInput
          placeholder='Pais'
          style={styles.textInput}
        />

        <TextInput
          placeholder='Estado'
          style={styles.textInput}
        />
      </View>

      <View style={{ flexDirection: 'row', width: '47.6%', justifyContent: 'center' }}>
        <TextInput
          placeholder='Municipio'
          style={styles.textInput}
        />

        <TextInput
          placeholder='Codigo Postal'
          style={styles.textInput}
        />
      </View>

      <TextInput
        placeholder='Geolocalización'
        style={styles.textInput}
      />



      <TouchableOpacity
        style={styles.button}>

        <Text style={styles.textButton}>Crear Finca</Text>
      </TouchableOpacity>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f9dcb7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 70,
    color: '#000',
    fontWeight: 'bold',
  },

  subtitule: {
    fontSize: 20,
    color: '#c79556',
  },

  subtitule2: {
    fontSize: 18,
    color: '#c79556',
    paddingEnd: 210,
    paddingTop: 10,

  },

  textInput: {
    padding: 10,
    paddingStart: 30,
    borderColor: '#936037',
    borderWidth: 1,
    width: '80%',
    height: 40,
    marginTop: 15,
    marginRight:'4%',
    marginLeft:'4%',
    borderRadius: 4,
    // backgroundColor: '#f9dcb7',
  },

  image: {
    height: 100,
    width: 100,
  },

  button: {
    backgroundColor: "#c79556",
    padding: 7,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 4,
    width: '80%',

  },

  buttont: {
    backgroundColor: "#785a35",
    padding: 5,
    marginTop: 10,
    borderRadius: 4,
    width: '45%',
  },

  textButton: {
    textAlign: 'center',
    color: 'white'
  },
});
