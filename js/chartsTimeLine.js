// Get the HTML canvas by its id 
plots = document.getElementById("plots");
// Example datasets for X and Y-axes 
var months = ["Progresso", "Pendente"]; //Stays on the X-axis 
var traffic = [70, 30] //Stays on the Y-axis 
// Create an instance of Chart object:
new Chart(plots, {
    type: 'doughnut', //doughnut Declare the chart type 
    data: {
        labels: months, //X-axis data 
        datasets: [{
            data: traffic, //Y-axis data 
            backgroundColor: [
                "rgba(83, 117, 177, 0.781)",
                "rgb(211, 211, 211)",
            ],
            borderWidth: 0,
            borderColor: 'white',
            fill: true,
        }],
    },
    options: {
        cutoutPercentage: 88,
        layout: {
            padding: 5,
        },
        legend: {
            display: false,
        },
    },
});