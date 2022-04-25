import React, { useState, useRef, useEffect } from "react";
import './cards.css';


import {BrowserRouter, Routes, Route,useNavigate, Navigatel,Link} from 'react-router-dom';
import Main from "./Main";

// function red(){
//     <Router>
//         <Routes>
//             <Route path="/buy" element={<Main/>}></Route>
//         </Routes>
//     </Router>
// }

const App = () =>{
    return(
        <div className="whole">
            
            <div className="wrapper">
                <Card
                img="https://www.quotemaster.org/images/84/8483686f0fe177f3b5ea2bee4f4d8fba.jpg"
                title='buy a book' description='find a book to give you pleasure' btn="buy a book" link=""/>

                <Card
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4M3I5YWzRbTOhkYrXHjy49fuvErAA5Ubf8Q&usqp=CAU"
                title='Publish a book!' description='publish a book NFT to the blockchain and sell it' btn="publish a book"/>
            </div>

        </div>
    )
}

function Card(props){
    const [show, setShow] = useState(false);

        
    return(

        

        <div className="card" id="parent">
            
            
            <div className="card__body">
            <br/> <br/> 
            <br/>
                <img src={props.img} className="image" alt="" />
                <h1 className="card__title">
                    {props.title}
                </h1>
                <p className="card__description">{props.description}</p>
                                    
                <button type="submit" className="card__btn" onClick={() => setShow(!show)}> {props.btn}</button>

                {show ? showData : <h1>no loads</h1>}

            </div>
            
        </div>
    )
    };
    
const showData = () =>{
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/main" element={<Main />} />
                {/* <Route path="/lab" element={<Aoth/>} /> */}
                <Route
                    path="*"
                    element={<Main />}
                />
                </Routes>
            </BrowserRouter>
        </div>
    )
    
}
export default  App;