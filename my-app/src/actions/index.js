export const increamentNum=(num)=>{
    return {
        type : "INCREAMENT",
        payload : num
    }
}
export const deccreamentNum=(num)=>{
    return {
        type : "DECREMENT",
        payload : num
    }
}