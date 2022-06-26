/****************************** CONCATENAR ARRAYS **************************** */ 

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//const completo = a1.concat(a2, [7, 8, 9], 'Derik');

const completo = [...a1, ...a2, ...[7, 8, 9, 10], 'Derik'];


console.log(completo);
