const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ''){
        alert("Write something !!");
    }
    else{
        let li = document.createElement("li");  //put a new li in the list
        li.innerHTML = inputBox.value;  //put the value of the inputBox as the title of the li "innerHTML" = the text in the li
        listContainer.appendChild(li);  //
    
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML); //Save all the data that are in the listContainer
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); //Help to show the task even you quit the window
}
showTask();