'use client'
import React, {useEffect, useState} from 'react'
import generateRandomUsers from '../../actions/randomUsers'

type Props = {}

const Leaderboard = (props: Props) => {
    const [users, setUsers] = useState([]);
    const [showLoader, setShowLoader] = useState(true);

    const generateRandomUserList = async () => {
       const users = await generateRandomUsers();
       console.log("usees com", users)
       setUsers(users)
    }

    useEffect(() => {
      
         generateRandomUserList();
         setShowLoader(false)
    
      

    }, [])

    if(showLoader){
      return <div>Loading.....</div>
    }

  return (
    <div>
        <h1>Leaderboard Chart</h1>

        {users.map((user, index) => (
            <div id={index} className='bg-red-400 p-4 m-3' >
                <div >{user?.userName}</div>
                <div>{user?.userScore}</div>
            </div>
        ))}
        <button>Next</button>
        </div>
  )
}

export default Leaderboard;