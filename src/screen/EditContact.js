import React, { useState, useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import FormControl from '../components/FormControl'
import { putContact, putContactRequest } from '../redux/contact/actions/PutContactAction'

const EditContact = () => {


    const Navigate = useNavigate()
    const { id } = useParams()
    const state = useSelector(state => state.contacts)



    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState();

    useEffect(() => {
        const toEdit = state.contact.find(elem => elem.id === parseInt(id))
        if (toEdit) {
            setPhoneNumber(toEdit.phoneNumber)
            setName(toEdit.name)
            setEmail(toEdit.email)
        }
        else {
            Navigate("/")
        }

    }, []);



    const dispatch = useDispatch()

    const handelEdit = (e) => {
        e.preventDefault()
        if (!name || !email || !phoneNumber) {
            return toast.warning("please fill all details")
        }

        const newdata = {
            id: parseInt(id), name, email, phoneNumber
        }
        // dispatch(putContact(newdata))  //thunk
        dispatch(putContactRequest(newdata))  //saga


        toast.success("Updated Succesfully")
        Navigate('/')


    }
    return (
        <>

            <h2 style={{ display: 'flex', alignItems: "center", justifyContent: "center", margin: "1rem 0" }}>Add Contact</h2>
            <Container className='col-md-5 mx-auto'>
                <Form onSubmit={handelEdit} >
                    <FormControl data={{ label: "Name", type: "text", placeholder: "Enter your name", name: "name", value: name, setter: setName }} />
                    <FormControl data={{ controlId: "formBasicEmail", label: "Email", type: "email", placeholder: "Enter Email", name: "email", value: email, setter: setEmail }} />
                    <FormControl data={{ label: "Mobile Number", type: "tel", placeholder: "Enter mobile number", name: "phoneNumber", value: phoneNumber, setter: setPhoneNumber }} />

                    <Container className='d-flex justify-content-center align-content-center'>

                        <Button variant="outline-warning" style={{ marginRight: ".5rem" }} type="submit" >
                            Edit
                        </Button>
                        <Button variant="outline-danger" style={{ marginLeft: ".5rem" }} onClick={() => Navigate('/')}>
                            Cancel
                        </Button>

                    </Container>
                </Form>

            </Container>
        </>
    )
}

export default EditContact