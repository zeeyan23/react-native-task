import { StyleSheet, Text, View } from "react-native";

function CameraScreen(){
    return(
        <View style={styles.container}>
            <Text>Camera screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default CameraScreen;