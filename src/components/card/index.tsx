import { Button, Container, Image, ImageTrash, Text } from "./styles";

function Card() {
    return(
        <Container>
            <Button>
                <Image source={require('../../assets/imgs/check.png')}/>
            </Button>
            <Text>
                Integer urna interdum massa libero auctor neque turpis turpis semper.
            </Text>
            <Button>
                <ImageTrash source={require('../../assets/imgs/trash.png')} />
            </Button>
        </Container>
    );
}

export default Card;