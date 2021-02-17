const URL = 'https://randomuser.me/api/?results=5'

async function getRandomUsers(){
    const promise = await fetch(URL);
    const users = await promise.json();
    return users;
} 


(async function(){
    const users =await getRandomUsers();
    console.log(users);
})();
