import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import image from './assets/mu4.png';
import { Entypo, MaterialIcons, Ionicons, MaterialCommunityIcons, } from '@expo/vector-icons';
export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.subtitule}>Ingresa los datos de tu Finca</Text>

      <Image
        source={image}
        style={styles.image}
      />

      <View style={styles.inputBoxCont}>
        <MaterialIcons name="house-siding" size={24} style={styles.iconStyle} />
        <TextInput style={styles.inputBox} placeholder="Nombre de la finca" />
      </View>

      <View style={{ flexDirection: 'row', width: '47.6%', justifyContent: 'center' }}>
        <View style={styles.inputBoxCont}>
          <MaterialCommunityIcons name="food-steak" size={24} style={styles.iconStyle} />
          <TextInput style={styles.inputBox} placeholder="Propósito" />
        </View>
        <View style={styles.inputBoxCont}>
          <Ionicons name="water" size={24} style={styles.iconStyle} />
          <TextInput style={styles.inputBox} placeholder="Producción" />
        </View>
      </View>
    
      <View style={styles.inputBoxCont}>
        <MaterialCommunityIcons name="social-distance-2-meters" size={24} style={styles.iconStyle} />
        <TextInput style={styles.inputBox} placeholder="Espacio del terreno" />
      </View>

      <TouchableOpacity
        style={styles.buttont}>

        <Text style={styles.textButton}>Selecciona una imagen</Text>
      </TouchableOpacity>

      <View style={styles.textInput}>
      <Entypo name="location" size={24} style={styles.iconStyle} />
        <Text style={styles.subtitule2} >Ubicación</Text>
      </View>


      <View style={{ flexDirection: 'row', width: '47.6%', justifyContent: 'center' }}>
        <View style={styles.inputBoxCont}>
          <TextInput style={styles.inputBox} placeholder="País" />
        </View>
        <View style={styles.inputBoxCont}>
          <TextInput style={styles.inputBox} placeholder="Estado" />
        </View>
      </View>

      <View style={{ flexDirection: 'row', width: '47.6%', justifyContent: 'center' }}>
        <View style={styles.inputBoxCont}>
          <TextInput style={styles.inputBox} placeholder="Municipio" />
        </View>
        <View style={styles.inputBoxCont}>
          <TextInput style={styles.inputBox} placeholder="Código postal" />
        </View>
      </View>

      <View style={styles.inputBoxCont}>
        <TextInput style={styles.inputBox} placeholder="Geolocalización" />
      </View>

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

  // aqui empeza input con icons
  inputBoxCont: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#936037',
    borderRadius: 4,
    width: '90%',
    marginTop: 15,
    paddingHorizontal: 3,
    height: 40,
    marginRight: '4%',
    marginLeft: '4%',

  },
  inputBox: {
    marginHorizontal: 5,
    flex: 1
  },
  iconStyle: {
    color: '#936037'
  },
  // aqui termina inp con icon

  titulo: {
    fontSize: 70,
    color: '#000',
    fontWeight: 'bold',
  },

  subtitule: {
    fontSize: 20,
    color: '#936037',
    paddingBottom: 10,
  },

  subtitule2: {
    fontSize: 18,
    color: '#936037',
    paddingTop: 8,
    flex: 1,
    paddingHorizontal: 5,
  },

  textInput: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    marginTop: 15,
    paddingHorizontal: 3,
    height: 40,
    marginRight: '4%',
    marginLeft: '4%',
    // backgroundColor: '#f9dcb7',
  },

  image: {
    height: 100,
    width: 100,
  },

  button: {
    backgroundColor: "#c79556",
    padding: 7,
    marginTop: 15,
    marginBottom: 20,
    borderRadius: 4,
    width: '90%',

  },

  buttont: {
    backgroundColor: "#785a35",
    padding: 5,
    marginTop: 15,
    borderRadius: 4,
    width: '45%',
  },

  textButton: {
    textAlign: 'center',
    color: 'white'
  },

});
