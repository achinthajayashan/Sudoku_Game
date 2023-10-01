

$('.digitSelect').click(function (){
    newVal =this.innerText;
})


$('button').click(function () {
    this.innerText=newVal;
});