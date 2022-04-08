import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Post = ({ submitComment, comments, posts }) => {
  const { id } = useParams()
  console.log(comments, posts)
  const { title, content, author } = posts.find(post => post.id == id);
  // const [post, setPost] = useState({});
  // const [comments, setComments] = useState([]);
  // let title = 'Some title', content = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam debitis obcaecati minus. Error a, quos amet repellat architecto ipsam? Rerum, sapiente? Quisquam molestiae libero laborum expedita excepturi veniam iure saepe praesentium aliquid ut reiciendis, qui enim ullam fugiat fugit adipisci earum quo temporibus dicta pariatur. Reiciendis iusto, reprehenderit eaque totam illum, autem culpa rerum blanditiis obcaecati et provident aperiam aspernatur nisi deleniti exercitationem rem atque nesciunt velit! Labore nulla, mollitia accusamus, quam consequuntur illum debitis necessitatibus quibusdam similique, eos quasi exercitationem rem est ipsa praesentium magnam? Quidem qui nobis reiciendis! Natus quae eos provident, a consectetur ab enim corrupti neque.';
  // let author = 'Anna';

  // useEffect(() => {
  //   // fetch post and comments by id
  //   fetch(`http://localhost:5500/posts/${id}`, {
  //     method: 'GET'
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data, 'data')
  //     setPost(data.post);
  //     setComments(data.comments);
  //   })
  // }, [])

  // get data for post by id, start by complete the routes for GET posts/:id
  return (
    <div className="post">
      <h1>{title} <span className="h3">By {author}</span></h1>
      <p>{content}</p>
      {/* Comment form & Comments section below */}
      <div className="comment-divider">Comments: {comments.length}</div>
      <CommentForm postId={id} submitComment={submitComment}/>
      {comments[id].map((comment, idx) => {
        return <Comment key={`${id}-${idx}`} author={comment.author} comment={comment.comment}/>
      })}
    </div>
  )
}
export default Post;