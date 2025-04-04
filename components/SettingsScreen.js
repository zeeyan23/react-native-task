import { StyleSheet, Text, View } from "react-native";

function SettingsScreen(){
    return(
        <View style={styles.container}>
            <Text>Setting screen</Text>
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
export default SettingsScreen;