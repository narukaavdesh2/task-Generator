const container = document.querySelector(".container");
const form = document.querySelector("form")
const textArea = document.getElementById("taskDetail");
const titile = document.getElementById("task");

const tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

showAllTask();

function showAllTask() {
    tasks.forEach((value,index)=>{
        const div = document.createElement("div");
        div.setAttribute("class","para");

        const innerdiv = document.createElement("div");
        innerdiv.setAttribute("class","inner");
        div.append(innerdiv)

        const p = document.createElement("p");
        p.innerText = value.title;
        innerdiv.append(p);

        const  span = document.createElement("span");
        span.innerText = value.description;
        innerdiv.append(span);
        
        const subBtn = document.createElement("button");
        subBtn.setAttribute("id","sub");
        subBtn.innerText="-";
        div.append(subBtn);

        subBtn.addEventListener("click",()=>{
            removeAllTasks();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showAllTask();
        })

        container.append(div);


    })
    
}

function removeAllTasks()
{
     tasks.forEach((value) =>{
        const div = document.querySelector(".para");
        div.remove();
     });
}



form.addEventListener("submit",(e) =>{
    e.preventDefault();
    removeAllTasks();
    tasks.push({
        title: titile.value,
        description: textArea.value,
    });

    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTask();
    
})