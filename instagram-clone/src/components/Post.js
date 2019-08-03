import React from 'react';


class Post extends React.Component {
    render(){
        return(
            <article className="Post" ref="Post">
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                        <img src="https://live.staticflickr.com/65535/48440955291_fcb442269f_b.jpg" alt="stars"/>
                    </div>
                </div>
            </header>
            </article>)
        
    }
}



export default Post;