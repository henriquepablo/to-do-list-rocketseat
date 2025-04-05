import styled from "styled-components/native";
import { theme } from "../../styles";

type TextProps = {
    complete: boolean;
}

export const Container = styled.View`
    margin-left: 24px;
    margin-right: 24px;
    background-color: ${ theme.colors.gray_500 };
    border-radius: 8px;
    height: 64px;
    margin-top: 20px;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
`;


export const Text = styled.Text`
    font-size: 13.5px;
    color: ${ theme.colors.gray_100 };
    font-weight: bold;
    width: 235px;
    text-decoration: ${(props : TextProps ) => props.complete ? 'line-through' : 'none'};
`;

export const Button = styled.TouchableOpacity`

`;

export const Image = styled.Image`
    width: 24px;
    height: 24px;
`;

export const ImageTrash = styled.Image`
    width: 36px;
    height: 36px;
`;


