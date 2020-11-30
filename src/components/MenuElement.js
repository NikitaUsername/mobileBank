import React, { Component } from 'react'
import mc from "../images/mc.svg"
import up from "../images/up.svg"
import visa from "../images/visa.svg"
import { ClipLoader } from 'react-spinners';


export default class MenuElement extends Component {
    constructor(props) {
        super(props);
        this.state = {logo: undefined};
    }
    componentDidMount(){
        switch(this.props.user.type){
            case 'mastercard': 
                this.setState({
                    logo: mc
                })
                break;
            case 'visa':
                this.setState({
                    logo: visa
                })
                break;
            case 'unionpay':
                this.setState({
                    logo: up
                })
                break;
        }
        
    }
    changeActive = () =>{
        this.props.changeActive(this.props.user.card_number);
    }

    render() {
        if(this.state.logo)
        {
            return (
                <div>
                    <div className="menuElement d-flex justify-content-start pan" onClick={e => this.changeActive()}>
                            <img className="menuElement__logo" src={ this.state.logo } alt=""/>
                            <p className="menuElement__number">
                                {this.props.user.card_number}
                            </p>
                        </div>
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
