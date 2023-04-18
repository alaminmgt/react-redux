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
export const multiNum=(num)=>{
    return {
        type : "MULTI",
        payload : num
    }
}
export const divNum=(num)=>{
    return {
        type : "DIVISION",
        payload : num
    }
}