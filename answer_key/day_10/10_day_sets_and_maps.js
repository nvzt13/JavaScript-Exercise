//----------------------------day10_level_1 1.exercise-------------------------\\
// # create an empty set

const countries = new Set()
console.log(countries)

//----------------------------day10_level_1 2.exercise-------------------------\\
// # Create a set containing 0 to 10 using loop

const set = new Set()
set.add(0,)
set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(5)
set.add(6)
set.add(7)
set.add(8)
set.add(9)
set.add(10)
console.log(set)

//----------------------------day10_level_1 3.exercise-------------------------\\
// # Remove an element from a set

const set = new Set()
set.add(0,)
set.add(1)
set.add(2)
console.log(set.delete(1))

//----------------------------day10_level_1 4.exercise-------------------------\\
// # Clear a set

const set = new Set()
set.add(0,)
set.add(1)
set.add(2)
set.clear()
console.log(set)

//----------------------------day10_level_1 5.exercise-------------------------\\
// # Create a set of 5 string elements from array

const arr = ['ayşe','fatma','dilan','cansu']
const set = new Set(arr)
console.log(set)

//----------------------------day10_level_1 6.exercise-------------------------\\
// # Create a map of countries and number of characters of a country

const map = new Map()

map.set(1,'turkey')
map.set(2,'russıa')
map.set(3,'germaby')
console.log(map)

//___________________________starting_exercise_level_2_______________________\\


//----------------------------day10_level_2 1.exercise-------------------------\\
// # Find a union b

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c =[ ...a,...b
]
const A = new Set(a)
const B = new Set(b)
const C = new Set(c)
console.log(C)

//----------------------------day10_level_2 2.exercise-------------------------\\
// # Find a intersection b

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const A = new Set(a)
const B = new Set(b)
const aUnionB =a.filter((num) => B.has(num))
console.log(aUnionB)

//----------------------------day10_level_2 3.exercise-------------------------\\
// # Find a with b

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const A = new Set(a)
const B = new Set(b)
const aUnionB =a.filter((num) => !B.has(num))
console.log(aUnionB)

//___________________________starting_exercise_level_3_______________________\\

//----------------------------day10_level_3 1.exercise-------------------------\\
//----------------------------day10_level_3 2.exercise-------------------------\\
