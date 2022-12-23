import {
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import { Container } from "@chakra-ui/react";

import { Header } from "./components/Header";


const Employees = () => {
  const { topicId } = useParams();
  return  (<h1>Employee: {topicId} </h1>);
}
const URLError = () => {
  return  (<h1>URL Error (Path doesn't exist)</h1>);
}

function App() {

  return ( 
    <>
      <Header />
      <Container pt="6" maxW="container.md">
      </Container>
      <Routes>
        <Route  path="*" 
                element={<URLError />} />

        <Route  path="/employees/:topicId" 
                element={<Employees />} />
      </Routes>
      
    </>
  );
}



export default App;
