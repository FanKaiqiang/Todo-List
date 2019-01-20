import React from 'react'
import './TodoInput.scss'


function submit(props, e) {
  if (e.key === 'Enter') {
    props.onSubmit(e)
  }
}

function changeTitle(props, e) {
  props.onChange(e)
}
export default function TodoInput(props) {
  return (
    <input type="text" className="TodoInput"
      defaultValue={props.content}
      onKeyPress={submit.bind(null, props)}
      onChange={changeTitle.bind(null, props)} />
  )
}
