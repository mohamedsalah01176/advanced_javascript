async function  getPosts(){
    try{
        let res=await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!res.ok){
            throw new Error("Error fetching posts");
        }
        let data=await res.json()
        // for(let i=0;i<5;i++){
        //     console.log(data[i]);
        // }
        console.log(data.slice(0,5))
    }catch(err){
        console.error(err);
    }
}

getPosts()