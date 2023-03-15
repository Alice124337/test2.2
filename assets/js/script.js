
    
    function loadBudgetChart(){
      console.log("loaded");
    }


    // function to change the accordion to the reduced version used in sankey and efect 
    function reducedAcordion(){
      document.getElementById("accordion-1").innerHTML= "\
      <div class='accordion-item'>\
        <h2 style='color: white;' class='accordion-header' role='tab'><button id='bigdrop' class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-1' aria-expanded='true' aria-controls='accordion-1 .item-1'>Tidsperiod</button></h2>\
        <div class='accordion-collapse collapse show item-1' role='tabpanel' data-bs-parent='#accordion-1'>\
            <div class='accordion-body' style='margin: 0vw;padding:0.65vw'>\
                <div class='btn-group' role='group'><button id='yearbutton' class='btn btn-primary' type='button' style='background: #f1f0f4;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;border-right: 1px solid #d6e4f7;'>År</button><button class='btn btn-primary' type='button' style='background: #d6e4f7;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;border-right: 1px solid #d6e4f7;'>Månad</button><button class='btn btn-primary' type='button' style='background: #f1f0f4;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;'>Vecka</button><button class='btn btn-primary' type='button' style='background: #f1f0f4;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;'>Dag</button></div>\
                <div class='input-group input-group-sm mb-3'>\
                    <span style='background-color:#d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='input-group-text'><i class='icon ion-android-menu' style='font-size: 0.85vw;'></i></button></span>\
                    <input style='background-color: #d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='form-control form-control-sm' type='text' placeholder='Sök efter tidsperiod'>\
                </div>\
                <ul class='list-group list-group-flush'>\
                    <li id='bigliitem' class='list-group-item'>Januari 2020<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                    <li id='bigliitem' class='list-group-item'>Januari 2019<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                    <li id='bigliitem' class='list-group-item'>Februari 2020<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                    <li id='bigliitem' class='list-group-item'>Februari 2019<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                    <li id='bigliitem' class='list-group-item'>Mars 2020<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                    <li id='bigliitem' class='list-group-item'>Mars 2019<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                </ul>\
            </div>\
        </div>\
      </div>";
    }

    //function to change the accordion to the expanded version 
    function resetAccordion(){
      document.getElementById("accordion-1").innerHTML="\
                                             <div class='accordion-item'>\
                                                <h2 style='color: white;' class='accordion-header' role='tab'><button id='bigdrop' class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-1' aria-expanded='true' aria-controls='accordion-1 .item-1'>Tidsperiod</button></h2>\
                                                <div class='accordion-collapse collapse show item-1' role='tabpanel' data-bs-parent='#accordion-1'>\
                                                    <div class='accordion-body' style='margin: 0vw;padding:0.65vw'>\
                                                        <div class='btn-group' role='group'><button id='yearbutton' class='btn btn-primary' type='button' style='background: #f1f0f4;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;border-right: 1px solid #d6e4f7;'>År</button><button class='btn btn-primary' type='button' style='background: #d6e4f7;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;border-right: 1px solid #d6e4f7;'>Månad</button><button class='btn btn-primary' type='button' style='background: #f1f0f4;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;'>Vecka</button><button class='btn btn-primary' type='button' style='background: #f1f0f4;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;'>Dag</button></div>\
                                                        <div class='input-group input-group-sm mb-3'>\
                                                            <span style='background-color:#d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='input-group-text'><i class='icon ion-android-menu' style='font-size: 0.85vw;'></i></button></span>\
                                                            <input style='background-color: #d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='form-control form-control-sm' type='text' placeholder='Sök efter tidsperiod'>\
                                                         </div>\
                                                        <ul class='list-group list-group-flush'>\
                                                            <li id='bigliitem' class='list-group-item'>Januari 2020<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                                                            <li id='bigliitem' class='list-group-item'>Januari 2019<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                                                            <li id='bigliitem' class='list-group-item'>Februari 2020<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                                                            <li id='bigliitem' class='list-group-item'>Februari 2019<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                                                            <li id='bigliitem' class='list-group-item'>Mars 2020<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                                                            <li id='bigliitem' class='list-group-item'>Mars 2019<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                                                        </ul>\
                                                    </div>\
                                                </div>\
                                            </div>\
                                            <div class='accordion-item'>\
                                                <h2  class='accordion-header' role='tab'><button id='bigdrop' class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-2' aria-expanded='false' aria-controls='accordion-1 .item-2'>Anläggning</button></h2>\
                                                <div class='accordion-collapse collapse item-2' role='tabpanel' data-bs-parent='#accordion-1'>\
                                                    <div class='accordion-body' style='margin: 0vw;padding:0.65vw'>\
                                                        <p style='margin-bottom: 0.65vw; font-size: 0.85vw;'>Välj anläggningar att visa</p>\
                                                        <div style='border-top-style: solid; border-top-color: #C2C7CF;' id='bigcheck'  class='form-check'>\
                                                            <input style='margin-bottom: 1vw;'class='form-check-input' type='checkbox' id='flexSwitchCheckDefault'>\
                                                            <label class='form-check-label' for='flexSwitchCheckDefault'>Narvik </label>\
                                                        </div>\
                                                        <div id='bigcheck' class='form-check'>\
                                                            <input class='form-check-input' type='checkbox' id='flexSwitchCheckDefault'>\
                                                            <label class='form-check-label' for='flexSwitchCheckDefault'>Oslo</label>\
                                                        </div>\
                                                        <div style='border-bottom-style: solid; border-bottom-color: #C2C7CF;' id='bigcheck' class='form-check'>\
                                                            <input class='form-check-input' type='checkbox' id='flexSwitchCheckDefault'>\
                                                            <label class='form-check-label' for='flexSwitchCheckDefault'>Sveg</label>\
                                                        </div>\
                                                    </div>\
                                                </div>\
                                            </div>\
                                            <div class='accordion-item'>\
                                                <h2 class='accordion-header' role='tab'><button  id='bigdrop' class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-4' aria-expanded='false' aria-controls='accordion-1 .item-4'>Funktion</button></h2>\
                                                <div class='accordion-collapse collapse item-4' role='tabpanel' data-bs-parent='#accordion-1'>\
                                                    <div class='accordion-body' style='margin: 0vw;padding:0.65vw'>\
                                                        <div class='input-group input-group-sm mb-3'>\
                                                            <span style='background-color:#d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='input-group-text'><i class='icon ion-android-menu' style='font-size: 0.85vw;'></i></button></span>\
                                                            <input style='background-color: #d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='form-control form-control-sm' type='text' placeholder='Sök efter funktion'>\
                                                         </div>\
                                                        <ul class='list-group list-group-flush'>\
                                                            <li id='bigliitem' class='list-group-item'>Varmvatten<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                                                            <li id='bigliitem' class='list-group-item'>Tryckluft<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                                                        </ul>\
                                                    </div>\
                                                </div>\
                                            </div>\
                                            <div class='accordion-item'>\
                                                <h2 class='accordion-header' role='tab'><button id='bigdrop' class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-5' aria-expanded='false' aria-controls='accordion-1 .item-4'>Trend</button></h2>\
                                                <div class='accordion-collapse collapse item-5' role='tabpanel' data-bs-parent='#accordion-1'>\
                                                    <div class='accordion-body' style='margin: 0vw;padding:0.65vw'>\
                                                        <p style='margin-bottom: 0.65vw; font-size: 0.85vw;'>Välj anläggningar att visa</p>\
                                                        <div style='border-top-style: solid; border-top-color: #C2C7CF;' id='bigcheck'  class='form-check'>\
                                                            <input style='margin-bottom: 1vw;'class='form-check-input' type='checkbox' id='flexSwitchCheckDefault'>\
                                                            <label class='form-check-label' for='flexSwitchCheckDefault'>Historiskt snitt </label>\
                                                        </div>\
                                                        <div style='border-bottom-style: solid; border-bottom-color: #C2C7CF;' id='bigcheck' class='form-check'>\
                                                            <input class='form-check-input' type='checkbox' id='flexSwitchCheckDefault'>\
                                                            <label class='form-check-label' for='flexSwitchCheckDefault'>Justerat historiskt snitt</label>\
                                                        </div>\
                                                    </div>\
                                                </div>\
                                            </div>\
                                            <div class='accordion-item'>\
                                                <h2 class='accordion-header' role='tab'><button id='bigdrop' class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-6' aria-expanded='false' aria-controls='accordion-1 .item-4'>Referens</button></h2>\
                                                <div class='accordion-collapse collapse item-6' role='tabpanel' data-bs-parent='#accordion-1'>\
                                                    <div class='accordion-body' style='margin: 0vw;padding:0.65vw'>\
                                                        <p style='margin-bottom: 0.65vw; font-size: 0.85vw;'>Lägg till</p>\
                                                        <div class='input-group input-group-sm mb-3'>\
                                                            <input style='background-color: #d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='form-control form-control-sm' type='text' placeholder='Ange värde'>\
                                                            <span style='background-color:#d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='input-group-text'>MWh</span>\
                                                            <span style='background-color: #F1F0F4; margin-top: 0.65vw; font-size: 0.85vw;' class='input-group-text'>+</span>\
                                                        </div>\
                                                        <ul class='list-group list-group-flush'>\
                                                            <li id='bigliitem' class='list-group-item'>Ref 1: 1000 Mwh<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                                                        </ul>\
                                                    </div>\
                                                </div>\
                                            </div>";
    }


    // function to change the big component into the sankey chart 
    function changeToSankey(){
      document.getElementById("bigboxROW").innerHTML=""; 
      document.getElementById("rubricBigComp").innerHTML="Sankey<button class='btn' type='button'><i class='icon ion-ios-information-outline' style='font-size: 1.6vw;'></i></button>";
      document.getElementById("endusetab").className = "nav-link"; 
      document.getElementById("effecttab").className = "nav-link";
      document.getElementById("supliedenergytab").className = "nav-link";
      document.getElementById("sankeytab").className = "nav-link active";

      reducedAcordion();
      
      var elem = document.createElement("img");
      elem.setAttribute("src", "assets/img/sankey3.jpg");
      document.getElementById("bigboxROW").appendChild(elem);
    }


    // function to change the big component into the efect chart 
    function changeToEfect(){
      document.getElementById("bigboxROW").innerHTML=""; 
      document.getElementById("rubricBigComp").innerHTML="Förbrukad effekt<button class='btn' type='button'><i class='icon ion-ios-information-outline' style='font-size: 1.6vw;'></i></button>"; 
      document.getElementById("endusetab").className = "nav-link"; 
      document.getElementById("sankeytab").className = "nav-link";
      document.getElementById("supliedenergytab").className = "nav-link";
      document.getElementById("effecttab").className = "nav-link active";

      reducedAcordion();

      var x = document.createElement("CANVAS");

      var y = document.createElement("DIV");
      y.className = "col-xl-1 offset-xl-0";
      y.innerHTML = "<div class='btn-group-vertical btn-group-sm' role='group'><button id='MWhbtn' class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #D6E4F7;'>MW</button><button id='TSEKbtn' class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;'>TSEK</button></div>"
      document.getElementById("bigboxROW").appendChild(y);

      var z = document.createElement("DIV");
      z.className = "col-xl-11";
      z.id="innerboxdiv";
      document.getElementById("bigboxROW").appendChild(z);
         
     document.getElementById("innerboxdiv").appendChild(x);
         
     let data = [12, 19, 3, 5, 2, 5, 4, 7, 5, 6, 7 ,8 ,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
       
     let data1 = data.map(x => Math.floor(Math.random() * 20)+ 30);    
     let data2 = data1.map(x => Math.floor(Math.random() * 20) +30);
     // sets data to constant 
     let data3 = data1.map(x => 45);
 
     // chart for effect
     new Chart(x, {
       data: {
           labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32', '33', '34', '35', '36', '37', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
           datasets: [  
            {
              type: 'line',
              label: 'Effekttak',
              data: data3,
              borderWidth: 2, 
              borderColor: '#42474E',
              backgroundColor: '#42474E',
              },                                         
            {
           type: 'line',
           label: 'Januari 2020',
           data: data1,
           borderWidth: 2, 
           borderColor:'#9ACBFF',
           backgroundColor: '#9ACBFF',
           }, {
            type: 'line',
            label: 'Januari 2019',
            data: data2,
            borderWidth: 2, 
            borderColor: '#6750A4',
            backgroundColor: '#6750A4',
            },

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
           
        //    onClick: (e) => {
        //        alert("Du klicka på grafen"); 
        //    }, 
           elements: {
            point: {
              radius: 0,
            }, 
           }, 
           plugins: {
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                  usePointStyle: true, 
                  pointStyle:'circle', 
                  padding: 40,
              }
          }, subtitle : {
            display : true, 
            text: "Timmar", 
            position: 'bottom',
            padding: -50,
          }
           }
       }
       });
    }

    //Change the big div into the suplied energy chart
    function changeToSupliedEnergy() {

        document.getElementById("bigboxROW").innerHTML=""; 
        document.getElementById("rubricBigComp").innerHTML="Tillförd energi<button class='btn' type='button'><i class='icon ion-ios-information-outline' style='font-size: 1.6vw;'></i></button>"; 
        document.getElementById("endusetab").className = "nav-link"; 
        document.getElementById("sankeytab").className = "nav-link";
        document.getElementById("effecttab").className = "nav-link";
        document.getElementById("supliedenergytab").className = "nav-link active";

        resetAccordion();

  
        var x = document.createElement('CANVAS');
        x.id = 'bigChartCanvas';
  
        var y = document.createElement('DIV');
        y.className = "col-xl-1 offset-xl-0";
        y.innerHTML = "<div class='btn-group-vertical btn-group-sm' role='group'><button id='MWhbtn' class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #D6E4F7;'>MWh</button><button id='TSEKbtn' class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;'>TSEK</button><button id='KgCO2btn' class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;'>kgCO<sub>2</sub></button></div>"
        document.getElementById("bigboxROW").appendChild(y);
  
        var z = document.createElement("DIV");
        z.className = "col-xl-11";
        z.id="innerboxdiv";
        document.getElementById("bigboxROW").appendChild(z);
           
       document.getElementById("innerboxdiv").appendChild(x);

       const data = {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
        {
            type: 'line',
            label: 'Ref1',
            borderWidth: 2, 
            data: [1000, 1000, 1000, 1000, 1000, 1000],
            backgroundColor: ['#42474E'],
            borderWidth: 2, 
            borderColor: '#42474E',
            backgroundColor: '#42474E',
            elements: {
              point: {
              radius: 0,
              }, 
          },
            
        },{
          type: 'line',
          label: 'Historiskt snitt',
          borderWidth: 2, 
          data: [2700, 2900, 2900],
          backgroundColor: ['#00629F'],
          borderWidth: 2, 
          borderColor: '#00629F',
          backgroundColor: '#00629F',
          
      },
      {
        type: 'bar', 
        label: 'El',
        data: [2500, 2600, 2700],
        borderWidth: 0,
        backgroundColor:'#FFB4AB',
        borderColor:'#FFB4AB',
        stack: 'Stack 0', 
    }, {
        type: 'bar', 
        label: 'Kol',
        data: [1800, 1600, 0],
        borderWidth: 0, 
        backgroundColor:'#4B9200',
        stack: 'Stack 0'
    }, {
        type: 'bar', 
        label: 'Pellets',
        data: [0, 0, 1000],
        borderWidth: 0, 
        backgroundColor:'#00629F',
        stack: 'Stack 0', 
    },{
        type: 'bar', 
        label: 'Koks',
        data: [1600, 1700, 1500],
        borderWidth: 0, 
        backgroundColor:'#920028',
        stack: 'Stack 1', 
    },{
        type: 'bar', 
        label: 'Naturgas',
        data: [1000, 1100, 1500],
        borderWidth: 0, 
        backgroundColor:'#9ACBFF',
        stack: 'Stack 1', 
    },{
        type: 'bar', 
        label: 'Olja',
        data: [1000, 900, 1100],
        borderWidth: 0, 
        backgroundColor:'#6750A4',
        stack: 'Stack 1', 
    },
        ]
        };


        //top label plugin block 
        const topLabels = {
            id: 'topLabels', 
            afterDatasetDraw(chart, args, pluginOptions){
                const {ctx, scales: {x,y}} = chart; 

                ctx.font = '1.3vw roboto';
                ctx.fillStyle = '#333333';
                ctx.textAlign= 'center';

                ctx.font = '0.85vw roboto';
                ctx.fillStyle = '#333333';
                ctx.textAlign= 'center';
                
                for (let i = 0; i < 3; i ++){
                    ctx.fillText('2020', chart.getDatasetMeta(4).data[i].x, chart.getDatasetMeta(4).data[i].y - 15);
                    
                    ctx.fillText('2019', chart.getDatasetMeta(7).data[i].x, chart.getDatasetMeta(7).data[i].y - 15);
                }
            }
        }

        const config = {
        type: 'bar',
        data,
        options: {
            parsing:{
            xAxisKey:'id'
            },
            scales: {
                y: {
                    beginAtZero: true,
                    display:true,
                    stacked:true
                 }, 
                 x: {
                     stacked:true, 
                    display:true, 
                }
            }, 
             events: ['mousemove','click'],
        
            // onClick: (e) => {
            // alert("Du klicka på grafen"); 
            // },        
            //  elements: {
            //     point: {
            //     radius: 0,
            //     }, 
            // },
             plugins:{
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        usePointStyle: true, 
                        pointStyle:'circle', 
                        padding: 35,
                    }
             },           

        }, 
            responsive: true,
            animation: {
                duration: 1,
                onComplete: function () {
                // console.log(this.data);
                }
            }
               
        }, plugins: [ topLabels],
        
        };

        // render init block
        const myChart = new Chart(
        document.getElementById('bigChartCanvas'),
        config
        );

        // Instantly assign Chart.js version
        const chartVersion = document.getElementById('bigChartCanvas');
        chartVersion.innerText = Chart.version;
  

    }


    //change the big component into the end usage chart 
    function changeToEndusage(){

      document.getElementById("bigboxROW").innerHTML=""; 
      document.getElementById("rubricBigComp").innerHTML="Slutenergianvändning<button class='btn' type='button'><i class='icon ion-ios-information-outline' style='font-size: 1.6vw;'></i></button>"; 
      document.getElementById("endusetab").className = "nav-link active"; 
      document.getElementById("sankeytab").className = "nav-link";
      document.getElementById("effecttab").className = "nav-link";
      document.getElementById("supliedenergytab").className = "nav-link";

      resetAccordion();

      var x = document.createElement('CANVAS');
      x.id = 'bigChartCanvas';

      var y = document.createElement('DIV');
      y.className = "col-xl-1 offset-xl-0";
      y.innerHTML = "<div class='btn-group-vertical btn-group-sm' role='group'><button id='MWhbtn' class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #D6E4F7;'>MWh</button><button id='TSEKbtn' class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;'>TSEK</button><button id='KgCO2btn' class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;'>kgCO<sub>2</sub></button></div>"
      document.getElementById("bigboxROW").appendChild(y);

      var z = document.createElement("DIV");
      z.className = "col-xl-11";
      z.id="innerboxdiv";
      document.getElementById("bigboxROW").appendChild(z);
         
     document.getElementById("innerboxdiv").appendChild(x);


    const data = {
      labels: ['Slipning', 'Pumpning', 'Slipning', 'Pumpning', 'Slipning', 'Pumpning'],
      datasets: [
        {
            type: 'line',
            label: 'Ref1',
            borderWidth: 2, 
            data: [1000, 1000, 1000, 1000, 1000, 1000],
            backgroundColor: ['#42474E'],
            borderWidth: 2, 
            borderColor: '#42474E',
            backgroundColor: '#42474E',
            
        },
        {
            type: 'bar', 
            label: 'El',
            data: [1500, 2200, 1700, 1900, 2200, 1700],
            borderWidth: 0,
            backgroundColor:'#FFB4AB',
            borderColor:'#FFB4AB',
            stack: 'Stack 0', 
        }, {
            type: 'bar', 
            label: 'Kol',
            data: [800, 600, 700, 400, 0, 0],
            borderWidth: 0, 
            backgroundColor:'#4B9200',
            stack: 'Stack 0'
        }, {
            type: 'bar', 
            label: 'Pellets',
            data: [0, 0, 0, 100, 400, 300],
            borderWidth: 0, 
            backgroundColor:'#00629F',
            stack: 'Stack 0', 
        },{
            type: 'bar', 
            label: 'Koks',
            data: [600, 700, 500, 700, 600, 700],
            borderWidth: 0, 
            backgroundColor:'#920028',
            stack: 'Stack 1', 
        },{
            type: 'bar', 
            label: 'Naturgas',
            data: [1000, 1100, 1500, 1100, 1000, 900],
            borderWidth: 0, 
            backgroundColor:'#9ACBFF',
            stack: 'Stack 1', 
        },{
            type: 'bar', 
            label: 'Olja',
            data: [1000, 900, 1100, 900, 1000, 1200],
            borderWidth: 0, 
            backgroundColor:'#6750A4',
            stack: 'Stack 1', 
        },
      ]
    };


      //top label plugin block 
      const topLabels = {
          id: 'topLabels', 
          afterDatasetDraw(chart, args, pluginOptions){
              const {ctx, scales: {x,y}} = chart; 

              ctx.font = '1vw roboto';
              ctx.fillStyle = '#333333';
              ctx.textAlign= 'center';

              ctx.fillText('Jan', x.getPixelForValue(0.5), chart.chartArea.bottom + 30)
              ctx.fillText('Feb', x.getPixelForValue( 2.5), chart.chartArea.bottom + 30)
              ctx.fillText('Mar', x.getPixelForValue(4.5), chart.chartArea.bottom + 30)

              ctx.font = '0.85vw roboto';
              ctx.fillStyle = '#333333';
              ctx.textAlign= 'center';
              
              for (let i = 0; i < 6; i ++){
                  ctx.fillText('2020', chart.getDatasetMeta(3).data[i].x, chart.getDatasetMeta(3).data[i].y - 15);
                  
                  ctx.fillText('2019', chart.getDatasetMeta(6).data[i].x, chart.getDatasetMeta(6).data[i].y - 15);
              }
          }
      }

      const config = {
      type: 'bar',
      data,
      options: {
          parsing:{
          xAxisKey:'id'
          },
          scales: {
              y: {
                  beginAtZero: true,
                  display:true,
                  stacked:true
               }, 
               x: {
                   stacked:true, 
                  display:true, 
              }
          }, 
           events: ['mousemove','click'],
      
        //   onClick: (e) => {
        //   alert("Du klicka på grafen"); 
        //   },        
           elements: {
              point: {
              radius: 0,
              }, 
          }, plugins:{
              legend: {
                  display: true,
                  position: 'bottom',
                  labels: {
                      usePointStyle: true, 
                      pointStyle:'circle', 
                      padding: 35,
                  }
           },           

      }, 
          responsive: true,
          animation: {
              duration: 1,
              onComplete: function () {
            //   console.log(this.data);
              }
          }
             
      }, plugins: [ topLabels],
      
      };

      // render init block
      const myChart = new Chart(
      document.getElementById('bigChartCanvas'),
      config
      );

      // Instantly assign Chart.js version
      const chartVersion = document.getElementById('bigChartCanvas');
      chartVersion.innerText = Chart.version;

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
        
    let data = [1, 8, 3, 5, 2, 5, 4, 7, 5, 6, 7 ,8 ,9];
      
    let data1 = data.map(x => Math.floor(Math.random() * 1500) + 3000);    
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
                  display:true,
              }
          },
          plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true, 
                    pointStyle:'circle', 
                    padding: 15,
               }
            }
           },
          events: ['mousemove','click'],
          
          onClick: (e) => {
              alert("Du klicka på grafen"); 
          }
      }
      });
    
};

  
    function myFunction(invar) {
      
    
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
        
    RandomeChart('bigMapChartDiv'); 


    
    };

