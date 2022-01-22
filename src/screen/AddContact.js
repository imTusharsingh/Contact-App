import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Container, Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import FormControl from '../components/FormControl'
import { postContact, postContactRequest } from '../redux/contact/actions/PostContactAction'
const AddContact = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState();

    const Navigate = useNavigate()

    const state = useSelector(state => state.contacts)
    const dispatch = useDispatch()
    console.log(state)

    const handelSubmit = (e) => {
        e.preventDefault();


        if (!name || !email || !phoneNumber) {
            return toast.warning("please fill all details", {
                theme: "dark"
            })

        }
        const checkmail = state.contact.find(elem => elem.email === email)
        console.log(checkmail)
        const checknumber = state.contact.find(elem => elem.phoneNumber === phoneNumber)
        if (checkmail) {
            return toast.error("email already exists", {
                theme: "dark"
            })
        }
        if (checknumber) {
            return toast.error("Phone Number already exists", {
                theme: "dark"
            })
        }

        const newdata = {
            id: new Date().getTime(),
            name, email, phoneNumber
        }
        // dispatch(postContact(newdata)) //thunk
        dispatch(postContactRequest(newdata)) //saga
        toast.success("User added")
        Navigate("/")


    }


    return (
        <>

            <h2 className='d-flex justify-content-center align-content-center my-3'>Add Contact</h2>
            <Container className='col-md-5 mx-auto'>
                <Form onSubmit={handelSubmit} >

                    <FormControl data={{ label: "Name", type: "text", placeholder: "Enter your name", name: "name", value: name, setter: setName }} />
                    <FormControl data={{ controlId: "formBasicEmail", label: "Email", type: "email", placeholder: "Enter Email", name: "email", value: email, setter: setEmail }} />
                    <FormControl data={{ label: "Mobile Number", type: "tel", placeholder: "Enter mobile number", name: "phoneNumber", value: phoneNumber, setter: setPhoneNumber }} />

                    <Container className='d-flex justify-content-center align-content-center'>

                        <Button variant="outline-primary" type="submit" style={{ margin: "auto" }}>
                            Submit
                        </Button>

                    </Container>
                </Form>

            </Container>
        </>
    )
}

export default AddContact