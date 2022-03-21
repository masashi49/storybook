import React    from "react";
import Task from "./Task";

export default function TaskList ( { loading, tasks, onPinTask, onArchiveTask } ) {
    const events = {
        onPinTask,
        onArchiveTask
    }

    if ( loading ) {
        return <div>loading</div>
    }
    if ( tasks.length === 0 ) {
        return <div>タスクはありません
        </div>
    }
    return (
        <div>
            { tasks.map( task => {
                <Task key={task.id} task={taks} {...events} />
            })}
        </div>
    )
}
