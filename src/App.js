import './App.css';
import MainPage from "./components/MainPage"
import Menu from "./components/Menu"
import React from 'react'

class App extends React.Component {
  async componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const api_url = await
      fetch(proxyUrl + 'https://hr.peterpartner.net/test/android/v1/users.json');
    const data = await api_url.json();
    this.setState({
      activeUser: data.users
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      condition: false,
      users: undefined,
      activeUser: undefined
    };
  }

  changeVisibility = () => {
    this.setState({ condition: !this.state.condition })
  }

  changeActive = async (cardNum) => {
    this.changeVisibility();
    console.log(cardNum);
    var user = await this.state.users.users.filter(user => (
      user.card_number === cardNum
    ))
    this.setState({ activeUser: user })
    console.log(this.state.activeUser);
  }

  getData = async () => {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const api_url = await
      fetch(proxyUrl + 'https://hr.peterpartner.net/test/android/v1/users.json');
    const data = await api_url.json();
    this.setState({
      users: data
    });
  }

  render() {
    if (this.state.condition)
      return (
        <div className="App">
          <Menu
            changeVisibility={this.changeVisibility}
            getData={this.getData}
            users={this.state.users}
            changeActive={this.changeActive}
          />
        </div>
      )
    else {
      return (
        <div className="App">
          <MainPage
            user={this.state.activeUser}
            changeVisibility={this.changeVisibility} />
        </div>
      )
    }
  }
}
export default App;
