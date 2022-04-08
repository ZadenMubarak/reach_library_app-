import React from "react";

const Main=()=>{
    return(
        <>

            <div className="header">
                <div className="row1">
                    <h1>a room without a book is like <br/> a body without a soul</h1>
                </div>

                <div className="row2">
                    <h2>find your book!</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter book name"></input>
                        <button><i class="fas fa-search"></i></button>
                    </div>
                    <img src="./animated" alt=""/>
                </div>
            </div>
        </>
    )

}
React.createElement(Main)

export default Main;