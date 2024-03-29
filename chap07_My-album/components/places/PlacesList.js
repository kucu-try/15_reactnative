import { useNavigation } from "@react-navigation/native"
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../model/Color";
import PlaceItem from "./PlaceItem";


const PlacesList = ({places}) =>{

    const navigation = useNavigation();

    const selectPlaceHandler = (id) =>{
        navigation.navigate("PlaceDetails", {
            placeId : id
        });
    }
    if(!places || places.length === 0){
        return(
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>등록된 위치 정보가 없습니다.</Text>
            </View>
        )
    }

    return(
        <FlatList
            style={styles.list}
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <PlaceItem place={item} onSelect = {selectPlaceHandler}/>}
        />
    )

}

export default PlacesList;

const styles = StyleSheet.create({
    list:{
        margin:24
    },
    fallbackContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    fallbackText:{
        fontSize:16,
        color: Colors.primary200
    }
});