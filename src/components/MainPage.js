import React, { Component } from 'react'
import avatar from "../images/avatar.svg"
import { ClipLoader } from 'react-spinners';
import mc from "../images/mc.svg"
import up from "../images/up.svg"
import visa from "../images/visa.svg"
import History from './History'
import Currency from './Currency'


export default class MainPage extends Component {
    componentDidMount(){
        this.getCurrencyData();
        
    }
    constructor(props) {
        super(props);
        this.state = {
            logo: undefined,
            cur: 1,
            data: undefined
        };
    }
    getCurrencyData = async()=>{
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        const api_url = await
                fetch( proxyUrl + 'https://www.cbr-xml-daily.ru/daily_json.js' );
        const data = await api_url.json();
        this.setState({
            data: data.Valute
        })
    }

    changeCurrency = (value) =>{
        this.setState({
            cur: value
        })
    }

    render() {
        if(this.props.user && this.state.data){
            var user = this.props.user[0]
            var logo, cur, sign;
            switch(user.type){
                case 'mastercard': 
                        logo = mc              
                    break;
                case 'visa':                 
                        logo =visa               
                    break;
                case 'unionpay':    
                        logo = up
                    break;
            }
            switch(this.state.cur){
                case 1:
                    cur = this.state.data.GBP.Value
                    sign = '£';
                break;
                case 2:
                    cur = this.state.data.EUR.Value
                    sign = '€';
                break;
                case 3:
                    cur = 1
                    sign = '₽';
                break;
            }
            console.log(cur);
            return (
                <div>
                    <div className="titleBlock pan">
                        <p className="titleBlock__pageTitle">Главная</p>
                    </div>
                    <div className="card pan" onClick={this.props.changeVisibility}>
                        <div className="cardInfo">
                            <img className="cardInfo__systemLogo" src={logo} alt=""/>
                            <p className="cardInfo__number">
                            { user.card_number }
                            </p>
                        </div>
                        <div className="ownerInfo">
                            <img className="ownerInfo__avatar" src={avatar} alt=""/>
                            <p className="ownerInfo_name">
                                {user.cardholder_name}
                            </p>
                            <p className="ownerInfo_validThru">
                                valid thru
                            </p>
                            <p className="ownerInfo_validDate">
                                {user.valid}
                            </p>
                        </div>
                        <div className="balance d-flex justify-content-between">
                            <div className="balance__main">                            
                                {sign + new Intl.NumberFormat('ru-RU').format((user.balance*this.state.data.USD.Value/cur).toFixed(2)) }                                      
                            </div>
                            <div className="balanceDollar">
                                <div className="balanceDollar__yourBalance">
                                    Your balance
                                </div>
                                <div className="balanceDollar__value">
                                    $ {user.balance}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Currency changeCurrency={this.changeCurrency}/>
                    <History history={this.props.user[0].transaction_history}
                    usd={this.state.data.USD.Value}
                    cur={cur}
                    sign={sign}/>
                </div>
            )
        }
        else{
            
            return(
                <div>
                    <ClipLoader/>
                </div>
            )
        }
    }
}

