import React from 'react';
import { Link } from 'react-router-dom'

export const characterColumns = () => {
    return [
        {
            accessor: 'name',
            Header: 'Name'
        },
        {
            accessor: 'level',
            Header: 'Level'
        },
        {
            accessor: 'alignment',
            Header: 'Alignment'
        },
        {
            accessor: 'race',
            Header: 'Race',
        },
        {
            accessor: 'charClass',
            Header: 'Class',
        },
        {
            accessor: 'edit',
            Header: 'Manage',
            Cell: row => <Link to={`/characters/${row.original.id}/edit`}>Edit</Link>
        }
    ];
};