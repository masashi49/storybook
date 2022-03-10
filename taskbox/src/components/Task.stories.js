import React from "react"
import Task from "./Task"

export default {
    component: Task,
    title : 'Task'
}

const Template = args => <Task {...args}/>

export const Default = Template.bind( {} )

// Default.args = {
//     Default.args = {

//     }
// }
