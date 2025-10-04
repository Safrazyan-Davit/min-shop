import React, {useEffect, useState} from 'react';
import { subcategoriesList} from "../../base";

function SubMenubar({open,id}) {
    const [state,setState] = useState([])
    useEffect(()=>{
       setState( subcategoriesList.filter(res=>res.category_id===id&&res.status==='active'))
    },[open])
    return (
        <ul className={`sidebar-submenu-category-list ${open ? 'active' : ''}`}  >
            {/*active*/}



            {
                state.map(res=> (
                    <li className="sidebar-submenu-category" key={res.id}>
                        <a href="#" className="sidebar-submenu-title">
                            <p className="product-name">{res.thumbName}</p>
                            <data value="300" className="stock" title="Available Stock">300</data>
                        </a>
                    </li>
                ))
            }
        </ul>

    );
}

export default SubMenubar;