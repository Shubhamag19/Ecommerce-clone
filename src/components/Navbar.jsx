import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
// import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../Responsive.js";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2", justifyContent: "center", marginLeft: "0px" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "0px" })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "7px", fontWeight: "500" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo>CloneⓈ</Logo>
          </Link>
        </Center>
        <Right>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Sign IN</MenuItem>
          </Link>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <Link to="/cart" style={{ color: "black" }}>
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
