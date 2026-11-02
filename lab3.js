

let tasks = [];

const btn = document.getElementById("addtask");
btn.addEventListener('click',addtask);
function addtask(){
    const input = document.getElementById("real").value;
    tasks.push(input);
    render();
}

function render(){
    const c = document.getElementById("list");
    c.textContent="";
    for(let i=0;i<tasks.length;i++){
        const news = document.createElement("tasks");
        news.textContent = tasks[i]; 
        c.append(news)
    }
}
