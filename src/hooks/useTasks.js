import {useMutation, useQuery, useQueryClient} from "react-query";
import {TaskActions} from "../dataActions/Task";

export const useTasks = () => {
    const {data} = useQuery({
        queryKey: 'tasks',
        queryFn: TaskActions.getValue
    });
    return {
        tasks:data 
    }
}

export const useAddNewTask = () => {
    const {tasks} = useTasks();
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (title) => {
            if (tasks) {
                const task = {
                    title, 
                    isDone: false, 
                    id: Date.now()
                };
                const newTasksArray = tasks.concat([task])
                return TaskActions.saveValue(newTasksArray);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('tasks')
        }
    });

    return {
        addNewTask: mutate
    };
}

export const useRemoveTask = () => {
    const {tasks} = useTasks();
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (task) => {
            if (tasks) {               
                const newTasksArray = tasks.filter(el => Number(el.id) !== Number(task.id));
                return TaskActions.saveValue(newTasksArray);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('tasks')
        }
    });

    return {
        removeTask: mutate
    };
}

export const useEditTask = () => {
    const {tasks} = useTasks();
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (task) => {
            if (tasks) {               
                const newTasksArray = tasks.map(el => {

                    if(Number(task[0].id) === Number(el.id)){
                
                        const editedTask = {
                            title: task[1], 
                            isDone: el.isDone, 
                            id: el.id
                        };
                        return editedTask;
                    }
                    return el;
                });
                return TaskActions.saveValue(newTasksArray);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('tasks')
        }
    });

    return {
        editTask: mutate
    };
}

export const useCheckTask = () => {
    const {tasks} = useTasks();
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (task) => {
            if (tasks) {               
                console.log("здусь", task)
                const newTasksArray = tasks.map(el => {

                    if(Number(task.id) === Number(el.id)){
                
                        const editedTask = {
                            title: el.title, 
                            isDone: !el.isDone, 
                            id: el.id
                        };
                        return editedTask;
                    }
                    return el;
                });
                return TaskActions.saveValue(newTasksArray);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('tasks')
        }
    });

    return {
        checkTask: mutate
    };
}

