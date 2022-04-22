export const getPosts = () => {
  return fetch('/api/posts', {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const getComments = () => {
  return fetch('/api/comments', {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const getCommentsByPostId = (id) => {
  return fetch(`/api/comments/${id}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const addComment = (postId, author, comment) => {
  const payload = {
    author,
    comment,
    postId,
  }
  return fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      return res.json()
    })
    .catch((err) => console.log(err))
}



export const getPost = (id) => {
  return fetch(`/api/posts/${id}`, {
    method: 'GET',
  })
    .then((res) => {
      return res.json()
    })
    .catch((err) => console.log(err))
}

export const addPost = (postAuthor, postTitle, postContent) => {
  const payload = {
    author: postAuthor,
    title: postTitle,
    content: postContent,
  }
  return fetch('/api/posts/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      return res.json()
    })
    .catch((err) => console.log(err))
}

export const deleteComment = (commentId, postId) => {
  return fetch(`/api/comments/${postId}/${commentId}`, {
    method: 'DELETE',
  })
    .then((res) => {
      return res.json()
    })
    .catch((err) => console.log(err))
}

export const deletePost = (postId) => {
  return fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
  })
    .then((res) => {
      return res.json()
    })
    .catch((err) => console.log(err))
}