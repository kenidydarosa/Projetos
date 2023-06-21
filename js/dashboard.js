

// ****************** */
// Get the HTML canvas by its id 
grafico1 = document.getElementById("grafico1");

var optionsGraph1 = {
    chart: {
        width:'100%',
        height: 190,
        type: "line",
        responsive:true,
    },  
    title: {
        text: "Valor em R$ por mês",
        align: 'center',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize: '11px',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            color: '#7b95c3'
        },
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + "mi"
        },
        style: {
            colors: ['white'],
            fontSize: '11px',
            fontWeight: 'normal',
            color: '#7b95c3',
        },
        offsetX: -5,
        offsetY: -10,
        position: 'topRight',
        background: {
            foreColor: '#706f6f',
            borderRadius: 3,
            padding: 7,
            opacity: 0.9,
            borderWidth: 1,
            borderColor: '#5375b1'
        },
    },
    tooltip: {
        theme: "dark",
        fillSeriesColor: false,
        marker: {
            show: false,
        },
    },
    series: [
        {
            name: "Valor",
            data: [
                15,
                14,
                19,
                12,
                16,
                20,
                18,
                16,
                17,
                17,
                21,
                20,
            ],
        }
    ],

    fill: {
        colors: ['#7b95c3'],
        shade: 'dark',
    },
    stroke: {
        width: 2,
        colors: ['#5375b1'],
        curve: 'smooth',
    },
    markers: {
        size: 6,
        colors: ["#5375b1"],
        strokeColor: "#c0d1ee",
        strokeWidth: 2,

    },
    grid: {
        borderColor: "#555",
        clipMarkers: false,
        yaxis: {
            lines: {
                show: false,
            },

        }
    },
    xaxis: {
        categories: [
            "jan",
            "fev",
            "mar",
            "abr",
            "mai",
            "jun",
            "jul",
            "ago",
            "set",
            "out",
            "nov",
            "dez",
        ]
    },
    yaxis: {
        min: 0,
        max: 30,
        tickAmount: 3,
    },
};

var chart1 = new ApexCharts(document.querySelector("#fundo1"), optionsGraph1);
chart1.render();

grafico2 = document.getElementById("grafico2");

var optionsGraph2 = {
    chart: {
        width:'100%',
        height: 190,
        type: "area"
    },
    title: {
        text: "Quantidade por mês",
        align: 'center',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize: '11px',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            color: '#7b95c3'
        },
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['white'],
            fontSize: '11px',
            fontWeight: 'normal',
            fontFamily: undefined,
            color: '#7b95c3'
        },
        offsetX: -5,
        offsetY: -10,
        position: 'topRight',
        background: {
            foreColor: '#706f6f',
            borderRadius: 3,
            padding: 7,
            opacity: 0.9,
            borderWidth: 1,
            borderColor: '#5375b1'
        },
    },
    tooltip: {
        theme: "dark",
        fillSeriesColor: false,
        marker: {
            show: false,
        },
    },
    series: [
        {
            name: "Quantidade",
            data: [10, 13, 14, 15, 12, 11, 13, 15, 14, 10, 14, 10],
        }
    ],

    fill: {
        colors: ['#7b95c3'],
        type: "gradient",
        shade: 'dark',
        gradient: {
            shadeIntensity: 0.1,
            opacityFrom: 1,
            opacityTo: 0.4,
            stops: [0, 90, 100]
        }
    },
    /**-------*/
    stroke: {
        width: 5,
        colors: ['#c0d1ee'],
        curve: 'smooth',
    },
    markers: {
        size: 6,
        colors: ["#5375b1"],
        strokeColor: "#c0d1ee",
        strokeWidth: 2,
    },
    grid: {
        borderColor: "#555",
        clipMarkers: false,
        yaxis: {
            lines: {
                show: false,
            },

        }
    },
    xaxis: {
        categories: [
            "jan",
            "fev",
            "mar",
            "abr",
            "mai",
            "jun",
            "jul",
            "ago",
            "set",
            "out",
            "nov",
            "dez",
        ]
    },
    yaxis: {
        min: 0,
        max: 30,
        tickAmount: 3,
    },
};

