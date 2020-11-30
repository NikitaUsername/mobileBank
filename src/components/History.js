import React, { Component } from 'react'
import HistoryElement from "./HistoryElement"


export default class History extends Component {
    render() {
        return (
            <div>
                <div className="history pan">
                    <div className="history__title">
                        History
                    </div>
                    <div className="historyList">
                        { this.props.history.map( data => (
                            <HistoryElement  data={ data }
                            usd={this.props.usd}
                            cur={this.props.cur}
                            sign={this.props.sign}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
