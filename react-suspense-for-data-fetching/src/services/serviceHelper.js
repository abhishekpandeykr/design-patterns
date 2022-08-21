export function getStatusChecker(promiseIn){
    let status = "PENDING";
    let result;

    const promise = promiseIn.then(
        (response) => {
            status = "RESOLVED";
            result = response.json()
        }
    ).catch(
        (error) => {
            console.log("tre")
            status = "REJECTED";
            result = error;
        }
    )

    return () => ({promise, status, result});
}

export function makeThrower(promiseIn){
    const checkStatus = getStatusChecker(promiseIn);

    return () => {
        const {promise, status, result} = checkStatus();
        if(status === "REJECTED"){
            throw result;
        }
        if(status === "PENDING"){
            throw promise
        }
        return result.then(res => res);
    }
}