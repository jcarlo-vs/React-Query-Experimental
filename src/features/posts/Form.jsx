import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { createPost } from '../../sample/apiSample'
import { queryClient } from '../../main'

const initialState = { id: '', todo: '', done: false }

const Form = () => {
  const { mutate: createMutation } = useMutation({
    mutationFn: (data) => createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    },
  })

  const [values, setValues] = useState(initialState)

  function handleChange(e) {
    const value = e.target.value
    const name = e.target.name
    setValues({ ...values, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    createMutation({ ...values, id: crypto.randomUUID() })
    setValues(initialState)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='
    border'
    >
      <div className='flex gap-3'>
        <div>
          <label htmlFor='todo'></label>
          <input
            className='text-black'
            type='text'
            name='todo'
            value={values.todo}
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='text-3xl border px-4 py-3'>
          CREATE TODO
        </button>
      </div>
    </form>
  )
}

export default Form
