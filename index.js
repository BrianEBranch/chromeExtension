
function buttonClicked(){
    console.log("Button Clicked!");
}

let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function(){
    console.log("Button clicked from addEventListener");
})