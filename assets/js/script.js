
    
    function loadBudgetChart(){
      console.log("loaded");
    }


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
        RandomeChart('bigMapChartDiv');
    }


    function myBudgetFunction(invar){
      if (invar.innerText == "MWh"){
            
        invar.style.background = "rgb(214, 228, 247)"; 
        document.getElementById("TSEKBudget").style.background = "rgb(241, 240, 244)";  
        document.getElementById("kgCO2Budget").style.background = "rgb(241, 240, 244)";  
            
        } else if (invar.innerText == "TSEK"){
        
        invar.style.background = "rgb(214, 228, 247)"; 
        document.getElementById("MWHBudget").style.background = "rgb(241, 240, 244)";  
        document.getElementById("kgCO2Budget").style.background = "rgb(241, 240, 244)";  
            
        } else {
            
        invar.style.background = "rgb(214, 228, 247)"; 
        document.getElementById("MWHBudget").style.background = "rgb(241, 240, 244)";  
        document.getElementById("TSEKBudget").style.background = "rgb(241, 240, 244)";   
            
        }
            
        RandomeChartBudget('bigBudgetDiv');
    
    };

    function YSelectBudget(invar) {
      if (invar.style.background == "rgb(214, 228, 247)"){
          invar.style.background = "rgb(241, 240, 244)";
          } else {
          invar.style.background = "rgb(214, 228, 247)";
      }
      RandomeChartBudget('bigBudgetDiv');
  }

  function RandomeChartBudget(indiv){
    document.getElementById(indiv).innerHTML = "";
     var x = document.createElement("CANVAS");
        
    document.getElementById(indiv).appendChild(x);
        
    let data = [12, 19, 3, 5, 2, 5, 4, 7, 5, 6, 7 ,8 ,9];
      
    let data1 = data.map(x => Math.floor(Math.random() * 50));    
    let data2 = data1; 

    
    new Chart(x, {
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Sep', 'Okt', 'Nov', 'Dec'],
          datasets: [                                            {
          type: 'line',
          label: 'Budget',
          data: data1,
          borderWidth: 1, 
          backgroundColor: '#42474E',
          },{
          type: 'bar',
          label: 'Utfall',
          data: data1,
          borderWidth: 1, 
          backgroundColor: ['#9ACBFF', '#9ACBFF', '#9ACBFF', '#9ACBFF','#9ACBFF', '#9ACBFF','#9ACBFF', '#9ACBFF','#9ACBFF', '#9ACBFF','#9ACBFF', '#9ACBFF'],
          }
      
      ]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,
                  display:true
              }, 
              x: {
                  stacked:false, 
                  display:false
              }
          }, 
          events: ['mousemove','click'],
          
          onClick: (e) => {
              alert("Du klicka på grafen"); 
          }
      }
      });
    
};





  
    function myFunction(invar, indiv) {
      
    
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
        
    RandomeChart(indiv); 


    
    };

function RandomeChart(indiv){
    document.getElementById(indiv).innerHTML = "";
     var x = document.createElement("CANVAS");
        
    document.getElementById(indiv).appendChild(x);
        
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
        backgroundColor:'#FFB4AB',
      }, 
        {
        label: 'Kol',
        data: data2,
        backgroundColor:'#4B9200',
      }, 
                        {
        label: 'Naturgas',
        data: data3,
        backgroundColor:'#920028',
      },
                        {
        label: 'Olja',
        data: data4,
        backgroundColor:'#9ACBFF',
      }, 
                       {
        label: 'Koks',
        data: data5,
        backgroundColor:'#6750A4',
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

    if (selected == "MWh/omsatt TSEK") {
      document.getElementById("benchmark").innerHTML=""; 
      var elem = document.createElement("img");
      elem.setAttribute("src", "assets/img/benchmark-mwh-omsatt-tsek.jpg");
      elem.setAttribute("class", "img-fluid")
      document.getElementById("benchmark").appendChild(elem);

      document.getElementById("benchmark-info").innerHTML="<p id='benchmark-info' style='color: rgb(33,37,41);font-size: 1vw;text-align: center;margin-bottom: 0px;'>Plåt AB:s <strong>energiförbrukning (MWh) per anställd</strong> är <strong>17% lägre än genomsnittet</strong> inom branschen.</p>";
    }
  });
};

