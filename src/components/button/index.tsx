import { Container, Plus } from "./styles";
import { TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {}

function Button( { ...rest } : TouchableOpacityProps ) {
    return(
        <Container { ...rest }>
            <Plus source={require('../../assets/imgs/plus.png')}/>
        </Container>
    );
}

export default Button;