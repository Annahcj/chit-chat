export const getPostsAndComments = () => {
  return fetch('http://localhost:5500/posts', {
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
  return fetch('http://localhost:5500/comments', {
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
  return fetch(`http://localhost:5500/posts/${id}`, {
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
  return fetch('http://localhost:5500/posts/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
    .then(res => {
      return res.json();
    })
}