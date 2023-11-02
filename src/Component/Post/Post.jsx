import '../Post/Post.css';
import {FiMoreVertical} from 'react-icons/fi';

const Post = ({post}) => {
  return (
    <div className='post'>
         <div className="postWrapper">

            <div className="postTop">
                <div className="postTopLeft">
                   
                    <img src="/asset/profile3.jpg" alt="" className="postProfileImg" />
                    <span className="postUserName">Sid Sharma</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                   <FiMoreVertical/> 
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                 <img src="/asset/post.jpg" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/asset/like.png" alt="" className="likeIcon" />
                <img src="/asset/likebutton.png" alt="" className="likeIcon" />
                <span className="postLikeCounter">{post?.like}</span>
                </div>
                <div className="postBottomright">
                    <span className="postCommentText">{post?.comment}</span>
                </div>
            </div>
         </div>
      
    </div>
  );
}

export default Post;
