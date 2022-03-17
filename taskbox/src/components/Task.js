import React from 'react';
import PropTypes from 'prop-types'

// このコンポーネントを構成するために必要な情報を詰め込む。
// storybook側ではTASK_ARCHIVEDddddといったstateで切り替わる表示を設定済み。
// 受け取ったメソッドの動きは関係ない。
export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    return (
        <div className={ `list-item ${ state }` }>
             { state === 'HELLO' && `こんにちわ`}
            <input
                type="checkbox"
                defaultChecked={ state === 'TASK_ARCHIVEDdddd' }
                disabled={ true }
                name='checked'
            />
            <span onClick={()=>onArchiveTask(id)}>onArchiveTask</span>
            <div className="title">
                <input type="text" value={ title } readOnly={ true } placeholder="Input title" />
            </div>
            <div className="actions" onClick={ event => event.stopPropagation() }>
                { state !== 'TASK_ARCHIVEDdddd' && (
                    <span onClick={ () => onPinTask( id ) }>
                        onPinTask
                    </span>
                ) }
                { state === 'TASK_PINNED' && (
                    <span onClick={ () => onPinTask( id ) }>
                        TASK_PINNED
                    </span>
                )}
            </div>
            { state === 'HELLO' && `さようなら`}
        </div>
  );
}

Task.propTypes = {
    task: {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state : PropTypes.string.isRequired
    },
    onArchiveTask: PropTypes.func,
    onPinTask:PropTypes.func
}
