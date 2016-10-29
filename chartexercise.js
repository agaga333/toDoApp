/**
 * Created by Agnieszka on 2016-10-29.
 */
function findCountryName(country) {
    return country = country.name
}

var countriesNames = countries.map(findCountryName);

function findCountryPopulation(country) {
    return country = country.population
}

var countriesNPopulations = countries.map(findCountryPopulation);


var barChartData = {
    labels : countriesNames,
    datasets : [
        {
            fillColor : "#0088ff",
            strokeColor : "rgba(0,0,0,0)",
            highlightFill: "#0070ff",
            data: countriesNPopulations
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
    tooltipFontStyle: 'bold',
};

var ctx = document.getElementById("canvas").getContext("2d");;
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: opt
});