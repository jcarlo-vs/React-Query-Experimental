import axios from 'axios'

const dataApi = axios.create({
  baseURL: 'http://localhost:3000',
})

export async function getPosts() {
  const { data } = await axios.get('http://localhost:3000/posts')
  return data
}

export async function createPost(post) {
  const { data } = await dataApi.post('/posts', post)
  return data
}

export async function deletePost(id) {
  const { data } = await dataApi.delete(`/posts/${id}`, id)
  return data
}

export async function updatePost(post) {
  console.log(post)
  const { data } = await dataApi.patch(`/posts/${post.id}`, post)
  console.log(data)
  return data
}

export default dataApi
