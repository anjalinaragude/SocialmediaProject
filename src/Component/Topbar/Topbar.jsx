import '../Topbar/Topbar.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsChatSquareFill, BsFillPersonFill} from 'react-icons/bs'
import {IoIosNotifications} from 'react-icons/io'
const Topbar=()=>{
    return(
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='logo'>Lamasocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <AiOutlineSearch className='searchIcon'/>
                <input placeholder='Search for friends, post or video' type='text' className="searchInput"></input>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">   
                     <BsFillPersonFill />
                     <span className="topbarIconBadge">1</span>
                     </div>
                     <div className="topbarIconItem">   
                     <BsChatSquareFill/>
                     <span className="topbarIconBadge">2</span>
                     </div>
                     <div className="topbarIconItem">   
                     <IoIosNotifications/>
                     <span className="topbarIconBadge">1</span>
                     </div>
                
                </div>
                <img src="./asset/profile1.jpg" alt="" className="tobarImg" />
            </div>
        </div>
    )
}
export default Topbar;