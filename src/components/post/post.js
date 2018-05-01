import React, { Component } from 'react';
import "./post.css"

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const name = this.props.name;
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption =  this.props.caption;

        return (
        <article className="post" ref="Post">
            <section>
                <div className="post_user">
                    <div className="post_user-avatar">
                        <img src={avatar} alt={name}/>
                    </div>
                    <div className="post_user-name">
                        <span>{name}</span>
                    </div>
                </div>
            </section>
            <div className="post_image">
              <div className="post_image-bg">
                <img alt="post image" src={image} width="100"/>
              </div>
            </div>
            <section>
                <div className="post_caption">
                    <span>{caption}</span>
                </div>
            </section>
        </article>
        );
    }
}

export default Post;