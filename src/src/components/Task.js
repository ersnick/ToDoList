import styled from "styled-components";
import {RemoveTaskAlert} from './Alert/RemoveTaskAlert';
import {EditTaskAlert} from './Alert/EditTaskAlert';
import {CheckTaskAlert} from './Alert/CheckTaskAlert';

const Container = styled.div`
    display: flex;
    gap: 15px;
`;

const ContainerButton = styled.div`
    padding: 10px 15px;
    background-color: #cb3f3f;
    text-align: center;
`;


const TaskTitle = styled.div`
    font-size: 16px;
    width: 300px;
`;

export const Task = ({title, isDone, id}) => {
    return (
        <Container style={{dysplay: 'flex'}}>
            <CheckTaskAlert id={id} isDone={isDone}/> 
            <TaskTitle>{title}</TaskTitle>  
            <RemoveTaskAlert id={id} /> 
            <EditTaskAlert id={id}/>                                  
        </Container>
    );
}