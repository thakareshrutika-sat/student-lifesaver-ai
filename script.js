
window.onload = function () {

    let savedTasks = localStorage.getItem("tasks");

    if(savedTasks){

        document.getElementById("taskList").innerHTML = savedTasks;

    }

}
document.querySelector(".hero button").addEventListener("click", function () 
{
    alert("🚀 Welcome to Student Lifesaver AI!\nLet's start planning your success.");
});

function addTask() {

    let task = document.getElementById("task").value;
    let date = document.getElementById("date").value;

    if (task == "" || date == "") {
        document.getElementById("output").innerHTML =
        "⚠ Please enter task and deadline.";
    } else{

document.getElementById("output").innerHTML="✅ Task Added Successfully";

let li=document.createElement("li");
let btn = document.createElement("button");
let complete = document.createElement("button");
complete.innerHTML = "✔ Complete";

complete.onclick = function () {
    li.style.textDecoration = "line-through";
    li.style.color = "green";
}
btn.innerHTML = "❌ Delete";

btn.onclick = function () {
    li.remove();
    localStorage.setItem(
    "tasks",
    document.getElementById("taskList").innerHTML
);
}



li.innerHTML=task+" 📅 "+date;
li.appendChild(btn);
li.appendChild(complete);

document.getElementById("taskList").appendChild(li);
localStorage.setItem(
    "tasks",
    document.getElementById("taskList").innerHTML
);
let total=document.getElementById("totalTasks");

let count=parseInt(total.innerHTML);

total.innerHTML=count+1;

document.getElementById("task").value="";
document.getElementById("date").value="";

}
}
let total = document.getElementById("totalTasks");

let count = parseInt(total.innerHTML);

total.innerHTML = count + 1;

function careerGuide(){

let interest = document.getElementById("interest").value;

let output = document.getElementById("careerOutput");

if(interest=="Programming"){
output.innerHTML="💻 Learn Java → DSA → Projects → Internship → Placement";
}
else if(interest=="Web Development"){
output.innerHTML="🌐 HTML → CSS → JavaScript → React → Full Stack";
}
else if(interest=="AI"){
output.innerHTML="🤖 Python → Machine Learning → Deep Learning → AI Projects";
}
else if(interest=="Cyber Security"){
output.innerHTML="🔐 Networking → Linux → Ethical Hacking → Security";
}
else if(interest=="Data Science"){
output.innerHTML="📊 Python → SQL → Statistics → Power BI → ML";
}
else{
output.innerHTML="⚠ Please select an interest.";
}
}
function studyPlan(){

let examDate = document.getElementById("examDate").value;

if(examDate==""){
document.getElementById("studyOutput").innerHTML="⚠ Please select exam date.";
}
else{
document.getElementById("studyOutput").innerHTML=
"📚 Suggested Plan:<br><br>"+
"Day 1 : Basics<br>"+
"Day 2 : Practice Problems<br>"+
"Day 3 : Revision<br>"+
"Day 4 : Mock Test<br>"+
"Day 5 : Final Revision";
}

}
function chatbot() {

    let q = document.getElementById("question").value.toLowerCase().trim();
    let ans = document.getElementById("answer");

    if(q==""){
        ans.innerHTML="Please enter a question.";
    }
    else if(q.includes("java")){
        ans.innerHTML="📘 Learn Java Basics → OOP → Collections → Projects.";
    }
    else if(q.includes("dsa")){
        ans.innerHTML="💻 Practice Arrays, Strings, Linked List, Trees and Graphs.";
    }
    else if(q.includes("career")){
        ans.innerHTML="🎯 Build projects, improve DSA and prepare for placements.";
    }
    else if(q.includes("study")){
        ans.innerHTML="📚 Make a daily study plan and revise regularly.";
    }
    else if(q.includes("deadline")){
        ans.innerHTML="⏰ Complete important tasks before deadlines.";
    }
    else{
        ans.innerHTML="🤖 Sorry! I can answer questions about Java, DSA, Career, Study and Deadlines.";
    }
}

function login(){

let name=document.getElementById("username").value;

if(name== ""){

alert("Please Enter Your Name");
}
else {
document.getElementById("welcome").innerHTML=
"🎉 Welcome " + name + " to Student Lifesaver AI";

}
}
function darkMode(){

document.body.classList.toggle("dark");

}
function sendMessage() {
    alert("Message Sent Successfully!");
}
document.getElementById("question").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        chatbot();
    }
});