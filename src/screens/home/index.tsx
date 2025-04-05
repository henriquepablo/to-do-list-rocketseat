import { Alert, FlatList } from "react-native";
import { theme } from "../../styles";
import Header from "../../components/header";
import { Container, ContainerQuantity, ContainerText, HorizontalInput, HorizontalQuantity, TextCreated, TextFinished, TextQuantity } from "./style";
import Input from "../../components/input";
import Button from "../../components/button";
import { useState } from "react";
import ListEmpty from "../../components/listEmpty";
import Card from "../../components/card";


type ToDoListProps = {
    text: string;
    completed: boolean;
}

function Home() {

    const [ focused, setFocused ] = useState<boolean>(false);

    const [ toDoList, setToDoList ] = useState<ToDoListProps[]>([]);

    const [ count, setCount ] = useState<number>(0);

    const [ text, setText ] = useState<string>('');

    const addToDoInList = () => {
        if (text === '') return Alert.alert('Tarefa', 'Adicione uma tarfe válida');

        setToDoList(prevState => [...prevState, { text, completed: false }]);

        updateInput();
    }

    const deleteToDo = (index: number) => {

        setToDoList(prevState => prevState.filter((item, i) => i !== index));

        setCount(count - 1);
    }

    const completeToDo = (index: number) => {

        setToDoList(prevState => {
            const updatedList = prevState.map((task, i) => 
                i === index ? { ...task, completed: !task.completed } : task
            );
            
            const completedTasksCount = updatedList.filter(task => task.completed).length;
            
            setCount(completedTasksCount);
            
            return updatedList;
        });
    };

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
                            { count }
                        </TextQuantity>
                        </ContainerQuantity>
                </ContainerText>
            </HorizontalQuantity>

            <FlatList 
                data={toDoList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <Card text={ item.text } completeToDo={() => completeToDo(index)} deletetToDo={() => deleteToDo(index) }/> }
                ListEmptyComponent={ <ListEmpty /> }
            />
        </Container>
    )
}

export default Home;