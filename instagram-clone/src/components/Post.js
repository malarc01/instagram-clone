import React from 'react';
import './Post.css'

class Post extends React.Component {
    render(){
        return(
            <article className="Post" ref="Post">
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                        <img src="" alt="user"/>
                    </div>
                    <div className="Post-user-nickname">
                        <span>Rick</span>
                    </div>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img src="https://live.staticflickr.com/65535/48440955291_fcb442269f_c.jpg" alt="classroom"/>
                </div>
            </div>
            <div className="Post-caption">
                <strong>Rick</strong> Pull up the People
            </div>
            </article>);
        
    }
}



export default Post;