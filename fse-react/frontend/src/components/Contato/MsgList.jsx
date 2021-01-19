import React, { useState, useEffect } from 'react';

import './style.css';

const MsgList = () => {
    const [msg, setMsg] = useState([]);
    

    useEffect(async () => {
        const url = "http://localhost:5000/mensagens";
        const res = await fetch(url);
        setMsg(await res.json());
    }, [])


    return(
        <>
            {   msg.map(row =>{
                return(
                    <div key={row.id} className="form-contato card msg my-3">
                        <div className="card-body">
                            <h5 className="card-title">{row.nome}</h5>
                            <p className="card-text">{row.msg}</p>
                            <p className="card-text"><small class="text-muted">{row.dia}</small></p>
                        </div>
                    </div>
                    )
                })
            }
        </>
    )
}
export default MsgList; 