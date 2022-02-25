import React, {forwardRef} from 'react';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import './Post.css';

const Post = forwardRef(
    ({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}, ref) => {
    return (
        <div className='post' ref={ref}>
            <div className='post__avatar'>
            <Avatar src={avatar} />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                           {displayName}{''} 
                            <span className='post__headerSpecial'>
                               {verified && <VerifiedIcon className="post__badge"/>} @{username}
                            </span>
                        </h3>
                    
                    </div>
                </div>
                <div className='post__headerDescription'>
                    <p>{text}</p>
                </div>
            <img src={image}/>
            <div className='post__footer'>
                <ChatBubbleOutlineIcon className='p-icon' fontSize='small'/>
                <RepeatIcon className='p-icon' fontSize='small'/>
                <FavoriteBorderIcon className='p-icon' fontSize='small'/>
                <PublishIcon className='p-icon' fontSize='small'/>
            </div>
            </div>
        </div>
    );
});

export default Post;