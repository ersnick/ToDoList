import {useState} from 'react';
import styled from 'styled-components'
import {Modal} from './components/Modal'

import {useEditTask} from '../../hooks/useTasks'
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


export const EditTaskAlert = (id, ) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {editTask} = useEditTask();

    const showAlertButtonClick = () => {
        setIsModalVisible(true)
    }

    const closeAlert = () => {
        setIsModalVisible(false);
    }

    const onAddNewTaskButtonClick = (title) => {

        editTask([id, title]);
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
                        Edit task
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
                <ForButton onClick={showAlertButtonClick}>edit</ForButton>
            </Container>
        </>
    )
}