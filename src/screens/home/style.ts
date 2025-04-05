import styled from "styled-components/native";
import { theme } from "../../styles";

export const Container = styled.View`
    flex: 1;
    background-color: ${ theme.colors.gray_600 };
`;

export const HorizontalInput = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: -24px;
    gap: 6px;
`;