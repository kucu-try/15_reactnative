import { ScrollView } from "react-native"


const ScrollViewComponent = ({childen}) =>{
    // 렌더링할 개수 조절 
    return (
        <ScrollView>
            {childen}
        </ScrollView>
    )
}

export default ScrollViewComponent;