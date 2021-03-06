
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

export const addComment = (postId, author, comment, auth0Id, token) => {
  const payload = {
    author,
    comment,
    postId,
    auth0Id
  }
  return fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
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

export const addPost = (postAuthor, postTitle, postContent, auth0Id, token) => {
  const payload = {
    author: postAuthor,
    title: postTitle,
    content: postContent,
    auth0Id
  }
  return fetch('/api/posts/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      return res.json()
    })
    .catch((err) => console.log(err))
}

export const deleteComment = (commentId, postId, token) => {
  return fetch(`/api/comments/${postId}/${commentId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then((res) => {
      return res.json()
    })
    .catch((err) => console.log(err))
}

export const deletePost = (postId, token) => {
  return fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then((res) => {
      return res.json()
    })
    .catch((err) => console.log(err))
}


// subcomments
export const getSubcomments = () => {
  return fetch(`/api/subcomments`, {
    method: 'GET'
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const addSubcomment = (subcomment, token) => {
  return fetch(`/api/subcomments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(subcomment)
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const deleteSubcomment = (id, token) => {
  return fetch(`/api/subcomments/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}