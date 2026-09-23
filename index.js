import studentDataFetch from "./studentDataFetch.js";

try{

    const student = await studentDataFetch("abcd", 3)
    console.log(student)

}catch(err){
    console.log(err)

}finally{
    console.log("program ended")

}

studentDataFetch("1234", 2).then(
    (result)=>{
        console.log(result)
    }
).catch(
    (err)=>{

    }
).finally(
    ()=>{
        console.log("program ended")
    }
)