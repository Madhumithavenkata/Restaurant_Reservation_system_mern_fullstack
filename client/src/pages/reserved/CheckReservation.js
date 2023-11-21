// CheckReservation.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const CheckReservation = () => {
    const [reservedTables, setReservedTables] = useState([]);

    useEffect(() => {
        // Fetch reserved tables data from your API
        axios.get('http://localhost:8000/reservation/user')
            .then(response => {
                setReservedTables(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Your Reserved Tables
            </Typography>
            {reservedTables.length > 0 ? (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Table Name</TableCell>
                            <TableCell>Capacity</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reservedTables.map(table => (
                            <TableRow key={table.id}>
                                <TableCell>{table.name}</TableCell>
                                <TableCell>{table.capacity}</TableCell>
                                <TableCell>{table.date}</TableCell>
                                <TableCell>{table.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <Typography variant="body1">
                    You have no reserved tables.
                </Typography>
            )}
        </div>
    );
};

export default CheckReservation;
