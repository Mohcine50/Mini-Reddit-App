import React, { useEffect, useState } from 'react'
import "./comment.css"
import ReadMoreReact from 'read-more-react';
import moment from 'moment';
import { nFormatter } from '../../util/util';
function Comment({post}) {


  const [userIcon, setUserIcon] = useState("");
  const [userName, setUserName] = useState("");
  
  const getUserIcon = async (username)=>{
    
    
    const response = await fetch(`https://www.reddit.com/user/${username}/about.json`);
    const data = await response.json();
    setUserIcon(data.data.icon_img);
    setUserName(data.data.name);
    
  }

  useEffect(()=>{
    getUserIcon(post.author);
  },[])
  
  
  return (
    <div className="comment">
      <div className='userInfo'>
       <img src={userIcon} alt=""/>
       <span className='username'>{userName}</span>
       <span className='time'>{moment.unix(post.created_utc).fromNow()}</span>
       </div>
        <p> {post.body}</p>
       <div className='upvots'>
        <button><i className="fa-solid fa-arrow-up"></i></button>
        <span>{nFormatter(post.ups)}</span>
       <button><i className="fa-solid fa-arrow-down"></i></button>
       </div>
    </div>
  )
}

export default Comment;