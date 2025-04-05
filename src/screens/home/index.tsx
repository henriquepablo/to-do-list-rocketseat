import { FlatList, View } from "react-native";
import { theme } from "../../styles";
import Header from "../../components/header";
import { Container, ContainerQuantity, ContainerText, HorizontalInput, HorizontalQuantity, TextCreated, TextFinished, TextQuantity } from "./style";
import Input from "../../components/input";
import Button from "../../components/button";
import { useState } from "react";
import ListEmpty from "../../components/listEmpty";


function Home() {

    const [ focused, setFocused ] = useState<boolean>(false);

    return(
        <Container>
            <Header />

            <HorizontalInput>
                <Input placeholder="Adicione uma nova tarefa" placeholderTextColor={ theme.colors.gray_300 } focusable={focused} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}/>
                <Button />
            </HorizontalInput>

            <HorizontalQuantity>
                <ContainerText>
                    <TextCreated>
                        Criadas
                    </TextCreated>
                    <ContainerQuantity>
                        <TextQuantity>
                            0
                        </TextQuantity>
                    </ContainerQuantity>
                </ContainerText>

                <ContainerText>
                    <TextFinished>
                        Concluídas
                    </TextFinished>                
                    <ContainerQuantity>
                        <TextQuantity>
                            0
                        </TextQuantity>
                        </ContainerQuantity>
                </ContainerText>
            </HorizontalQuantity>

            <FlatList 
                data={[]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={() => null}
                ListEmptyComponent={ <ListEmpty /> }
            />
        </Container>
    )
}

export default Home;