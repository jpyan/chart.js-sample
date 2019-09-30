import React , {Component} from 'react'
import './App.css';
import Chart from './components/Chart';

class App extends Component {

  constructor(){
    super();
    this.state = {
        chartData: {},
        weekBarData: {},
        individualWeekBarData: {},
        pieData: {}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
        chartData:{
            labels:['Ja', 'Feb', 'Mar', 'Apr', 'May', 'Jue', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets:[
                {
                    fill: true,
                    label:'MCS1',
                    data:[
                        1250,
                        1351,
                        1404,
                        1285,
                        1705,
                        1687,
                        1558,
                        1353,
                        1603,
                        1403,
                        1800,
                        1667
                    ],
                    borderColor:'rgb(75, 0, 130, 0.5)',
                    backgroundColor:[
                        'rgb(75, 0, 130, 0.1)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgb(75, 0, 130, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                    ]
                },
                {
                    fill: true,
                    label: 'MCS2',
                    data: [
                        1350,
                        1431,
                        1304,
                        1185,
                        1605,
                        1699,
                        1430,
                        1400,
                        1389,
                        1588,
                        1700,
                        1801
                    ],
                    borderColor: 'rgb(75, 0, 130, 0.8)',
                    backgroundColor: [
                        'rgb(75, 0, 130, 0.1)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgb(75, 0, 130, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                    ]
                },
                {
                    fill: true,
                    label:'MCS3',
                    data:[
                        1450,
                        1331,
                        1404,
                        1125,
                        1405,
                        1499,
                        1330,
                        1300,
                        1490,
                        1488,
                        1600,
                        1601
                    ],
                    borderColor:'rgb(175, 0, 130, 0.7)',
                    backgroundColor:[
                        'rgb(175, 0, 130, 0.1)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgb(75, 0, 130, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                    ]
                }
            ]
        },
        weekBarData: {
            labels:['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets:[
                {
                    label:'MCS1',
                    data:[
                        390,
                        350,
                        370,
                        400
                    ],
                    barThickness: 5,
                    borderColor:'rgb(75, 0, 130, 0.6)',
                    backgroundColor:[
                        'rgb(75, 0, 130, 0.5)',
                        'rgb(75, 0, 130, 0.5)',
                        'rgb(75, 0, 130, 0.5)',
                        'rgb(75, 0, 130, 0.5)'
                    ],

                },
                {
                    label:'MCS2',
                    data:[
                        410,
                        320,
                        380,
                        390
                    ],
                    barThickness: 5,
                    backgroundColor:[
                        'rgb(75, 0, 130, 0.8)',
                        'rgb(75, 0, 130, 0.8)',
                        'rgb(75, 0, 130, 0.8)',
                        'rgb(75, 0, 130, 0.8)'

                    ],

                },
                {
                    label:'MCS3',
                    data:[
                        320,
                        330,
                        300,
                        280
                    ],
                    barThickness: 5,
                    borderColor:'rgb(75, 0, 130, 0.6)',
                    backgroundColor:[
                        'rgb(175, 0, 130, 0.7)',
                        'rgb(175, 0, 130, 0.7)',
                        'rgb(175, 0, 130, 0.7)',
                        'rgb(175, 0, 130, 0.7)'

                    ],

                },

            ],

        },
        individualWeekBarData: {
            labels:['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets:[
                {
                    label:'This Month',
                    data:[
                        390,
                        350,
                        370,
                        400
                    ],
                    barThickness: 5,
                    borderColor:'rgb(75, 0, 130, 0.6)',
                    backgroundColor:[
                        'rgb(75, 0, 130, 0.8)',
                        'rgb(75, 0, 130, 0.8)',
                        'rgb(75, 0, 130, 0.8)',
                        'rgb(75, 0, 130, 0.8)'
                    ],

                },
                {
                    label:'Last Month',
                    data:[
                        380,
                        320,
                        390,
                        370
                    ],
                    barThickness: 5,
                    borderColor:'rgb(75, 0, 130, 0.1)',
                    backgroundColor:[
                        'rgb(75, 0, 130, 0.3)',
                        'rgb(75, 0, 130, 0.3)',
                        'rgb(75, 0, 130, 0.3)',
                        'rgb(75, 0, 130, 0.3)'
                    ],

                }
            ]
        },
        pieData:{
            labels: ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5"],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#cd6a92", "#8e5ea2","#5b20ba","#e8b897","#c40f76"],
                data: [2478,2567,2934,2784,1433]
            }]
        }
    })
  }

  render() {
    return (
        <div className="App">
            <div className="third widget line">
                <Chart
                    chartData={this.state.chartData}
                    weekBarData={this.state.weekBarData}
                    pieData={this.state.pieData}
                    individualWeekBarData={this.state.individualWeekBarData}
                    role="MCS"
                    month="(Sep)"
                    year="(2018)"
                    id="2"
                    legendPosition="top"
                />
                <div className="chart-legend">
                    {/*<h3>Number of calls per Week</h3>*/}
                    {/*<p><span>This Month</span> &mdash; <strong>Last Moth</strong></p>*/}
                    <p><a href="" className="button">Change Month</a></p>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
