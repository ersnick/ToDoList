import {useTasks} from "../hooks/useTasks";
import styled from "styled-components";
import {Task} from "./Task";
import {useState} from "react";


const Container = styled.div`
    align-items: center;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Input = styled.input`
    border-radius: 5px;
    margin-bottom: 20px;
    width: 250px;
`;

export const TasksList = () => { 
    const {tasks} = useTasks();
    const [searchValue, setSearchValue] = useState('');

    if (!tasks) {
        return null;
    }

    const onSearchInputChange = (event) => {
        setSearchValue(event.nativeEvent.target.value);
    }

    const filteredTasks = filterTasks(tasks, searchValue);  
    return(
        <Container>
            <Input value={searchValue} onChange={onSearchInputChange} />
            {filteredTasks.map((task) => {
                return <Task id={task.id} key={task.id} title={task.title} isDone={task.isDone}/>
            })}
        </Container>
    );
}

const filterTasks = (tasks, searchValue) => {
    return tasks.filter((el) => {
        const isTitleMatch = el.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
        return isTitleMatch;
    });
}