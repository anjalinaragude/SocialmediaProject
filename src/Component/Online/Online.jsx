import '../Online/Online.css';

const Online = ({user}) => {
  return (
    <div>
       <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
                     <span className="rightbaronline"></span>
                    </div>
                    <span className="rightbarUserName">{user.username}</span>
                </li>
               
    </div>
  );
}

export default Online;
