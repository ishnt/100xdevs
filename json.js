let json={"name":"ishant","rollno":12,"age":21}
let changer=JSON.stringify(json);
console.log(changer["name"]);
console.log(typeof(changer));

json='{"name":"ishant","rollno":12,"age":21}'
changer=JSON.parse(json);
console.log(changer["name"]);
console.log(changer);   


