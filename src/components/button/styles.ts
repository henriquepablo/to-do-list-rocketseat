import styled from "styled-components/native";
import { theme } from "../../styles";

export const Container = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    border-radius: 6px;
    background-color: ${ theme.colors.blue_dark };
`;

export const Plus = styled.Image`
    width: 16px;
    height: 16px;
`;
