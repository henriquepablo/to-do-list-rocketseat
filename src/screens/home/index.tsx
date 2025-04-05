import { Alert, FlatList, View } from "react-native";
import { theme } from "../../styles";
import Header from "../../components/header";
import { Container, ContainerQuantity, ContainerText, HorizontalInput, HorizontalQuantity, TextCreated, TextFinished, TextQuantity } from "./style";
import Input from "../../components/input";
import Button from "../../components/button";
import { useEffect, useState } from "react";
import ListEmpty from "../../components/listEmpty";
import Card from "../../components/card";


function Home() {

    const [ focused, setFocused ] = useState<boolean>(false);

    const [ toDoList, setToDoList ] = useState<string[]>([]);

    const [ text, setText ] = useState<string>('');

    const addToDoInList = () => {
        if (text === '') return Alert.alert('Tarefa', 'Adicione uma tarfe válida');

        setToDoList(prevState => [...prevState, text]);

        updateInput();
    }

    const updateInput = () => {
        setText('');
    }

    return(
        <Container>
            <Header />

            <HorizontalInput>
                <Input 
                    placeholder="Adicione uma nova tarefa" 
                    placeholderTextColor={ theme.colors.gray_300 } 
                    focusable={focused} onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChangeText={(value) => setText(value)}    
                    value={text}
                />
                <Button onPress={addToDoInList}/>
            </HorizontalInput>

            <HorizontalQuantity>
                <ContainerText>
                    <TextCreated>
                        Criadas
                    </TextCreated>
                    <ContainerQuantity>
                        <TextQuantity>
                            { toDoList.length }
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
                data={toDoList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={() => <Card />}
                ListEmptyComponent={ <ListEmpty /> }
            />
        </Container>
    )
}

export default Home;