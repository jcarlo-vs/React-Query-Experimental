import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getPosts } from '../../sample/apiSample'
import Post from './Post'

const PostsLists = () => {
  const { data, status } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  console.log(data)

  return (
    <div className='border flex flex-col'>
      {data?.map((item) => (
        <Post {...item} />
      ))}
    </div>
  )
}

export default PostsLists
