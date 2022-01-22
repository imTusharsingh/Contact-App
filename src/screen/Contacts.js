import React, { useEffect } from 'react'
import { Button, Container, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { toast } from 'react-toastify'
import TableComp from '../components/TableComp'
import { fetchContact, getContactRequest } from '../redux/contact/actions/GetContactsAction'
import { deleteContact, deleteContactRequest } from '../redux/contact/actions/DeleteContactAction'

const Contacts = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.contacts)



    useEffect(() => {

        // dispatch(fetchContact()) //thunk disptach
        dispatch(getContactRequest()) //saga dispatch

    }, [dispatch])

    const handelDelete = (id) => {
        toast.success("Delete Successfully", {
            theme: "dark"
        })

        // dispatch(deleteContact(id))  //thunk
        dispatch(deleteContactRequest(id))  //saga
    }

    return (

        <>
            <Link to="/addContact">
                <Button variant="outline-dark" style={{ right: "0", margin: " 1rem 5rem", position: "fixed" }}>Add Contact</Button>
            </Link>
            <Container className='col-md-8 mx-auto my-5'>
                <Col>

                    <TableComp data={{ state, handelDelete }} />
                </Col>
            </Container>
        </>
    )
}

export default Contacts