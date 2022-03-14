import React from "react"
import Task from "./Task"

export default {
    component: Task,
    title : 'Task'
}

const Template = args => <Task {...args}/>

export const Default = Template.bind( {} )

Default.args = {
    task: {
        id: 1,
        title: "Test Task",
        stage: "TASK_STATE",
        updateAt: new Date(2018,0.1,9,0)
    }
}

export const Pinned = Template.bind({})
Pinned.args = {
    task: {
        ...Default.args.task,
        title: "Test Pinned",
        state : 'TASK_PINNED'
    }
}
