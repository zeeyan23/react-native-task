import { StyleSheet, Text, View } from "react-native";

function HistoryScreen(){
    return(
        <View style={styles.container}>
            <Text>History screen</Text>
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
export default HistoryScreen;