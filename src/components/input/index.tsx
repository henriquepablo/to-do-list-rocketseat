import { InputField } from "./styles";
import { TextInputProps } from "react-native";

type InputProps = TextInputProps & {}

function Input( { ...rest } : InputProps) {
    return(
        <InputField {...rest} />
    );
}

export default Input;