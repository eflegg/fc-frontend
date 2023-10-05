import { useState } from "react";
 import Head from "next/head";
 import styled from "styled-components";
 import theme from "../Theme";
 import Link from "next/link";
 
 const ButtonContainer = styled.button`
   background: ${(props) =>
     props.dark ? `${theme.colours.blue}` : `${theme.colours.pink}`};
   color: ${(props) =>
     props.dark ? `${theme.colours.pink}` : `${theme.colours.blue}`};
   border-radius: 60px;
   padding: 5px 35px;
   font-size: ${(props) => (props.large ? "16px" : "14px")};
   font-family: ${theme.type.body};
   border: 0px;
   cursor: pointer;
   transition: all 0.15s ease-in;
   &:hover {
    background:${(props) =>
     props.dark ? `${theme.colours.pink}` : `${theme.colours.blue}`};
     transition: all 0.15s ease-in;
     color: ${(props) =>
     props.dark ? `${theme.colours.blue}` : `${theme.colours.pink}`};
   }
 `;

 type ButtonProps = {
   value: string;
   colour: string;
   link?: string;
   large?: boolean;
   className?: string;
   dark?: boolean;
   onClick?: any;
 }
 
const Button: React.FC<ButtonProps> =({
   value,
   colour,
   link,
   large,
   className,
   dark,
   onClick,
 } ) =>{
   return (
     <>
       {link ? (
         <Link href={`${link}`}>
          
             <ButtonContainer className={`${className ? className : ""} btn--container`} dark={dark} large={large} colour={colour}>
               {value}
             </ButtonContainer>
         
         </Link>
       ) : (
         <ButtonContainer
           className={`${className ? className : ""} btn--container`}
           onClick={onClick? onClick : null}
           dark={dark}
           large={large}
           colour={colour}
         >
           {value}
         </ButtonContainer>
       )}
     </>
   );
 }
 
 export default Button;