import React, { Component } from 'react';
import logo from './newlogo2.png';
import './App.css';

class Button extends Component {
    render() {
        const {onClick, className='', children} = this.props;
        return (
            <button onClick={onClick} className={className} type="Button"> {children} </button>
        );
    }

}
const TableHeader = () =>
    <div className="table">
        <div className="table-row">
            <span style={{ width: '20%' }}>Laji</span>
            <span style={{ width: '50%' }}>Paikka</span>
            <span style={{ width: '10%' }}>Aika</span>
            <span style={{ width: '10%' }}>Hinta</span>
            <span style={{ width: '10%' }}>Pisteet</span>
        </div>
    </div>;
const Table = ({list, pattern, onDismiss}) =>
    <div className="table"> {list.map(item =>
        <div key = {item.objectID} className="table-row">
            <span style={{ width: '20%' }}>{item.laji}</span>
            <span style={{ width: '50%' }}>{item.paikka} </span>
            <span style={{ width: '10%' }}>{item.aika} </span>
            <span style={{ width: '10%' }}>{item.hinta} </span>
            <span style={{ width: '10%' }}>{item.points}</span>
        </div>
    )}
    </div>;
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Aloita: true, Yksin: false, Kaukana: false, Hinta: false,
            Valine: false, Sisalla: false, Final: false,
            lajit: [
                {id: 0, yksin: 0, laji: 'Kahvakuulatunti', kaukana: 0, hinta: 0, sisalla: 1, valine: 0, aika: '18:00', paikka: 'Otaniemen urheiluhalli', points: 0},
                {id: 1, yksin: 0, laji: 'Sovellettu jääliikunta', kaukana: 0, hinta: 0, sisalla: 1, valine: 1, aika: '16:00', paikka: 'Laaksolahden urheilupuisto, harjoitusjäähalli', points: 0},
                {id: 2, yksin: 0, laji: 'Kuntosali tutuksi', kaukana: 0, hinta: 0, sisalla: 1, valine: 0, aika: '09:30', paikka: 'Espoonlahden jäähalli', points: 0},
                {id: 3, yksin: 0, laji: 'Kehonhuolto', kaukana: 1, hinta: 0, sisalla: 1, valine: 0, aika: '09:00', paikka: 'Warrior Areena, Suur-Leppävaara', points: 0},
                {id: 4, yksin: 0, laji: 'Vesikävely- ja juoksuohjaus', kaukana: 0, hinta: 0, sisalla: 1, valine: 0, aika: '17:00', paikka: 'Espoonlahden uimahalli', points: 0},
                {id: 5, yksin: 0, laji: 'Palloilu', kaukana: 0, hinta: 0, sisalla: 1, valine: 0, aika: '17:00', paikka: 'Kannusillanmäen liikuntahalli, palloilusali', points: 0},
                {id: 6, yksin: 0, laji: 'Vesijumppa', kaukana: 0, hinta: 2.50, sisalla: 1, valine: 0, aika: '10:15', paikka: 'Espoonlahden uimahalli', points: 0},
                {id: 7, yksin: 0, laji: 'Sulkapallo', kaukana: 0, hinta: 12, sisalla: 1, valine: 1, aika: '7.00' , paikka: 'Otaniemen urheiluhalli', points: 0},
                {id: 8, yksin: 0, laji: 'Spin Virtual', kaukana: 0, hinta: 10, sisalla: 1, valine: 0, aika: '7.00' , paikka: 'Unisport Meilahti', points: 0},
                {id: 9, yksin: 0, laji: 'Lempeä hatha-jooga', kaukana: 0, hinta: 8, sisalla: 1, valine: 0, aika: '7.15' , paikka: 'Otaniemen urheiluhalli', points: 0},
                {id: 10, yksin: 0, laji: 'Spin Virtual', kaukana: 0, hinta: 10, sisalla: 1, valine: 0, aika: '8.30' , paikka: 'Unisport Kluuvi', points: 0},
                {id: 11, yksin: 0, laji: 'Pilates', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '8.00' , paikka: 'Unisport Kumpula', points: 0},
                {id: 12, yksin: 0, laji: 'Body', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '8.30' , paikka: 'Unisport Kluuvi', points: 0},
                {id: 13, yksin: 0, laji: 'Astangajooga', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '10.55' , paikka: 'Unisport Kluuvi', points: 0},
                {id: 14, yksin: 0, laji: 'Bodypump', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '12.15' , paikka: 'Unisport Kluuvi', points: 0},
                {id: 15, yksin: 0, laji: 'Funk', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '14.00' , paikka: 'Unisport Kluuvi', points: 0},
                {id: 16, yksin: 0, laji: 'Bodycombat', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '14.45' , paikka: 'Unisport Kumpula', points: 0},
                {id: 17, yksin: 0, laji: 'Flow-jooga', kaukana: 1, hinta: 10, sisalla: 1, valine: 0, aika: '15.05' , paikka: 'Unisport Kluuvi', points: 0},
                {id: 18, yksin: 0, laji: 'Zumba', kaukana: 1, hinta: 10, sisalla: 1, valine: 0, aika: '16.05' , paikka: 'Otaniemen urheiluhalli', points: 0},
                {id: 19, yksin: 0, laji: 'Spin Interval', kaukana: 1, hinta: 10, sisalla: 1, valine: 0, aika: '18.45' , paikka: 'Unisport Meilahti', points: 0},
                {id: 20, yksin: 1, laji: 'Circuit Training', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '10.05' , paikka: 'Unisport Kluuvi', points: 0},
                {id: 21, yksin: 1, laji: 'Boulderointi', kaukana: 1, hinta: 12, sisalla: 1, valine: 0, aika: '15.00' , paikka: 'Boulderkeskus Pasila', points: 0},
                {id: 22, yksin: 1, laji: 'Boulderointi', kaukana: 1, hinta: 12, sisalla: 1, valine: 0, aika: '12.30' , paikka: 'Boulderkeskus Herttoniemi', points: 0},
                {id: 23, yksin: 1, laji: 'Boulderointi', kaukana: 1, hinta: 12, sisalla: 1, valine: 0, aika: '19.00' , paikka: 'Boulderkeskus Espoo/Suomenoja', points: 0},
                {id: 24, yksin: 0, laji: 'Keilaus', kaukana: 0, hinta: 22, sisalla: 1, valine: 0, aika: '14.00' , paikka: 'Tapiolan keilahalli', points: 0},
                {id: 25, yksin: 0, laji: 'Keilaus', kaukana: 1, hinta: 34, sisalla: 1, valine: 0, aika: '14.00' , paikka: 'Ruusulankadun keilahalli', points: 0},
                {id: 26, yksin: 1, laji: 'Uinti', kaukana: 0, hinta: 5.50, sisalla: 1, valine: 0, aika: '18.00' , paikka: 'Leppävaaran uimahalli ja maauimala', points: 0},
                {id: 27, yksin: 1, laji: 'Uinti', kaukana: 0, hinta: 5.50, sisalla: 1, valine: 0, aika: '17.00' , paikka: 'Kallion uimahalli', points: 0}
            ]
        };
    }
    updatePoints(para, i, value) {
        this.setState( this.state.lajit.map(item=> {
            if (para === 'yksin' && item.yksin == i) {
                item.points = item.points + value;
            }
            if (para === 'kaukana' && item.kaukana == i) {
                item.points = item.points + value;
            }
            if (para === 'hinta') {
                if(item.hinta > 10 && i == 0) {
                    item.points = item.points + value;
                }
                if(item.hinta <= 10){
                    item.points = item.points + value;
                }
            }
            if (para === 'valine' && item.valine == i) {
                item.points = item.points + value;
            }
            if (para === 'sisalla' && item.sisalla == i) {
                item.points = item.points + value;
            }
        }))
    };
    handleAloitaClick() {
        this.setState({Yksin: true, Aloita: false})
    }
    handleYksinClick(i) {
        this.updatePoints('yksin',i, 3);
        this.setState({Yksin: false, Kaukana: true})
    }
    handleKaukanaClick(i) {
        this.updatePoints('kaukana',i, 3);
        this.setState({Kaukana: false, Hinta: true})
    }
    handleHintaClick(i) {
        this.updatePoints('hinta',i, 3);
        this.setState({Hinta: false, Valine: true})
    }
    handleValineClick(i) {
        this.updatePoints('valine',i, 3);
        this.setState({Valine:false, Sisalla: true})
    }
    handleSisallaClick(i) {
        this.updatePoints('sisalla',i, 3);
        this.setState({Sisalla: false, Final: true})
    }
    handleEndClick() {
        this.setState({Aloita: true, Yksin: false, Kaukana: false, Hinta: false,
            Valine: false, Sisalla: false, Final: true})
    }

    handleResetClick() {
        this.setState({
            Aloita: true, Yksin: false, Kaukana: false, Hinta: false,
            Valine: false, Sisalla: false, Final: false,
            lajit: [
                {
                    id: 0,
                    yksin: 0,
                    laji: 'Kahvakuulatunti',
                    kaukana: 0,
                    hinta: 0,
                    sisalla: 1,
                    valine: 0,
                    aika: '18:00',
                    paikka: 'Otaniemen urheiluhalli',
                    points: 0
                },
                {
                    id: 1,
                    yksin: 0,
                    laji: 'Sovellettu jääliikunta',
                    kaukana: 0,
                    hinta: 0,
                    sisalla: 1,
                    valine: 1,
                    aika: '16:00',
                    paikka: 'Laaksolahden urheilupuisto, harjoitusjäähalli',
                    points: 0
                },
                {
                    id: 2,
                    yksin: 0,
                    laji: 'Kuntosali tutuksi',
                    kaukana: 0,
                    hinta: 0,
                    sisalla: 1,
                    valine: 0,
                    aika: '09:30',
                    paikka: 'Espoonlahden jäähalli',
                    points: 0
                },
                {
                    id: 3,
                    yksin: 0,
                    laji: 'Kehonhuolto',
                    kaukana: 1,
                    hinta: 0,
                    sisalla: 1,
                    valine: 0,
                    aika: '09:00',
                    paikka: 'Warrior Areena, Suur-Leppävaara',
                    points: 0
                },
                {
                    id: 4,
                    yksin: 0,
                    laji: 'Vesikävely- ja juoksuohjaus',
                    kaukana: 0,
                    hinta: 0,
                    sisalla: 1,
                    valine: 0,
                    aika: '17:00',
                    paikka: 'Espoonlahden uimahalli',
                    points: 0
                },
                {
                    id: 5,
                    yksin: 0,
                    laji: 'Palloilu',
                    kaukana: 0,
                    hinta: 0,
                    sisalla: 1,
                    valine: 0,
                    aika: '17:00',
                    paikka: 'Kannusillanmäen liikuntahalli, palloilusali',
                    points: 0
                },
                {
                    id: 6,
                    yksin: 0,
                    laji: 'Vesijumppa',
                    kaukana: 0,
                    hinta: 2.50,
                    sisalla: 1,
                    valine: 0,
                    aika: '10:15',
                    paikka: 'Espoonlahden uimahalli',
                    points: 0
                },
                {
                    id: 7,
                    yksin: 0,
                    laji: 'Sulkapallo',
                    kaukana: 0,
                    hinta: 12,
                    sisalla: 1,
                    valine: 1,
                    aika: '7.00',
                    paikka: 'Otaniemen urheiluhalli',
                    points: 0
                },
                {
                    id: 8,
                    yksin: 0,
                    laji: 'Spin Virtual',
                    kaukana: 0,
                    hinta: 10,
                    sisalla: 1,
                    valine: 0,
                    aika: '7.00',
                    paikka: 'Unisport Meilahti',
                    points: 0
                },
                {
                    id: 9,
                    yksin: 0,
                    laji: 'Lempeä hatha-jooga',
                    kaukana: 0,
                    hinta: 8,
                    sisalla: 1,
                    valine: 0,
                    aika: '7.15',
                    paikka: 'Otaniemen urheiluhalli',
                    points: 0
                },
                {
                    id: 10,
                    yksin: 0,
                    laji: 'Spin Virtual',
                    kaukana: 0,
                    hinta: 10,
                    sisalla: 1,
                    valine: 0,
                    aika: '8.30',
                    paikka: 'Unisport Kluuvi',
                    points: 0
                },
                {
                    id: 11,
                    yksin: 0,
                    laji: 'Pilates',
                    kaukana: 1,
                    hinta: 8,
                    sisalla: 1,
                    valine: 0,
                    aika: '8.00',
                    paikka: 'Unisport Kumpula',
                    points: 0
                },
                {
                    id: 12,
                    yksin: 0,
                    laji: 'Body',
                    kaukana: 1,
                    hinta: 8,
                    sisalla: 1,
                    valine: 0,
                    aika: '8.30',
                    paikka: 'Unisport Kluuvi',
                    points: 0
                },
                {
                    id: 13,
                    yksin: 0,
                    laji: 'Astangajooga',
                    kaukana: 1,
                    hinta: 8,
                    sisalla: 1,
                    valine: 0,
                    aika: '10.55',
                    paikka: 'Unisport Kluuvi',
                    points: 0
                },
                {
                    id: 14,
                    yksin: 0,
                    laji: 'Bodypump',
                    kaukana: 1,
                    hinta: 8,
                    sisalla: 1,
                    valine: 0,
                    aika: '12.15',
                    paikka: 'Unisport Kluuvi',
                    points: 0
                },
                {
                    id: 15,
                    yksin: 0,
                    laji: 'Funk',
                    kaukana: 1,
                    hinta: 8,
                    sisalla: 1,
                    valine: 0,
                    aika: '14.00',
                    paikka: 'Unisport Kluuvi',
                    points: 0
                },
                {
                    id: 16,
                    yksin: 0,
                    laji: 'Bodycombat',
                    kaukana: 1,
                    hinta: 8,
                    sisalla: 1,
                    valine: 0,
                    aika: '14.45',
                    paikka: 'Unisport Kumpula',
                    points: 0
                },
                {
                    id: 17,
                    yksin: 0,
                    laji: 'Flow-jooga',
                    kaukana: 1,
                    hinta: 10,
                    sisalla: 1,
                    valine: 0,
                    aika: '15.05',
                    paikka: 'Unisport Kluuvi',
                    points: 0
                },
                {
                    id: 18,
                    yksin: 0,
                    laji: 'Zumba',
                    kaukana: 1,
                    hinta: 10,
                    sisalla: 1,
                    valine: 0,
                    aika: '16.05',
                    paikka: 'Otaniemen urheiluhalli',
                    points: 0
                },
                {
                    id: 19,
                    yksin: 0,
                    laji: 'Spin Interval',
                    kaukana: 1,
                    hinta: 10,
                    sisalla: 1,
                    valine: 0,
                    aika: '18.45',
                    paikka: 'Unisport Meilahti',
                    points: 0
                },
                {
                    id: 20,
                    yksin: 1,
                    laji: 'Circuit Training',
                    kaukana: 1,
                    hinta: 8,
                    sisalla: 1,
                    valine: 0,
                    aika: '10.05',
                    paikka: 'Unisport Kluuvi',
                    points: 0
                },
                {
                    id: 21,
                    yksin: 1,
                    laji: 'Boulderointi',
                    kaukana: 1,
                    hinta: 12,
                    sisalla: 1,
                    valine: 0,
                    aika: '15.00',
                    paikka: 'Boulderkeskus Pasila',
                    points: 0
                },
                {
                    id: 22,
                    yksin: 1,
                    laji: 'Boulderointi',
                    kaukana: 1,
                    hinta: 12,
                    sisalla: 1,
                    valine: 0,
                    aika: '12.30',
                    paikka: 'Boulderkeskus Herttoniemi',
                    points: 0
                },
                {
                    id: 23,
                    yksin: 1,
                    laji: 'Boulderointi',
                    kaukana: 1,
                    hinta: 12,
                    sisalla: 1,
                    valine: 0,
                    aika: '19.00',
                    paikka: 'Boulderkeskus Espoo/Suomenoja',
                    points: 0
                },
                {
                    id: 24,
                    yksin: 0,
                    laji: 'Keilaus',
                    kaukana: 0,
                    hinta: 22,
                    sisalla: 1,
                    valine: 0,
                    aika: '14.00',
                    paikka: 'Tapiolan keilahalli',
                    points: 0
                },
                {
                    id: 25,
                    yksin: 0,
                    laji: 'Keilaus',
                    kaukana: 1,
                    hinta: 34,
                    sisalla: 1,
                    valine: 0,
                    aika: '14.00',
                    paikka: 'Ruusulankadun keilahalli',
                    points: 0
                },
                {
                    id: 26,
                    yksin: 1,
                    laji: 'Uinti',
                    kaukana: 0,
                    hinta: 5.50,
                    sisalla: 1,
                    valine: 0,
                    aika: '18.00',
                    paikka: 'Leppävaaran uimahalli ja maauimala',
                    points: 0
                },
                {
                    id: 27,
                    yksin: 1,
                    laji: 'Uinti',
                    kaukana: 0,
                    hinta: 5.50,
                    sisalla: 1,
                    valine: 0,
                    aika: '17.00',
                    paikka: 'Kallion uimahalli',
                    points: 0
                }
            ]
        });
    }
    render() {

        const [Aloita, Yksin, Kaukana, Hinta, Valine, Sisalla, Final, lajit] = [this.state.Aloita, this.state.Yksin,
            this.state.Kaukana, this.state.Hinta, this.state.Valine, this.state.Sisalla, this.state.Final, this.state.lajit];
        let button1,button2,vai;
        let button3 = button3 = <Button className="Button2" onClick={this.handleEndClick.bind(this)}>Loppuun?</Button>;
        let slice = 0;
        let TableHeader1 = () => <div/>;
        let Header1 = () =>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p></p>
                {vai}{button1}<p/>{button2}<p/><p/> {button3}
            </header>
        if(Aloita) {
            vai = <p>'Tervetuloa Aloittamaan!'</p>
            button1 = <Button className="Button" onClick={this.handleAloitaClick.bind(this)}>Aloita!</Button>

        }
        if(Yksin) {
            button1 = <Button className="Button" onClick={this.handleYksinClick.bind(this, 0)}>Yksin</Button>;
            vai = <p>Yksin vai Ryhmässsä?</p>;
            button2 = <Button className="Button" onClick={this.handleYksinClick.bind(this, 1)}>Ryhmässä</Button>
            button3 = <Button className="Button2" onClick={this.handleEndClick.bind(this)}>Loppuun?</Button>
        }
        if(Kaukana) {
            button1 = <Button className="Button" onClick={this.handleKaukanaClick.bind(this, 0)}>Ei</Button>;
            vai = <p>Haittaako jos on yli 20 min matkaa?</p>;
            button2 = <Button className="Button" onClick={this.handleKaukanaClick.bind(this, 1)}>Kyllä</Button>;
        }
            if(Hinta) {
            button1 = <Button className="Button" onClick={this.handleHintaClick.bind(this,0)}>Ei</Button>;
            vai = <p>Haittaako hinta (maksimi 10€/ kerta)? </p>;
            button2 = <Button className="Button" onClick={this.handleHintaClick.bind(this,1)}>Kyllä</Button>;
        }
        if(Valine) {
            button1 = <Button className="Button" onClick={this.handleValineClick.bind(this,0)}>Ei</Button>;
            vai = <p>Haittaako lisä välineet? (mailat yms) </p>;
            button2 = <Button className="Button" onClick={this.handleValineClick.bind(this,1)}>Kyllä</Button>;
        }
        if(Sisalla) {
            button1 = <Button className="Button" onClick={this.handleSisallaClick.bind(this,0)}>Sisalla</Button>;
            vai = <p>Sisällä vai ulkona? </p>;
            button2 = <Button className="Button" onClick={this.handleSisallaClick.bind(this,1)}>Ulkona</Button>;
        }
        if(Final) {
            slice = 10
            TableHeader1 = TableHeader
            Header1 = () => <header> {button2}</header>
            button2 = <Button className="Button" onClick={this.handleResetClick.bind(this)}>Alkuun</Button>;
        }
        return (
            <div className="App">
                <Header1/>
                <TableHeader1/>
                <Table list={lajit.sort((a,b) => b.points - a.points).slice(0,slice)}/>
            </div>
        );
    }
}

export default App;

