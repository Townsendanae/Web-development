/**
 * Dashboard Analytics
 */

'use strict';

(function () {
  let cardColor, headingColor, axisColor, shadeColor, borderColor;

  cardColor = config.colors.white;
  headingColor = config.colors.headingColor;
  axisColor = config.colors.axisColor;
  borderColor = config.colors.borderColor;

  // Cambiar Personaje - Botón 
  // --------------------------------------------------------------------
  let arrayIndices = [0];
  const btnCambiarPersonaje = document.getElementById('btnCambiarPersonaje');
  btnCambiarPersonaje.addEventListener('click', (event) => {
    if (arrayIndices.length == 11){
      arrayIndices = [0];
    }
    let newIndice;
    if(arrayIndices.length == 1){
      newIndice = cambiarPersonaje(arrayIndices[0]);
    } 
    else{
      newIndice = cambiarPersonaje(arrayIndices[arrayIndices.length-1]);
    }
    arrayIndices.push(newIndice)
  });

  let cambiarPersonaje = (indice) => {
    const contenedor = document.getElementById('ImagenCarrusel');
      contenedor.innerHTML = `<img
      src="../assets/img/personajes/${indice}.png"
      height="200"
      alt="View Badge User"
      data-app-dark-img="illustrations/man-with-laptop-dark.png"
      data-app-light-img="illustrations/man-with-laptop-light.png"
    />`;
    return indice+1
  }


  // Millennium Falcon vs Rebel transport - Bar Chart/// 
  // --------------------------------------------------------------------

  async function cargarDatosComparacion() {

    let parametros = ["Longitud", "Pasajeros", "Max. Velocidad Atmosférica", "MGLT"]
    let valoresMillennium = []
    let valoresRebel = []

    const response = await fetch('https://swapi.dev/api/starships/?format=json');
    const data = await response.json();
    for (let datos of data['results']) {

      if (datos['name'] == "Millennium Falcon") {
        valoresMillennium.push(parseInt(datos['length']))
        valoresMillennium.push(parseInt(datos['passengers']))
        valoresMillennium.push(parseInt(datos['max_atmosphering_speed']) / 10)
        valoresMillennium.push(parseInt(datos['MGLT']))
      }

      if (datos['name'] == "Rebel transport") {
        valoresRebel.push(parseInt(datos['length']))
        valoresRebel.push(parseInt(datos['passengers']))
        valoresRebel.push(parseInt(datos['max_atmosphering_speed']) / 10)
        valoresRebel.push(parseInt(datos['MGLT']))
      }
    }
    console.log(parametros, valoresMillennium, valoresRebel)
    const totalRevenueChartEl = document.querySelector('#ComparacionNaves');

    let totalRevenueChartOptions = {
      series: [
        {
          name: 'Rebel transport',
          data: valoresRebel
        },
        {
          name: 'Millennium Falcon',
          data: valoresMillennium
        }
      ],
      chart: {
        height: 300,
        stacked: true,
        type: 'bar',
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '33%',
          borderRadius: 12,
          startingShape: 'rounded',
          endingShape: 'rounded'
        }
      },
      colors: [config.colors.primary, config.colors.info],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 6,
        lineCap: 'round',
        colors: [cardColor]
      },
      legend: {
        show: true,
        horizontalAlign: 'left',
        position: 'top',
        markers: {
          height: 8,
          width: 8,
          radius: 12,
          offsetX: -3
        },
        labels: {
          colors: axisColor
        },
        itemMargin: {
          horizontal: 10
        }
      },
      grid: {
        borderColor: borderColor,
        padding: {
          top: 0,
          bottom: -8,
          left: 20,
          right: 20
        }
      },
      xaxis: {
        categories: parametros,
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        }
      },
      responsive: [
        {
          breakpoint: 1700,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '32%'
              }
            }
          }
        },
        {
          breakpoint: 1580,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '35%'
              }
            }
          }
        },
        {
          breakpoint: 1440,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '42%'
              }
            }
          }
        },
        {
          breakpoint: 1300,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '48%'
              }
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '40%'
              }
            }
          }
        },
        {
          breakpoint: 1040,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 11,
                columnWidth: '48%'
              }
            }
          }
        },
        {
          breakpoint: 991,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '30%'
              }
            }
          }
        },
        {
          breakpoint: 840,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '35%'
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '28%'
              }
            }
          }
        },
        {
          breakpoint: 640,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '32%'
              }
            }
          }
        },
        {
          breakpoint: 576,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '37%'
              }
            }
          }
        },
        {
          breakpoint: 480,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '45%'
              }
            }
          }
        },
        {
          breakpoint: 420,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '52%'
              }
            }
          }
        },
        {
          breakpoint: 380,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '60%'
              }
            }
          }
        }
      ],
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };

    if (typeof totalRevenueChartEl !== undefined && totalRevenueChartEl !== null) {
      const totalRevenueChart = new ApexCharts(totalRevenueChartEl, totalRevenueChartOptions);
      totalRevenueChart.render();
    }

  }

  cargarDatosComparacion()


  //Card title -- card-title mb-2People
  // --------------------------------------------------------------------

  let cargarTotalPersonas = () => {
    fetch("https://swapi.dev/api/people/?format=json")
      .then(response => response.json())
      .then(data => {
        let totalPersonas = data['count']
        document.getElementById('card-title mb-2People').innerHTML = `${totalPersonas}`;
      })
      .catch(console.error);
  }
  cargarTotalPersonas()

  //Card title -- NavesTotales
  // --------------------------------------------------------------------  
  let cargarTotalNaves = () => {
    fetch("https://swapi.dev/api/starships/?format=json")
      .then(response => response.json())
      .then(data => {
        let totalNaves = data['count']
        document.getElementById('NavesTotales').innerHTML = `${totalNaves}`;
      })
      .catch(console.error);
  }
  cargarTotalNaves();


  // Presentación naves
  // --------------------------------------------------------------------

  let cargarInfoNaves = (NaveElegida, enlace, indice) => {
    document.getElementById('contenedorInformacion').innerHTML = ``;
    document.getElementById('NombreNave').innerHTML = ``;
    document.getElementById('presentacionNave').innerHTML = ``;
    
    fetch(enlace)
      .then(response => response.json())
      .then(data => {

        let model = data['model']
        let manufacturer = data['manufacturer']
        let starship_class = data['starship_class']

        let titulosDatos = ["Modelo","Manofactura","Clase"]
        let arregloDatos = [model,manufacturer,starship_class]

        document.getElementById('NombreNave').innerHTML = `${NaveElegida}`;
        if (indice == 0){
          document.getElementById('presentacionNave').innerHTML = `<img id="imgPresentacionNaves" src="../assets/img/naves/halconMIlenario.webp"/>`;
        } else{
          document.getElementById('presentacionNave').innerHTML = `<img id="imgPresentacionNaves" src="../assets/img/naves/RebelTransport.gif"/>`;
        }
                
        for(let i = 0; i < arregloDatos.length; i++){
          let plantillaInfo =
          `
          <div class="d-flex">
            <div class="me-2">
              <span class="badge bg-label-primary p-2"><i class="bx bx-dollar text-primary"></i></span>
            </div>
            <div class="d-flex flex-column" class="naveSelection">
            <small>${titulosDatos[i]}</small>
            <h6 class="mb-0">${arregloDatos[i]}</h6>
            </div> 
          </div>
        `
          document.getElementById('contenedorInformacion').innerHTML += plantillaInfo;
        }
      })
  }

  const selectElementHalcon = document.getElementById('HalconMilenario');
  selectElementHalcon.addEventListener('click', (event) => {
    let eleccion = `${event.target.value}`;
    cargarInfoNaves(eleccion, "https://swapi.dev/api/starships/10/",0)
  });

  const selectElementRebel = document.getElementById('TransporteRebelde');
  selectElementRebel.addEventListener('click', (event) => {
    let eleccion = `${event.target.value}`;
    cargarInfoNaves(eleccion, "https://swapi.dev/api/starships/17/",1)
  });


  // Growth Chart - Radial Bar Chart
  // --------------------------------------------------------------------

  // const growthChartEl = document.querySelector('#growthChart'),
  //   growthChartOptions = {
  //     series: [78],
  //     labels: ['Growth'],
  //     chart: {
  //       height: 240,
  //       type: 'radialBar'
  //     },
  //     plotOptions: {
  //       radialBar: {
  //         size: 150,
  //         offsetY: 10,
  //         startAngle: -150,
  //         endAngle: 150,
  //         hollow: {
  //           size: '55%'
  //         },
  //         track: {
  //           background: cardColor,
  //           strokeWidth: '100%'
  //         },
  //         dataLabels: {
  //           name: {
  //             offsetY: 15,
  //             color: headingColor,
  //             fontSize: '15px',
  //             fontWeight: '600',
  //             fontFamily: 'Public Sans'
  //           },
  //           value: {
  //             offsetY: -25,
  //             color: headingColor,
  //             fontSize: '22px',
  //             fontWeight: '500',
  //             fontFamily: 'Public Sans'
  //           }
  //         }
  //       }
  //     },
  //     colors: [config.colors.primary],
  //     fill: {
  //       type: 'gradient',
  //       gradient: {
  //         shade: 'dark',
  //         shadeIntensity: 0.5,
  //         gradientToColors: [config.colors.primary],
  //         inverseColors: true,
  //         opacityFrom: 1,
  //         opacityTo: 0.6,
  //         stops: [30, 70, 100]
  //       }
  //     },
  //     stroke: {
  //       dashArray: 5
  //     },
  //     grid: {
  //       padding: {
  //         top: -35,
  //         bottom: -10
  //       }
  //     },
  //     states: {
  //       hover: {
  //         filter: {
  //           type: 'none'
  //         }
  //       },
  //       active: {
  //         filter: {
  //           type: 'none'
  //         }
  //       }
  //     }
  //   };
  // if (typeof growthChartEl !== undefined && growthChartEl !== null) {
  //   const growthChart = new ApexCharts(growthChartEl, growthChartOptions);
  //   growthChart.render();
  // }

  // Profit Report Line Chart
  // --------------------------------------------------------------------
  const profileReportChartEl = document.querySelector('#profileReportChart'),
    profileReportChartConfig = {
      chart: {
        height: 80,
        // width: 175,
        type: 'line',
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          top: 10,
          left: 5,
          blur: 3,
          color: config.colors.warning,
          opacity: 0.15
        },
        sparkline: {
          enabled: true
        }
      },
      grid: {
        show: false,
        padding: {
          right: 8
        }
      },
      colors: [config.colors.warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      series: [
        {
          data: [110, 270, 145, 245, 205, 285]
        }
      ],
      xaxis: {
        show: false,
        lines: {
          show: false
        },
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        show: false
      }
    };
  if (typeof profileReportChartEl !== undefined && profileReportChartEl !== null) {
    const profileReportChart = new ApexCharts(profileReportChartEl, profileReportChartConfig);
    profileReportChart.render();
  }

  // Distribución de especies en personajes principales
  // --------------------------------------------------------------------


  async function cargarDatosEspecies() {

    let especiesArray = []
    let cantidadPorEspecie = []

    let siguiente = "https://swapi.dev/api/species/?format=json"

    while (siguiente != null){
      const response = await fetch(siguiente);
      const data = await response.json();
      siguiente = data['next'];

      for (let datos of data['results']) {

        let nombre = datos['name'];
        especiesArray.push(nombre);

        let cantidadPersonas = datos['people'].length
        cantidadPorEspecie.push(cantidadPersonas)
      }
    }

    //obtener quienes son los humanos, doides, gungan, Tholothian para presentar en el panel de abajo. 
    // cambiar el total de ordenes a total de especies 
    // pasar el char de plantilla de profile report a cantidad de planetas en el film 
    //cambiar el char de profile report y tomar como plantilla el de especies y caracteristicas para el de profile de algunos planetas. 
    //eliminar payments y tansactions
    // si le da click a conocer cuales son: presentar un popup con la info de cuales son detallada. (expenses) eliminar profit
    // en los 3 puntitos de cada recuadro, poner "Conoce quienes son " personajes importantes y naves 

    const chartOrderStatistics = document.querySelector('#orderStatisticsChart'),
    orderChartConfig = {
      chart: {
        type: 'donut'
      },
      labels: especiesArray,
      series: cantidadPorEspecie,
      // colors: [config.colors.primary, config.colors.secondary, config.colors.info, config.colors.success],
      // stroke: {
      //   width: 5,
      //   colors: cardColor
      // },
      dataLabels: {
        enabled: false,
        formatter: function (val, opt) {
          return parseInt(val) + '%';
        }
      },
      legend: {
        show: false
      },
      grid: {
        padding: {
          top: 0,
          bottom: 0,
          right: 15
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: true,
              value: {
                fontSize: '1.5rem',
                fontFamily: 'Public Sans',
                color: headingColor,
                offsetY: -15,
                formatter: function (val) {
                  return parseInt(val) + '%';
                }
              },
              name: {
                offsetY: 20,
                fontFamily: 'Public Sans'
              },
              total: {
                show: true,
                fontSize: '0.8125rem',
                color: axisColor,
                label: 'Weekly',
                formatter: function (w) {
                  return '38%';
                }
              }
            }
          }
        }
      }
    };
  if (typeof chartOrderStatistics !== undefined && chartOrderStatistics !== null) {
    const statisticsChart = new ApexCharts(chartOrderStatistics, orderChartConfig);
    statisticsChart.render();
  }

  }

  cargarDatosEspecies()




  

  // Cantidad de planetas que hay en cada film - Area chart
  // --------------------------------------------------------------------


  async function cargarDatos() {

    let cantidadPlanetas = []
    let nombreFilm = []

    const response = await fetch('https://swapi.dev/api/films/?format=json');
    const data = await response.json();
    for (let datos of data['results']) {
      let titulo = datos['title'];
      let arrayPlanets = datos['planets']
      nombreFilm.push("" + titulo)
      cantidadPlanetas.push(arrayPlanets.length);
    }
    console.log(cantidadPlanetas, nombreFilm)
    const $grafica = document.querySelector("#graficaPlanetasYFilms");
    const datosPlanetsFilms = {
      label: "Cantidad de planetas en el film",
      data: cantidadPlanetas,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    };
    new Chart($grafica, {
      type: 'line',
      data: {
        labels: nombreFilm,
        datasets: [
          datosPlanetsFilms,
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
        },
      }
    });
  }

  fetch('https://swapi.dev/api/planets/?format=json')
  .then(response => response.json())
  .then(data => {
    let total = data['count'];
    document.getElementById("totalPlanetas").innerHTML = `${total}`;  
  })
  .catch(console.error);
  cargarDatos()

  // Expenses Mini Chart - Radial Chart
  // --------------------------------------------------------------------
  const weeklyExpensesEl = document.querySelector('#expensesOfWeek'),
    weeklyExpensesConfig = {
      series: [65],
      chart: {
        width: 60,
        height: 60,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 360,
          strokeWidth: '8',
          hollow: {
            margin: 2,
            size: '45%'
          },
          track: {
            strokeWidth: '50%',
            background: borderColor
          },
          dataLabels: {
            show: true,
            name: {
              show: false
            },
            value: {
              formatter: function (val) {
                return '$' + parseInt(val);
              },
              offsetY: 5,
              color: '#697a8d',
              fontSize: '13px',
              show: true
            }
          }
        }
      },
      fill: {
        type: 'solid',
        colors: config.colors.primary
      },
      stroke: {
        lineCap: 'round'
      },
      grid: {
        padding: {
          top: -10,
          bottom: -15,
          left: -10,
          right: -10
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof weeklyExpensesEl !== undefined && weeklyExpensesEl !== null) {
    const weeklyExpenses = new ApexCharts(weeklyExpensesEl, weeklyExpensesConfig);
    weeklyExpenses.render();
  }
})();

  // Especies y características - List
  // --------------------------------------------------------------------

