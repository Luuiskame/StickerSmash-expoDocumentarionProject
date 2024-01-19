import { StyleSheet, Image } from "react-native";

const ImageViewer = ({placeHolderImageSrc})=>{
    return(
        <Image source={placeHolderImageSrc} style={styles.image}/>
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