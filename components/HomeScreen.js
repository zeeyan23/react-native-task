import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import Truck_Image_URL from '../assets/truck.png'
import Cabel_Image_URL from '../assets/cable.png'
import { LinearGradient } from 'expo-linear-gradient';

import inspections_image from '../assets/inspections.png';
import load_containers_image from '../assets/load containers.png'
import load_image from '../assets/load.png'
import sales_image from '../assets/sales.png'
import messages_image from '../assets/messages.png'

function HomeScreen() {
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = (screenWidth - 50) / 2;

    const data = [
        { imageUri: sales_image, title: 'Sales Plan' },
        { imageUri: load_image, title: 'Load Inventory' },
        { imageUri: load_containers_image, title: 'Load Containers' },
        { imageUri: inspections_image, title: 'Inspections' },
        { imageUri: messages_image, title: 'Message Board' },
    ];

    const renderItem = ({ item }) => (
        <View style={[styles.gridItem, { width: itemWidth }]}>
            <Image source={item.imageUri} style={styles.gridImage} resizeMode="contain" />
            <Text style={styles.gridTitle}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.mainContainer}>
            <LinearGradient colors={['#0560FD', '#0A46AC'] } start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.infoDeliverInfoCont}>
            
                <Text style={styles.userName}>Hi Mohammed Kanjou</Text>
                <Text style={styles.subtitle}>We are ready to deliver</Text>
                <View style={styles.cardRow}>
                    <View style={styles.viewCardDesign}>
                        <Image source={Truck_Image_URL} style={styles.iconImage} />
                        <Text style={styles.cardText}>VIC 380</Text>
                    </View>
                    <View style={{ width: 20 }} />
                    <View style={styles.viewCardDesign}>
                        <Image source={Cabel_Image_URL} style={styles.iconImage} />
                        <Text style={styles.cardText}>VIC 380</Text>
                    </View>
                </View>
            </LinearGradient>
            <View style={styles.tripTaskCont}>
                <Text style={styles.sectionTitle}>Pre Trip Tasks</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 15 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F9F9FB',
    },
    infoDeliverInfoCont: {
       // backgroundColor: '#2959C4',
        padding: 20,
        margin: 20,
        borderRadius: 12,
    },
    userName: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    subtitle: {
        color: 'white',
        marginTop: 8,
        fontSize: 15,
    },
    cardRow: {
        flexDirection: 'row',
        marginTop: 20,
    },
    viewCardDesign: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent:"center",
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    iconImage: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
    cardText: {
        color: 'black',
        marginLeft: 10,
        fontWeight: '500',
    },
    tripTaskCont: {
        flex: 1,
        marginHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1C1C1E',
        marginBottom: 10,
    },
    gridItem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 15,
        alignItems: 'center',
        borderWidth:1,
        borderColor:"#E8E9F1",
    },
    gridImage: {
        width: 48,
        height: 48,
    },
    gridTitle: {
        marginTop: 12,
        color: '#1C1C1E',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
});
export default HomeScreen;