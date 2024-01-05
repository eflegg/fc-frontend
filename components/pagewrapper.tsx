import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import styled from 'styled-components'
import theme from '../components/Theme'
import Header from './header'
import { useEffect } from 'react'



const OuterContainer = styled.div`
background: ${theme.colours.cream};
position: relative;
z-index: 1;
overflow: hidden;
`

function isInViewport(line) {  
  const rect = line.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};




export default function PageWrapper({ children, languageChoice }) {

  // useEffect(()=>{
  //   const scrollHandler = ()=>{
  //     var scroll = window.requestAnimationFrame ||
  //      // IE Fallback
  //       function(callback){ window.setTimeout(callback, 1000/60)};
  //   const container = document.querySelector('.main-content');
  //   const line = document.querySelectorAll('hr');
  // console.log(line);
  // console.log(container);
  // function loop() {
  //   line.forEach(function (line) {
  //       console.log(line);
  //           if (isInViewport(line)) {
  //               line.classList.add('grow');
  //           } else {
  //               line.classList.remove('grow');
  //           }
            
  //       });
  //       scroll(loop);
  //   };
    
  //   loop();
  
  //   };
  //   window.addEventListener('scroll', scrollHandler);
  //   return()=>{
  //     window.removeEventListener('scroll', scrollHandler);
  //   }
  // }, []);

  return (
    <>
      <Meta />
      <OuterContainer>

        <Header />

        <main className="main-content scroll" data-scroll-container id="main-content">{children}</main>

        <Footer languageChoice={languageChoice} />
      </OuterContainer>
    </>
  )
}
