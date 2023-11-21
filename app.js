// дз 1 я не нашёл
// дз 2
let books = [
    {name: 'пеармиш'},
    {name: 'укамитимсч'},
    {name: 'орпм'},
    {name: 'уапсвя'},
    {name: 'Упмииьтгае'},
    {name: 'Упмииь'},
    {name: 'рпм лолот'},
    {name: 'б отрн'},

]
let resultBooks = books.filter(i => i.name.includes('у') || i.name.includes('У'))
console.log(resultBooks)
// дз 3
const users = [
    {name: 'Adam', age: 30},
    {name: 'gjsef', age: 34},
    {name: 'efgfv', age: 38},
    {name: 'Aefg', age: 8},
    {name: 'Ada', age: 18},
    {name: 'Adm', age: 16},
    {name: 'Addsfam', age: 10},
    {name: 'Adamdfrf', age: 11},
]
const youngestUser = users.reduce((youngest, user) => user.age < youngest.age ? user : youngest)
const oldestUser  = users.reduce((oldest, user) => user.age < oldest.age ? user : oldest)
const ageDifference = Math.abs(oldestUser.age - youngestUser.age)
console.log(`пользователь ${oldestUser.name} старше ${youngestUser.name} на ${ageDifference} лет `)
