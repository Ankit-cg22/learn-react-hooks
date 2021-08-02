import React, {useContext} from 'react'
import { login } from './demoLogin';
import { UserContext } from './UserContext'

export  function HomeContext() {

    const {user , setUser} = useContext(UserContext)
    // through useContext , this component subscribed to the UserContext context
    // now whenever the context changes , this component always has access to the updated value in the context. 

    return (
        <div>
            <h2>Home</h2>
            <pre>{JSON.stringify(user, null , 2)}</pre> 
            {user ? 

            <button onClick= {()=> setUser(null)}>Logout</button> :

            <button 
            onClick={ async () => {
                const user = await login();
                setUser(user)
            }}
            >
             Login 
            </button>
            
            }



            {/* this change will get updated in all the components */}
        </div>
    );
}


{/*
     <UserContext.Provider value=" ">
    //all the components to which we want to share a common context

    // we can access this value in all its child components
</UserContext.Provider>  
*/}

//So the important thing is  log in , log out etc , all these changes get updated across all the components.