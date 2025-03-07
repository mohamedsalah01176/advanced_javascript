export async function fetchUsers(url){
    try{
        let res=await fetch(url);
        if(!res.ok){
            throw new Error("Error fetching posts");
        }
        let data=await res.json();
        return data;
    }
    catch(err){
        console.error(err);
        return [];
    }
}