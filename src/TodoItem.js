import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



export default function TodoItem({title, id, completed}) {

  return (
    <li className="todo">
      <label>
        <input
          type="checkbox"
          defaultChecked={false}
        />
        <span>{title}</span>

        <Button
          variant="contained"
          color="primary"
          className="button"
          startIcon={<DeleteIcon />}
        >
        Delete
      </Button>
      </label>
    </li>
  )
}