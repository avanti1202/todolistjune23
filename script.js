
const inputField = document.getElementById("input-field");
const taskList = document.getElementById("task-list");

//Function to add Todo
function addTodo() {
   if ((inputField.value == "") || (inputField.value.trim() == ""))
   // (inputField.value.trim().length < 2) )  || (! inputField.value.match (/^[A-Za-z ]+$/)) 
   {
      alert("Please enter a valid input");
   }
   else {
      let list = document.createElement("li");
      list.innerHTML = inputField.value;
      taskList.appendChild(list);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      list.appendChild(span);
   }
   inputField.value = ("");
   saveTodo();
}

taskList.addEventListener("click", function (e) {
   if (e.target.tagName == "LI") {
      e.target.classList.toggle("complete");
      saveTodo();
   }
   else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveTodo();
   }
}, false);





