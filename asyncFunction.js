
const isShopOpen = false;

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
try{
    
const result = await myPromise 



    console.log("program is ended")
}catch(error){
    
    console.log(error)
    console.log("Program messedup")
}

