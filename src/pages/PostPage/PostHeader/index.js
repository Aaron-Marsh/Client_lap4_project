import React from "react";


export const PostHeader = ({title,username,first_message}) => {
    console.log("HELLO FROM PostHeader");

    const [comment,setComment] = useState("")

    return (
        <div className="container">
            <h3>{title}</h3>
            <h4>Author: {username}</h4>
            <p>{first_message}</p>

        </div>
    );
};
