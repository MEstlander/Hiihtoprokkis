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
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Aloita: true, Yksin: false, Kaukana: false, Hinta: false,
            Valine: false, Sisalla: false, Hiki: false, Eksotik: false, ohjatusti: false, Final: false,
            lajit: [
                {id: 0, yksin: 0, laji: 'Kahvakuulatunti', kaukana: 0, hinta: 0, sisalla: 1, valine: 0, aika: '18:00', paikka: 'Otaniemen urheiluhalli', points: 0, ohjattu:1, intensiivinen: 0, Eksoottinen: 0},
                {id: 1, yksin: 0, laji: 'Sovellettu jääliikunta', kaukana: 0, hinta: 0, sisalla: 1, valine: 1, aika: '16:00', paikka: 'Laaksolahden urheilupuisto, harjoitusjäähalli', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 2, yksin: 0, laji: 'Kuntosali tutuksi', kaukana: 0, hinta: 0, sisalla: 1, valine: 0, aika: '09:30', paikka: 'Espoonlahden jäähalli', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 3, yksin: 0, laji: 'Kehonhuolto', kaukana: 1, hinta: 0, sisalla: 1, valine: 0, aika: '09:00', paikka: 'Warrior Areena, Suur-Leppävaara', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 4, yksin: 0, laji: 'Vesikävely- ja juoksuohjaus', kaukana: 0, hinta: 0, sisalla: 1, valine: 0, aika: '17:00', paikka: 'Espoonlahden uimahalli', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 5, yksin: 0, laji: 'Palloilu', kaukana: 0, hinta: 0, sisalla: 1, valine: 0, aika: '17:00', paikka: 'Kannusillanmäen liikuntahalli, palloilusali', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 6, yksin: 0, laji: 'Vesijumppa', kaukana: 0, hinta: 2.50, sisalla: 1, valine: 0, aika: '10:15', paikka: 'Espoonlahden uimahalli', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 7, yksin: 0, laji: 'Sulkapallo', kaukana: 0, hinta: 12, sisalla: 1, valine: 1, aika: '7.00' , paikka: 'Otaniemen urheiluhalli', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 8, yksin: 0, laji: 'Spin Virtual', kaukana: 0, hinta: 10, sisalla: 1, valine: 0, aika: '7.00' , paikka: 'Unisport Meilahti', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 1},
                {id: 9, yksin: 0, laji: 'Lempeä hatha-jooga', kaukana: 0, hinta: 8, sisalla: 1, valine: 0, aika: '7.15' , paikka: 'Otaniemen urheiluhalli', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 1},
                {id: 10, yksin: 0, laji: 'Spin Virtual', kaukana: 0, hinta: 10, sisalla: 1, valine: 0, aika: '8.30' , paikka: 'Unisport Kluuvi', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 11, yksin: 0, laji: 'Pilates', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '8.00' , paikka: 'Unisport Kumpula', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 12, yksin: 0, laji: 'Body', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '8.30' , paikka: 'Unisport Kluuvi', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 13, yksin: 0, laji: 'Astangajooga', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '10.55' , paikka: 'Unisport Kluuvi', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 1},
                {id: 14, yksin: 0, laji: 'Bodypump', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '12.15' , paikka: 'Unisport Kluuvi', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 15, yksin: 0, laji: 'Funk', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '14.00' , paikka: 'Unisport Kluuvi', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 1},
                {id: 16, yksin: 0, laji: 'Bodycombat', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '14.45' , paikka: 'Unisport Kumpula', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 1},
                {id: 17, yksin: 0, laji: 'Flow-jooga', kaukana: 1, hinta: 10, sisalla: 1, valine: 0, aika: '15.05' , paikka: 'Unisport Kluuvi', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 1},
                {id: 18, yksin: 0, laji: 'Zumba', kaukana: 1, hinta: 10, sisalla: 1, valine: 0, aika: '16.05' , paikka: 'Otaniemen urheiluhalli', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 19, yksin: 0, laji: 'Spin Interval', kaukana: 1, hinta: 10, sisalla: 1, valine: 0, aika: '18.45' , paikka: 'Unisport Meilahti', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 1},
                {id: 20, yksin: 1, laji: 'Circuit Training', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '10.05' , paikka: 'Unisport Kluuvi', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 1},
                {id: 21, yksin: 1, laji: 'Boulderointi', kaukana: 1, hinta: 12, sisalla: 1, valine: 0, aika: '15.00' , paikka: 'Boulderkeskus Pasila', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 22, yksin: 1, laji: 'Boulderointi', kaukana: 1, hinta: 12, sisalla: 1, valine: 0, aika: '12.30' , paikka: 'Boulderkeskus Herttoniemi', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 23, yksin: 1, laji: 'Boulderointi', kaukana: 1, hinta: 12, sisalla: 1, valine: 0, aika: '19.00' , paikka: 'Boulderkeskus Espoo/Suomenoja', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 24, yksin: 0, laji: 'Keilaus', kaukana: 0, hinta: 22, sisalla: 1, valine: 0, aika: '14.00' , paikka: 'Tapiolan keilahalli', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 25, yksin: 0, laji: 'Keilaus', kaukana: 1, hinta: 34, sisalla: 1, valine: 0, aika: '14.00' , paikka: 'Ruusulankadun keilahalli', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 26, yksin: 1, laji: 'Uinti', kaukana: 0, hinta: 5.50, sisalla: 1, valine: 0, aika: '18.00' , paikka: 'Leppävaaran uimahalli ja maauimala', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 27, yksin: 1, laji: 'Uinti', kaukana: 0, hinta: 5.50, sisalla: 1, valine: 0, aika: '17.00' , paikka: 'Kallion uimahalli', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 28, yksin: 0, laji: 'Jalkapalloilu', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '14.00' , paikka: 'Espoonlahden urheilupuisto', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 29, yksin: 1, laji: 'Skeittailu', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '16.00' , paikka: 'Espoonlahden skeittipuisto', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 30, yksin: 0, laji: 'Rantalentopallo', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '12.00' , paikka: 'Keski-Espoon urheilupuisto, beachvolleykenttä', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 31, yksin: 1, laji: 'Yleisurheilu', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '12.00' , paikka: 'Leppävaaran urheilupuisto', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 32, yksin: 1, laji: 'Parkour', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '14.00' , paikka: 'Matinkylän urheilupuisto', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 1},
                {id: 33, yksin: 1, laji: 'Lenkkeily', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '15.00' , paikka: 'Kauklahden kuntorata', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 34, yksin: 1, laji: 'Frisbeegolf', kaukana: 1, hinta: 0, sisalla: 0, valine: 0, aika: '16.00' , paikka: 'Puolarmaarin frisbeegolfrata', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 35, yksin: 1, laji: 'Golf', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '18.00' , paikka: 'Espoon Golfseura', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 36, yksin: 1, laji: 'Rullalautailu', kaukana: 0, hinta: 0, sisalla: 1, valine: 0, aika: '18.00' , paikka: 'Skeittihalli, Tuulimäen väestösuoja', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 37, yksin: 1, laji: 'Suunnistus', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '18.00' , paikka: 'Leppävaara', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 38, yksin: 1, laji: 'BMX-pyöräily', kaukana: 0, hinta: 0, sisalla: 0, valine: 1, aika: '19.00' , paikka: 'BMX Matinkylän urheilupuisto', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 1},
                {id: 39, yksin: 0, laji: 'Salibandy', kaukana: 0, hinta: 5, sisalla: 1, valine: 1, aika: '9.00' , paikka: 'Otaniemen urheiluhalli', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 40, yksin: 0, laji: 'Koripallo', kaukana: 0, hinta: 5, sisalla: 1, valine: 1, aika: '11.00' , paikka: 'Otaniemen urheiluhalli', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 41, yksin: 0, laji: 'Lentopallo', kaukana: 0, hinta: 5, sisalla: 1, valine: 1, aika: '13.00' , paikka: 'Otaniemen urheiluhalli', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 42, yksin: 0, laji: 'Amerikkalainen jalkapallo', kaukana: 0, hinta: 13.50, sisalla: 0, valine: 1, aika: '13:00', paikka: 'Lauttasaaren urheilukenttä', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 43, yksin: 0, laji: 'Aikido', kaukana: 0, hinta: 8.50, sisalla: 1, valine: 0, aika: '10:00', paikka: 'Firebody Lauttasaari', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 44, yksin: 1, laji: 'Ammunta', kaukana: 1, hinta: 6.50, sisalla: 1, valine: 0, aika: '17:00', paikka: 'Osuva tähtitorninmäki', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 45, yksin: 0, laji: 'Baseball', kaukana: 0, hinta: 13.50, sisalla: 0, valine: 1, aika: '16:00', paikka: 'Säterin urheilukenttä', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 46, yksin: 0, laji: 'Pesäpallo', kaukana: 0, hinta: 6.50, sisalla: 0, valine: 1, aika: '17:00', paikka: 'Säterin urheilukenttä', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 47, yksin: 0, laji: 'Cheerleading', kaukana: 1, hinta: 7.50, sisalla: 1, valine: 0, aika: '11:00', paikka: 'Espoonlahden urheiluhalli', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 48, yksin: 0, laji: 'Capoeira', kaukana: 1, hinta: 14.50, sisalla: 1, valine: 0, aika: '18:00', paikka: 'Sporttikuja Herttoniemi', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 1},
                {id: 49, yksin: 0, laji: 'Curling', kaukana: 1, hinta: 10.50, sisalla: 1, valine: 1, aika: '13:00', paikka: 'Oulunkylän Curlinghalli', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 50, yksin: 1, laji: 'Ratsastus', kaukana: 1, hinta: 10.00, sisalla: 0, valine: 1, aika: '11:00', paikka: 'Keskustallin ratsastuskoulu Ruskeasuo', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 51, yksin: 0, laji: 'Futsal', kaukana: 1, hinta: 6.00, sisalla: 1, valine: 0, aika: '15:00', paikka: 'Espoonlahden urheiluhalli', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 52, yksin: 0, laji: 'Haavipallo', kaukana: 0, hinta: 7.50, sisalla: 0, valine: 0, aika: '12:00', paikka: 'Otaniemen urheilupuisto', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 53, yksin: 1, laji: 'Hiihto', kaukana: 1, hinta: 9.00, sisalla: 0, valine: 1, aika: '12:00', paikka: 'Paloheinän virkistysalue', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 54, yksin: 1, laji: 'Jousiammunta', kaukana: 0, hinta: 15.00, sisalla: 0, valine: 1, aika: '18:00', paikka: 'gr8 Viihdeklubi Salmisaari', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 55, yksin: 0, laji: 'Jujutsu', kaukana: 1, hinta: 11.50, sisalla: 1, valine: 0, aika: '14:00', paikka: 'Ringside Gym Haaga', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 56, yksin: 0, laji: 'Judo', kaukana: 1, hinta: 11.00, sisalla: 1, valine: 0, aika: '15:00', paikka: 'GB GYM', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 57, yksin: 0, laji: 'Jääkiekko', kaukana: 0, hinta: 7.00, sisalla: 0, valine: 1, aika: '12:00', paikka: 'Lauttasaaren urheilukenttä', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 58, yksin: 0, laji: 'Jääpallo', kaukana: 0, hinta: 7.50, sisalla: 0, valine: 1, aika: '15:00', paikka: 'Säterin urheilukenttä', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 59, yksin: 1, laji: 'Kalliokiipeily', kaukana: 0, hinta: 12.50, sisalla: 0, valine: 1, aika: '14:00', paikka: 'Ulkona', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 60, yksin: 0, laji: 'Karate', kaukana: 1, hinta: 7.00, sisalla: 1, valine: 0, aika: '17:00', paikka: 'Combat Academy Sörnäinen', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 61, yksin: 0, laji: 'Kaukalopallo', kaukana: 0, hinta: 7.00, sisalla: 0, valine: 1, aika: '18:00', paikka: 'Säterin urheilukenttä', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 62, yksin: 1, laji: 'Kehonrakennus', kaukana: 0, hinta: 11.00, sisalla: 1, valine: 0, aika: '13:00', paikka: 'Unisport Otaniemi', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 63, yksin: 0, laji: 'Käsipallo', kaukana: 0, hinta: 16.00, sisalla: 1, valine: 0, aika: '19:00', paikka: 'Tapiolan urheiluhalli', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 64, yksin: 1, laji: 'Laskettelu', kaukana: 1, hinta: 60.00, sisalla: 0, valine: 1, aika: '17:00', paikka: 'Talma Ski', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 65, yksin: 1, laji: 'Lumilautailu', kaukana: 1, hinta: 60.00, sisalla: 0, valine: 1, aika: '19:00', paikka: 'Talma Ski', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 66, yksin: 1, laji: 'Maantiepyöräily', kaukana: 0, hinta: 8.00, sisalla: 0, valine: 1, aika: '10:00', paikka: 'Ulkona', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 67, yksin: 0, laji: 'Muodostelmaluistelu', kaukana: 0, hinta: 7.50, sisalla: 1, valine: 1, aika: '13:00', paikka: 'Espoon taitoluisteluklubi', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 68, yksin: 0, laji: 'Nyrkkeily', kaukana: 1, hinta: 12.00, sisalla: 1, valine: 0, aika: '11:00', paikka: 'Ringside Gym Haaga', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 69, yksin: 0, laji: 'Padel', kaukana: 1, hinta: 13.50, sisalla: 0, valine: 0, aika: '10:00', paikka: 'Padel Club Finland Kauniainen', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 70, yksin: 0, laji: 'Paini', kaukana: 1, hinta: 6.00, sisalla: 1, valine: 0, aika: '10:00', paikka: 'Sporttikuja Herttoniemi', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 71, yksin: 0, laji: 'Paintball', kaukana: 0, hinta: 14.00, sisalla: 0, valine: 0, aika: '19:00', paikka: 'Base Paintball Lauttasaari', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 1},
                {id: 72, yksin: 1, laji: 'Painonnosto', kaukana: 0, hinta: 11.00, sisalla: 1, valine: 0, aika: '20:00', paikka: 'Unisport Otaniemi', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 73, yksin: 1, laji: 'Potkulautailu', kaukana: 0, hinta: 16.50, sisalla: 0, valine: 1, aika: '20:00', paikka: 'Ulkona', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 74, yksin: 0, laji: 'Potkunyrkkeily', kaukana: 1, hinta: 12.50, sisalla: 1, valine: 0, aika: '19:00', paikka: 'GB GYM', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 75, yksin: 0, laji: 'Pöytätennis', kaukana: 1, hinta: 15.50, sisalla: 1, valine: 1, aika: '20:00', paikka: 'Urheiluhallit Kallio', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 76, yksin: 1, laji: 'Ratapyöräily', kaukana: 1, hinta: 7.50, sisalla: 0, valine: 1, aika: '14:00', paikka: 'Käpylän velodromi', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 77, yksin: 1, laji: 'Sisäsoutu', kaukana: 0, hinta: 7.00, sisalla: 1, valine: 0, aika: '15:00', paikka: 'Espoonlahden urheiluhalli', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 78, yksin: 0, laji: 'Taekwondo', kaukana: 1, hinta: 6.00, sisalla: 1, valine: 0, aika: '17:00', paikka: 'Sporttikuja Herttoniemi', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0}
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
                if(item.hinta > 0 && i == 0) {
                    item.points = item.points + value;
                }
                if(item.hinta === 10){
                    item.points = item.points + value;
                }
            }
            if (para === 'valine' && item.valine == i) {
                item.points = item.points + value;
            }
            if (para === 'sisalla' && item.sisalla == i) {
                item.points = item.points + value;
            }
            if (para === 'Hiki' && item.intensiivinen == i) {
                item.points = item.points + value;
            }
            if (para === 'Eksotik' && item.Eksoottinen == i) {
                item.points = item.points + value;
            }
            if (para === 'ohjatusti' && item.ohjattu == i) {
                item.points = item.points + value;
            }
        }))
    };
    onDismiss(id){
        const lajit = this.state.lajit
        const isNotId = item => item.id !== id;
        const updatedLajit = lajit.filter(isNotId);
        this.setState({lajit: updatedLajit});
    }
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
        this.setState({Sisalla: false, Hiki: true})
    }handleHikiClick(i) {
        this.updatePoints('Hiki',i, 3);
        this.setState({Hiki: false, Eksotik: true})
    }
    handleEksotikClick(i) {
        this.updatePoints('Eksotik',i, 3);
        this.setState({Eksotik: false, ohjatusti: true})
    }
    handleOhjatustiClick(i) {
        this.updatePoints('ohjatusti',i, 3);
        this.setState({ohjatusti: false, Final: true})
    }

    handleEndClick() {
        this.setState({Aloita: true, Yksin: false, Kaukana: false, Hinta: false,
            Valine: false, Sisalla: false, Hiki: false, Eksotik: false, ohjatusti: false, Final: true})
    }

    handleResetClick() {
        this.setState({
            Aloita: true, Yksin: false, Kaukana: false, Hinta: false,
            Valine: false, Sisalla: false, Hiki: false, Eksotik: false, ohjatusti: false, Final: false,
            lajit: [
                {id: 0, yksin: 0, laji: 'Kahvakuulatunti', kaukana: 0, hinta: 0, sisalla: 1, valine: 0, aika: '18:00', paikka: 'Otaniemen urheiluhalli', points: 0, ohjattu:1, intensiivinen: 0, Eksoottinen: 0},
                {id: 1, yksin: 0, laji: 'Sovellettu jääliikunta', kaukana: 0, hinta: 0, sisalla: 1, valine: 1, aika: '16:00', paikka: 'Laaksolahden urheilupuisto, harjoitusjäähalli', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 2, yksin: 0, laji: 'Kuntosali tutuksi', kaukana: 0, hinta: 0, sisalla: 1, valine: 0, aika: '09:30', paikka: 'Espoonlahden jäähalli', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 3, yksin: 0, laji: 'Kehonhuolto', kaukana: 1, hinta: 0, sisalla: 1, valine: 0, aika: '09:00', paikka: 'Warrior Areena, Suur-Leppävaara', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 4, yksin: 0, laji: 'Vesikävely- ja juoksuohjaus', kaukana: 0, hinta: 0, sisalla: 1, valine: 0, aika: '17:00', paikka: 'Espoonlahden uimahalli', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 5, yksin: 0, laji: 'Palloilu', kaukana: 0, hinta: 0, sisalla: 1, valine: 0, aika: '17:00', paikka: 'Kannusillanmäen liikuntahalli, palloilusali', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 6, yksin: 0, laji: 'Vesijumppa', kaukana: 0, hinta: 2.50, sisalla: 1, valine: 0, aika: '10:15', paikka: 'Espoonlahden uimahalli', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 7, yksin: 0, laji: 'Sulkapallo', kaukana: 0, hinta: 12, sisalla: 1, valine: 1, aika: '7.00' , paikka: 'Otaniemen urheiluhalli', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 8, yksin: 0, laji: 'Spin Virtual', kaukana: 0, hinta: 10, sisalla: 1, valine: 0, aika: '7.00' , paikka: 'Unisport Meilahti', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 1},
                {id: 9, yksin: 0, laji: 'Lempeä hatha-jooga', kaukana: 0, hinta: 8, sisalla: 1, valine: 0, aika: '7.15' , paikka: 'Otaniemen urheiluhalli', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 1},
                {id: 10, yksin: 0, laji: 'Spin Virtual', kaukana: 0, hinta: 10, sisalla: 1, valine: 0, aika: '8.30' , paikka: 'Unisport Kluuvi', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 11, yksin: 0, laji: 'Pilates', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '8.00' , paikka: 'Unisport Kumpula', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 12, yksin: 0, laji: 'Body', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '8.30' , paikka: 'Unisport Kluuvi', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 13, yksin: 0, laji: 'Astangajooga', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '10.55' , paikka: 'Unisport Kluuvi', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 1},
                {id: 14, yksin: 0, laji: 'Bodypump', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '12.15' , paikka: 'Unisport Kluuvi', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 15, yksin: 0, laji: 'Funk', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '14.00' , paikka: 'Unisport Kluuvi', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 1},
                {id: 16, yksin: 0, laji: 'Bodycombat', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '14.45' , paikka: 'Unisport Kumpula', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 1},
                {id: 17, yksin: 0, laji: 'Flow-jooga', kaukana: 1, hinta: 10, sisalla: 1, valine: 0, aika: '15.05' , paikka: 'Unisport Kluuvi', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 1},
                {id: 18, yksin: 0, laji: 'Zumba', kaukana: 1, hinta: 10, sisalla: 1, valine: 0, aika: '16.05' , paikka: 'Otaniemen urheiluhalli', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 19, yksin: 0, laji: 'Spin Interval', kaukana: 1, hinta: 10, sisalla: 1, valine: 0, aika: '18.45' , paikka: 'Unisport Meilahti', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 1},
                {id: 20, yksin: 1, laji: 'Circuit Training', kaukana: 1, hinta: 8, sisalla: 1, valine: 0, aika: '10.05' , paikka: 'Unisport Kluuvi', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 1},
                {id: 21, yksin: 1, laji: 'Boulderointi', kaukana: 1, hinta: 12, sisalla: 1, valine: 0, aika: '15.00' , paikka: 'Boulderkeskus Pasila', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 22, yksin: 1, laji: 'Boulderointi', kaukana: 1, hinta: 12, sisalla: 1, valine: 0, aika: '12.30' , paikka: 'Boulderkeskus Herttoniemi', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 23, yksin: 1, laji: 'Boulderointi', kaukana: 1, hinta: 12, sisalla: 1, valine: 0, aika: '19.00' , paikka: 'Boulderkeskus Espoo/Suomenoja', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 24, yksin: 0, laji: 'Keilaus', kaukana: 0, hinta: 22, sisalla: 1, valine: 0, aika: '14.00' , paikka: 'Tapiolan keilahalli', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 25, yksin: 0, laji: 'Keilaus', kaukana: 1, hinta: 34, sisalla: 1, valine: 0, aika: '14.00' , paikka: 'Ruusulankadun keilahalli', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 26, yksin: 1, laji: 'Uinti', kaukana: 0, hinta: 5.50, sisalla: 1, valine: 0, aika: '18.00' , paikka: 'Leppävaaran uimahalli ja maauimala', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 27, yksin: 1, laji: 'Uinti', kaukana: 0, hinta: 5.50, sisalla: 1, valine: 0, aika: '17.00' , paikka: 'Kallion uimahalli', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 28, yksin: 0, laji: 'Jalkapalloilu', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '14.00' , paikka: 'Espoonlahden urheilupuisto', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 29, yksin: 1, laji: 'Skeittailu', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '16.00' , paikka: 'Espoonlahden skeittipuisto', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 30, yksin: 0, laji: 'Rantalentopallo', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '12.00' , paikka: 'Keski-Espoon urheilupuisto, beachvolleykenttä', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 31, yksin: 1, laji: 'Yleisurheilu', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '12.00' , paikka: 'Leppävaaran urheilupuisto', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 32, yksin: 1, laji: 'Parkour', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '14.00' , paikka: 'Matinkylän urheilupuisto', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 1},
                {id: 33, yksin: 1, laji: 'Lenkkeily', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '15.00' , paikka: 'Kauklahden kuntorata', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 34, yksin: 1, laji: 'Frisbeegolf', kaukana: 1, hinta: 0, sisalla: 0, valine: 0, aika: '16.00' , paikka: 'Puolarmaarin frisbeegolfrata', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 35, yksin: 1, laji: 'Golf', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '18.00' , paikka: 'Espoon Golfseura', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 36, yksin: 1, laji: 'Rullalautailu', kaukana: 0, hinta: 0, sisalla: 1, valine: 0, aika: '18.00' , paikka: 'Skeittihalli, Tuulimäen väestösuoja', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 37, yksin: 1, laji: 'Suunnistus', kaukana: 0, hinta: 0, sisalla: 0, valine: 0, aika: '18.00' , paikka: 'Leppävaara', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 38, yksin: 1, laji: 'BMX-pyöräily', kaukana: 0, hinta: 0, sisalla: 0, valine: 1, aika: '19.00' , paikka: 'BMX Matinkylän urheilupuisto', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 1},
                {id: 39, yksin: 0, laji: 'Salibandy', kaukana: 0, hinta: 5, sisalla: 1, valine: 1, aika: '9.00' , paikka: 'Otaniemen urheiluhalli', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 40, yksin: 0, laji: 'Koripallo', kaukana: 0, hinta: 5, sisalla: 1, valine: 1, aika: '11.00' , paikka: 'Otaniemen urheiluhalli', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 41, yksin: 0, laji: 'Lentopallo', kaukana: 0, hinta: 5, sisalla: 1, valine: 1, aika: '13.00' , paikka: 'Otaniemen urheiluhalli', points: 0, ohjattu: 1, intensiivinen: 0, Eksoottinen: 0},
                {id: 42, yksin: 0, laji: 'Amerikkalainen jalkapallo', kaukana: 0, hinta: 13.50, sisalla: 0, valine: 1, aika: '13:00', paikka: 'Lauttasaaren urheilukenttä', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 43, yksin: 0, laji: 'Aikido', kaukana: 0, hinta: 8.50, sisalla: 1, valine: 0, aika: '10:00', paikka: 'Firebody Lauttasaari', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 44, yksin: 1, laji: 'Ammunta', kaukana: 1, hinta: 6.50, sisalla: 1, valine: 0, aika: '17:00', paikka: 'Osuva tähtitorninmäki', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 45, yksin: 0, laji: 'Baseball', kaukana: 0, hinta: 13.50, sisalla: 0, valine: 1, aika: '16:00', paikka: 'Säterin urheilukenttä', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 46, yksin: 0, laji: 'Pesäpallo', kaukana: 0, hinta: 6.50, sisalla: 0, valine: 1, aika: '17:00', paikka: 'Säterin urheilukenttä', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 47, yksin: 0, laji: 'Cheerleading', kaukana: 1, hinta: 7.50, sisalla: 1, valine: 0, aika: '11:00', paikka: 'Espoonlahden urheiluhalli', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 48, yksin: 0, laji: 'Capoeira', kaukana: 1, hinta: 14.50, sisalla: 1, valine: 0, aika: '18:00', paikka: 'Sporttikuja Herttoniemi', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 1},
                {id: 49, yksin: 0, laji: 'Curling', kaukana: 1, hinta: 10.50, sisalla: 1, valine: 1, aika: '13:00', paikka: 'Oulunkylän Curlinghalli', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 50, yksin: 1, laji: 'Ratsastus', kaukana: 1, hinta: 10.00, sisalla: 0, valine: 1, aika: '11:00', paikka: 'Keskustallin ratsastuskoulu Ruskeasuo', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 51, yksin: 0, laji: 'Futsal', kaukana: 1, hinta: 6.00, sisalla: 1, valine: 0, aika: '15:00', paikka: 'Espoonlahden urheiluhalli', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 52, yksin: 0, laji: 'Haavipallo', kaukana: 0, hinta: 7.50, sisalla: 0, valine: 0, aika: '12:00', paikka: 'Otaniemen urheilupuisto', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 53, yksin: 1, laji: 'Hiihto', kaukana: 1, hinta: 9.00, sisalla: 0, valine: 1, aika: '12:00', paikka: 'Paloheinän virkistysalue', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 54, yksin: 1, laji: 'Jousiammunta', kaukana: 0, hinta: 15.00, sisalla: 0, valine: 1, aika: '18:00', paikka: 'gr8 Viihdeklubi Salmisaari', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 55, yksin: 0, laji: 'Jujutsu', kaukana: 1, hinta: 11.50, sisalla: 1, valine: 0, aika: '14:00', paikka: 'Ringside Gym Haaga', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 56, yksin: 0, laji: 'Judo', kaukana: 1, hinta: 11.00, sisalla: 1, valine: 0, aika: '15:00', paikka: 'GB GYM', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 57, yksin: 0, laji: 'Jääkiekko', kaukana: 0, hinta: 7.00, sisalla: 0, valine: 1, aika: '12:00', paikka: 'Lauttasaaren urheilukenttä', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 58, yksin: 0, laji: 'Jääpallo', kaukana: 0, hinta: 7.50, sisalla: 0, valine: 1, aika: '15:00', paikka: 'Säterin urheilukenttä', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 59, yksin: 1, laji: 'Kalliokiipeily', kaukana: 0, hinta: 12.50, sisalla: 0, valine: 1, aika: '14:00', paikka: 'Ulkona', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 60, yksin: 0, laji: 'Karate', kaukana: 1, hinta: 7.00, sisalla: 1, valine: 0, aika: '17:00', paikka: 'Combat Academy Sörnäinen', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 61, yksin: 0, laji: 'Kaukalopallo', kaukana: 0, hinta: 7.00, sisalla: 0, valine: 1, aika: '18:00', paikka: 'Säterin urheilukenttä', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 62, yksin: 1, laji: 'Kehonrakennus', kaukana: 0, hinta: 11.00, sisalla: 1, valine: 0, aika: '13:00', paikka: 'Unisport Otaniemi', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 63, yksin: 0, laji: 'Käsipallo', kaukana: 0, hinta: 16.00, sisalla: 1, valine: 0, aika: '19:00', paikka: 'Tapiolan urheiluhalli', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 64, yksin: 1, laji: 'Laskettelu', kaukana: 1, hinta: 60.00, sisalla: 0, valine: 1, aika: '17:00', paikka: 'Talma Ski', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 65, yksin: 1, laji: 'Lumilautailu', kaukana: 1, hinta: 60.00, sisalla: 0, valine: 1, aika: '19:00', paikka: 'Talma Ski', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 66, yksin: 1, laji: 'Maantiepyöräily', kaukana: 0, hinta: 8.00, sisalla: 0, valine: 1, aika: '10:00', paikka: 'Ulkona', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 67, yksin: 0, laji: 'Muodostelmaluistelu', kaukana: 0, hinta: 7.50, sisalla: 1, valine: 1, aika: '13:00', paikka: 'Espoon taitoluisteluklubi', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 68, yksin: 0, laji: 'Nyrkkeily', kaukana: 1, hinta: 12.00, sisalla: 1, valine: 0, aika: '11:00', paikka: 'Ringside Gym Haaga', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 69, yksin: 0, laji: 'Padel', kaukana: 1, hinta: 13.50, sisalla: 0, valine: 0, aika: '10:00', paikka: 'Padel Club Finland Kauniainen', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 70, yksin: 0, laji: 'Paini', kaukana: 1, hinta: 6.00, sisalla: 1, valine: 0, aika: '10:00', paikka: 'Sporttikuja Herttoniemi', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 71, yksin: 0, laji: 'Paintball', kaukana: 0, hinta: 14.00, sisalla: 0, valine: 0, aika: '19:00', paikka: 'Base Paintball Lauttasaari', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 1},
                {id: 72, yksin: 1, laji: 'Painonnosto', kaukana: 0, hinta: 11.00, sisalla: 1, valine: 0, aika: '20:00', paikka: 'Unisport Otaniemi', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 73, yksin: 1, laji: 'Potkulautailu', kaukana: 0, hinta: 16.50, sisalla: 0, valine: 1, aika: '20:00', paikka: 'Ulkona', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 74, yksin: 0, laji: 'Potkunyrkkeily', kaukana: 1, hinta: 12.50, sisalla: 1, valine: 0, aika: '19:00', paikka: 'GB GYM', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0},
                {id: 75, yksin: 0, laji: 'Pöytätennis', kaukana: 1, hinta: 15.50, sisalla: 1, valine: 1, aika: '20:00', paikka: 'Urheiluhallit Kallio', points: 0, ohjattu: 0, intensiivinen: 0, Eksoottinen: 0},
                {id: 76, yksin: 1, laji: 'Ratapyöräily', kaukana: 1, hinta: 7.50, sisalla: 0, valine: 1, aika: '14:00', paikka: 'Käpylän velodromi', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 77, yksin: 1, laji: 'Sisäsoutu', kaukana: 0, hinta: 7.00, sisalla: 1, valine: 0, aika: '15:00', paikka: 'Espoonlahden urheiluhalli', points: 0, ohjattu: 0, intensiivinen: 1, Eksoottinen: 0},
                {id: 78, yksin: 0, laji: 'Taekwondo', kaukana: 1, hinta: 6.00, sisalla: 1, valine: 0, aika: '17:00', paikka: 'Sporttikuja Herttoniemi', points: 0, ohjattu: 1, intensiivinen: 1, Eksoottinen: 0}
            ]
        });
    }
    render() {

        const [Aloita, Yksin, Kaukana, Hinta, Valine, Sisalla, Hiki, Eksotik, ohjatusti, Final, lajit] = [this.state.Aloita, this.state.Yksin,
            this.state.Kaukana, this.state.Hinta, this.state.Valine, this.state.Sisalla, this.state.Hiki,
            this.state.Eksotik, this.state.ohjatusti,  this.state.Final, this.state.lajit];
        let button1,button2,vai;
        let button4 = <Button className="Button2" onClick={this.handleYksinClick.bind(this,2)}>Ihassama</Button>;
        let button3 = <Button className="Button2" onClick={this.handleEndClick.bind(this)}>Loppuun?</Button>;
        let slice = 0;
        let TableHeader1 = () => <div/>;
        let Header1 = () =>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p></p>
                {vai}{button1}<p/>{button2}<p/><p>{button4}</p>{button3}
            </header>
        const Table = ({list}) =>
            <div className="table"> {list.map(item =>
                <div className="table-row">
                    <span style={{ width: '35%' }}>{item.laji}</span>
                    <span style={{ width: '35%' }}>{item.paikka}</span>
                    <span style={{ width: '10%' }}>{item.aika}</span>
                    <span style={{ width: '10%' }}>{item.hinta}</span>
                    <span style={{ width: '10%' }}><Button onClick={this.onDismiss.bind(this, item.id)}>Pois</Button></span>
                </div>
            )}
            </div>;
        if(Aloita) {
            vai = <p>'Tervetuloa Aloittamaan!'</p>
            button1 = <Button className="Button" onClick={this.handleAloitaClick.bind(this)}>Aloita!</Button>
            button4 = ''

        }
        if(Yksin) {
            button1 = <Button className="Button" onClick={this.handleYksinClick.bind(this, 0)}>Yksin</Button>;
            vai = <p>Yksin vai Ryhmässsä?</p>;
            button2 = <Button className="Button" onClick={this.handleYksinClick.bind(this, 1)}>Ryhmässä</Button>
            button3 = <Button className="Button2" onClick={this.handleEndClick.bind(this)}>Loppuun?</Button>

        }
        if(Kaukana) {
            button1 = <Button className="Button" onClick={this.handleKaukanaClick.bind(this, 0)}>ihan ok</Button>;
            vai = <p>Yli 20 min matka on</p>;
            button2 = <Button className="Button" onClick={this.handleKaukanaClick.bind(this, 1)}>liikaa</Button>;
        }
            if(Hinta) {
            button1 = <Button className="Button" onClick={this.handleHintaClick.bind(this,0)}>kyllä</Button>;
            vai = <p>Suostun maksaa liikunasta</p>;
            button2 = <Button className="Button" onClick={this.handleHintaClick.bind(this,1)}>ei</Button>;
        }
        if(Valine) {
            button1 = <Button className="Button" onClick={this.handleValineClick.bind(this,0)}>tehtävissä</Button>;
            vai = <p>Lisävälineet ovat minulle</p>;
            button2 = <Button className="Button" onClick={this.handleValineClick.bind(this,1)}>liikaa</Button>;
        }
        if(Sisalla) {
            button1 = <Button className="Button" onClick={this.handleSisallaClick.bind(this,0)}>sisällä</Button>;
            vai = <p>Liikun mieluummin</p>;
            button2 = <Button className="Button" onClick={this.handleSisallaClick.bind(this,1)}>ulkona</Button>;
        }
        if(Hiki) {
            button1 = <Button className="Button" onClick={this.handleHikiClick.bind(this,0)}>helppoa</Button>;
            vai = <p>Liikunann tulee olla</p>;
            button2 = <Button className="Button" onClick={this.handleHikiClick.bind(this,1)}>rankkaa</Button>;
        }
        if(Eksotik) {
            button1 = <Button className="Button" onClick={this.handleEksotikClick.bind(this,0)}>perinteistä</Button>;
            vai = <p>Haluan jotain</p>;
            button2 = <Button className="Button" onClick={this.handleEksotikClick.bind(this,1)}>eksoottista</Button>;
        }
        if(ohjatusti) {
            button1 = <Button className="Button" onClick={this.handleOhjatustiClick.bind(this,0)}>itsenäisesti</Button>;
            vai = <p>Haluan liikua</p>;
            button2 = <Button className="Button" onClick={this.handleOhjatustiClick.bind(this,1)}>ohjatusti</Button>;
        }
        if(Final) {
            slice = 3
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

