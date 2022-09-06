/*
デフォルト値、引数など
*/

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);

// sayHello("しゃけ");

/*
スプレッド構文...
*/

//配列の展開ができる

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumfunc = (num1, num2) => console.log(num1 + num2);
// sumfunc(arr1[0],arr1[1]);
// sumfunc(...arr1);

//まとめる

// const arr2 = [1,2,3,4,5];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr4);

const nameArr = ["田中", "山田", "しゃけ"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

//nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if( name === "しゃけ"){
//     return name
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

/*
三項演算子
*/
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
//
// const num = "1300" ;
// console.log(num.toLocaleString());

// const formattedNum = typeof num == `number` ? num.toLocaleString() : `数値を入力してください`;
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を越えています` : `許容範囲内です`;
// }
// console.log(checkSum(50, 40));

/*
論理演算子の本当の意味を知ろう
*/
const flag1 = true;
const flag2 = false;

// if (flag1 || flag2){
//   console.log(`１か２はtrueになります`);
// }
if (flag1 && flag2) {
  console.log(`１も２はtrueになります`);
}

// || は左側がfalseとなる時は右側を返す
// const num = false;
// const fee = num || `金額未設定です`;
// console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
