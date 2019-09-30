import React, {Component} from 'react'
import {Bar, Line, Pie} from  'react-chartjs-2';
import {chartJsPluginSubtitle} from 'chartjs-subtitle';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:props.chartData,
            weekBarData:props.weekBarData,
            individualWeekBarData:props.individualWeekBarData,
            pieData:props.pieData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition: 'right',
        location: 'MCS',
        Month: '(Jan)',
        Year: "(2019)",
        id:"1"

    }

    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    // width={100}
                    // height={50}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Monthly Performance for ' + this.props.role + ' ' + this.props.year,
                            fontSize: 25
                        },
                        legend:{
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    suggestedMin: 1000,
                                    suggestedMax: 2000,
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: '# of calls taken'
                                }
                            }]
                        }
                    }}

                />
                <p>
                    -----------------------------------------------------------------------------------------
                </p>
                <Bar
                    data={this.state.weekBarData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Weekly Performance for ' + this.props.role + ' ' + this.props.month,
                            fontSize: 25
                        },
                        legend:{
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        },
                        scales: {
                            xAxes: [{
                                barPercentage: 0.5
                            }],
                            yAxes: [{
                                ticks: {
                                    suggestedMin: 200,
                                    suggestedMax: 450,
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: '# of calls taken'
                                }
                            }]
                        }
                    }}

                />
                <p>
                    ------------------------------------------------------------------------------------------
                </p>
                <Pie
                    data={this.state.pieData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Monthly Performance for ' + this.props.role + ' Team ' + this.props.month,
                            fontSize: 25,
                            padding: 20
                        },
                        legend:{
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        },
                        plugins: {
                            chartJsPluginSubtitle: {
                                display: true,
                                fontSize: 12,
                                fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                                fontColor: '#888',
                                fontStyle: 'normal',
                                paddingTop: 4,
                                text: 'number of calls taken',
                            }
                        }
                    }}

                />
                <p>
                    ------------------------------------------------------------------------------------------
                </p>
                <Bar
                    data={this.state.individualWeekBarData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Weekly Performance for ' + this.props.role + ' ' + this.props.id + ' ' + this.props.month,
                            fontSize: 25
                        },
                        legend:{
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        },
                        scales: {
                            xAxes: [{
                                barPercentage: 0.5
                            }],
                            yAxes: [{
                                ticks: {
                                    suggestedMin: 200,
                                    suggestedMax: 450,
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: '# of calls taken'
                                }
                            }]
                        }
                    }}

                />


            </div>
        )
    }
}

export default Chart;