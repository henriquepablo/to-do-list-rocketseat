import styled from "styled-components/native";
import { theme } from "../../styles";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border-top-width: 1px;
    border-top-color: #333333;
    margin-left: 24px;
    margin-right: 24px;
`;

export const Image = styled.Image`
    width: 56px;
    height: 56px;
    margin-bottom: 16px;
    margin-top: 46px;
`;

export const Message = styled.Text`
    color: ${ theme.colors.gray_300 };
    font-size: 15px;
    text-align: center;
    font-weight: 700;
`;

export const SubMessage = styled.Text`
    color: ${ theme.colors.gray_300 };
    font-size: 15px;
    text-align: center;
`;