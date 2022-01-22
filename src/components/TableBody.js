import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TableBody = (props) => {
    const { state, handelDelete } = props.data
    return (
        <>
            <tbody>
                {state.contact.map((elem, index) => {

                    return (
                        <tr key={elem.id}>
                            <td>{index + 1}</td>
                            <td>{elem.name}</td>
                            <td>{elem.email}</td>
                            <td>{elem.phoneNumber}</td>
                            <td>
                                <Link to={`/edit/${elem.id}`}>
                                    <Button variant="outline-warning" className="mx-1">Edit</Button></Link>
                                <Button className="mx-1" variant="outline-danger" onClick={() => handelDelete(elem.id)}>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </>
    )
}

export default TableBody