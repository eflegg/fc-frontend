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
 
 export default function Button({
   value,
   colour,
   link,
   large,
   className,
   dark,
   onClick,
 }) {
   return (
     <>
       {link ? (
         <Link href={`/${link}`}>
           <a className={`${className ? className : ""} btn--container`}>
             <ButtonContainer dark={dark} large={large} colour={colour}>
               {value}
             </ButtonContainer>
           </a>
         </Link>
       ) : (
         <ButtonContainer
           className={`${className ? className : ""} btn--container`}
           onClick={onClick}
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
 