function RandomeChart(indiv){
    document.getElementById(indiv).innerHTML = "";
     var x = document.createElement("CANVAS");
        
    document.getElementById(indiv).appendChild(x);
        
    let data = [1, 5, 30, 10, 20, 10, 10, 3];
      
    let data1 = data.map(x => Math.floor(Math.random() * 1000));    
    let data2 = data.map(x => Math.floor(Math.random() * 1000));
    let data3 = data.map(x => Math.floor(Math.random() * 1000));
    let data4 = data.map(x => Math.floor(Math.random() * 1000));
    let data5 = data.map(x => Math.floor(Math.random() * 1000));
    
    new Chart(x, {
    type: 'bar',
    data: {
      labels: ['Administration', 'Kompressor rum', 'Maskinhall', 'Intern transport', 'Processteg A', 'Processteg B', 'Processteg C', 'Processteg D'],
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
        label: 'Koks',
        data: data3,
        backgroundColor:'#920028',
      },
                        {
        label: 'Naturgas',
        data: data4,
        backgroundColor:'#9ACBFF',
      }, 
                       {
        label: 'Olja',
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
      }, 
      plugins: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                usePointStyle: true, 
                pointStyle:'circle', 
                padding: 10,
           }
        }
       },
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

function returnGeo(){
    alert("ladda om sidan");
}

