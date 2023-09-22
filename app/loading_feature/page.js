async function list()
{
    let data=await fetch("https://dummyjson.com/users");
    data= await data.json();
    return data.users
}

export default async function userslist()
{
    let users=await list();  
    console.log(users);
      return (
        <div>
            <h1>Users List </h1>
            {
                users.map((item)=>(
                    <div>
                        <h2> User Name : {item.firstName}</h2>
                    </div>
                ))
            }
        </div>
    )
}