export function getStatusChecker(promiseIn){
    let status = "PENDING";

    let result = promiseIn.then(
        (response) => response.json(),
    ).then(
        response => {
            status = "RESOLVED";
            result = response;
            console.log(result);
        }
    )
    .catch(
        (error) => {
            status = "REJECTED";
            result = error;
        }
    )

    return {
        read() {
            console.log(status, result);
            if(status === "REJECTED"){
                throw result;
            }
            if(status === "PENDING"){
                throw result
            }
            if(status === "RESOLVED") {
                return result;
            }

        }
    }
}
