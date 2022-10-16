import React from "react";

const PortfolioPage = (props) =>{
    return(
        <h1 style={
            {textAlign: 'center',
            fontFamily: "cursive",
            color: "teal"
            }
        }>{props.post.tittle}</h1>
    );
};

export default PortfolioPage