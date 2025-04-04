import { StyleSheet, Text, View } from "react-native";

function ProductScreen(){
    return(
        <View style={styles.container}>
            <Text>Products screen</Text>
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
export default ProductScreen;