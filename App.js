import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

//? components
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import CircleButton from './components/CircleButton';
import Iconbutton from './components/IconButton';
import EmojiPicker from './components/EmojiPicker';

/// defult image
const backgroundImage = require('./assets/images/background-image.png')

// react
import { useState } from 'react';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [showAppOptions, setShowAppOptions] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const pickImageAsync = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
      console.log(result)
    } else {
      alert('YOU DID NOT SELECT AN IMAGE')
    }
  }

  const onReset = ()=>{
    setShowAppOptions(false)
  }

  const onAddSticker = ()=>{
    setIsModalVisible(true)

  }

  const onModalClose = ()=>{
    setIsModalVisible(false)
  }

  const onSaveImageAsync = async()=>{
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <ImageViewer placeHolderImageSrc={backgroundImage}
      selectedImage={selectedImage}
      />
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        
      </EmojiPicker>
      </View>
      
      {showAppOptions ? (
        <View style={styles.optionsContainer}> 
          <View style={styles.optionsRow}>
            <Iconbutton icon='refresh' label='Reset' onPress={onReset}/>
            <CircleButton onPress={onAddSticker}/>
            <Iconbutton icon='save-alt' label='Save' onPress={onSaveImageAsync}/>
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
        <Button theme='primary' label="Choose a photo" onPress={pickImageAsync}/>
        <Button label='Use this photo' onPress={()=> setShowAppOptions(true)}/>
      </View>
      )}
      
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
