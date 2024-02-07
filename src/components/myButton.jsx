import { Button } from 'react-bootstrap';

import { useNavigate } from "react-router-dom"

const MyButton = (props) => {
    const navigate = useNavigate()
    return (
        <>
            <Button variant="primary" className="mb-3" size={props.size} onClick={() => navigate(props.pages)}>{props.buttonName}</Button>{' '}
        </>
    )
}

export default MyButton; 