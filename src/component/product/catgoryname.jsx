import React, {useEffect, useState} from 'react';
import {categoriesList} from "../../base";

function Catgoryname({id}) {
    const [state,setState] = useState("")
    useEffect(() => {
      setState(  categoriesList.find(res=>res.id===id)?.title)
    }, []);
    return (
        <a href="#" className="showcase-category">{state}</a>
    );
}

export default Catgoryname;