import React from 'react'
import './MainApp.css'
import {GraphContainer} from '../../container'
import { Header} from '../../components' 

const mainData = [
    {
        title: "Average response Time",
        color: "#F05D23",
        average_text: "Average Response Time"
    },
    {
        title: "Replies per resolution",
        color: "#3E68FF",
        average_text: "Average Replies"
    },
    {
        title: "Average resolution time",
        color: "#FB6491",
        average_text: "Average Resolution Rate"
    },
    {
        title: "First contact resolution rate",
        color: "#07C9E2",
        average_text: "Average Contact Rate"
    }
]

export default function MainApp() {
    return (
        <div className="care_mainApp">
            <Header/>
            <div>
                {mainData.map((item, index) => (
                    <GraphContainer title={item.title} color={item.color} average_text={item.average_text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}
