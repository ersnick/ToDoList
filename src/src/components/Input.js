import {useRef, useState} from 'react';
import styled from "styled-components";
import {useTasks} from '../hooks/useTasks'

const ForButton = styled.button`
    background-color: cadetblue;
    border-radius: 5px;
    cursor: pointer;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const NameInput = styled.input`
    font-size: 25px;
`;

export const Input = ({onAddNewTaskButtonClick}) => {

    const inputRef = useRef();
    const [value, setValue] = useState('');

 
    const onInputChange = (event) => {
        let newValue = event.nativeEvent.target.value;
        setValue(newValue);
    }

    const onSaveTaskButtonClick = () => {
        onAddNewTaskButtonClick(value);
    }

    return (
        <Container>
            <NameInput ref={inputRef} value={value} onChange={onInputChange} />
            <ForButton onClick={onSaveTaskButtonClick}>Save task</ForButton>
        </Container>
    );
}