import { useNavigate } from "react-router-dom"
import MyButton from "./myButton"
const Seccond = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="App">
                <h3>ABOUT PAGE</h3>
                <MyButton pages="/" buttonName="Home" />
            </div>

        </>
    )
}

export default Seccond