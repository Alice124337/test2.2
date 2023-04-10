
let forecastingA = false;
let forecastingB = false;
let forecastingC = false;


    function loadBudgetChart(){
      console.log("loaded");
    }

    function changeTimeVar(){

        if (document.getElementById("flexRadioDefault1timevar").checked){
            changeToEfectFromVar();
        } else {
            changeToEfectVAR();
        }

        
    }

    // function to change the accordion to the reduced version used in sankey and efect 
    function reducedAcordion(){
      document.getElementById("accordion-1").innerHTML= "\
      <div class='accordion-item'>\
        <h2 style='color: white;' class='accordion-header' role='tab'><button id='bigdrop' class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-1' aria-expanded='true' aria-controls='accordion-1 .item-1'>Tidsperiod</button></h2>\
        <div class='accordion-collapse collapse show item-1' role='tabpanel' data-bs-parent='#accordion-1'>\
            <div class='accordion-body' style='margin: 0vw;padding:0.65vw'>\
                <div class='btn-group' role='group' style='width:100%'><button class='btn btn-primary' type='button' style='background: #d6e4f7;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;border-right: 1px solid #d6e4f7;'>Månad</button><button class='btn btn-primary' type='button' style='background: #f1f0f4;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;'>Vecka</button><button class='btn btn-primary' type='button' style='background: #f1f0f4;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;'>Dag</button></div>\
                <div class='input-group input-group-sm mb-3'>\
                    <span style='background-color:#d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='input-group-text'><i class='icon ion-android-menu' style='font-size: 0.85vw;'></i></button></span>\
                    <input style='background-color: #d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='form-control form-control-sm' type='text' placeholder='Sök efter tidsperiod'>\
                </div>\
                <ul class='list-group list-group-flush'>\
                    <li id='bigliitem' class='list-group-item'>Januari 2019<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                    <li id='bigliitem' class='list-group-item'>Februari 2019<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                    <li id='bigliitem' class='list-group-item'>Mars 2019<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                    <li id='bigliitem' class='list-group-item'>Januari 2020<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                    <li id='bigliitem' class='list-group-item'>Februari 2020<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                    <li id='bigliitem' class='list-group-item'>Mars 2020<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                </ul>\
            </div>\
        </div>\
    </div>\
    <div class='accordion-item'>\
    <h2 class='accordion-header' role='tab'><button  id='bigdrop' class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-4' aria-expanded='false' aria-controls='accordion-1 .item-4'>Förbrukare</button></h2>\
    <div class='accordion-collapse collapse item-4' role='tabpanel' data-bs-parent='#accordion-1'>\
        <div class='accordion-body' style='margin: 0vw;padding:0.65vw'>\
            <div class='input-group input-group-sm mb-3'>\
                <span style='background-color:#d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='input-group-text'><i class='icon ion-android-menu' style='font-size: 0.85vw;'></i></button></span>\
                <input style='background-color: #d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='form-control form-control-sm' type='text' placeholder='Sök efter funktion'>\
             </div>\
            <ul class='list-group list-group-flush'>\
                <li id='bigliitem' class='list-group-item'>Maskin A<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                <li id='bigliitem' class='list-group-item'>Maskin B<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                <li id='bigliitem' class='list-group-item'>Maskin C<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
            </ul>\
        </div>\
    </div>\
</div>\
    <div class='accordion-item'>\
    <h2 class='accordion-header' role='tab'><button id='bigdrop' class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-5' aria-expanded='false' aria-controls='accordion-1 .item-4'>Sortering</button></h2>\
    <div class='accordion-collapse collapse item-5' role='tabpanel' data-bs-parent='#accordion-1'>\
        <div class='accordion-body' style='margin: 0vw;padding:0.65vw'>\
            <p style='margin-bottom: 0.65vw; font-size: 0.85vw;'>Välj presenteringsalternativ</p>\
            <div class='form-check'>\
            <input class='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1timevar' checked onchange='changeTimeVar()'>\
            <label class='form-check-label' for='flexRadioDefault1'>\
            <p style='margin-bottom: 0.65vw; font-size: 1vw;'>Rådata</p>\
            </label>\
            </div>\
            <div class='form-check'>\
            <input class='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2timevar' onchange='changeTimeVar()'>\
            <label class='form-check-label' for='flexRadioDefault2'>\
            <p style='margin-bottom: 0.65vw; font-size: 1vw;'>Varaktighet</p>\
            </label>\
            </div>\
        </div>\
    </div>\
</div>\
      ";
    }


    function reducedAcordion2(){
        document.getElementById("accordion-1").innerHTML= "\
        <div class='accordion-item'>\
          <h2 style='color: white;' class='accordion-header' role='tab'><button id='bigdrop' class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-1' aria-expanded='true' aria-controls='accordion-1 .item-1'>Tidsperiod</button></h2>\
          <div class='accordion-collapse collapse show item-1' role='tabpanel' data-bs-parent='#accordion-1'>\
              <div class='accordion-body' style='margin: 0vw;padding:0.65vw'>\
                  <div class='btn-group' role='group' style='width:100%'><button id='yearbutton' class='btn btn-primary' type='button' style='background: #f1f0f4;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;border-right: 1px solid #d6e4f7;'>År</button><button class='btn btn-primary' type='button' style='background: #d6e4f7;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;border-right: 1px solid #d6e4f7;'>Månad</button><button class='btn btn-primary' type='button' style='background: #f1f0f4;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;'>Vecka</button><button class='btn btn-primary' type='button' style='background: #f1f0f4;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;'>Dag</button></div>\
                  <div class='input-group input-group-sm mb-3'>\
                      <span style='background-color:#d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='input-group-text'><i class='icon ion-android-menu' style='font-size: 0.85vw;'></i></button></span>\
                      <input style='background-color: #d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='form-control form-control-sm' type='text' placeholder='Sök efter tidsperiod'>\
                  </div>\
                  <ul class='list-group list-group-flush'>\
                      <li id='bigliitem' class='list-group-item'>Januari 2019<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                      <li id='bigliitem' class='list-group-item'>Februari 2019<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                      <li id='bigliitem' class='list-group-item'>Mars 2019<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                      <li id='bigliitem' class='list-group-item'>Januari 2020<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                      <li id='bigliitem' class='list-group-item'>Februari 2020<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                      <li id='bigliitem' class='list-group-item'>Mars 2020<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                  </ul>\
              </div>\
          </div>\
        ";
      }

    //function to change the accordion to the expanded version 
    function resetAccordion(){
      document.getElementById("accordion-1").innerHTML="\
                                             <div class='accordion-item'>\
                                                <h2 style='color: white;' class='accordion-header' role='tab'><button id='bigdrop' class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#accordion-1 .item-1' aria-expanded='true' aria-controls='accordion-1 .item-1'>Tidsperiod</button></h2>\
                                                <div class='accordion-collapse collapse show item-1' role='tabpanel' data-bs-parent='#accordion-1'>\
                                                    <div class='accordion-body' style='margin: 0vw;padding:0.65vw'>\
                                                        <div class='btn-group' role='group' style='width:100%'><button id='yearbutton' class='btn btn-primary' type='button' style='background: #f1f0f4;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;border-right: 1px solid #d6e4f7;'>År</button><button class='btn btn-primary' type='button' style='background: #d6e4f7;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;border-right: 1px solid #d6e4f7;'>Månad</button><button class='btn btn-primary' type='button' style='background: #f1f0f4;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;'>Vecka</button><button class='btn btn-primary' type='button' style='background: #f1f0f4;color: #42474e;font-size: 0.85vw;border: 2px solid #d6e4f7;'>Dag</button></div>\
                                                        <div class='input-group input-group-sm mb-3'>\
                                                            <span style='background-color:#d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='input-group-text'><i class='icon ion-android-menu' style='font-size: 0.85vw;'></i></button></span>\
                                                            <input style='background-color: #d6e4f7; margin-top: 0.65vw; font-size: 0.85vw;' class='form-control form-control-sm' type='text' placeholder='Sök efter tidsperiod'>\
                                                         </div>\
                                                        <ul class='list-group list-group-flush'>\
                                                            <li id='bigliitem' class='list-group-item'>Januari 2019<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                                                            <li id='bigliitem' class='list-group-item'>Februari 2019<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                                                            <li id='bigliitem' class='list-group-item'>Mars 2019<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                                                            <li id='bigliitem' class='list-group-item'>Januari 2020<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                                                            <li id='bigliitem' class='list-group-item'>Februari 2020<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
                                                            <li id='bigliitem' class='list-group-item'>Mars 2020<button class='btn' type='button' style='padding:0px; float: right;'><i class='icon ion-close-round' style='font-size: 0.85vw;'></i></button></li>\
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


    function drillDownSankey(){
        document.getElementById("container").innerHTML =""; 
        // elem.setAttribute("id", "container"); 
        // elem.setAttribute("style", "height: 527px")
    
        // document.getElementById("bigboxROW").appendChild(elem);
        
    
        var data = [
            {from: "Värme",  to: "Kontorsklimat", weight: 300,},
            {from: "Värme",  to: "Lagerlokal", weight: 100,},
            {from: "Kokning",  to: "Trycksättning", weight: 500},
            {from: "Kokning",  to: "Uppvärmning", weight: 200},
            {from: "Kokning",  to: null, weight: 200},
            {from: "Slipning",  to: "Planslipning", weight: 300,},
            {from: "Slipning",  to: "Fleroperationsslipning", weight: 200,},
            {from: "Intern transport",  to: "Truckar", weight: 500},
            {from: "Intern transport",  to: "Områdesbuss", weight: 100},
            {from: "Intern transport",  to: "Mattransport", weight: 50},
            {from: "Intern transport",  to: "Interna leveranser", weight: 500},
            {from: "Pumpning",  to: "Slangpump", weight: 500},
            {from: "Pumpning",  to: "Fatpump", weight: 500},
    
          ];
          
          // create a chart and set the data
          var chart = anychart.sankey(data);
    
          chart.node().tooltip().format(function() {
    
            
            var incomeText = "";
            var outcomeText = "";
    
            if (this.income.length >0){
                incomeText += " Inkommande: \n";
            }
    
            if (this.outcome.length >0){
                outcomeText += " Utgående: \n";
            }
          
            for (i = 0; i < this.income.length; i++) {
              incomeText += "-" + this.income[i].name + " " + this.income[i].value + "\n";
              if (i == (this.income.length -1) && this.outcome.length > 0){
                incomeText += "\n";
                }
            }
          
            for (i = 0; i < this.outcome.length; i++) {
              outcomeText += "-" + this.outcome[i].name + " " + this.outcome[i].value + "\n";
            }
        
          
            return incomeText + outcomeText;
          });
          
          // set the width of nodes
          chart.nodeWidth("30%");
          
          
          // set the container id
          chart.container("container");
    
    
          chart
            .title()
            .enabled(true)
            .useHtml(true)
            .text(
            '<span style = "color: #2b2b2b; font-size:20px;">Energiflöde [MWh]</span>'
            );
    
            chart.palette([
                "#FFDFA6",
                "#b5d6d6",
                "#D1F0FF",
                "#A67DC3",
                "#0094D4",
                "#9ACBFF",
                "#8BC34A",
                "#9CADCE",
                "#FFB4AB",
                "#C4DBAB",
                "#AD405E",
                "#FF9800",
    
              ]);

              chart.listen("click", function(e){
                changeToSankey()
              });
          
          
          // initiate drawing the chart
          chart.draw();
    }
    // function to change the big component into the sankey chart 
    function changeToSankey(){
      document.getElementById("bigboxROW").innerHTML=""; 
      document.getElementById("endusetab").className = "nav-link"; 
      document.getElementById("effecttab").className = "nav-link";
      document.getElementById("supliedenergytab").className = "nav-link";
      document.getElementById("endusetab").style.color = "#f1f0f4";
      document.getElementById("supliedenergytab").style.color = "#f1f0f4";
      document.getElementById("effecttab").style.color = "#f1f0f4";
      document.getElementById("sankeytab").className = "nav-link active";
      document.getElementById("sankeytab").style.color = "#42474e"; 

      reducedAcordion2();
      
    //   var elem = document.createElement("img");
    //   elem.setAttribute("src", "assets/img/sankey3.jpg");
    //   document.getElementById("bigboxROW").appendChild(elem);

    var elem = document.createElement("div");
    elem.setAttribute("id", "container"); 
    elem.setAttribute("style", "height: 527px")

    document.getElementById("bigboxROW").appendChild(elem);
    

    var data = [
        {from: "Koks",  to: "Hus A", weight: 2300,},
        {from: "Hus A",  to: "Kokning", weight: 2300},

        {from: "Fjärrvärme",  to: "Hus A", weight: 2300},
        {from: "Hus A",  to: "Värme", weight: 2300},
        {from: "Fjärrvärme",  to: "Hus B", weight: 1000},
        {from: "Hus B",  to: "Slipning", weight: 2000},
        {from: "Fjärrvärme",  to: "Hus C", weight: 1000},
        {from: "Hus C",  to: "Kokning", weight: 1000},

        {from: "Kokning",  to: null, weight: 200},

        {from: "El",  to: "Hus A", weight: 1000},
        {from: "Hus A",  to: "Slipning", weight: 1000},
        {from: "El",  to: "Hus B", weight: 2000},
        {from: "Hus B",  to: "Intern transport", weight: 2000},

        {from: "Olja",  to: "Hus A", weight: 1000},
        {from: "Hus A",  to: "Slipning", weight: 1000},
        {from: "Olja",  to: "Hus B", weight: 1000},
        {from: "Hus A",  to: "Kokning", weight: 1000},
        {from: "Olja",  to: "Hus C", weight: 4300},
        {from: "Hus C",  to: "Slipning", weight: 1000},
        {from: "Hus C",  to: "Pumpning", weight: 1000},
        {from: "Hus C",  to: "Intern transport", weight: 2300},
      ];
      
      // create a chart and set the data
      var chart = anychart.sankey(data);

      chart.node().tooltip().format(function() {

        
        var incomeText = "";
        var outcomeText = "";

        if (this.income.length >0){
            incomeText += " Inkommande: \n";
        }

        if (this.outcome.length >0){
            outcomeText += " Utgående: \n";
        }
      
        for (i = 0; i < this.income.length; i++) {
          incomeText += "-" + this.income[i].name + " " + this.income[i].value + "\n";
          if (i == (this.income.length -1) && this.outcome.length > 0){
            incomeText += "\n";
            }
        }
      
        for (i = 0; i < this.outcome.length; i++) {
          outcomeText += "-" + this.outcome[i].name + " " + this.outcome[i].value + "\n";
        }
    
      
        return incomeText + outcomeText;
      });
      
      // set the width of nodes
      chart.nodeWidth("30%");
      
      
      // set the container id
      chart.container("container");


      chart
        .title()
        .enabled(true)
        .useHtml(true)
        .text(
        '<span style = "color: #2b2b2b; font-size:20px;">Energiflöde [MWh]</span>'
        );

        chart.palette([
            "#9ACBFF",
            "#8BC34A",
            "#9CADCE",
            "#FFB4AB",
            "#C4DBAB",
            "#AD405E",
            "#FF9800",
            "#b5d6d6",
            "#FFDFA6",
            "#D1F0FF",
            "#A67DC3",
            "#0094D4",

          ]);

          chart.listen("click", function(e){
            if (e.domTarget.tag && e.domTarget.tag.element) {
                var el = e.domTarget.tag.element;      

                  if (el.level == 2){
                    drillDownSankey();
                  }
                }
          });
      
      // initiate drawing the chart
      chart.draw();



      
    }

    function effectChart(x, data1, data2, data3, data4){
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
                     label: 'Baslast',
                     data: data4,
                     borderWidth: 2, 
                     borderColor: '#00629F',
                     backgroundColor: '#00629F',
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


    // function to change the big component into the efect chart 
    function changeToEfect(){
      document.getElementById("bigboxROW").innerHTML=""; 
      document.getElementById("endusetab").className = "nav-link"; 
      document.getElementById("sankeytab").className = "nav-link";
      document.getElementById("supliedenergytab").className = "nav-link";
      document.getElementById("endusetab").style.color = "#f1f0f4";
      document.getElementById("sankeytab").style.color = "#f1f0f4";
      document.getElementById("supliedenergytab").style.color = "#f1f0f4";
      document.getElementById("effecttab").className = "nav-link active";
      document.getElementById("effecttab").style.color = "#42474e"; 

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
     let data4 = data1.map(x => 39);
 
     // chart for effect
     effectChart(x, data1, data2, data3, data4); 
    }

    function changeToEfectFromVar(){
        document.getElementById("bigboxROW").innerHTML=""; 
  
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
       let data4 = data1.map(x => 39);
   
       // chart for effect
       effectChart(x, data1, data2, data3, data4); 
      }

    function changeToEfectVAR(){
        document.getElementById("bigboxROW").innerHTML=""; 
  
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
       data1.sort(); 
       data1.reverse(); 

       data2.sort(); 
       data2.reverse(); 
       // sets data to constant 
       let data3 = data1.map(x => 45);
       let data4 = data1.map(x => 39);
   
       // chart for effect
       effectChart(x, data1, data2, data3, data4); 
      }

    //Change the big div into the suplied energy chart
    function changeToSupliedEnergy() {

        document.getElementById("bigboxROW").innerHTML=""; 
        document.getElementById("endusetab").className = "nav-link"; 
        document.getElementById("sankeytab").className = "nav-link";
        document.getElementById("effecttab").className = "nav-link";
        document.getElementById("endusetab").style.color = "#f1f0f4"; 
        document.getElementById("sankeytab").style.color = "#f1f0f4";
        document.getElementById("effecttab").style.color = "#f1f0f4";
        document.getElementById("supliedenergytab").className = "nav-link active";
        document.getElementById("supliedenergytab").style.color = "#42474e"; 

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

       const sumArray = [4300,3600, 4200, 3700,3700,4100];
       const indexArray = [0,0,0,0,0,1,1,1,1]

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
                    ctx.fillText('2019', chart.getDatasetMeta(4).data[i].x, chart.getDatasetMeta(4).data[i].y - 15);
                    
                    ctx.fillText('2020', chart.getDatasetMeta(7).data[i].x, chart.getDatasetMeta(7).data[i].y - 15);
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
             tooltip: {
                callbacks:{
                    afterBody: function(context){
                        return "Total tillförsel: " + sumArray[context[0].dataIndex*2 + indexArray[context[0].datasetIndex]];
                    }
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
      document.getElementById("endusetab").className = "nav-link active"; 
      document.getElementById("endusetab").style.color = "#42474e"; 
      document.getElementById("sankeytab").className = "nav-link";
      document.getElementById("effecttab").className = "nav-link";
      document.getElementById("supliedenergytab").className = "nav-link";
      document.getElementById("sankeytab").style.color = "#f1f0f4";
      document.getElementById("effecttab").style.color = "#f1f0f4";
      document.getElementById("supliedenergytab").style.color = "#f1f0f4";


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
                  ctx.fillText('2019', chart.getDatasetMeta(3).data[i].x, chart.getDatasetMeta(3).data[i].y - 15);
                  
                  ctx.fillText('2020', chart.getDatasetMeta(6).data[i].x, chart.getDatasetMeta(6).data[i].y - 15);
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
            datasets: [
            {
            type: 'line',
            label: 'Budget',
            data: data1,
            borderWidth: 1.5, 
            backgroundColor: '#42474E',
            borderColor:'#42474E', 
            
            },{
            type: 'bar',
            label: 'Utfall',
            data: data1,
            borderWidth: 0, 
            backgroundColor: '#9ACBFF',
            },{
            type: 'bar',
            label: 'Utfall över budget',
            data: [0, 0, 500, 0, 0, 0, 0, 300, 400],
            borderWidth: 0, 
            backgroundColor: '#ED9080',
            }
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    display:true,
                    stacked: true,
                }, 
                x: {
                    stacked:true, 
                    display:true
                }
            }, 
            events: ['mousemove','click'],
            
            onClick: (e) => {
                alert("Du klicka på grafen"); 
            }, 
            plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true, 
                    pointStyle: "circle", 
                    padding: 15,
                }
        }
        }
        }, 
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

      document.getElementById("benchmark-info").innerHTML="<p id='benchmark-info' style='color: rgb(33,37,41);font-size: 1vw;text-align: center;margin-bottom: 0px;'>Plåt AB:s <strong>energiförbrukning (MWh) per omsatt TSEK</strong> är <strong>70% lägre än genomsnittet</strong> inom branschen.</p>";
    }

    if (selected == "MWh/m²") {
        document.getElementById("benchmark").innerHTML=""; 
        var elem = document.createElement("img");
        elem.setAttribute("src", "assets/img/benchmark-co2-externt.jpg");
        elem.setAttribute("class", "img-fluid")
        document.getElementById("benchmark").appendChild(elem);
  
        document.getElementById("benchmark-info").innerHTML="<p id='benchmark-info' style='color: rgb(33,37,41);font-size: 1vw;text-align: center;margin-bottom: 0px;'>Plåt AB:s <strong>energiförbrukning per m<sub><strong>2</strong></sub></strong> är <strong>11% högre än genomsnittet</strong> inom branschen.</p>";
      }

      if (selected == "MWh/anställd") {
        document.getElementById("benchmark").innerHTML=""; 
        var elem = document.createElement("img");
        elem.setAttribute("src", "assets/img/benchmark-mwh-anstalld.JPG");
        elem.setAttribute("class", "img-fluid")
        document.getElementById("benchmark").appendChild(elem);
  
        document.getElementById("benchmark-info").innerHTML="<p id='benchmark-info' style='color: rgb(33,37,41);font-size: 1vw;text-align: center;margin-bottom: 0px;'>Plåt AB:s <strong>energiförbrukning (MWh) per anställd</strong> är <strong>21% lägre än genomsnittet</strong> inom branschen.</p>";
      }

      if (selected == "CO₂/anställd") {
        document.getElementById("benchmark").innerHTML=""; 
        var elem = document.createElement("img");
        elem.setAttribute("src", "assets/img/benchmark-co2-actual.jpg");
        elem.setAttribute("class", "img-fluid")
        document.getElementById("benchmark").appendChild(elem);
  
        document.getElementById("benchmark-info").innerHTML="<p id='benchmark-info' style='color: rgb(33,37,41);font-size: 1vw;text-align: center;margin-bottom: 0px;'>Plåt AB:s <strong>koldioxidförbrukning (CO₂) per anställd</strong> är <strong>34% högre än genomsnittet</strong> inom branschen.</p>";
      }

      if (selected == "Andel förnybar energi") {
        document.getElementById("benchmark").innerHTML=""; 
        var elem = document.createElement("img");
        elem.setAttribute("src", "assets/img/benchmark-andel-fornybar.jpg");
        elem.setAttribute("class", "img-fluid")
        document.getElementById("benchmark").appendChild(elem);
  
        document.getElementById("benchmark-info").innerHTML="<p id='benchmark-info' style='color: rgb(33,37,41);font-size: 1vw;text-align: center;margin-bottom: 0px;'>Plåt AB:s <strong>andel förnybar energi</strong> är <strong>20% högre än genomsnittet</strong> inom branschen.</p>";
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
    <i class='fa-sharp fa-solid fa-chalkboard-user' style='margin-right:1vw'></i> <p style='color:#73777F;font-size: 0.85vw;text-align: left;margin-bottom: 0px; margin-top: 0vw;'> Visste du att en minskning av elanvändningen med 10 procent beräknas resultera i att elpriset i södra Sverige sjunker med upp till 40 procent.</p>\
    </div>\
    "; 

    a.appendChild(k)


    document.getElementById("geocard").appendChild(z);

    RandomeChart('bigMapChartDiv');


}

