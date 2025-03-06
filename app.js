let inp=document.querySelector('input');
let btn=document.querySelector(".enter");
let ul=document.querySelector('ul');

btn.addEventListener("click",function(){
    let task=document.createElement('li');
    task.innerText=inp.value;

    let delBtn=document.createElement('BUTTON');
    delBtn.className="fa-solid fa-xmark";
    task.appendChild(delBtn);
    ul.appendChild(task);
    inp.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let parent=event.target.parentElement;
        console.log("completed task:",parent.innerText);
        parent.remove();
    }
})