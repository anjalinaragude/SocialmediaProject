import '../Sidebar/Sidebar.css'
import {MdRssFeed,MdGroup,MdEvent} from 'react-icons/md'
import {BsFillChatLeftTextFill,BsFillBookmarkFill,BsQuestionCircle,BsBag} from 'react-icons/bs'
import {BiSolidVideos} from 'react-icons/bi'
import {FaGraduationCap} from 'react-icons/fa'

const Sidebar=()=>{
    return(
        <div className='sidebar'>
            <div className="sidebarwrapper">
                <ul className="sidebarList">
                    <li className="sidebarListitem">
                        <MdRssFeed className='sidebaricon'/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListitem">
                        <BsFillChatLeftTextFill className='sidebaricon'/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListitem">
                        <BiSolidVideos className='sidebaricon'/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListitem">
                        <MdGroup className='sidebaricon'/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListitem">
                        <BsFillBookmarkFill className='sidebaricon'/>
                        <span className="sidebarListItemText">bookmarks</span>
                    </li>
                    <li className="sidebarListitem">
                        <BsQuestionCircle className='sidebaricon'/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListitem">
                        <BsBag className='sidebaricon'/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListitem">
                        <MdEvent className='sidebaricon'/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListitem">
                        <FaGraduationCap className='sidebaricon'/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">show  More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarfriendList">
                    <li className="sidebarFriend">
                        <img src="/asset/profile2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">AnjaliReddy</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/asset/profile2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">AnjaliReddy</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/asset/profile2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">AnjaliReddy</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/asset/profile2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">AnjaliReddy</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/asset/profile2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">AnjaliReddy</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/asset/profile2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">AnjaliReddy</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/asset/profile2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">AnjaliReddy</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/asset/profile2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">AnjaliReddy</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/asset/profile2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">AnjaliReddy</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/asset/profile2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">AnjaliReddy</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/asset/profile2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">AnjaliReddy</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/asset/profile2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">AnjaliReddy</span>
                    </li>
                </ul>
            </div>



            </div>
    )
}
export default Sidebar;