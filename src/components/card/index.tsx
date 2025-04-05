import { useState } from "react";
import { Button, Container, Image, ImageTrash, Text } from "./styles";

type CardProps = {
    text: string;
    completeToDo: () => void;
    deletetToDo: () => void;
}

function Card( { text, completeToDo, deletetToDo } : CardProps) {

    const [ completed, setCompleted ] = useState<boolean>(false);

    const completedToDo = () => {
        completeToDo();
        setCompleted(!completed);
    }

    return(
        <Container>
            <Button onPress={completedToDo}>
                {
                    completed ?  <Image source={require('../../assets/imgs/checked.png')}/> : <Image source={require('../../assets/imgs/check.png')}/>
                }
            </Button>
            <Text complete={completed}>
                { text }
            </Text>
            <Button onPress={deletetToDo}>
                <ImageTrash source={require('../../assets/imgs/trash.png')} />
            </Button>
        </Container>
    );
}

export default Card;