import React, { Component } from 'react';
import logo from './newlogo.png';
import './App.css';

class Button extends Component {
    render() {
        const {onClick, className='', children} = this.props;
        return (
            <button onClick={onClick} className={className} type="Button"> {children} </button>
        );
    }

}

class App extends Component {

    constructor(props) {
        super(props);
        this.handleAloitaClick = this.handleAloitaClick.bind(this);
        this.handleYksinClick = this.handleYksinClick.bind(this);
        this.handleRyhmassaClick = this.handleRyhmassaClick.bind(this);
        this.state = {
            Aloita: false,
            Yksin: false,
            Ryhmassa: false
        };
    }
    handleAloitaClick() {
        this.setState({Aloita: true})
    }
    handleYksinClick() {
        this.setState({Yksin: true})
    }
    handleRyhmassaClick() {
        this.setState({Ryhmassa: true})
    }

    handleResetClick() {
        this.setState({
            Aloita: false,
            Yksin: false,
            Ryhmassa: false
        });
    }
  render() {
        const Aloita = this.state.Aloita
        const Yksin = this.state.Yksin
        const Ryhmassa = this.state.Ryhmassa
        let button1,button2,vai;
        if(Aloita) {
            if(Yksin) {
                vai = <p>Keskiviikkonna kl 18:30 lähde 30 min kävely- tai juoksu lenkille</p>
                button2 = <Button className="Button" color="pink" shadowsize={2}
                                  onClick={this.handleResetClick.bind(this)}>reset</Button>;
            } else {
                if(Ryhmassa){
                    vai = <p>Keskiviikkona lähde pelaamaan sählyä otaniemessä kl 20!</p>
                    button2 = <Button className="Button" color="pink" shadowsize={2}
                                     onClick={this.handleResetClick.bind(this)}>reset</Button>;
                } else{

                    button1 = <Button className="Button" color="pink" shadowsize={2}
                                      onClick={this.handleYksinClick.bind(this)}>yksin</Button>;
                    button2 = <Button className="Button" color="pink" shadowsize={2}
                                      onClick={this.handleRyhmassaClick.bind(this)}>ryhmässä</Button>;
                    vai = <p>Vai</p>;
                }
            }
          } else {
              button1 = <Button className="Button" color ="pink" shadowsize={2} onClick={this.handleAloitaClick.bind(this)} >aloita!</Button>;
          }
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p></p>
          <p>
            Tervetuloa Aloittamaan!
          </p>
            {button1}{vai}{button2}
        </header>
      </div>
    );
  }
}

export default App;
