import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Post = ({ submitComment, comments }) => {
  const { id } = useParams()
  let title = 'Some title', content = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam debitis obcaecati minus. Error a, quos amet repellat architecto ipsam? Rerum, sapiente? Quisquam molestiae libero laborum expedita excepturi veniam iure saepe praesentium aliquid ut reiciendis, qui enim ullam fugiat fugit adipisci earum quo temporibus dicta pariatur. Reiciendis iusto, reprehenderit eaque totam illum, autem culpa rerum blanditiis obcaecati et provident aperiam aspernatur nisi deleniti exercitationem rem atque nesciunt velit! Labore nulla, mollitia accusamus, quam consequuntur illum debitis necessitatibus quibusdam similique, eos quasi exercitationem rem est ipsa praesentium magnam? Quidem qui nobis reiciendis! Natus quae eos provident, a consectetur ab enim corrupti neque.';
  let author = 'Anna';
  let likes = 5, dislikes = 1;
  // console.log(comments, comments[id])

  // get data for post by id
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