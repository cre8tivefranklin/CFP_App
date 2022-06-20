//var slider = document.getElementById("f0").value;
//var output = document.getElementById("demo");
//output.innerHTML = slider.value;

//slider.oninput = function() {
//  output.innerHTML = this.value;
//}

var cfp =  document.getElementById('form');
function media(form){
  if(form.matches){
    cfp.classList.remove('row');
  }
}




///FOOD
function infoCard_0(){
  var card0 = document.getElementById("card");
   card0.classList.toggle("C");
}

function infoCard_1(){
  var card1 = document.getElementById("card_1");
   card1.classList.toggle("C_1");
}

function infoCard_5(){
  var card5 = document.getElementById("card_5");
   card5.classList.toggle("C_5");
}


///ENERGY


///TRANSPORTATION


function charting(){

var disForm = document.getElementById('form').style.display = 'none';
var disText = document.getElementById('text').style.display = 'none';
var showFormula = document.getElementById('CFP-form').style.display = 'block';

document.getElementById('chart-container').style.display = 'block';


  

  //variables for removing sliders
  // when function charting() ==> remove css #text, #form

  new RGraph.SVG.Rose({
    
    id: 'chart-container',
    data:
      [
          //tn
          (document.getElementById("t0").value + document.getElementById("t1").value + document.getElementById("t2").value + document.getElementById("t3").value + document.getElementById("t4").value + document.getElementById("f5").value)/100000
          ,
          //fn
          //PRODUCE AN EQUATION FOR RETURNING A SMALLER VALUE FOR fn
          (document.getElementById("f0").value + document.getElementById("f1").value + document.getElementById("f2").value + document.getElementById("f3").value + document.getElementById("f4").value + document.getElementById("f5").value)/100000
          ,

          //en 
          0

        ],
    options: {
         colors: [ 'rgba(255,0,0,0.5)', 'rgba(0,255,0,0.5)', 'rgba(0,0,255,0.5)' ],
          backgroundGridRadialsCount: 0,
          linewidth: 0,
          amargin: '10deg',
          labels: ['Transportation','Food','Energy'],
          tooltips: '%{property:labels[%{dataset}]}',
          linewidth: .5
      }
  }).draw();

}



