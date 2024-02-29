import {useState} from 'react';
import styled from 'styled-components'
import {Modal} from './components/Modal'

import {useAddNewTask} from '../../hooks/useTasks'
import {Input} from '../Input'


const Container = styled.div`

`;

const ContainerForForm = styled.span`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
`;

const ContainerForTitle = styled.span`
    
`;

const ForButton = styled.button`
    background-color: cadetblue;
    border-radius: 5px;
    cursor: pointer;
`;


export const AddTaskAlert = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {addNewTask} = useAddNewTask();

    const showAlertButtonClick = () => {
        setIsModalVisible(true)
    }

    const closeAlert = () => {
        setIsModalVisible(false);
    }

    const onAddNewTaskButtonClick = (title) => {
        addNewTask(title);
        closeAlert(); 
    }

    const renderModal = () => {
        if (!isModalVisible) {
            return null;
        }

        return (
            <Modal close={closeAlert}>
                <ContainerForForm>
                    <ContainerForTitle>
                        Add task
                    </ContainerForTitle>
                    <Input 
                        onAddNewTaskButtonClick={onAddNewTaskButtonClick}
                    />
                </ContainerForForm>
            </Modal>
        );
    }

    return (
        <>
            {renderModal()}
            <Container>
                <ForButton onClick={showAlertButtonClick}>add</ForButton>
            </Container>
        </>
    )
}