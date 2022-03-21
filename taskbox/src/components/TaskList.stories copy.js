import React from "react";
import TaskList from "./TaskList";
import * as TaskStories from "./Task.stories";

export default {
    component: TaskList,
    title: "TaksList",
    decorators: [ story => <div>{story()}</div>]
}

const Template = args => <TaskList {...args} />

export const Default = Template.bind( {} );
Default, args = {
    tasks: [
        { ...TaskStories.Default.args.task, id: 1, title: "Task 1" },
        { ...TaskStories.Default.args.task, id: 1, title: "Task 1" },
        { ...TaskStories.Default.args.task, id: 3, title: "Task 3" },
        { ...TaskStories.Default.args.task, id: 4, title: "Task 4" },
    ]
}
