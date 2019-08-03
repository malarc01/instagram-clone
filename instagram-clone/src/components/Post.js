import React from 'react';


class Post extends React.Component {
    render(){
        return(
            <article className="Post" ref="Post">
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                        <img src="https://unsplash.com/photos/K3q1KVUeGQY" alt="desert"/>
                    </div>
                </div>
            </header>
            </article>)
        
    }
}



export default Post;