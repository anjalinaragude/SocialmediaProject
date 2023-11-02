import "../Rightbar/Rightbar.css"

const Rightbar=()=>{
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/asset/gift.png" alt="" className="birthdayImg" />
               <span className="birthdayText"><b>Rajesh Sharma </b> <b>and 3 other friends</b> have a birthday today</span>
                </div>
                <img src="asset/food.png" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">online Friends</h4>
            <ul className="rightbarFriendList">
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src="asset/profile4.jpg" alt="" className="rightbarProfileImg" />
                     <span className="rightbaronline"></span>
                    </div>
                    <span className="rightbarUserName">piraji Patil</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src="asset/profile4.jpg" alt="" className="rightbarProfileImg" />
                     <span className="rightbaronline"></span>
                    </div>
                    <span className="rightbarUserName">piraji Patil</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src="asset/profile4.jpg" alt="" className="rightbarProfileImg" />
                     <span className="rightbaronline"></span>
                    </div>
                    <span className="rightbarUserName">piraji Patil</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src="asset/profile4.jpg" alt="" className="rightbarProfileImg" />
                     <span className="rightbaronline"></span>
                    </div>
                    <span className="rightbarUserName">piraji Patil</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src="asset/profile4.jpg" alt="" className="rightbarProfileImg" />
                     <span className="rightbaronline"></span>
                    </div>
                    <span className="rightbarUserName">piraji Patil</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src="asset/profile4.jpg" alt="" className="rightbarProfileImg" />
                     <span className="rightbaronline"></span>
                    </div>
                    <span className="rightbarUserName">piraji Patil</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src="asset/profile4.jpg" alt="" className="rightbarProfileImg" />
                     <span className="rightbaronline"></span>
                    </div>
                    <span className="rightbarUserName">piraji Patil</span>
                </li>
            </ul>
            </div>
        </div>
    )
}
export default Rightbar;