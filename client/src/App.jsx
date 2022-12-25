import { Routes, Route, useLocation, } from "react-router-dom";

import { Container } from "@chakra-ui/react";
import { Header } from "./components/Header";

import { Employees, } from "./components/Employees";


const URLError = () => {
  const { pathname } = useLocation();
  console.log("URL Error (Path %s doesn't exist", pathname);
  return  (<h1>URL Error (Path {pathname} doesn't exist)</h1>);
}


function App() {

  return ( 
    <>
      <Header />
      <Container pt="6" maxW="container.md">
      
        <Routes>
          <Route  path="*" 
                  element={<URLError />} />
          <Route  path="/employees/:employeeID" 
                  element={<Employees />} />
        </Routes>

      </Container>
     
      
    </>
  );
}


export default App;
