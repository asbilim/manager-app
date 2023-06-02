export const sleep = async (time) =>{
    return (
        await new Promise((resolve, reject) =>{
            setTimeout(resolve,time*1000);
        })
    )
}