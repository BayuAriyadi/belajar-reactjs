import { Button } from 'react-bootstrap';

const MyButton = (props) => {
    return (
        <>
            <Button variant="primary" className="mb-3" onClick={() => props.clicked()}>Touch me Honey!</Button>{' '}
        </>
    )
}

export default MyButton; 