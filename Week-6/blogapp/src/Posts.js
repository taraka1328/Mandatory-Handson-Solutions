import React,{Component} from 'react';
import Post from './Post';
class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            error: null
        };
    }
    loadPosts(){
         fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => {
             if(!response.ok){
                 throw new Error("Failed to fetch posts");
             }
             return response.json();
         })
         .then(data => {
            const posts = data.map(item => new Post(item.id,item.title,item.body));
            this.setState({posts});
         })
         .catch(error => {
            this.setState({error});
            alert("Error : " + error.message);
         }) 

    }
    componentDidMount(){
        this.loadPosts();
    }
    render(){
        return(
            <div>
                <h1>Blog Posts</h1>
                {this.state.posts.map(post=>(
                    <div key={post.id} style={{border: "1px solid #ccc", padding: "10px",marginBottom: "10px" }}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        )
    }
    compponentDidCatch(error,info){
        console.error("Caught error : "+ error);
        alert("An error occured : "+ error.message);
    }
}
export default Posts;