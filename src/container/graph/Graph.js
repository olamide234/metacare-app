import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend} from 'recharts';
import './Graph.css'
import {Month, Percentage, Priority} from '../../components' 

const data = [
    {month: 'Jan', rate: 12},
    {month: 'Feb', rate: 18},
    {month: 'Mar', rate: 48},
    {month: 'Apr', rate: 18},
    {month: 'May', rate: 42},
    {month: 'jun', rate: 32}
]


export default function Graph({title, color}) {
    return (
        <div className="care__graph">
            <div className="care__graph-content">
                <div className="care__graph-content__left">
                    <div className="care__graph-content__left-txt">{title}</div>
                    <Percentage/>
                </div>
                <div className="care__graph-content__right">
                    <Priority bg_color={color}/>
                    <Month/>
                </div>
            </div>
            <div className="care__graph-main">
                {/* <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={1032}  height={230} className="chart" data={data}>
                        <Line type="monotone" dataKey="rate" stroke={color} />
                        <CartesianGrid stroke="#ECEBF5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer> */}
            </div>
        </div>
    )
}
// className="chart"