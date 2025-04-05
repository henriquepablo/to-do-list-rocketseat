import styled from "styled-components/native";  
import { theme } from "../../styles";

type InputFieldProps = {
    focusable: boolean
}

export const InputField = styled.TextInput`
    background-color: ${ theme.colors.gray_500 };
    font-size: 16px;
    height: 54px;
    border-radius: 6px;
    width: 300px;
    color: #fff;
    padding-left: 10px;
    border-color: ${ ( props: InputFieldProps ) => props.focusable ? theme.colors.purple_dark  : '' };
    border-width: ${ ( props: InputFieldProps ) => props.focusable ? 1  : 0 }px;
`;