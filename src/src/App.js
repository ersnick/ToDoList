import styled from "styled-components";
import {TasksList} from "./components/TasksList";
import { useEffect } from "react";
import { Container } from "./components/Container";
import {AddTaskAlert} from './components/Alert/AddTaskAlert';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
`;

const ContainerForSpan = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Title = styled.span`
    font-size: 26px;
    color: #272727;
    text-align: center;
`;

function App() {

  useEffect(()=>{
    document.body.style.background = '#efd6d6';
  }, [])


  return (
    
          <Container>
            <ContainerForSpan>
              <Title>TODO List</Title>
              <TasksList />
            </ContainerForSpan>
            <div>
              <AddTaskAlert />
            </div>
           
          </Container>
          
  );
}

export default App;