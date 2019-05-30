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
            Cell: row => {
                return (
                    <div style={{display: 'flex'}}>
                        <Link to={`/characters/${row.original.id}`}>View</Link>
                        <Link to={`/characters/${row.original.id}/edit`}>Edit</Link>
                    </div>
                )
            }
        }
    ];
};

export const scenarioTableColumns = [
    {
        accessor: 'season_number',
        Header: 'Season',
    },
    {
        accessor: 'scenario_number',
        Header: 'Scenario #'
    },
    {
        accessor: 'name',
        Header: 'Title'
    },
    {
        accessor: 'low_level',
        Header: 'Low Level',
    },
    {
        accessor: 'high_level',
        Header: 'High Level'
    }
];