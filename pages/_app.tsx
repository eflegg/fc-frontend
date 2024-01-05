import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/global.css'
import { GoogleAnalytics } from "nextjs-google-analytics";
import React, { useState } from 'react';
import Button from '../components/buttons/Button';
import theme from '../components/Theme';

type CustomPageProps = {
  languageChoice: string;
}

// function MyApp({ Component, pageProps, languageChoice }: AppProps) {
//did this so i could type the languageChoice prop and pass it and not get an error
  const MyApp: React.FC<AppProps<CustomPageProps>> = ({ Component, pageProps }) =>{

  const [language, setLanguage] = useState('English');

  const toggleTheme = () => {
    if (language === "English") {
      setLanguage("Français" );
    } else {
      setLanguage("English" );
    }
  };
  return (
    <>
    <GoogleAnalytics trackPageViews />
  {/* <Button
          colour={`${theme.colours.blue}`}
          value={language == "English" ? "Français" : "English"}
          className="language--btn"
          onClick={toggleTheme}
          dark
          large={false}
          link={false}
        ></Button> */}
        
  <Component {...pageProps} languageChoice={language} />
  {/* </div>  */}
    </>
)}

export default MyApp
