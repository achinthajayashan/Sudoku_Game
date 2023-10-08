

clickVal=0
maxClicks=15

$('#clickTxt').text(clickVal);

$('.digitSelect').click(function (){
    newVal =this.innerText;

})


$('.digit').click(function () {
    this.innerText=newVal;
    clickVal++;
    $('#clickTxt').text(clickVal)
    checkClicks();
    getValues();
});

function checkClicks() {
    if (clickVal==maxClicks){
        alert("Game Over... Out Of Clicks...");
    }
}

function getValues() {
     r1c1=$('#r1c1').text();
     r1c2=$('#r1c2').text();
     r1c3=$('#r1c3').text();
     r1c4=$('#r1c4').text();
     r2c1=$('#r2c1').text();
     r2c2=$('#r2c2').text();
     r2c3=$('#r2c3').text();
     r2c4=$('#r2c4').text();
     r3c1=$('#r3c1').text();
     r3c2=$('#r3c2').text();
     r3c3=$('#r3c3').text();
     r3c4=$('#r3c4').text();
     r4c1=$('#r4c1').text();
     r4c2=$('#r4c2').text();
     r4c3=$('#r4c3').text();
     r4c4=$('#r4c4').text();



}


$('.submitBtn').click(function () {

    checkStatus();

    const realTotal=10;

    if ((r1==realTotal)&&(r2==realTotal)&&(r3==realTotal)&&(r4==realTotal)&&(c1==realTotal)&&(c2==realTotal)&&(c3==realTotal)&&(c4==realTotal)){
        // alert("Congratulations !.... Level 01 Completed !")
        Swal.fire({
            icon: 'success',
            title: 'Level Completed',
            text: 'Go To Next Level',
            // footer: '<a href="">Why do I have this issue?</a>'
        })

    }else {
        // alert("Sorry.... Try Again ....")
        Swal.fire({
            icon: 'error',
            title: 'Game Over',
            text: 'Try Again...',
            // footer: '<a href="">Why do I have this issue?</a>'
        })
    }




})

function checkStatus(){
      r1= Number(r1c1)+Number(r1c2)+Number(r1c3)+Number(r1c4);
      r2= Number(r2c1)+Number(r2c2)+Number(r2c3)+Number(r2c4);
      r3= Number(r3c1)+Number(r3c2)+Number(r3c3)+Number(r3c4);
      r4= Number(r4c1)+Number(r4c2)+Number(r4c3)+Number(r4c4);
      c1= Number(r1c1)+Number(r2c1)+Number(r3c1)+Number(r4c1);
      c2= Number(r1c2)+Number(r2c2)+Number(r3c2)+Number(r4c2);
      c3= Number(r1c3)+Number(r2c3)+Number(r3c3)+Number(r4c3);
      c4= Number(r1c4)+Number(r2c4)+Number(r3c4)+Number(r4c4);
}










