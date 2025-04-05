import styled from "styled-components/native";
import { theme } from "../../styles";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    background-color: ${ theme.colors.gray_700 };
    height: 113px;
`;

export const Logo = styled.Image`
    width: 110px;
    height: 32px;
`;