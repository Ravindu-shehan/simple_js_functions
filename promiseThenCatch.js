// Complete promise
const isShopOpen = true;

const myPromise = new Promise(

    (resolve, reject)=>{
    setTimeout(()=>{
        
        if(isShopOpen){

            resolve(console.log("You are recerived "))
        }else{

            reject(console.log("you aren't Received"))
        }
    }, 3000
)
    } 
)

myPromise.then(
    ()=>{
        console.log("You will be happy")
    }
).catch(

    ()=>{
        reject(console.log("you won't be Received"))
    }
)