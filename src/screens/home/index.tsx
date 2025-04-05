import { View } from "react-native";
import { theme } from "../../styles";
import Header from "../../components/header";


function Home() {

    return(
        <View style={{flex: 1, backgroundColor: theme.colors.gray_600}}>
            <Header />
        </View>
    )
}

export default Home;