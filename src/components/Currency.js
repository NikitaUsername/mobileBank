import React, { Component } from 'react'

export default class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
    }

    changeValue = (val) => {
        this.setState({
            value: val
        });
        this.props.changeCurrency(val);
    }

    render() {
        var blueStyle = {
            backgroundColor: "rgba(0, 131, 225, 1)",
            color: 'white'
        }
        var whiteStyle = {
            backgroundColor: 'white',
            color: 'rgba(140, 154, 174, 1)'
        }
        return (
            <div className="currency">
                <h2 className="currencyTitle">
                    Change currency
                </h2>
                <div className="values d-flex justify-content-between">
                    <div className="values__element pan"
                        style={this.state.value === 1 ? blueStyle : whiteStyle}
                        onClick={this.changeValue.bind(this, 1)} >
                        <div className='values__sign'>
                            £
                        </div>
                        <div className='values__name'>
                            GBP
                        </div>
                    </div>
                    <div className="values__element pan"
                        style={this.state.value === 2 ? blueStyle : whiteStyle}
                        onClick={this.changeValue.bind(this, 2)}>
                        <div className='values__sign'>
                            €
                        </div>
                        <div className='values__name'>
                            EUR
                        </div>
                    </div>
                    <div className="values__element pan"
                        style={this.state.value === 3 ? blueStyle : whiteStyle}
                        onClick={this.changeValue.bind(this, 3)}>
                        <div className='values__sign'>
                            ₽
                        </div>
                        <div className='values__name'>
                            RUB
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
