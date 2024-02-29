import {useState} from 'react';
import styled from 'styled-components'
import {Modal} from './components/Modal'


import {useRemoveTask} from '../../hooks/useTasks'


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




export const RemoveTaskAlert = (id) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {removeTask} = useRemoveTask();

    const showAlertButtonClick = () => {
        setIsModalVisible(true)
    }

    const closeAlert = () => {
        setIsModalVisible(false);
    }

    const RemoveTaskButtonClick = () => {

        removeTask(id);
        closeAlert(); 
    }
    
    const renderModal = () => {
        if (!isModalVisible) {
        
            return null;
            
        }
        
        return (
            <Modal close={closeAlert}>
                <ContainerForForm>
                    <span>Delete element?</span>
                    <ContainerForTitle>
                        <ForButton onClick={RemoveTaskButtonClick}>yes</ForButton>
                        <ForButton onClick={closeAlert}>no</ForButton>
                    </ContainerForTitle>
                </ContainerForForm>
            </Modal>
        );
    }

    return (
        <>
            {renderModal()}
            
            <Container>
                <ForButton onClick={showAlertButtonClick}>x</ForButton>
            </Container>
        </>
    )
}