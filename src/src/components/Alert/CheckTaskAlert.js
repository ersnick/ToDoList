import {useState} from 'react';
import styled from 'styled-components'
import {Modal} from './components/Modal'


import {useCheckTask} from '../../hooks/useTasks'


const Container = styled.div`

`;

const ForButton = styled.button`
    background-color: cadetblue;
    border-radius: 5px;
    cursor: pointer;
`;

const ContainerForForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
`;


const ContainerForTitle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;

`;

export const CheckTaskAlert = (id, isDone) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {checkTask} = useCheckTask();


    const CheckTaskButtonClick = () => {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa", isDone)
            
        checkTask(id, isDone); 
    }

    console.log("render")
    
    

    return (
        <>            
            <Container>
                <input type="checkbox" checked={isDone} onChange={CheckTaskButtonClick}  />
            </Container>
        </>
    )
}