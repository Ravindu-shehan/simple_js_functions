export default function studentDataFetch(dbPassword, signalStrengh){

    return new Promise(

        (resolve, reject)=>{

             setTimeout(()=>{

                if(dbPassword == "1234"){
                    //go to next step
                    if(signalStrengh > 2){
                        resolve(
                            [
                                {name : "john", age : 20},
                                {name : "symon", age : 23}
                            ])
                    }else{
                        reject(
                            {
                                reason: "weak signal"
                            }
                        )

                    }
                }else{
                    reject(
                        {
                            message: "Wrong credentials"
                        }
                    )
                }


    },4000)
        }
    )

   

}