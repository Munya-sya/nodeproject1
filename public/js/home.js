
    function calculateBMI(){
        var height = document.getElementById("height").value;
        var weight = document.getElementById("weight").value;
       calculate(height,weight);
    }

function calculate(height, weight){
    var result =  weight/(height * height);
   return result;
   diagnose(result);
}
function diagnose(result){
    var diagnosis;
    if (result <=18.5){
        diagnosis = "Under Weight";
    }else if(result >18.5 && result <=24.9){
        diagnosis = "Normal Weight";
    }else if(result >24.9 && result <=29.9){
        diagnosis = "Normal Weight";
    }else{
        diagnosis = "Obesity";
    }
    return diagnosis;
    console.log(diagnosis);
    
}
module.exports = {calculate, diagnose};