let inputArray = [];
function storeInput(){
    var data = document.getElementById("friendsname");
    var datavalue = data.value;
    let datalength = datavalue.length;
    if (datalength > 0 ){
        inputArray.push(datavalue);
        console.log(inputArray)
    }else{alert("Enter A Name!")}

}
function luck(){
    let x = Math.random();
    x = Math.floor(x * inputArray.length);
    let loser = inputArray[x];
    document.getElementById("result").innerHTML = "The Unlucky Person Is :"+ loser ; 
}
function reload(){
    window.location.reload();
}