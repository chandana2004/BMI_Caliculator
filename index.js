function category1(bmi){

if(bmi<18.5)
    {
        return "underweight";
    }
    else if(bmi>=18.5&&bmi<=24.9)
    {
        return "normal";
    }
    else if(bmi>25&&bmi<=29.9)
    {
        return "overweight";
    }
    else if(bmi>30&&bmi<=34.9){
        return "obese";
    }
    else{
        return "extreme obese"
    }
}


function btn(){
    const weight=document.getElementById("wt").value
    let height=document.getElementById("ht").value
    console.log(weight);
    console.log(height);
    height=height*0.304;
    const  total_bmi=weight/(height*height);
    document.getElementById("bmi").innerHTML="BMI: "+Math.round(total_bmi);
    const bmi =category1(total_bmi);
    let normal_weight=24.9*height*height;
    let weight_to_be_reduced=weight-normal_weight;
    document.getElementById("category").innerHTML="Category: "+bmi;
    document.getElementById("message").innerHTML="Please consider this excess or low: "+Math.round(weight_to_be_reduced) + "Kgs";
    

    
}



