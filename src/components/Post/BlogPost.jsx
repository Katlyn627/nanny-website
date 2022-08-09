
export default function BlogPost({blogPost}){
    return(
        <div className="chef-card">
            <img src={blogPost.img} alt=""/>
                <div className="post-info">
                <h3 className="post-title">{blogPost.title}</h3>
                <p className="post-body">Age: <b>{blogPost.body}</b></p>
                <p className="chef-cuisine">Favorite Things: <b>{blogPost.author}</b></p>
                </div>

            </div>

    )


}