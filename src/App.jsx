import React from 'react'
import Form from './features/posts/Form'
import PostsLists from './features/posts/PostsLists'

const App = () => {
  return (
    <div className='text-5xl border text-center h-screen grid place-items-center'>
      <div>
        <Form />
        <PostsLists />
      </div>
    </div>
  )
}

export default App