function checkboxCheck() {

    const icon = document.getElementById("goal");

    if ($("#customCheck1").is(":checked") && icon.className == "bi-star-fill") {
        document.getElementById("checkboxID").innerHTML=""; 
        var elem = document.createElement("img");
        elem.setAttribute("src", "assets/img/prognos.jpg");
        elem.setAttribute("class", "img-fluid");
        document.getElementById("checkboxID").appendChild(elem);
      
    } else if ($("#customCheck1").is(":checked") && icon.className == "bi-star"){
        document.getElementById("checkboxID").innerHTML=""; 
        var elem = document.createElement("img");
        elem.setAttribute("src", "assets/img/prognos-minus-goal.jpg");
        elem.setAttribute("class", "img-fluid");
        document.getElementById("checkboxID").appendChild(elem);

    } else if ($("#customCheck1").prop('checked', false) && icon.className == "bi-star-fill"){
        document.getElementById("checkboxID").innerHTML=""; 
        var elem = document.createElement("img");
        elem.setAttribute("src", "assets/img/prognos-minus-historic.jpg");
        elem.setAttribute("class", "img-fluid");
        document.getElementById("checkboxID").appendChild(elem);

    } else if ($("#customCheck1").prop('checked', false) && icon == "bi-star"){
        document.getElementById("checkboxID").innerHTML=""; 
        var elem = document.createElement("img");
        elem.setAttribute("src", "assets/img/prognos-minus-all.jpg");
        elem.setAttribute("class", "img-fluid");
        document.getElementById("checkboxID").appendChild(elem);
    }
  };

