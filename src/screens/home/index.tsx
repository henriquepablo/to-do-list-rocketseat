import { View } from "react-native";
import { theme } from "../../styles";
import Header from "../../components/header";
import { Container, HorizontalInput } from "./style";
import Input from "../../components/input";
import Button from "../../components/button";
import { useState } from "react";


function Home() {

    const [ focused, setFocused ] = useState<boolean>(false);

    return(
        <Container>
            <Header />

            <HorizontalInput>
                <Input placeholder="Adicione uma nova tarefa" placeholderTextColor={ theme.colors.gray_300 } focusable={focused} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}/>
                <Button />
            </HorizontalInput>
        </Container>
    )
}

export default Home;