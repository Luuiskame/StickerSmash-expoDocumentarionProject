import { Pressable, StyleSheet, Text } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons'


const Iconbutton = ({icon, label, onPress})=>{
    return(
        <Pressable style={StyleSheet.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color='#fff'/>
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    )
}

export default Iconbutton

const styles = StyleSheet.create({
    iconButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconButtonLabel: {
      color: '#fff',
      marginTop: 12,
    },
  });