function clickedGeo(indata){
    console.log(indata);
    document.getElementById("geocard").innerHTML = "";

    var x = document.createElement("DIV");
    x.className ="row"; 
    x.style = "padding-bottom: 3px;"; 
    x.id ="firstgeocardrow"

    var y = document.createElement("DIV");
    y.className = "col-xxl-7"; 
    y.style = "font-size: 0.85vw;width: 100%;"; 

    y.innerHTML = "\
            <div class='row d-xl-flex' style='font-size: 0.85vw;margin-bottom: 3px;'>\
            <div class='col-xl-3 d-flex flex-column-reverse' style='padding-right: 61px;margin-right: -41px;'><button id='yearSelect' onclick='YearMonthSelect(this)' class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-left: 0px;margin-right: -9px;background: #f1f0f4;'>År</button></div>\
            <div class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #D6E4F7;' onclick='YMSelect(this)'>2017</button></div>\
            <div class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='YMSelect(this)'>2018</button></div>\
            <div class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='YMSelect(this)'>2019</button></div>\
            <div class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='YMSelect(this)'>2020</button></div>\
            <div class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='YMSelect(this)'>2021</button></div>\
            <div class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='YMSelect(this)'>2022</button></div>\
            <div class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='YMSelect(this)'>2023</button></div>\
            <div class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='YMSelect(this)'>2024</button></div>\
        </div>\
        <div class='row d-xl-flex' style='font-size: 0.85vw;'>\
            <div class='col-xl-3 d-flex flex-column-reverse' style='padding-right: 61px;margin-right: -41px;'><button id='monthSelect' onclick='YearMonthSelect(this)' class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-left: 0px;margin-right: -9px;background: #D6E4F7;' onclick='YMSelect(this)'>Mån</button></div>\
            <div id='monthSelectDiv1' class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #D6E4F7;' onclick='YMSelect(this)'>Jan</button></div>\
            <div  id='monthSelectDiv2' class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='YMSelect(this)'>Feb</button></div>\
            <div  id='monthSelectDiv3' class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='YMSelect(this)'>Mar</button></div>\
            <div  id='monthSelectDiv4' class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='YMSelect(this)'>Apr</button></div>\
            <div  id='monthSelectDiv5' class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='YMSelect(this)'>Maj</button></div>\
            <div  id='monthSelectDiv6' class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='YMSelect(this)'>Jun</button></div>\
            <div  id='monthSelectDiv7' class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='YMSelect(this)'>Jul</button></div>\
            <div  id='monthSelectDiv8' class='col d-flex flex-column-reverse justify-content-start' style='font-size: 0.85vw;margin-left: -9px;padding-left: 8px;margin-right: -8px;'><button class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='YMSelect(this)'>Sep</button></div>\
        </div>\
    "; 
        
    document.getElementById("geocard").appendChild(x);
    document.getElementById("firstgeocardrow").appendChild(y);

    var z = document.createElement("DIV");
    z.className ="row justify-content-xl-start align-items-xl-center align-items-xxl-center"; 
    z.style = "margin-bottom: 0;"; 
    z.id ="secondgeocardrow"; 

    var w = document.createElement("DIV");
    w.className = "col";

    z.appendChild(w);

    var a = document.createElement("DIV");
    a.className ="row d-xl-flex"; 
    a.style = "font-size: 0.85vw;margin-right: -5px;margin-top: 2vw;"; 

    w.appendChild(a);

    var b = document.createElement("DIV");
    b.className ="col-xl-3 d-flex flex-column-reverse"; 
    b.style = "padding-right: 0px;margin-right: -1px;"; 

    a.appendChild(b);

    var h = document.createElement("A");
    h.className ="navbar-brand d-flex align-items-center"; 
    h.href="#"
    h.style = "margin-left: 0px;"; 

    b.appendChild(h);

    var c = document.createElement("BUTTON");
    c.className ="btn"; 
    c.innerHTML= " \
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='-32 0 512 512' width='1em' height='1em' fill='currentColor'>\
            <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->\
            <path d='M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z'></path>\
            </svg>\
    ";
    c.setAttribute("onclick", "returnGeo()");

    h.appendChild(c);

    var d = document.createElement("SPAN");
    d.style = "color: rgb(33,36,41);font-size: 1.06vw;"; 
    d.innerText = indata; 

    h.appendChild(d)

    var e = document.createElement("DIV");
    e.className = "col-xl-7";
    e.style = "margin-right: 24px;"; 

    a.appendChild(e);


    var f = document.createElement("DIV");
    f.className = "col d-flex flex-column-reverse justify-content-start";
    f.style = "font-size: 0.85vw;padding-left: 8px;padding-right: 8px;margin-right: -8px;margin-left: 10px;"; 
    f.innerHTML= "\
            <div class='btn-group btn-group-sm' role='group' style='padding-top: 6px;margin-top: -6px;padding-bottom: 7px;margin-bottom: -1px;padding-left: 0px;'>\
            <button class='btn btn-primary d-xl-flex d-xxl-flex justify-content-xl-center align-items-xxl-center' type='button' style='padding-top: 2px;padding-left: 1px;padding-right: 1px;margin-right: -1px;margin-left: -1px;background: rgb(214,228,247);border-color: rgb(214,228,247);'>\
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='-32 0 512 512' width='1em' height='1em' fill='currentColor' class='d-xxl-flex align-items-xxl-center' style='font-size: 1.6vw;color: #0f1d2a;'>\
                    <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->\
                    <path d='M160 80C160 53.49 181.5 32 208 32H240C266.5 32 288 53.49 288 80V432C288 458.5 266.5 480 240 480H208C181.5 480 160 458.5 160 432V80zM0 272C0 245.5 21.49 224 48 224H80C106.5 224 128 245.5 128 272V432C128 458.5 106.5 480 80 480H48C21.49 480 0 458.5 0 432V272zM400 96C426.5 96 448 117.5 448 144V432C448 458.5 426.5 480 400 480H368C341.5 480 320 458.5 320 432V144C320 117.5 341.5 96 368 96H400z'></path>\
                </svg>\
            </button>\
            <button class='btn btn-primary d-xl-flex d-xxl-flex align-items-xxl-center' type='button' style='padding-right: 0px;padding-left: 1px;background: rgb(241,240,244);border-color: rgb(214,228,247);border-top-color: rgb(214,228,247);border-right-color: rgb(214,228,247);border-bottom-color: rgb(214,228,247);border-left-color: rgb(214,228,247);'>\
                <i class='fas fa-map-marker-alt d-xl-flex d-xxl-flex flex-fill justify-content-xl-center align-items-xl-center align-items-xxl-center' style='font-size: 1.6vw;color: #42474e;'></i>\
            </button>\
        </div>\
    ";

    a.appendChild(f);

    var g = document.createElement("DIV");
    g.className = "row";
    g.innerHTML = "\
        <div class='col-xl-2 offset-xl-0'><div class='btn-group-vertical btn-group-sm' role='group'>\
                <button id='MWhbtn' class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #D6E4F7;' onclick='myFunction(this)'>MWh</button>\
                <button id='TSEKbtn' class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='myFunction(this)' >TSEK</button>\
                <button id='KgCO2btn' class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;' onclick='myFunction(this)' >kgCO<sub>2</sub></button>\
        </div>\
    "; 

    a.appendChild(g); 

    var h = document.createElement("DIV");
    h.className = "col-xl-10";
    h.id = "bigMapChartDiv";
    h.style = "margin-left: -1vw; padding: 0px;padding-top: 1vw;";
    h.innerHTML = "<div><canvas id='myChart' onload='renderMapChart'></canvas></div>"
                                    

    g.appendChild(h); 

    var k = document.createElement("DIV");
    k.className = "row";
    k.style = "padding: 2vw; margin: 0px;"
    k.innerHTML = "\
    <div class='alert alert-secondary' style='background-color:#fefefe; display: flex; font-size: 1.2vw;' role='alert'>\
    <i class='fa-sharp fa-solid fa-chalkboard-user' style='margin-right:1vw'></i> <p style='color:#73777F;font-size: 0.85vw;text-align: left;margin-bottom: 0px; margin-top: 0vw;'> Här kommer ngt du kan lära dig av kopplat till ämnet</p>\
    </div>\
    "; 

    a.appendChild(k)


    document.getElementById("geocard").appendChild(z);

    RandomeChart('bigMapChartDiv');


}



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

function changeBudgetTable(invar) {

    invar.style.background = "rgb(214, 228, 247)";
    document.getElementById('buttonChangeGraph').style.background = "rgb(241, 240, 244)";
    
    document.getElementById("bigBudgetRow").innerHTML = "";
    document.getElementById("budgetTextrow").innerHTML = "";
    document.getElementById("bigBudgetRow").style ="margin:-15px";

    var elem = document.createElement("img");
    elem.setAttribute("src", "assets/img/budgettable7.jpg");
    document.getElementById("bigBudgetRow").appendChild(elem);
}
