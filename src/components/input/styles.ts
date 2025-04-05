import styled from "styled-components/native";  
import { theme } from "../../styles";

export const InputField = styled.TextInput`
    background-color: ${ theme.colors.gray_500 };
    font-size: 16px;
    height: 54px;
    border-radius: 6px;
    width: 271px;
    color: #fff;
    padding-left: 10px;
`;