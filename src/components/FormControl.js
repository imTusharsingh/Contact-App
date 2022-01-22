import React from 'react'
import { Form } from 'react-bootstrap'

const FormControl = (props) => {
    const { label, type, placeholder, name, value, setter, controlId } = props.data
    return (
        <>
            <Form.Group className="mb-3" controlId={controlId}>
                <Form.Label>{label}</Form.Label>
                <Form.Control type={type} placeholder={placeholder} name={name} value={value}
                    onChange={(e) => setter(e.target.value)}
                />
            </Form.Group>
        </>
    )
}

export default FormControl