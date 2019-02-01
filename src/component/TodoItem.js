import React from 'react';
import '../style/TodoItem.scss'

function toggle  (props)  {
  props.onToggle(props.todo)
}
function toDelete  (props)  {
  props.onDelete(props.todo)
}
export default function TodoItem(props) {
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={props.todo.complete}
        onChange={toggle.bind(null,props)} />
      <span className="title">{props.todo.title}</span>
      <button onClick={toDelete.bind(null,props)}>删除</button>
    </div>
  )
}
