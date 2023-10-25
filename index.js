"use strict";
// 33.	Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let ordinal_number = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
//  let suffix:string[]=new Array(6).fill("st");
//  console.log(ordinal_number.join("th\t"))
// console.log("----------------------------")
//   by loop 
for (let i = 0; i < ordinal_number.length; i++) {
    if (ordinal_number[i] > 0 && ordinal_number[i] < 2)
        console.log(`${ordinal_number[i]}st`);
    if (ordinal_number[i] > 0 && ordinal_number[i] < 3)
        console.log(`${ordinal_number[i]}nd`);
    if (ordinal_number[i] > 0 && ordinal_number[i] < 4)
        console.log(`${ordinal_number[i]}rd`);
    if (ordinal_number[i] > 0 && ordinal_number[i] < 5)
        console.log(`${ordinal_number[i]}th`);
}