function changeIcon(anchor) {
  var icon = anchor.querySelector("i");
  icon.classList.toggle('bi-star');
  icon.classList.toggle('bi-star-fill');

  checkboxCheck();

}


function newActivity() {
  alert("Du har lagt till en ny aktivitet!");
}

function newMeasure() {
  alert("Du har lagt till en ny åtgärd!");
}

function newSchedule() {
    alert("Du har schemalagt åtgärden!");
}

function newMadeMeasure() {
    alert("Du har nu genomfört åtgärden!");
}

function changeAnnual() {
    // document.getElementById("annualDiv").setAttribute("style", "background: url(assets/img/wheel5.jpg) center / contain no-repeat, rgba(255,255,255,0);border-radius: 0px;height: 29vw;width: 29vw; margin-left:2vw;");
    document.getElementById("annualDiv").style.backgroundImage ="url(assets/img/wheel7.jpg)";
    document.getElementById("yearannual21").style.background = "rgb(214, 228, 247)"; 
    document.getElementById("yearannual22").style.background = "rgb(241, 240, 244)"; 
    document.getElementById("julbtn").style.display = "unset";
    document.getElementById("marbtn").style.display = "none";

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

function changetositesmap(){

    onclick="myScopeFunction(this)"
    document.getElementById("siteschartandbuttonsrow").innerHTML = "\
    <img src='assets/img/sitesMap2.jpg'/>\
        <button type='button' class='btn btn-secondary' style='height: 1.13vw; width: 1.13vw; padding: 0px; border-radius: 10px; background-color:#6750A4; margin-top:-8vw; margin-left:30vw' data-toggle='tooltip' title='Narvik' onclick='clickedGeo(this.title)'></button> \
        <button class='btn btn-secondary' style='height: 1.5vw; width: 1.5vw; padding: 0px; border-radius: 20px; background-color:#6750A4; margin-top:-17vw; margin-left:40vw' type='button' data-toggle='tooltip' title='Oslo' onclick='clickedGeo(this.title)'></button> \
        <button class='btn btn-secondary' style='height: 2vw; width: 2vw; padding: 0px; border-radius: 20px; background-color:#6750A4; margin-top:-21vw; margin-left:25vw' type='button' data-toggle='tooltip' title='Sveg' onclick='clickedGeo(this.title)'></button> \
    ";

  


    
}

function changeForecastingA() {
    if (forecastingA == false) {
        document.getElementById("checkboxID").style.backgroundImage="url(assets/img/prognos-minus-goal.jpg)";
        document.getElementById("popstar").setAttribute("data-content", "<div class='card-body' style='padding: 0.5vw'>\
        <h6 class='card-text'><center>Energiförbrukning (MWh/år)</center></h6>\
        <div class='row' style='margin-top: 2vw; margin-bottom: 0px; margin-right: 0px; margin-left: 0px; padding: 0px;'>\
        <div class='col-xl-5' style='margin: 0px; padding: 0px;'>\
            <center><p style='color: #dd2400; font-size: 2.3vw; margin: 0px; padding: 0px;'>7656</p></center>\
            <center><p style='font-size: 0.82vw;'>Prognos 2025</p></center>\
        </div>\
        <div class='col-xl-2' style='margin: 0px; padding: 0px;'>\
            <center><img src='assets/img/linje.png' style='height: 5vw;'></center>\
        </div>\
        <div class='col-xl-5' style='padding: 0vw; margin: 0px;'>\
            <center><p style='font-size: 2.3vw; margin: 0px; padding: 0px;'>6000</p></center>\
            <center><p style='font-size: 0.82vw;'><i class='fa-sharp fa-solid fa-star fa-lg' style='color: #ffdfa6; margin-right: 5px;'></i>Mål 2025</p></center>\
        </div>\
    </div>\
    <div\
    <button type='button' class='btn btn-block' data-bs-toggle='modal' href='#exampleModalToggle' style='background:#f1f0f4;white-space:normal;display:inline-flex; margin-top: 1vw; text-align: left;'>\
        <span class='pull-left'><i class='icon ion-ios-information-outline' style='margin-top: 0px; margin-right: 0.8vw; padding-top: 0px; font-size: 1.5vw;'></i></span><span class='pull-right' style='padding-top: 0.2vw; font-size: 0.9vw;'>Målet beräknas inte nås enligt prognos</span>\
    </button>\
    </div>")
    } else if (forecastingA == true) {
        document.getElementById("checkboxID").style.backgroundImage="url(assets/img/prognos-utan-effekt.jpg)";
        document.getElementById("popstar").setAttribute("data-content", "<div class='card-body' style='padding: 0.5vw'>\
        <h6 class='card-text'><center>Energiförbrukning (MWh/år)</center></h6>\
        <div class='row' style='margin-top: 2vw; margin-bottom: 0px; margin-right: 0px; margin-left: 0px; padding: 0px;'>\
        <div class='col-xl-5' style='margin: 0px; padding: 0px;'>\
            <center><p style='color: #dd2400; font-size: 2.3vw; margin: 0px; padding: 0px;'>9945</p></center>\
            <center><p style='font-size: 0.82vw;'>Prognos 2025</p></center>\
        </div>\
        <div class='col-xl-2' style='margin: 0px; padding: 0px;'>\
            <center><img src='assets/img/linje.png' style='height: 5vw;'></center>\
        </div>\
        <div class='col-xl-5' style='padding: 0vw; margin: 0px;'>\
            <center><p style='font-size: 2.3vw; margin: 0px; padding: 0px;'>6000</p></center>\
            <center><p style='font-size: 0.82vw;'><i class='fa-sharp fa-solid fa-star fa-lg' style='color: #ffdfa6; margin-right: 5px;'></i>Mål 2025</p></center>\
        </div>\
    </div>\
    <div\
    <button type='button' class='btn btn-block' data-bs-toggle='modal' href='#exampleModalToggle' style='background:#f1f0f4;white-space:normal;display:inline-flex; margin-top: 1vw; text-align: left;'>\
        <span class='pull-left'><i class='icon ion-ios-information-outline' style='margin-top: 0px; margin-right: 0.8vw; padding-top: 0px; font-size: 1.5vw;'></i></span><span class='pull-right' style='padding-top: 0.2vw; font-size: 0.9vw;'>Målet beräknas inte nås enligt prognos</span>\
    </button>\
    </div>")
    }

    forecastingA = !forecastingA;
    
}

function changeForecastingB() {
    if (forecastingB == false) {
        document.getElementById("checkboxID").style.backgroundImage="url(assets/img/prognos-minus-historic.jpg)";
        document.getElementById("popstar").setAttribute("data-content", "<div class='card-body' style='padding: 0.5vw'>\
        <h6 class='card-text'><center>Energiförbrukning (MWh/år)</center></h6>\
        <div class='row' style='margin-top: 2vw; margin-bottom: 0px; margin-right: 0px; margin-left: 0px; padding: 0px;'>\
        <div class='col-xl-5' style='margin: 0px; padding: 0px;'>\
            <center><p style='color: #FFBE4D; font-size: 2.3vw; margin: 0px; padding: 0px;'>6879</p></center>\
            <center><p style='font-size: 0.82vw;'>Prognos 2025</p></center>\
        </div>\
        <div class='col-xl-2' style='margin: 0px; padding: 0px;'>\
            <center><img src='assets/img/linje.png' style='height: 5vw;'></center>\
        </div>\
        <div class='col-xl-5' style='padding: 0vw; margin: 0px;'>\
            <center><p style='font-size: 2.3vw; margin: 0px; padding: 0px;'>6000</p></center>\
            <center><p style='font-size: 0.82vw;'><i class='fa-sharp fa-solid fa-star fa-lg' style='color: #ffdfa6; margin-right: 5px;'></i>Mål 2025</p></center>\
        </div>\
    </div>\
    <div\
    <button type='button' class='btn btn-block' data-bs-toggle='modal' href='#exampleModalToggle' style='background:#f1f0f4;white-space:normal;display:inline-flex; margin-top: 1vw; text-align: left;'>\
        <span class='pull-left'><i class='icon ion-ios-information-outline' style='margin-top: 0px; margin-right: 0.8vw; padding-top: 0px; font-size: 1.5vw;'></i></span><span class='pull-right' style='padding-top: 0.2vw; font-size: 0.9vw;'>Målet beräknas inte nås enligt prognos</span>\
    </button>\
    </div>")
    } else if (forecastingB == true) {
        document.getElementById("checkboxID").style.backgroundImage="url(assets/img/prognos-utan-effekt.jpg)";
        document.getElementById("popstar").setAttribute("data-content", "<div class='card-body' style='padding: 0.5vw'>\
        <h6 class='card-text'><center>Energiförbrukning (MWh/år)</center></h6>\
        <div class='row' style='margin-top: 2vw; margin-bottom: 0px; margin-right: 0px; margin-left: 0px; padding: 0px;'>\
        <div class='col-xl-5' style='margin: 0px; padding: 0px;'>\
            <center><p style='color: #dd2400; font-size: 2.3vw; margin: 0px; padding: 0px;'>9945</p></center>\
            <center><p style='font-size: 0.82vw;'>Prognos 2025</p></center>\
        </div>\
        <div class='col-xl-2' style='margin: 0px; padding: 0px;'>\
            <center><img src='assets/img/linje.png' style='height: 5vw;'></center>\
        </div>\
        <div class='col-xl-5' style='padding: 0vw; margin: 0px;'>\
            <center><p style='font-size: 2.3vw; margin: 0px; padding: 0px;'>6000</p></center>\
            <center><p style='font-size: 0.82vw;'><i class='fa-sharp fa-solid fa-star fa-lg' style='color: #ffdfa6; margin-right: 5px;'></i>Mål 2025</p></center>\
        </div>\
    </div>\
    <div\
    <button type='button' class='btn btn-block' data-bs-toggle='modal' href='#exampleModalToggle' style='background:#f1f0f4;white-space:normal;display:inline-flex; margin-top: 1vw; text-align: left;'>\
        <span class='pull-left'><i class='icon ion-ios-information-outline' style='margin-top: 0px; margin-right: 0.8vw; padding-top: 0px; font-size: 1.5vw;'></i></span><span class='pull-right' style='padding-top: 0.2vw; font-size: 0.9vw;'>Målet beräknas inte nås enligt prognos</span>\
    </button>\
    </div>")
    }

    forecastingB = !forecastingB;
    
}

function changeForecastingC() {
    if (forecastingC == false) {
        document.getElementById("checkboxID").style.backgroundImage="url(assets/img/prognos-minus-all.jpg)";
        document.getElementById("popstar").setAttribute("data-content", "<div class='card-body' style='padding: 0.5vw'>\
        <h6 class='card-text'><center>Energiförbrukning (MWh/år)</center></h6>\
        <div class='row' style='margin-top: 2vw; margin-bottom: 0px; margin-right: 0px; margin-left: 0px; padding: 0px;'>\
        <div class='col-xl-5' style='margin: 0px; padding: 0px;'>\
            <center><p style='color: #dd2400; font-size: 2.3vw; margin: 0px; padding: 0px;'>9930</p></center>\
            <center><p style='font-size: 0.82vw;'>Prognos 2025</p></center>\
        </div>\
        <div class='col-xl-2' style='margin: 0px; padding: 0px;'>\
            <center><img src='assets/img/linje.png' style='height: 5vw;'></center>\
        </div>\
        <div class='col-xl-5' style='padding: 0vw; margin: 0px;'>\
            <center><p style='font-size: 2.3vw; margin: 0px; padding: 0px;'>6000</p></center>\
            <center><p style='font-size: 0.82vw;'><i class='fa-sharp fa-solid fa-star fa-lg' style='color: #ffdfa6; margin-right: 5px;'></i>Mål 2025</p></center>\
        </div>\
    </div>\
    <div\
    <button type='button' class='btn btn-block' data-bs-toggle='modal' href='#exampleModalToggle' style='background:#f1f0f4;white-space:normal;display:inline-flex; margin-top: 1vw; text-align: left;'>\
        <span class='pull-left'><i class='icon ion-ios-information-outline' style='margin-top: 0px; margin-right: 0.8vw; padding-top: 0px; font-size: 1.5vw;'></i></span><span class='pull-right' style='padding-top: 0.2vw; font-size: 0.9vw;'>Målet beräknas inte nås enligt prognos</span>\
    </button>\
    </div>")
        
    } else if (forecastingC == true) {
        document.getElementById("checkboxID").style.backgroundImage="url(assets/img/prognos-utan-effekt.jpg)";
        document.getElementById("popstar").setAttribute("data-content", "<div class='card-body' style='padding: 0.5vw'>\
        <h6 class='card-text'><center>Energiförbrukning (MWh/år)</center></h6>\
        <div class='row' style='margin-top: 2vw; margin-bottom: 0px; margin-right: 0px; margin-left: 0px; padding: 0px;'>\
        <div class='col-xl-5' style='margin: 0px; padding: 0px;'>\
            <center><p style='color: #dd2400; font-size: 2.3vw; margin: 0px; padding: 0px;'>9945</p></center>\
            <center><p style='font-size: 0.82vw;'>Prognos 2025</p></center>\
        </div>\
        <div class='col-xl-2' style='margin: 0px; padding: 0px;'>\
            <center><img src='assets/img/linje.png' style='height: 5vw;'></center>\
        </div>\
        <div class='col-xl-5' style='padding: 0vw; margin: 0px;'>\
            <center><p style='font-size: 2.3vw; margin: 0px; padding: 0px;'>6000</p></center>\
            <center><p style='font-size: 0.82vw;'><i class='fa-sharp fa-solid fa-star fa-lg' style='color: #ffdfa6; margin-right: 5px;'></i>Mål 2025</p></center>\
        </div>\
    </div>\
    <div\
    <button type='button' class='btn btn-block' data-bs-toggle='modal' href='#exampleModalToggle' style='background:#f1f0f4;white-space:normal;display:inline-flex; margin-top: 1vw; text-align: left;'>\
        <span class='pull-left'><i class='icon ion-ios-information-outline' style='margin-top: 0px; margin-right: 0.8vw; padding-top: 0px; font-size: 1.5vw;'></i></span><span class='pull-right' style='padding-top: 0.2vw; font-size: 0.9vw;'>Målet beräknas inte nås enligt prognos</span>\
    </button>\
    </div>")
    }

    forecastingC = !forecastingC;
    
}


