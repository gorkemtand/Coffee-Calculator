var style = "";
var ratio = "";
var cupsOfCoffee = 1;
var water = 0;
var coffe = 0;


$(".input-group img").click(function(){
    $("#method-h3").addClass("hidden");
    $(".input-group").fadeOut();
    $(".costomize").fadeIn();
    style = $(this).attr("alt");
});



$(".ratio-of-coffee button").click(function(){
    ratio = $(this).html();
});


$(".calculation-btn").click(function(){
    cupsOfCoffee = document.getElementById("cups").value;
    $(".costomize").fadeOut();
    $("#result").fadeIn();

    switch(style){
        
        case "FRENCH PRESS":
            water = 180.00*cupsOfCoffee;
            $("#result .final-img").attr("src","images/frenchpress-emoji.png")
            switch (ratio){
                case "MILD":
                    coffe = 10.00*cupsOfCoffee;
                    finalResults();
                    break;
                
                case "NORMAL":
                    coffe = 12.00*cupsOfCoffee;
                    finalResults();
                    break;
                
                case "STRONG":
                    coffe = 15.00*cupsOfCoffee;
                    finalResults();
                    break;
            }
            break;
        
        case "CHEMEX":
            water = 118.00*cupsOfCoffee;
            $("#result .final-img").attr("src","images/chemex-emoji.png")
            switch (ratio){
                
                case "MILD":
                    coffe = 7.00*cupsOfCoffee;
                    finalResults();
                    break;
                
                case "NORMAL":
                    coffe = 8.00*cupsOfCoffee;
                    finalResults();
                    break;
                
                case "STRONG":
                    coffe = 10.00*cupsOfCoffee;
                    finalResults();
                    break;
            }
            break;
        
        case "MOKA POT":
            water = 60.00*cupsOfCoffee;
            $("#result .final-img").attr("src","images/moka-pot-emoji.png")
            switch (ratio){
                
                case "MILD":
                    coffe = 3.48*cupsOfCoffee;
                    finalResults();
                    break;
                
                case "NORMAL":
                    coffe = 6.00*cupsOfCoffee;
                    finalResults();
                    break;
                
                case "STRONG":
                    coffe = 8.57*cupsOfCoffee;
                    finalResults();
                    break;
            }
            break;
        
        case "SIPHON":
            water = 180.00*cupsOfCoffee;
            $("#result .final-img").attr("src","images/siphon-emoji.png")
            switch (ratio){
                
                case "MILD":
                    coffe = 10.00*cupsOfCoffee;
                    finalResults();
                    break;
                
                case "NORMAL":
                    coffe = 12.00*cupsOfCoffee;
                    finalResults();
                    break;
                
                case "STRONG":
                    coffe = 15.00*cupsOfCoffee;
                    finalResults();
                    break;
            }
            break;
        
        case "AEROPRESS":
            water = 180.00*cupsOfCoffee;
            $("#result .final-img").attr("src","images/aeropress-emoji.png")
            switch (ratio){
                
                case "MILD":
                    coffe = 10.00*cupsOfCoffee;
                    finalResults();
                    break;
                
                case "NORMAL":
                    coffe = 12.00*cupsOfCoffee;
                    finalResults();
                    break;
                
                case "STRONG":
                    coffe = 18.00*cupsOfCoffee;
                    finalResults();
                    break;
            }
            break;

        case "POUR OVER":
            water = 180.00*cupsOfCoffee;
            $("#result .final-img").attr("src","images/pour-over-emoji.png")
            switch (ratio){
                    
                case "MILD":
                    coffe = 10.00*cupsOfCoffee;
                    finalResults();
                    break;
                    
                case "NORMAL":
                    coffe = 10.80*cupsOfCoffee;
                    finalResults();
                    break;
                    
                case "STRONG":
                    coffe = 12.00*cupsOfCoffee;
                    finalResults();
                    break;
            }
            break;
    }
});


function finalResults(){
    $("#result-coffee").html(coffe+ " GRAMS OF COFFEE GROUNDS");
    $("#result-water").html(water+ " GRAMS OF WATER");
    if(cupsOfCoffee=== '1'){
        var cupWord = "CUP"
    }else if (cupsOfCoffee> '1'){
        cupWord = "CUPS"
    }
    $("#final-result").html(cupsOfCoffee + " " + cupWord + " OF " + ratio + " " + style);
}


//----------------------- BACK BUTTONS ---------------------------//

$("#result .result-goBack").click(function(){
    $("#result").fadeOut();
    $(".costomize").fadeIn();
});


$("#adjusting-coffee .costomize-goBack").click(function(){
    $(".costomize").fadeOut();
    $("#method-h3").removeClass("hidden");
    $(".input-group").fadeIn();
});

