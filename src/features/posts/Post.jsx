import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { deletePost, updatePost } from '../../sample/apiSample'
import { queryClient } from '../../main'
const Post = ({ id, todo, done }) => {
  const [edit, setEdit] = useState(false)
  const [editValue, setEditValue] = useState('')

  const { mutate: deleteMutation } = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    },
  })

  const { mutate: updateMutation } = useMutation({
    mutationFn: (data) => updatePost(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    },
  })

  return (
    <div className='flex gap-20 items-center justify-between'>
      <div className='h-fit'>
        <input
          type='checkbox'
          checked={done}
          className='h-10 w-10'
          onChange={() => updateMutation({ id, todo, done: !done })}
        />
      </div>
      {!edit ? (
        <p className={`${done ? 'line-through' : ''}`}>{todo}</p>
      ) : (
        <input
          placeholder={todo}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      )}
      <div className='flex gap-2'>
        <button
          className='text-lg px-3 py-2 border'
          onClick={() => {
            setEdit(!edit)
            if (editValue) {
              updateMutation({ id, todo: editValue, done })
            }
          }}
        >
          EDIT
        </button>
        <button
          className='text-lg px-3 py-2 border'
          onClick={() => deleteMutation(id)}
        >
          DELETE
        </button>
      </div>
    </div>
  )
}

export default Post
