import styled from "styled-components/native";
import { theme } from "../../styles";

export const Container = styled.View`
    flex: 1;
    background-color: ${ theme.colors.gray_600 };
`;

export const HorizontalInput = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: -24px;
    gap: 6px;
`;

export const HorizontalQuantity = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 32px;
`; 

export const ContainerText = styled.View`
    flex-direction: row;
    gap: 8px;
    align-items: center;
`;

export const TextCreated = styled.Text`
    color: ${ theme.colors.blue };
    font-size: 16px;
    font-weight: 700;
`;

export const TextFinished = styled.Text`
    color: ${ theme.colors.purple };
    font-size: 16px;
    font-weight: 700;
`;

export const ContainerQuantity = styled.View`
    width: 25px;
    height: 20px;
    background-color: ${ theme.colors.gray_400 };
    justify-content: center;
    align-items: center;
    border-radius: 999px;
`;

export const TextQuantity = styled.Text`
    color: ${ theme.colors.gray_200 };
    font-size: 14px;
    font-weight: 700;
`;