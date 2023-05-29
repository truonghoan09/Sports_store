import styled from "styled-components";
import { NavLink } from "react-router-dom";

//Dùng làm background toàn cảnh 
export const BackgroundDiv = styled.div`
background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.textColor};
`
//Dùng làm background rộng của Sign In page
export const BackgroundSigninDiv = styled.div`
background-color: ${props => props.theme.backgroundSignInColor}
`

//Dùng cho Navlink dạng Button, demo ở nút sign in Sign Up trong home page
export const NavLinkButton = styled(NavLink)`
margin-top: 20px;
height: 30px;
width: 80px;
border-radius: 3px;
color: white;
border: ${props => props.theme.outlineColor} solid 1px;
text-align: center;
line-height: 25px;
font-size: 17px;
background-color: ${props => props.theme.primaryColor};
text-decoration: none;
&:hover {
  color: ${props=> props.theme.hoverTextColor}
}
`;

//Dùng cho một div định dạng button
export const ThemeButton = styled.div`
z-index: 100;
position: fixed;
display: flex;
margin-top: 20px;
height: 30px;
padding: 0 10px;
width: 10rem;
border-radius: 3px;
color: white;
border: ${props => props.theme.boderOutline} solid 1px;
text-align: center;
line-height: 25px;
font-size: 17px;
text-decoration: none;
`;


//Dùng làm background của Block Sign In, và Sign Up
export const BlockSignDiv = styled.div`
margin-top: 8rem;
border: ${props => props.theme.boderOutline} solid 1px;
background-color: ${props => props.theme.ColorBackgroundBlockSignIn};
`;

export const BlockSignUpDiv = styled.div`
margin-top: 3rem;
border: ${props => props.theme.boderOutline} solid 1px;
border-radius: 0.4rem;
background-color: ${props => props.theme.ColorBackgroundBlockSignIn};
`;

//Dùng làm input
export const TagInput = styled.input`
color: ${props => props.theme.textColor};
background-color: ${props => props.theme.ColorBackgroundBlockSignIn};
&:focus {
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.ColorBackgroundBlockSignIn};
}
`

export const NavEle = styled(NavLink) `
text-decoration: none;
color: white;
padding: 0 0.3rem;
margin: 0 0.2rem;
&:hover{
  color: grey;
}
`

//Dùng cho label của các input
export const TagLabel = styled.label`
position: absolute;
  color: ${props => props.theme.textColor}
`

export const EyeIcon = styled.i`
position: absolute;
top: 50%;
right: 1rem;
transform: translateY(-50%);
cursor: pointer;
color: ${props => props.theme.textColor}
`;


export const TextDiv = styled.div `
color: ${props => props.theme.textColor}
`

//Dùng trong sign up.js
export const SignUpButton = styled.div `
  border: ${props => props.theme.outlineColor} 1px solid;
  height: 2.2rem;
  color: white;
  background-color: ${props => props.theme.primaryColor};
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;  
  margin-left: auto;
  cursor: pointer;
  &:hover {
    color: ${props=> props.theme.hoverTextColor}
  }
`