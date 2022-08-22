import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
import { DualAxes } from '@ant-design/plots';

const Annual = () => {
    const uvBillData = [
        {
            time: 'July',
            value: 350,
            type: 'Nike',
        },
        {
            time: 'July',
            value: 500,
            type: 'Hoka',
        },
        {
            time: 'July',
            value: 330,
            type: 'World Balance',
        },
        {
            time: 'July',
            value: 140,
            type: 'Adidas',
        },
        {
            time: 'August',
            value: 900,
            type: 'Nike',
        },
        {
            time: 'August',
            value: 400,
            type: 'Hoka',
        },
        {
            time: 'August',
            value: 300,
            type: 'World Balance',
        },
        {
            time: 'August',
            value: 2200,
            type: 'Adidas',
        },
        {
            time: 'October',
            value: 1500,
            type: 'Nike',
        },
        {
            time: 'October',
            value: 1100,
            type: 'Hoka',
        },
        {
            time: 'October',
            value: 2000,
            type: 'World Balance',
        },
        {
            time: 'October',
            value: 2200,
            type: 'December',
        },
        {
            time: 'November',
            value: 1000,
            type: 'Nike',
        },
        {
            time: 'November',
            value: 900,
            type: 'Hoka',
        },
        {
            time: 'November',
            value: 300,
            type: 'World Balance',
        },
        {
            time: 'November',
            value: 500,
            type: 'Adidas',
        },
        {
            time: 'December',
            value: 1100,
            type: 'Nike',
        },
        {
            time: 'December',
            value: 1500,
            type: 'Hoka',
        },
        {
            time: 'December',
            value: 2100,
            type: 'World Balance',
        },
        {
            time: 'December',
            value: 2600,
            type: 'Adidas',
        },

    ];

    const transformData = [
        {
            time: 'July',
            count: 800,
        },
        {
            time: 'August',
            count: 600,
        },
        {
            time: 'October',
            count: 1000,
        },
        {
            time: 'November',
            count: 400,
        },
        {
            time: 'December',
            count: 2000,
        },
    ];
    const config = {
        data: [uvBillData, transformData],
        xField: 'time',
        yField: ['value', 'count'],
        geometryOptions: [
            {
                geometry: 'column',
                isStack: true,
                seriesField: 'type',
            },
            {
                geometry: 'line',
            },
        ],
    };

    return (
        <>
            <DualAxes {...config} />
        </>
    )
}

export default Annual;