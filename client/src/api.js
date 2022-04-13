export const getPostsAndComments = () => {
  return fetch('/posts', {
    method: 'GET'
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const addComment = (author, comment, postId) => {
  const payload = {
    author,
    comment,
    postId
  }
  return fetch('/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err))
}

export const getPostAndCommentsByPostId = (id) => {
  return fetch(`/posts/${id}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const addPost = (postAuthor, postTitle, postContent) => {
  const payload = {
    author: postAuthor,
    title: postTitle,
    content: postContent
  }
  return fetch('/posts/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err))
}

export const deleteComment = (commentId, postId) => {
  return fetch(`/comments/${postId}/${commentId}`, {
    method: 'DELETE'
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err))
}

export const deletePost = (postId) => {
  return fetch(`/posts/${postId}`, {
    method: 'DELETE'
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err))
}