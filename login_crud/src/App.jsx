import { LoginPage } from "./pages/LoginPage/loginpage";
import { Router } from "./router/router";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    // <ChakraProvider>
       <Router>
        <LoginPage/>  
      </Router>
    /* </ChakraProvider> */
   
  );
}

export default App;
