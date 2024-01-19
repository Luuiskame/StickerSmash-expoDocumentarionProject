import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import ImageViewer from './components/ImageViewer';

const backgroundImage = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <ImageViewer placeHolderImageSrc={backgroundImage}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25922e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '90%',
    maxWidth: 540,
    margin: 0,
    flex: 1,
    paddingTop: 58,
  },
});
