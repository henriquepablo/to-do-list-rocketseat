import { Container, Image, Message, SubMessage } from "./styles";

function ListEmpty() {
    return(
        <Container>
            
            <Image source={require('../../assets/imgs/Clipboard.png')}/>

            <Message>
                Você ainda não tem tarefas cadastradas
            </Message>
            <SubMessage>
                Crie tarefas e organize seus itens a fazer
            </SubMessage>
        </Container>
    )
}

export default ListEmpty;