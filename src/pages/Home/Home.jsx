import Feed from "../../Component/Feed/Feed";
import Rightbar from "../../Component/Rightbar/Rightbar";
import Sidebar from "../../Component/Sidebar/Sidebar";
import Topbar from "../../Component/Topbar/Topbar";
import '../Home/home.css'
const Home=()=>{
    return(
        <div>
            <Topbar/>
            <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
            </div>
        </div>
    )
}
export default Home;