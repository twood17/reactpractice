import React from 'react'
import Button from 'react-bootstrap/Button';

function Test(props) {
    return (
        <Button variant="primary">{props.children}</Button>
    )
}

export default Test