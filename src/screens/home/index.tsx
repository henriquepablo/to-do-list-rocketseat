import { View } from "react-native";
import { theme } from "../../styles";
import Header from "../../components/header";
import { Container, HorizontalInput } from "./style";
import Input from "../../components/input";
import Button from "../../components/button";


function Home() {

    return(
        <Container>
            <Header />

            <HorizontalInput>
                <Input placeholder="Adicione uma nova tarefa" placeholderTextColor={ theme.colors.gray_300 }/>
                <Button />
            </HorizontalInput>
        </Container>
    )
}

export default Home;