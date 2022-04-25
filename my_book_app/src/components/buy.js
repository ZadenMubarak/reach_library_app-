import React from "react";
import './buy.css';
import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from '../build/index.main.mjs';
const stdlib = loadStdlib()

function back() {
        
    let acc = null

    const createAcc = await ask.ask(
        `Would you like to create an account? (only possible on devnet)`,
        true
    );
    //to buy
    if (createAcc) {
        acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
        console.log(`account:${acc} accreated:${createAcc}`)
    }
    else{
        const bye = 'Good bye!'
        console.log(bye);
    };
    let ctc = null;

    ctc.getInfo().then(() =>{
        console.log('get ready to buy')
    })
};

const Buy = ()=>{
    // const interact = {...stdlib.price}
    // const book = {...stdlib.bookname}
    const interact = '$90';
    const book='huckleberry'
    return(
        <div className="top">
            <br/>
            <h1>buy the book of your choice</h1>
            <br/>
            <h2> Name:{book}<br/> price:{interact}</h2>
            <br/>
            <button onClick={back}>Purchase</button>
            

        </div>
    )
};

export default Buy;