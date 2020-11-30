import React, { Component } from 'react'
import back from "../images/back.svg"
import MenuElement from "./MenuElement"
import { ClipLoader } from 'react-spinners';

export default class Menu extends Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        if (this.props.users) {
            return (
                <div className="menu" >
                    <div className="titleBlock d-flex justify-content-left pan">
                        <img className="titleBlock__backButton" onClick={this.props.changeVisibility} src={back} />
                        <p className="titleBlock__pageTitle--menu">Мои карты</p>
                    </div>
                    { this.props.users.users.map(user => (
                        <MenuElement key={user.card_number} user={user} changeActive={this.props.changeActive} />
                    ))}

                </div>
            )
        }
        else {
            return (
                <div>
                    <ClipLoader />
                </div>
            )
        }
    }
}
