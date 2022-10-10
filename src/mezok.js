import React from "react";
import { useState } from "react";
import Mezo from "./mezo";
import './index.css'
const Mezok = () => {
    const [mezok, setMezok] = useState(Array(333).fill().map(() => ({ bomba: false, ertek: "", kattinva: false })
    ))
    const [bombak, setBombak] = useState(Array(67).fill().map(() => ({ bomba: true, ertek: "", kattinva: false })
    ))
    // const [szomszedok, setSzomszedok] = useState([])
    const [osszes, setOsszes] = useState([...mezok, ...bombak].sort(() => Math.random() - .5))
    const [vege,setVege] = useState(false)
    
    const clickHandler = (id) => {
        if(!osszes[id].kattinva && !vege){
            osszes[id].kattinva = true
            const szomszedok = []
            let bombakSzama = 0
            if (id > 19) {
                // console.log(osszes[id - 20])//lent
                szomszedok.push(id - 20)
                if (osszes[id - 20].bomba) {
                    bombakSzama++
                }
            }
            if (id < 380) {
                // console.log(osszes[id + 20])//fent
                szomszedok.push(id + 20)
                if (osszes[id + 20].bomba) {
                    bombakSzama++
                }
            }
            if (id % 20 !== 0) {
                // console.log(osszes[id - 1])//bal
                szomszedok.push(id - 1)
                if (osszes[id - 1].bomba) {
                    bombakSzama++
                }
            }
            if (id % 20 !== 19) {
                // console.log(osszes[id + 1])//jobb
                szomszedok.push(id + 1)
                if (osszes[id + 1].bomba) {
                    bombakSzama++
                }
            }
            if (id % 20 !== 19 && id < 380) {//jobb fent
                // console.log(osszes[id + 21])
                szomszedok.push(id + 21)
                if (osszes[id + 21].bomba) {
                    bombakSzama++
                }
            }
            if (id < 380 && id % 20 !== 0) { //bal fent
                // console.log(osszes[id + 19])
                szomszedok.push(id + 19)
                if (osszes[id + 19].bomba) {
                    bombakSzama++
                }
            }
            if (id > 19 && id % 20 !== 0) { //bal lent
                // console.log(osszes[id - 21])
                szomszedok.push(id - 21)
                if (osszes[id - 21].bomba) {
                    bombakSzama++
                }
            }
            if (id > 19 && id % 20 !== 19) { //jobb lent
                // console.log(osszes[id - 19])
                szomszedok.push(id - 19)
                if (osszes[id - 19].bomba) {
                    bombakSzama++
                }
            }
            if (bombakSzama !== 0 && !osszes[id].bomba) {
                osszes[id].ertek = bombakSzama
                
            }
            else if (bombakSzama === 0 && !osszes[id].bomba) {
                // console.log(szomszedok)
                szomszedok.forEach(element => {
                    clickHandler(element)
                });
            }
            if (osszes[id].bomba) {
                setVege(true)
            }
            
            // console.log(szomszedok)
            // console.log(bombakSzama)
            // console.log(osszes[id].ertek)
            setOsszes([...osszes])
        }
    }
    return (
        <div className="mezo-tarolo">
            {osszes.map((mezo, i) => {
                return <Mezo ertek={mezo.ertek} bomba={mezo.bomba} kattintva={mezo.kattinva} key={i} kattintas={() => { clickHandler(i) }}></Mezo>
            })}
        </div>
    )
}

export default Mezok