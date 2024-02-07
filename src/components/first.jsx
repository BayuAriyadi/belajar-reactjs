import React, { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import MyButton from "./myButton";
import Rickroll from "./rickroll";

const First = () => {

    const [pacarmu, setPacarmu] = useState(1)
    const [pacarAlert, setPacarAlert] = useState()
    
    useEffect(() => {
            if (pacarmu <= 0) {
                setPacarmu(0)
                setPacarAlert(<Rickroll url="https://www.youtube.com/watch?v=ZKPwMY0ztbs"/>)
                alert("ALHAMDULILLAH BROTHER!")
            } else if (pacarmu <= 29 && pacarmu >= 20) {
                setPacarAlert("ANTUM MAU MASUK NERAKA????")
            } else if (pacarmu >= 9 && pacarmu <=19){
                setPacarAlert("LANJUTKAN BROTHER!!!!")
            } else if (pacarmu <=9) {
                setPacarAlert("Yang bener aje!")
            } else if (pacarmu >= 30){
                setPacarAlert(<Rickroll url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>)
            }
    }, [pacarmu])

    return (
        <>  
            <div className="App">
                <h3>Tambah Pacar anda</h3>
                <MyButton pages="/about" buttonName="About gweh" />
                <div className=" App mt-3">
                    <h1 variant="danger" className="">{pacarAlert}</h1>
                    <h1>Anda memiliki : {pacarmu} pacar</h1>

                    <Button variant="primary" className="border" onClick={() => setPacarmu((prev) => prev + 1)}>tambah pacar</Button>
                    <Button variant="danger" className="border" onClick={() => setPacarmu((prev) => prev - 1)}>putusin pacar</Button>
                </div>
            </div>
        </>
    )
}

export default First