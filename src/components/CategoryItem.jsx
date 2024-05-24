import styled from "styled-components";
import { mobile } from "../Responsive.js";
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height: "30vh"})}
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    font-size: 60px;
    margin-bottom: 20px;
`
const Button = styled.button`
    padding: 10px;
    border: none;
    color: black;
    background-color: #dafc88;
    font-size: 15px;
    font-weight: 800px;
    cursor: pointer;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Link to="/productlist">
                    <Button>Buy Now</Button>
                </Link>
            </Info>
        </Container>
    );
};

export default CategoryItem;