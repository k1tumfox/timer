//no num provided -> no beeps, end prog
//neg input -> ignore those values
//input NaN -> ignore these values
//test with 10 3, 5, 15, 9

//process.stdout.write('HONK\n'); //beep


let stuff = process.argv.slice(2);
if (stuff !== undefined) {
  
  stuff.forEach(ele => {
    if (!(ele < 0) && isNaN(ele)) {
      setTimeout(() => {
        process.stdin.write(`${ele} HONK\n`);
      }, ele);
    }
  });


}
// for (let ele of stuff) {
//   setTimeout(() => {
//     console.log(ele, 'HONK');
//   }, ele);
// }


//typeof stuff, stuff instanceof Array, Array.isArray(stuff)