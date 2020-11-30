import React, { Component } from 'react'

export default class HistoryElement extends Component {
    render() {
        if (this.props.data) {
            var logo = "//logo.clearbit.com/" + this.props.data.title + ".com"
            var symb = this.props.data.amount[0]
            var amount = new Intl.NumberFormat('ru-RU').format((this.props.data.amount * this.props.usd / this.props.cur).toFixed(2)).slice(1)
            return (
                <div className="historyElement">
                    <div className="details d-flex justify-content-between">
                        <div className="nameDate">
                            <img src={logo} className="nameDate__logo">
                            </img>
                            <div className="namedate__info">
                                <div className="namedate__name">
                                    {this.props.data.title}
                                </div>
                                <div className="namedate__date">
                                    {this.props.data.date}
                                </div>
                            </div>
                        </div>
                        <div className="money">
                            <div className="money__cur">
                                <span className="money__cur--gray">
                                    {symb}  {this.props.sign}
                                </span>
                                {amount}
                            </div>
                            <div className="money__dollar">
                                $ {this.props.data.amount.slice(1)}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
