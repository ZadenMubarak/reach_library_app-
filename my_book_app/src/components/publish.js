import { Button } from "@syncfusion/ej2-react-buttons";
import React from "react";
import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib()

function pub_lish(){
    return {...stdlib.publisher}
}

function Publish_book() {
   
    return(
        <body>
            <div>
                <form method="POST">
                    <br/>
                    <textarea name="text" placeholder="about the book" cols={50} rows={15}>
                    </textarea>
                    <br></br>
                    <input type="text" placeholder="Book name" className="bookname"></input>
                    <br/> <br/>
                    <input type="text" placeholder="Author" className="author"></input>
                    <br/> <br/>
                </form>
            
                <button role="button" type="submit" onClick={pub_lish}>publish</button>
                 
            </div>
        </body>
    )
};

export default Publish_book;