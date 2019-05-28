import React from 'react';

export const characterColumns = (options) => {
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
            Cell: row => <button onClick={() => console.log(row.original)}>Click Me</button>
        }
    ];
};