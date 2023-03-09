 
    function YearMonthSelect(invar) {
        
        if (invar.innerText == "År"){
        
            invar.style.background = "rgb(214, 228, 247)"; 
            document.getElementById("monthSelect").style.background = "rgb(241, 240, 244)"; 
            document.getElementById("monthSelectDiv1").style.visibility = "hidden"; 
            document.getElementById("monthSelectDiv2").style.visibility = "hidden"; document.getElementById("monthSelectDiv3").style.visibility = "hidden"; document.getElementById("monthSelectDiv4").style.visibility = "hidden"; document.getElementById("monthSelectDiv5").style.visibility = "hidden"; document.getElementById("monthSelectDiv6").style.visibility = "hidden"; document.getElementById("monthSelectDiv7").style.visibility = "hidden"; document.getElementById("monthSelectDiv8").style.visibility = "hidden"; 
            
            
        } else {
            invar.style.background = "rgb(214, 228, 247)"; 
            document.getElementById("yearSelect").style.background = "rgb(241, 240, 244)"; 
            document.getElementById("monthSelectDiv1").style.visibility = "visible"; 
            document.getElementById("monthSelectDiv2").style.visibility = "visible"; 
            document.getElementById("monthSelectDiv3").style.visibility = "visible"; 
            document.getElementById("monthSelectDiv4").style.visibility = "visible"; 
            document.getElementById("monthSelectDiv5").style.visibility = "visible"; 
            document.getElementById("monthSelectDiv6").style.visibility = "visible"; 
            document.getElementById("monthSelectDiv7").style.visibility = "visible"; 
            document.getElementById("monthSelectDiv8").style.visibility = "visible"; 
        }
        
        RandomeChart(); 
        
    }

    function YMSelect(invar) {
        if (invar.style.background == "rgb(214, 228, 247)"){
            invar.style.background = "rgb(241, 240, 244)";
            } else {
            invar.style.background = "rgb(214, 228, 247)";
        }
        RandomeChart();
    }



  
    function myFunction(invar) {
    console.log(invar.style.background);
      
    
    if (invar.innerText == "MWh"){
        
    invar.style.background = "rgb(214, 228, 247)"; 
    document.getElementById("TSEKbtn").style.background = "rgb(241, 240, 244)";  
    document.getElementById("KgCO2btn").style.background = "rgb(241, 240, 244)";  
        
    } else if (invar.innerText == "TSEK"){
    
    invar.style.background = "rgb(214, 228, 247)"; 
    document.getElementById("MWhbtn").style.background = "rgb(241, 240, 244)";  
    document.getElementById("KgCO2btn").style.background = "rgb(241, 240, 244)";  
        
    } else {
        
    invar.style.background = "rgb(214, 228, 247)"; 
    document.getElementById("MWhbtn").style.background = "rgb(241, 240, 244)";  
    document.getElementById("TSEKbtn").style.background = "rgb(241, 240, 244)";   
        
    }
        
    RandomeChart(); 


    
    };

function RandomeChart(){
    document.getElementById("bigMapChartDiv").innerHTML = "";
     var x = document.createElement("CANVAS");
        
    document.getElementById("bigMapChartDiv").appendChild(x);
        
    let data = [1, 10, 5, 2, 20, 30, 45, 3];
      
    let data1 = data.map(x => Math.floor(Math.random() * 50));    
    let data2 = data.map(x => Math.floor(Math.random() * 50));
    let data3 = data.map(x => Math.floor(Math.random() * 50));
    let data4 = data.map(x => Math.floor(Math.random() * 50));
    let data5 = data.map(x => Math.floor(Math.random() * 50));
    
    new Chart(x, {
    type: 'bar',
    data: {
      labels: ['Kontor', 'Pumprum', 'Fläktrum', 'Matsal', 'Kök', 'Ventilationscentral', 'Fabrik 1', 'Fabrik 2'],
      datasets: [{
        label: 'El',
        data: data1,
        borderWidth: 1
      }, 
        {
        label: 'Kol',
        data: data2,
        borderWidth: 1
      }, 
                        {
        label: 'Naturgas',
        data: data3,
        borderWidth: 1
      },
                        {
        label: 'Olja',
        data: data4,
        borderWidth: 1
      }, 
                       {
        label: 'Koks',
        data: data5,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
            beginAtZero: true,
            stacked: true
        }, 
         x: {
            stacked:true
          }
      }
    }
  });
    
};

function changeSelect() {
   $('.selectpicker').on('change', function(){
    var selected = $(this).val();
    alert(selected);
  });
};
