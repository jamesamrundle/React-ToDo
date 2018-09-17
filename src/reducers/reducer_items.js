
var items =[
    {task:"Go to Store",status:"Done"},
    {task:"How to make Cake",status:true},
    {task:"Why we eat",status:true},
    {task:"Are cats aliens?",status:true},
    {task:"How to speak to cats",status:true},

]

export default function(state=items,action) {
   console.log("state entering: ",state)
    switch (action.type) {

        case "FINISH_TASK":

            return state.map( (item) => {
                console.log("is ", item.task," equal to ",action.payload.task.task)
                if (item.task !== action.payload.task.task) {
                    // This isn't the item we care about - keep it as-is
                    return item;
                } else
                // Otherwise, this is the one we want - return an updated value
                    console.log("should change",(item.status === "ToDo" ? "Done" : "ToDo"))
                    return {
                        task: item.task,

                        status:(item.status === "ToDo" ? "Done" : "ToDo")
            }
            })




        case "ADD_TASK":
            console.log("state leaving",state,"and", action.payload.input);
            return [...state,{task:action.payload.input , status:"Todo"}]

        default:return state;
    }
}
