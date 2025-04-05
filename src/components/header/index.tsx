import { Container, Logo } from "./styles";

function Header() {

    return (
        <Container>
            <Logo source={require('../../assets/imgs/Logo.png')} />
        </Container>
    );
}

export default Header;