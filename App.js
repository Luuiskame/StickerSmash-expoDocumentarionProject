import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const backgroundImage = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <ImageViewer placeHolderImageSrc={backgroundImage}/>
      </View>

      <View style={styles.footerContainer}>
        <Button theme='primary' label="Choose a photo"/>
        <Button label='Use this photo'/>
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
    gap: '3rem'
  },
  imageContainer: {
    width: '90%',
    maxWidth: 540,
    margin: 0,
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
