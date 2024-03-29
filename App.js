// users permission 
import * as MediaLibrary from 'expo-media-library'

//take a screenshot library: provies a method called captureRef() that captures a screenshot fo a <View> in the app and returns the URI of the screeenshot image file
import { captureRef } from 'react-native-view-shot';

//! those libraries work only with Android and IOS


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

//? components
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import CircleButton from './components/CircleButton';
import Iconbutton from './components/IconButton';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';

/// defult image
const backgroundImage = require('./assets/images/background-image.png')

// react
import { useState, useRef } from 'react';

export default function App() {
  //permissions
  const [status, resquestPermission] = MediaLibrary.usePermissions()

  if(!status){
    resquestPermission()
  }

  //use ref hook for refering where is the image when taking a screenshot
  const imageRef = useRef()

  const [pickedEmoji, setPickedEmoji] = useState(null)
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
    console.log("hola")
    setIsModalVisible(true)

  }

  const onModalClose = ()=>{
    setIsModalVisible(false)
  }

  const onSaveImageAsync = async()=>{
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri)
      if(localUri){
        alert("Saved!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}> {/* The collapsable prop is set to false in the above snippet because this <View> component is used to take a screenshot of the background image and the emoji sticker. The rest of the contents of the app screen (such as buttons) are not part of the screenshot. */}
      <ImageViewer placeHolderImageSrc={backgroundImage}
        selectedImage={selectedImage}
        />
        </View>
      
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
      </EmojiPicker>

      {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/>}
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
    </GestureHandlerRootView>
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
