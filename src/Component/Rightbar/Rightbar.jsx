import "../Rightbar/Rightbar.css"
import { Users } from "../../Data";
import Online from "../Online/Online";
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
               
               
               {Users.map((u)=>(
                <Online  key={u.id} user={u}/>
               ))}
               
               
            </ul>
            </div>
        </div>
    )
}
export default Rightbar;