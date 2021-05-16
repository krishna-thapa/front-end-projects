// Generics
// First without using generic type
const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

let docOne = addUID({ name: 'mario', age: 40 })

// Cannot access object field name since addUID return doesn't construct 
// object with the fields that we pass to the function
// console.log(docOne.name);

// Using Generic method
const addUIDGeneric = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

let docTwo = addUIDGeneric({ name: 'mario', age: 40 })
console.log(docTwo.name);

// We don't want to pass any time for the generic so we can add more
// restrict on the generic type 
let docThree = addUIDGeneric('String name')

// More restrict type by defining the generic type should  have a object
// that should have a field called name with the type of a string
const addUIDGeneric2 = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

//let docFour = addUIDGeneric2('String name')

// ENUMS
// Each enum element has the index value stored so if you console log
// then it will store the index value that starts from 0
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// Generic with an interface
interface Resource<T> {
  uid: number,
  resourceName: ResourceType,
  data: T
}

const docFive: Resource<string[]> = {
  uid: 1,
  resourceName: ResourceType.PERSON,
  data: ['data in string']
}

const docSix: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.AUTHOR,
  data: { name: 'data in string' }
}
