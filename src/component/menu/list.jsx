import React, { useState} from 'react';
import SubMenubar from "./subMenubar";

function List({res}) {
    const [open,setOpen]=useState(false)

    return (
        <li className="sidebar-menu-category" key={res.id} onClick={()=>setOpen(!open)}>

            <button className="sidebar-accordion-menu">

                <div className="menu-title-flex">
                    <img src={res.thumbImage} alt="clothes" width="20" height="20"
                         className="menu-title-img"/>

                    <p className="menu-title">{res.thumbName}</p>
                </div>

                <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>

            </button>
            <SubMenubar open={open} id={res.id}/>

        </li>
    );
}

export default List;