console.log("Hello World")


// Chapter 14-16

//Question 1

// var studentName = [, , , , ]
// console.log(studentName)


//Question 2
// var studentNames = [];
// studentNames.push("John");
// studentNames.push("Jane");
// console.log(studentNames)


//Question 3
// var Cars = ["Alto","Corolla","Cultus"]
// console.log(Cars)

//Question4
// var num = [1,2,3,4]
// console.log(num)

//Question5
// let arrayName = new Array(array_length).fill(true/false);

//Question6
// var mix_Array = [1,"car",4,"bike"]
// console.log(mix_Array)

//Question7
// var Education_Qualification = ["SSC","HSC","BCS","BCOM","MS","M.Phil","Phd"]
// document.write("<h1>Qualifications<h1/>")
// var len = Education_Qualification.length;
// for(var i = 0 ; i<len  ; i++)
// document.write(Education_Qualification[i]+ "<br/>")

//Question 8
// var studentName = ["Zain","Talha","Usman"]
// var marks = [350,450,220]
// var totalMarks = 500
// document.write("Score of " +studentName[0]+" " +"is" + marks[0]+" "+"Percentage:"+" "+(marks[0]/totalMarks)*100+"<br/>")
// document.write("Score of " +studentName[1]+" " +"is" + marks[1]+" "+"Percentage:"+" "+(marks[1]/totalMarks)*100+"<br/>")
// document.write("Score of " +studentName[2]+" " +"is" + marks[2]+" "+"Percentage:"+" "+(marks[2]/totalMarks)*100+"<br/>")

//Question 9

// var color_Names = ["Red","Blue","Green"]
// document.write(color_Names+"<br/>")
// var color1 = prompt("Which color you want to add at the beginning")
// color_Names.unshift(color1)
// document.write(color_Names+"<br/>")
// var color2 = prompt("Which color you want to add at the end")
// color_Names.push(color2)
// document.write(color_Names+"<br/>")
// color_Names.unshift("SeaGreen","Yellow")
// document.write(color_Names+"<br/>")
// color_Names.shift()
// document.write(color_Names+"<br/>")
// color_Names.pop()
// document.write(color_Names+"<br/>")
// var position = +prompt("Enter the position you want to add color")
// color_Names.splice(position,0,"Pista")
// document.write(color_Names+"<br/>")
// var delete_Position = +prompt("Enter the position from where you want to delete elements")
// var delete_Quantity = +prompt("Enter the number of values you want to delete")
// color_Names.splice(delete_Position,delete_Quantity)
// document.write(color_Names+"<br/>")


//Question 10

// var Score_of_stu = [200,430,350,180]
// document.write("Score of students is :" + " "+Score_of_stu+"<br/>")
// Score_of_stu.sort()
// document.write("Ordered Score of students :" + " "+Score_of_stu+"<br/>")


//Question 11

// var city_Names = ["Karachi","Lahore","Multan","Rawalpindi"]
// document.write(city_Names+"<br/>")
// var City_List = city_Names.slice(2,4)
// document.write(City_List)


//Question 12

// var arr = ["This ", " is ", " my ", " cat"];
// console.log(arr)
// var text = arr.join()
//     console.log(text)


//Question 13
// var devices = ["Keyboard","Mouse","Printer","Monitor"]
// document.write(devices[0],"<br/>")
// document.write(devices[1],"<br/>")
// document.write(devices[2],"<br/>")
// document.write(devices[3],"<br/>")
// document.write("<br/>")

//Question 14

// var devices = ["Keyboard","Mouse","Printer","Monitor"] 
// var reverse = devices.reverse()
// document.write(devices[0],"<br/>")
// document.write(devices[1],"<br/>")
// document.write(devices[2],"<br/>")
// document.write(devices[3],"<br/>")
// document.write("<br/>")
// document.write(reverse[0],"<br/>")
// document.write(reverse[1],"<br/>")
// document.write(reverse[2],"<br/>")
// document.write(reverse[3],"<br/>")



//Question 15





//Chapter  17-20


// Question 1

// var m = 4;
// var  n = 5;
// var arr = new Array(m); 
// for (var i = 0; i < m; i++) {
//   arr[i] = new Array(n); 
// }
// console.log(arr);


//Question 2

// var matrix = [

//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
//     [3,1,2,0],
//     [3,1,3,0]

// ];
// document.write(matrix[0]+"<br/>")
// document.write(matrix[1]+"<br/>")
// document.write(matrix[2]+"<br/>")
// document.write(matrix[3]+"<br/>")
// document.write(matrix[4]+"<br/>")



//Question 3

// var i =0
// for (var i=0;i<=10;i++){
//     document.write(i+"<br/>")
// }

//Question 4


// var table_Number = +prompt("Enter Table number");
// var table_length = +prompt("Enter table length");

// for (var i = 1; i <= table_length; i++) {
//     document.write(table_Number + " x" + " " + i + " " + " = " + " " + table_Number * i + "<br />")

// }

//Question 5

//  var fruits = ["apple", "banana", "mango", "orange", 
// "strawberry"]
// for (let i = 0; i < fruits.length; i++) {
//   document.write(fruits[i]+"<br/>"); // here i represents index
// }
// document.write("Element on index 0 is" + " "+fruits[0]+"<br/>")
// document.write("Element on index 1 is" + " "+fruits[1]+"<br/>")
// document.write("Element on index 2 is" + " "+fruits[2]+"<br/>")
// document.write("Element on index 3 is" + " "+fruits[3]+"<br/>")


//Question 6

// document.write("<h1>Counting</h1>")
// document.write("<br/>")
// for (var i=0;i<=15;i++){
//     document.write(i+" ")
// }
// document.write("<br/>")
// document.write("<h1>Reverse Counting</h1>")
// for (var i=10;i>0;i--){
//     document.write(i+" ")
// }
// document.write("<br/>")
// document.write("<h1>Even Counting Counting</h1>")

// for (let i=0; i <= 20; i+=2) {
//      document.write(i+" ");
// }
// document.write("<br/>")
// document.write("<h1>Odd Counting Counting</h1>")

// for (let i=1; i <= 20; i+=2) {
//      document.write(i+" ");
// }
// document.write("<br/>")
// document.write("<h1>Series Counting</h1>")

// for (let i=2000; i <= 20000; i+=2000) {
//      document.write(i+" ");
// }


//Question 7

// var BakeryItem = ["cake","apple pie", "cookie","chips","patties"]
// var req_Item = prompt("Welcome to star bakery! What do you want to order")
// var isMatch = false;

// for (var i = 0; i<BakeryItem.length;i++){
//     if (BakeryItem[i] === req_Item){
//         isMatch = true
//         document.write(req_Item+" "+"is available at index"+i+" "+"in our bakery <br/>")
//     }
// }
// if(isMatch === false)[
//     document.write("we are sorry")
// ]

//Question 8

// var A = [24, 53, 78, 91, 12]
// document.write(Math.max.apply(null,A))

//Question 9

// var A = [24, 53, 78, 91, 12]
// document.write(Math.min.apply(null,A))


//Question 10

// for (let i=5; i <= 100; i+=5) {
//      document.write(i+" ");
// }