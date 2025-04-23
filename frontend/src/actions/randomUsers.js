const generateRandomUsers = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomUsersData = []
            for(let i = 0;i <10;i++){
             const characters = "FadasdafsafasfsfdDRERWERWEEQWEQWEQ";
         
             let userName = '', userScore = 1;
          
             for(let i = 0;i <5;i++){
               userName += characters.charAt(Math.floor(Math.random() * characters.length))
              //  console.log(typeof( Math.floor(Math.random * 50)))
              //  userScore *= Math.floor(Math.random * 50);
             }
          
             userScore *= Math.floor(Math.random() * 50);
          
             console.log("userName", userName, userScore)
          
             randomUsersData.push({userName, userScore})
            } 
         
            // return randomUsersData;
            resolve(randomUsersData)
        }, 2000)
    })  
}

export default generateRandomUsers;