function delayedMessage(msg,error,delayTime){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(msg);
            reject(error?error:"you have error");

            //======test error
            // if(false){
            //     resolve(msg);
            // }else{
            //     reject(error?error:"you have error");
            // }
        },delayTime)
    })
}
export{delayedMessage};

