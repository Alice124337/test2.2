
    
    function loadBudgetChart(){
      console.log("loaded");
    }

    function wheelfunc(){
      console.log("wehoooo"); 
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
                                                            <li id='bigliitem' class='list-group-item'>Ref 1: 100 Mwh<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                                                        </ul>\
                                                    </div>\
                                                </div>\
                                            </div>";
    }


    // function to change the big component into the sankey chart 
    function changeToSankey(){
      document.getElementById("bigboxROW").innerHTML=""; 
      document.getElementById("rubricBigComp").innerHTML="Sankey"; 
      document.getElementById("endusetab").className = "nav-link"; 
      document.getElementById("effecttab").className = "nav-link";
      document.getElementById("supliedenergytab").className = "nav-link";
      document.getElementById("sankeytab").className = "nav-link active";

      reducedAcordion();
      
      var elem = document.createElement("img");
      elem.setAttribute("src", "assets/img/sankey1.jpg");
      document.getElementById("bigboxROW").appendChild(elem);
    }


    // function to change the big component into the efect chart 
    function changeToEfect(){
      document.getElementById("bigboxROW").innerHTML=""; 
      document.getElementById("rubricBigComp").innerHTML="Förbrukad effekt"; 
      document.getElementById("endusetab").className = "nav-link"; 
      document.getElementById("sankeytab").className = "nav-link";
      document.getElementById("supliedenergytab").className = "nav-link";
      document.getElementById("effecttab").className = "nav-link active";

      reducedAcordion();

      var x = document.createElement("CANVAS");

      var y = document.createElement("DIV");
      y.className = "col-xl-1 offset-xl-0";
      y.innerHTML = "<div class='btn-group-vertical btn-group-sm' role='group'><button id='MWhbtn' class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #D6E4F7;'>MWh</button><button id='TSEKbtn' class='btn btn-sm' type='button' style='font-size: 0.85vw;margin-right: 3px;background: #f1f0f4;'>TSEK</button></div>"
      document.getElementById("bigboxROW").appendChild(y);

      var z = document.createElement("DIV");
      z.className = "col-xl-11";
      z.id="innerboxdiv";
      document.getElementById("bigboxROW").appendChild(z);
         
     document.getElementById("innerboxdiv").appendChild(x);
         
     let data = [12, 19, 3, 5, 2, 5, 4, 7, 5, 6, 7 ,8 ,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
       
     let data1 = data.map(x => Math.floor(Math.random() * 50));    
     let data2 = data1.map(x => Math.floor(Math.random() * 50));
     // sets data to constant 
     let data3 = data1.map(x => 45);
 
     // chart for effect
     new Chart(x, {
       data: {
           labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
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
                  padding: 35,
              }
          }
           }
       }
       });
    }

    //Change the big div into the suplied energy chart
    function changeToSupliedEnergy() {

        document.getElementById("bigboxROW").innerHTML=""; 
        document.getElementById("rubricBigComp").innerHTML="Förbrukad effekt"; 
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
            data: [10, 10, 10, 10, 10, 10],
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
          data: [10, 5, 7],
          backgroundColor: ['#00629F'],
          borderWidth: 2, 
          borderColor: '#00629F',
          backgroundColor: '#00629F',
          
      },
        {
            type: 'bar', 
            label: 'El',
            data: [12, 19, 3],
            borderWidth: 0,
            backgroundColor:'#FFB4AB',
            borderColor:'#FFB4AB',
            stack: 'Stack 0', 
        }, {
            type: 'bar', 
            label: 'Kol',
            data: [14, 16, 5, 4, 5, 6],
            borderWidth: 0, 
            backgroundColor:'#4B9200',
            stack: 'Stack 0'
        }, {
            type: 'bar', 
            label: 'Koks',
            data: [14, 16, 5, 4, 5, 6],
            borderWidth: 0, 
            backgroundColor:'#920028',
            stack: 'Stack 1', 
        },{
            type: 'bar', 
            label: 'Naturgas',
            data: [14, 16, 5, 4, 5, 6],
            borderWidth: 0, 
            backgroundColor:'#9ACBFF',
            stack: 'Stack 1', 
        },{
            type: 'bar', 
            label: 'Olja',
            data: [14, 16, 5, 4, 5, 6],
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
      document.getElementById("rubricBigComp").innerHTML="Slutenergianvändning"; 
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
      labels: ['Varmvatten', 'Tryckluft', 'Varmvatten', 'Tryckluft', 'Varmvatten', 'Tryckluft'],
      datasets: [
      {
          type: 'line',
          label: 'Ref1',
          borderWidth: 2, 
          data: [10, 10, 10, 10, 10, 10],
          backgroundColor: ['#42474E'],
          borderWidth: 2, 
          borderColor: '#42474E',
          backgroundColor: '#42474E',
          
      },
      {
          type: 'bar', 
          label: 'El',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 0,
          backgroundColor:'#FFB4AB',
          borderColor:'#FFB4AB',
          stack: 'Stack 0', 
      }, {
          type: 'bar', 
          label: 'Kol',
          data: [14, 16, 5, 4, 5, 6],
          borderWidth: 0, 
          backgroundColor:'#4B9200',
          stack: 'Stack 0'
      }, {
          type: 'bar', 
          label: 'Koks',
          data: [14, 16, 5, 4, 5, 6],
          borderWidth: 0, 
          backgroundColor:'#920028',
          stack: 'Stack 1', 
      },{
          type: 'bar', 
          label: 'Naturgas',
          data: [14, 16, 5, 4, 5, 6],
          borderWidth: 0, 
          backgroundColor:'#9ACBFF',
          stack: 'Stack 1', 
      },{
          type: 'bar', 
          label: 'Olja',
          data: [14, 16, 5, 4, 5, 6],
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

              ctx.fillText('Jan', x.getPixelForValue(0.5), chart.chartArea.bottom + 30)
              ctx.fillText('Feb', x.getPixelForValue( 2.5), chart.chartArea.bottom + 30)
              ctx.fillText('Mar', x.getPixelForValue(4.5), chart.chartArea.bottom + 30)

              ctx.font = '0.85vw roboto';
              ctx.fillStyle = '#333333';
              ctx.textAlign= 'center';
              
              for (let i = 0; i < 6; i ++){
                  ctx.fillText('2020', chart.getDatasetMeta(2).data[i].x, chart.getDatasetMeta(2).data[i].y - 15);
                  
                  ctx.fillText('2019', chart.getDatasetMeta(5).data[i].x, chart.getDatasetMeta(5).data[i].y - 15);
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
    alert(selected);
  });
};
