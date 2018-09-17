

export function finishTask(task){
    return{
        type:"FINISH_TASK",
        payload:{task}
    }

}

export function addTask(input){
    return{
        type:"ADD_TASK",
        payload:{input}
    }

}