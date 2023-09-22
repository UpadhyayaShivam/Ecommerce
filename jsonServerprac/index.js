const randomData = ()=>{
    const data = {users : []};
    for (let i = 0; i <1000; i++) {
        data.users.push({id:1, name : `user${i}`});
    }
    return data;
}

module.exports = randomData;

// const randomData = ()=>{
//     const data = {users : Array.from({length: 1000}, (_, i) => ({id:1, name : `user${i}`}))};
//     return data;
// }