import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';
 
class GoogleChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.chartEvents = [
        {
            eventName: 'select',
            callback(Chart) {
                // Returns Chart so you can access props and  the ChartWrapper object from chart.wrapper 
            console.log('Selected ', Chart.chart.getSelection());
            },
        },
        ];
        this.state = {
            options: {
                title: 'Age vs. Weight comparison',
                titleTextStyle: {color: 'purple', fontSize: '42'},
                subtitle: 'Susan\'s Awesome Chart',
                hAxis: { title: 'Age', minValue: 10, maxValue: 15, format: 'long', gridlines: {color: 'purple'}, textStyle: {color: 'purple'} },
                vAxis: { title: 'Weight', minValue: 10, maxValue: 15, baselineColor: 'yellow', gridlines: {color: 'purple'}, textStyle: {color: 'purple'} },
                legend: { position: 'bottom', textStyle: {color: 'blue', fontSize: 16} },
                curveType: 'function',
                backgroundColor: '#ffcccc',
                fontSize: '22',
                fontName: 'Times-Roman',
                pointShape: 'triangle',
                tooltip: {textStyle: {color: 'orange'}, showColorCode: false},
                // textStyle: {fontSize: 22, color: '#871b47', auraColor: '#d799ae'},
                // gradient: {
                //     color1: '#fbf6a7',
                //     color2: '#33b679',
                //     x1: '0%', y1: '0%',
                //     x2: '100%', y2: '100%'
                // }
                annotations: { textStyle: { fontName: 'Sans-serif'},
                    boxStyle: {
                    // Color of the box outline.
                    stroke: '#888',
                    // Thickness of the box outline.
                    strokeWidth: 1,
                    // x-radius of the corner curvature.
                    rx: 10,
                    // y-radius of the corner curvature.
                    ry: 10,
                    // Attributes for linear gradient fill.
                    gradient: {
                        // Start color for gradient.
                        color1: '#fbf6a7',
                        // Finish color for gradient.
                        color2: '#33b679',
                        // Where on the boundary to start and
                        // end the color1/color2 gradient,
                        // relative to the upper left corner
                        // of the boundary.
                        x1: '0%', y1: '0%',
                        x2: '100%', y2: '100%',
                        // If true, the boundary for x1,
                        // y1, x2, and y2 is the box. If
                        // false, it's the entire chart.
                        useObjectBoundingBoxUnits: true
                    }
                    }
                }
            },
            rows: [
                [0.5, 7],
                [2, 9],
                [4, 14],
                [6.5, 10],
                [9, 7],
                [13, 18],
            ],
            columns: [
                {
                    type: 'number',
                    label: 'Age'
                },
                {
                    type: 'number',
                    label: 'Weight'
                }
            ]
        };
    }
  render() {
    return (
      <div className={'my-pretty-chart-container'}>
        <Chart
          chartType="LineChart"
          rows={this.state.rows}
          columns={this.state.columns}
          options={this.state.options}
          graph_id="histogram"
          width="100%"
          height="400px"
          chartEvents={this.chartEvents}
          annotations={this.state.options.annotations}
        />
      </div>
    );
  }
}
export default GoogleChartComponent;
