function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            if(!res.ok){
                throw new Error("Error fetching posts")
            }
            
            // res.json();

            //we do return do get it in next then
            return res.json()
        })
        .then((data)=>{
            // for(let i=0;i<5;i++){
            //     console.log(data[i]);
            // }
            console.log(data.slice(0,5))

        }).catch((err)=>{
            console.error(err)
        })
}

getPosts()