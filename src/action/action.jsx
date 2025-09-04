export const onAdd = (job)=>{

    return{
        type : "ADD",
        payload : job
    }
}

export const onRemove = (jobId)=>{

    return{
        type : "REMOVE",
        payload : jobId
    }
}