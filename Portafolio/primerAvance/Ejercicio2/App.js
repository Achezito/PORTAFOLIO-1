import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


const third_image = "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/11/mew-4258429.jpg?tf=1200x";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Source: local image </Text>
      <Image style={styles.image} source={require('./assets/emil.webp')}/>
      <Text  style={styles.title}>Source: Third image</Text>
      <Image style={styles.image} source={{uri: third_image}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  image: {
    width:350,
    height: 250,
    marginBottom: 30,
    borderRadius: 10,
  }
});

