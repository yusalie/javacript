let i = ['Sushi', 'Burger', 'Burrito', 'Taco']

for(let j of i){
  console.log(i[0]);
  for(let k in j){
    console.log(i[1]);
    for(h in k){
      console.log(i[2]);
    }
    for(g in h){
      console.log(i[3])
    }
  }
}
let x = 0;
for(x; x<10; x++){
  console.log(x);
}
z = [5,66,99,28, 4,,81, 24]
for(y in z){
  console.log(y++);
}
