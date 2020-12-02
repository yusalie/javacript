function person(name, surname, age){
  this.name = name;
  this.surname = surname;
  this.age = age;
}

var person = new person("Yusuf", "Salie", "24")

console.log(person.name);
console.log(person.surname);
console.log(person.age);
