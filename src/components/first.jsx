import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import MyButton from "./myButton";
import Rickroll from "./rickroll";

const First = () => {
    const navigate = useNavigate()

    const [pacarmu, setPacarmu] = useState(1)

    const [pacarAlert, setPacarAlert] = useState("")

    const putus = () => {
        if (pacarmu == 1) {
            alert("AWAS JADI JOMBLO!")
            return (prev) => prev - 0
        } else if (pacarmu <= 29 && pacarmu >= 20) {
            setPacarAlert("ANTUM MAU MASUK NERAKA????")
            return (prev) => prev - 1
        } else if (pacarmu >= 9 && pacarmu <=19){
            setPacarAlert("LANJUTKAN BROTHER!!!!")
            return (prev) => prev - 1
        } else if (pacarmu <=9) {
            setPacarAlert()
            return (prev) => prev - 1
        } else {
            return (prev) => prev -1
        }
    }

    const tambah = () => {
        if (pacarmu >= 9 && pacarmu <=19) {
            setPacarAlert("ASTAGHFIRULLAH BROTHER!")
            return (prev) => prev + 1
        } else if (pacarmu >=19 && pacarmu <= 29) { 
            setPacarAlert("ANTUM MAU MASUK NERAKA????")
            return (prev) => prev + 1
        } else if (pacarmu >=30) {
            setPacarAlert(<Rickroll/>)
            return (prev) => prev + 1
        } 
        else {
            setPacarAlert()
            return (prev) => prev + 1
        }
    }

    return (
        <>  
            <div className="App">
                <h3>Tambah Pacar anda</h3>
                <MyButton pages="/about" buttonName="About gweh" />
                <div className=" App mt-3">
                    <h1 variant="danger" className="">{pacarAlert}</h1>
                    <h1>Anda memiliki : {pacarmu} pacar</h1>

                    <Button variant="primary" className="border" onClick={() => setPacarmu(tambah())}>tambah pacar</Button>
                    <Button variant="danger" className="border" onClick={() => setPacarmu(putus())}>putusin pacar</Button>
                </div>
            </div>
        </>
    )
}

export default First