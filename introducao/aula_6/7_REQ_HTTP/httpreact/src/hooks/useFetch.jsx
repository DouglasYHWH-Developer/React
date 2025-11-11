import {useState, useEffect} from 'react';
// 4- custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null)

//5- refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const httpConfig = (data, method) =>{
        if(method === "POST"){
            setConfig({
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)

            });
            setMethod(method);
            
        }
    };

    useEffect(() =>{

        const fetchData = async()=>{
            const res = await fetch(url);
            const json = await res.json();

            setData(json);
        };
        fetchData();
    }, [url, callFetch]);

    //5- refatorando o POST
    useEffect(() =>{
        const httpRequest = async () =>{
            if(method === "POST"){
               
                const res = await fetch(url, config);
                
                const json = await res.json();

                setCallFetch(prev => !prev);
            }
        }
        httpRequest();

    }, [config, method, url])

    return {data, httpConfig};
};