// დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , 
// თუ რიცხვები ტოლია დააბრუნებს 0 -ს
// function number (m,n){
//     if (m > n) 
//         return m
//     else if (n>m) return n
// else return 0
// }
// console.log(number(18,25))

//  დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
//  function sum (a,b){
//     return a+b
//  }
//  console.log(sum(25,65))
//  დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
// function name(){
//     console.log("kristine kartlelishvili")
// }
// name()
// დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და 
//  ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
//  function data(firstname,lastname){
//     return firstname+ " " +lastname
//  }
//  console.log(data("kristine", "kartlelishvili"))
//  . Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს
//   1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა 
//     დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის 
//     შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი 
//     ციკლი)
// function sum(n){
//     let ansver =1
//     for(let i =1; i<=n; i++)
//         ansver*= i
// return ansver
// }
// console.log(sum(15))
// function sum(n){
//     let ansver =1
//     for(let i =1; i<=n; i++)
//         ansver*= i
// return ansver
// }
// console.log(sum(4))

// Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი properties: 
// firstName, lastName, age, scores (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და 
// მეთოდი fullName რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, ცალკე 
//     ფუნქციად არ უნდა დაწეროთ ) 

// 6. დაბეჭდეთ  სტუდენტის სრული სახელი და ასაკი (სახელი+გვარი+ასაკი  გამოიყენეთ student 
//     ობიექტის მეთოდი)
// 7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია 
// დააბრუნებს  ქულების ჯამს
// 8. დაბეჭდეთ სტუდენტის სახელი და ასაკი ცალცალკე(ფუნქციისა და მეთოდის გარეშე)
 let student = {
    firstName: "ქრისტინე",
    lastName:"ქართლელიშვილი",
    age:38,
    scores:[ 4,7,5,3,2], 
    fullName(){
        return this.firstName+" " +this.lastName
    }
 };
// console.log(student.fullName()+ " "+student.age)
// function scores(student){
//       let answer =0

// for(let index=0; index< student.scores.length;index++)
//     answer+=student.scores[index]
// return answer}
// console.log(scores(student))
console.log(student.firstName)
console.log(student.age)