function myMeasureFunction(invar){

  if (invar.innerText == "MWh"){
        
    invar.style.background = "rgb(214, 228, 247)"; 
    document.getElementById("TSEKMeasure").style.background = "rgb(241, 240, 244)";  
    document.getElementById("kgCO2Measure").style.background = "rgb(241, 240, 244)";  
        
    } else if (invar.innerText == "TSEK"){
    invar.style.background = "rgb(214, 228, 247)"; 
    document.getElementById("MWHMeasure").style.background = "rgb(241, 240, 244)";  
    document.getElementById("kgCO2Measure").style.background = "rgb(241, 240, 244)";  
        
    } else {
        
    invar.style.background = "rgb(214, 228, 247)"; 
    document.getElementById("MWHMeasure").style.background = "rgb(241, 240, 244)";  
    document.getElementById("TSEKMeasure").style.background = "rgb(241, 240, 244)";   
        
    }
        
};

function myScopeFunction(invar){

  if (invar.innerText == "År"){
        
    invar.style.background = "rgb(214, 228, 247)"; 
    document.getElementById("month").style.background = "rgb(241, 240, 244)";  
    document.getElementById("week").style.background = "rgb(241, 240, 244)";  
        
    } else if (invar.innerText == "Månad"){
    invar.style.background = "rgb(214, 228, 247)"; 
    document.getElementById("year").style.background = "rgb(241, 240, 244)";  
    document.getElementById("week").style.background = "rgb(241, 240, 244)";  
        
    } else {
        
    invar.style.background = "rgb(214, 228, 247)"; 
    document.getElementById("year").style.background = "rgb(241, 240, 244)";  
    document.getElementById("month").style.background = "rgb(241, 240, 244)";   
        
    }
        
};

function myYearFunction(invar){

  if (invar.innerText == "1 år"){
        
    invar.style.background = "rgb(214, 228, 247)"; 
    document.getElementById("2year").style.background = "rgb(241, 240, 244)";  
    document.getElementById("5year").style.background = "rgb(241, 240, 244)";  
    document.getElementById("10year").style.background = "rgb(241, 240, 244)"; 
        
    } else if (invar.innerText == "2 år"){
    invar.style.background = "rgb(214, 228, 247)"; 
    document.getElementById("1year").style.background = "rgb(241, 240, 244)";  
    document.getElementById("5year").style.background = "rgb(241, 240, 244)";  
    document.getElementById("10year").style.background = "rgb(241, 240, 244)"; 
    
  } else if (invar.innerText == "5 år"){
    invar.style.background = "rgb(214, 228, 247)"; 
    document.getElementById("2year").style.background = "rgb(241, 240, 244)";  
    document.getElementById("1year").style.background = "rgb(241, 240, 244)";  
    document.getElementById("10year").style.background = "rgb(241, 240, 244)";  

    } else {
        
    invar.style.background = "rgb(214, 228, 247)"; 
    document.getElementById("1year").style.background = "rgb(241, 240, 244)";  
    document.getElementById("2year").style.background = "rgb(241, 240, 244)";  
    document.getElementById("5year").style.background = "rgb(241, 240, 244)";    
        
    }
        
};

function changeIcon(anchor) {
  var icon = anchor.querySelector("i");
  icon.classList.toggle('bi-star');
  icon.classList.toggle('bi-star-fill');
}


function newActivity() {
  alert("Du har lagt till en ny aktivitet!");
}

function newMeasure() {
  alert("Du har lagt till en ny åtgärd!");
}