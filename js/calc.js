"use strict";
const pF = 0.8;
const backupTime = 12;  // in hrs.

function sizingCalculator() {
    //event.preventDefault();
    var load = document.getElementById("load").value;
    var panelRating = document.getElementById("pRating").value;
    var battVolt = document.getElementById("batteryVoltage").value;
    var insolation = document.getElementById("insolation").value;
    var panelArea = document.getElementById("pArea").value;
    var maxLoad = load*1.5;
    var solarPanelOutput = maxLoad*2;   // this needs modification
    //var noOfPanels = Math.round(solarPanelOutput/panelRating);
    var noOfPanels = Math.round((solarPanelOutput/1000)*24/(insolation*panelArea));
    var realPower = maxLoad;
    var apparentPower = realPower/pF;
    var battVoltage = battVolt;
    var AH_rating = Math.round((maxLoad*backupTime*2)/battVoltage);
    /*
    document.getElementById("load").innerHTML = "Load: "+load+" W\n";
    document.getElementById("maxLoad").innerHTML = "Max Load: "+maxLoad+" W\n";
    document.getElementById("npanels").innerHTML = "Number of Panels needed: "+noOfPanels+"\n";
    document.getElementById("invrating").innerHTML = "Inverter rating: "+apparentPower+" VA\n";
    document.getElementById("battvolt").innerHTML = "Battery Voltage: "+battVoltage+" V\n";
    document.getElementById("totalahreq").innerHTML = "Total AH required: "+AH_rating+" AH\n";
    */
    var result_string = "Load: "+load+" W\n"+"Max Load: "+maxLoad+" W\n"+"Number of Panels needed: "+noOfPanels+"\n"+"Inverter rating: "+apparentPower+" VA\n"+"Battery Voltage: "+battVoltage+" V\n"+"Total AH required: "+AH_rating+" AH\n";
    window.alert(result_string);
    console.log("Load: "+load+" W\n");
    console.log("Max Load: "+maxLoad+" W\n");
    console.log("Number of Panels needed: "+noOfPanels+"\n");
    console.log("Inverter rating: "+apparentPower+" VA\n");
    console.log("Battery Voltage: "+battVoltage+" V\n");
    console.log("Total AH required: "+AH_rating+" AH\n");
}

