import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/index';
import Select from '../../components/select/select';
import {Line} from 'react-chartjs-2'
import './forex.css'

class Forex extends Component {
    state = {
        forex: {
            elementType: 'select',
            config: {
                options: ['EUR-USD', 'AUD-USD', 'GBP-USD', 'NZD-USD']
            },
            value: 'EUR-USD'
        }
    }

    componentDidMount() {
        this.props.history.push({
            pathname: '/forex',
            search: '?f=' + this.state.forex.value
        })
        this.props.onFetchData(this.state.forex.value)
        this.props.onFetchPredictedData(this.state.forex.value)
    }

    inputChangeHandler = (event) => {
        const updateElement = {
            ...this.state.forex,
            value: event.target.value
        }
        this.props.history.push({
            pathname: '/forex',
            search: '?f=' + event.target.value
        })
        this.props.onFetchData(event.target.value)
        this.props.onFetchPredictedData(event.target.value)
        this.setState({
            forex: updateElement
        })
    }

    render() {
        const forexData = this.props.data.slice(14, 153)
        let close = []
        let date = []
        const tdlist = forexData.map(data => {
            close.push(data.close)
            date.push(data.date.substring(0, 10))
            return(
                <tr key={data.uuid}>
                    <td>{data.date.substring(0, 10)}</td>
                    <td>{data.open}</td>
                    <td>{data.low}</td>
                    <td>{data.high}</td>
                    <td>{data.close}</td>
                </tr>
            )
        })
        
        const tdlist2 = this.props.predictedData.map(data => {
            return(
                <tr key={data.uuid}>
                    <td>{data.date.substring(0, 10)}</td>
                    <td>{data.close}</td>
                </tr>
            )
        })

        const data = {
            labels: date.reverse(),
            datasets: [
                {
                    borderColor: 'red',
                    data: close.reverse(),
                    label: 'Daily rate'
                }
            ]
        }

        return (
            <div className="Forex">
                <Select opts={this.state.forex.config.options} value={this.state.forex.value} changed={(event) => this.inputChangeHandler(event)}/>
                <div className="Table-Container">
                    <div className="Data-Table">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{textAlign: 'center', width: '150px'}}>Date</th>
                                    <th>Open</th>
                                    <th>Low</th>
                                    <th>High</th>
                                    <th>Close</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tdlist}
                            </tbody>
                        </table>
                    </div>
                    <div className="Predicted-Table">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{textAlign: 'center', width: '150px'}}>Date</th>
                                    <th>Close</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tdlist2}
                            </tbody>
                        </table>
                    </div>
                    <div className="Chart">
                        <Line options={{responsive: true, showLines: true}} data={data}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.forex.data,
        predictedData: state.predicted_forex.predicted_data,
        error: state.forex.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchData: (forexType) => dispatch(actions.fetchData(forexType)),
        onFetchPredictedData: (forexType) => dispatch(actions.fetchPredictedData(forexType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forex)