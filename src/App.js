import {React, useState} from 'react'
import {createTheme, ThemeProvider} from "@material-ui/core";
//import { BrowserRouter, Route} from "react-router-dom";
import Home from './components/Home'


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

 const theme = createTheme({
   palette: {
     type: darkMode ? "dark" : "light",
     primary: {
       main: "#f44336",
     },
     secondary: {
       main: "#3EA6FF",
     },
     background: {
       default: darkMode ? "#232323" : "#FFF",
       dark: darkMode ? "#181818" : "#f4f6f8",
       paper: darkMode ? "#232323" : "#FFF",
     },
   },
 });

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} /> 
    </ThemeProvider>
  );
};

export default App;
