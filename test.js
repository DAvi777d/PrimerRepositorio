/* const users = [
  {
      name: 'Erik',
      gender: 'male',
      age: 22,
  },
  {
      name: 'Daniela',
      gender: 'female',
      age: 22,
  },
  {
      name: 'Gustavo',
      gender: 'male',
      age: 49,
  },
  {
      name: 'María',
      gender: 'female',
      age: 35,
  },
];
 */
/* function findUser(users, name) { */
  /*  let user;
  for(let i = 0; i < users.length; i++){
     let acomula = users[i];
    /* console.log(user); */
/*     if(acomula.includes(name) === name){ */
      /* user = users.name[i]; */
      /* acomula.name = user;
      console.log(user);
    } */ 
/*     let o = users.find(users => { return users.name === name });
    return o;
    
  } */
  

/*   findUser(users,'Daniela'); */

/* const users = [
  { name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null },
  { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' }},
  { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' }}
];


function getApplications(users) {
  
  let aplicacion = [];
  let noguarda = [];
  for (let i =0 ; i <= users.length; i++) {
    if(users.application[i] !== null){
      aplicacion = users[i];
    }console.log(aplicacion);
    
  }
  
}*/


/*  getApplications(users); */

/* function sumEvens(start, end) {
  let sum=[];
  let ini = 1;
  let total=0;
  for ( let i = 0; i < end; i++){
    if( start === i){
      ini +=start;
      for(a = ini ; a < end ;a++){
        total +=sum[a];
      }console.log(ini);
      console.log(total);
    }
  }
    }


  
  


function sumEvens(start, end) {


} 
sumEvens(20,30); */

let users =[
  { name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null },
  { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' }},
  { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' }}
];
function getApplications(users){
  nuevoArr = {};
guardarA =[];

for(let i = 0; i < users.length; i++){
  if(users[i].application !== null){
    
       guardarA.push(users[i]);  
  } 
} return guardarA;
  
};




getApplications(users);