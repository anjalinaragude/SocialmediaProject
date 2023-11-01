import "../Share/Share.css";
import {MdPermMedia} from 'react-icons/md'
const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
    <img src="/asset/profile5.jpg" alt="" className="shareProfileImg" />
    <input type="text" placeholder="what's  in your mind " className="shareinput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptiond">
         <div className="shareOption">
            <MdPermMedia className="shareIcon"/>
            <span className="shareOptionText">photo or Video</span>
         </div>
         <div className="shareOption">
            <MdPermMedia className="shareIcon"/>
            <span className="shareOptionText">photo or Video</span>
         </div>
         <div className="shareOption">
            <MdPermMedia className="shareIcon"/>
            <span className="shareOptionText">photo or Video</span>
         </div>
         <div className="shareOption">
            <MdPermMedia className="shareIcon"/>
            <span className="shareOptionText">photo or Video</span>
         </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
