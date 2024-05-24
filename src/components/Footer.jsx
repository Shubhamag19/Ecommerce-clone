import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../Responsive.js";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>CloneⓈ</Logo>
                <Desc>Random Description</Desc>
                <SocialContainer>
                    <SocialIcon bg="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon bg="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon bg="55ACEE">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon bg="E60023">
                        <YouTubeIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><HomeIcon style={{color:"#076607", marginRight:"10px"}} />221-B, Baker Street</ContactItem>
                <ContactItem><PhoneIcon style={{color:"#00f", marginRight:"10px"}} />+1 558 7629</ContactItem>
                <ContactItem><EmailIcon style={{color:"#f00", marginRight:"10px"}} />holmes@sherlock.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer;