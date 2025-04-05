import { View } from "react-native";
import { theme } from "../../styles";
import Header from "../../components/header";
import { Container } from "./style";
import Input from "../../components/input";


function Home() {

    return(
        <Container>
            <Header />

            <Input />
        </Container>
    )
}

export default Home;