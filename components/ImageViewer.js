import { StyleSheet, Image } from "react-native";

const ImageViewer = ({placeHolderImageSrc, selectedImage})=>{
    const imageSource = selectedImage ? {uri: selectedImage} : placeHolderImageSrc
    return(
        <Image source={imageSource} style={styles.image}/>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 440,
        borderRadius: 18,
    }
})

export default ImageViewer