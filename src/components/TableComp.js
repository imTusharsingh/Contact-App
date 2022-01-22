import React from 'react'
import TableBody from './TableBody'
import { Table, Spinner } from 'react-bootstrap'


const TableComp = (props) => {
    const { state, handelDelete } = props.data
    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>

                {!state.loading &&
                    <TableBody data={{ state, handelDelete }} />}

            </Table>
            {state.loading && <Spinner animation="border" style={{ position: "absolute", top: "50%", left: "50%", color: "black" }} />}

        </>
    )
}

export default TableComp