function number(num){
        var result = document.getElementById("inputfield");
        result.value += num;
}

function clearResult(){
    var result = document.getElementById("inputfield");
    result.value = "";
}

function getResult(){
    var result = document.getElementById("inputfield");
    result.value = eval(result.value);
}

function power(){
    var x = document.getElementById("inputfield").value;
    var y = Math.pow(x,2);
    document.getElementById("inputfield").value = y;
}

function cube(){
    var x = document.getElementById("inputfield").value;
    var y = Math.pow(x,3);
    document.getElementById("inputfield").value = y;
}