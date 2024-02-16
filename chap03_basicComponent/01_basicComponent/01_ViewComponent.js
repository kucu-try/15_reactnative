import { View, Text } from "react-native"

const ViewComponent = ({ isTrue, styles }) => {
    if (!isTrue) {
        return <View>
            에러발생
        </View>
    }

    return (
        <View>
            <Text>i'm 썬더 람쥐</Text>
        </View>
    )
}

export default ViewComponent;