var chart2 = new ApexCharts(document.querySelector("#fundo2"), optionsGraph2);

chart2.render();

grafico3 = document.getElementById("grafico3");
var optionsGraph3 = {
    chart: {
        type: 'donut',
        width: '100%',
        height: '50%',
    },
    series: [0.19, 0.25, 0.56],
    labels: ['Frango de Corte', 'Produção', 'Recria'],
    dataLabels: {
        enabled: true,
        background: {
            enabled: true,
            foreColor: '#706f6f',
            padding: 7,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#5375b1',
            opacity: 1,
            dropShadow: {
                enabled: false,
            }
        },
        dropShadow: {
            enabled: false,
        },
        style: {
            fontSize: '11px',
            fontWeight: 'normal',
        },
    },
    stroke: {
        show: false,
    },

    title: {
        text: "Segmento",
        align: 'center',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize: '11px',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            color: '#7b95c3'
        },
    },
    tooltip: {
        theme: "dark",
        fillSeriesColor: false,
        marker: {
            show: false,
        },
    },
    plotOptions: {
        pie: {
            donut: {
                size: '80%'
            },
            expandOnClick: false,

        },
    },
    legend: {
        show: true,
        colors: '#000',
        position: 'bottom',
        fontSize: '11px',
        fontFamily: 'Roboto',
        labels: {
            colors: '#000',
            useSeriesColors: false
        },
        markers: {
            width: 9,
            height: 9,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0,
            fillColors: ['#7b95c3', '#c0d1ee', '#d2d5d8'],
        },
    },
    fill: {
        colors: ['#7b95c3', '#c0d1ee', '#d2d5d8'],
        shade: 'dark',

    },
}

var chart3 = new ApexCharts(document.querySelector("#fundo3"), optionsGraph3);
chart3.render();


var optionsGraph4 = {
    series: [{
        data: [8, 6, 5, 4, 4, 3],
    }],
    chart: {
        type: 'bar',
        height: 190,
        width:'100%',
    },

    title: {
        text: "Gerentes",
        align: 'top',
        margin: 0,
        offsetX: 0,
        offsetY: 0,
        floating: true,
        style: {
            fontSize: '11px',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            color: '#7b95c3'
        },
    },

    grid: {
        borderColor: "#555",
        yaxis: {
            lines: {
                show: false,
            },

        }
    },
    fill: {
        colors: ['#7b95c3'],
        type: "gradient",
        shade: 'dark',
        gradient: {
            shadeIntensity: 0.1,
            opacityFrom: 0.7,
            opacityTo: 1,
            stops: [0, 30, 100]
        }
    },
    tooltip: {
        theme: "dark",
        fillSeriesColor: false,
        marker: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            height: 6,
            horizontal: true,
            borderRadius: 2,
            barHeight: '40%',
            dataLabels: {
                position: 'top',
            },
        },
    },

    dataLabels: {
        offsetX: 20,
        offsetY: 1,
        enabled: true,
        position: 'left',
        background: {
            enabled: true,
            foreColor: '#706f6f',
            padding: 7,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#5375b1',
            opacity: 1,
            dropShadow: {
                enabled: false,
            },
        },
        style: {
            colors: ['white'],
            fontSize: '11px',
            fontWeight: 'normal',
            fontFamily: undefined,
            color: '#7b95c3',
        },
    },
    xaxis: {
        categories: ['Elio', 'Gustavo', 'Grabriela', 'Edegar', 'Daniel', 'Renato'],
        tickAmount: 1,
        height: 10,
    },
    yaxis: {
        min: 0,
        max: 10,
    },

};

var chart4 = new ApexCharts(document.querySelector("#fundo4"), optionsGraph4);
chart4.render();



