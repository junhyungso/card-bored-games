import React, {createContext, useState, useEffect} from 'react';
import initialData from '../utils/initialData.js';

function DataContextProvider(props){
    const [data, setData] = useState(()=>{
        return JSON.parse(window.localStorage.getItem('data')) || initialData;
    });
    useEffect(()=>{
        window.localStorage.setItem('data', JSON.stringify(data));
    }, [data]);


    return(
        <DataContext.Provider value = {{...data}}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataContextProvider; // export this component as default
// export the context so that other components can import
export const DataContext = createContext();