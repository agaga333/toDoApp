/**
 * Created by Agnieszka on 2016-10-29.
 */
function findCountryName(country) {
    return country.name
}

var countriesNames = countries.map(findCountryName);

function findCountryPopulation(country) {
    return country.population
}

var countriesNPopulations = countries.map(findCountryPopulation);


var barChartData = {
    labels : countriesNames,
    datasets : [
        {
            strokeColor : "rgba(0,0,0,0)",
            highlightFill: "#0070ff",
            data: countriesNPopulations,
            backgroundColor: "#FF6384"

        }
    ]
};

var opt = {
    responsive:true,
    animation: false,
    showScale: true,
    scaleShowGridLines : false,
    barShowStroke: false,
    tooltipXPadding: 10,
    tooltipYPadding: 6,
    tooltipFontSize: 18,
    tooltipFontStyle: 'bold'
};


var ctx = document.getElementById("canvas").getContext("2d");
function displayChartType(type) {
    new Chart(ctx, {
        type: type,
        data: barChartData,
        options: opt
    })
}

var addBtnBar = document.getElementById("add-bar-chart"),
    addBtnPie = document.getElementById("add-pie-chart");

addBtnBar.addEventListener("click", function() {displayChartType('bar')});
addBtnPie.addEventListener("click", function() {displayChartType('pie')});

