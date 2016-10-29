/**
 * Created by Agnieszka on 2016-10-29.
 */
var barChartData = {
    labels : ["January","February","March","April","May","June","July"],
    datasets : [
        {
            fillColor : "#0088ff",
            strokeColor : "rgba(0,0,0,0)",
            highlightFill: "#0070ff",
            data: [10,50,40,30,20,10,80]
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