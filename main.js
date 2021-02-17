const username = Symbol('username');
const password = Symbol('password');

const user = {
    [username]: 'osid',
    [password]: '1234',
    age: 20
};

console.log(user.username);
console.log(user.password);