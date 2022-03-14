const  lis = document.querySelectorAll("#main-section > ul > li");

function eventHandler(e){
    console.log(this.innerHTML + "를 클릭하셨습니다.");

    for(var i=0; i<lis.length; i++){
        lis[i].style.border = "1px solid black"
    }
    this.style.border = "1px solid skyblue";
}

for(var i=0; i < lis.length; i++){
    lis[i].addEventListener("click", eventHandler);
}