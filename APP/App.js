import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  var requestOptions = {
   
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://localhost:3000/posts", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Mundo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(to bottom, white 60%, black 100%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30
  }
});
