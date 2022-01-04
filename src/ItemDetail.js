import React, {useState, useEffect} from 'react'

export default function ItemDetails({match}) {
    const style = {
        color: '#000',
        textDecoration: 'none'
    }

    const styImg = {
        width: '300px'
    }

    useEffect(()=> {
        fetchItem()
        console.log(match);
    }, [])

    const [item, setItems] = useState([])

    const fetchItem = async () => {
        const fetchItem = await fetch('https://reqres.in/api/users?page=1');
        const item = await fetchItem.json();
        setItems(item.data[match.params.id-1]);
        console.log(item.data[match.params.id-1]);
    }

    return (
        <div>
            <h1>{item.first_name} {item.last_name}</h1>
            <img src={item.avatar} style={styImg} alt={item.first_name} />
            <p style={{color: '#888', textDecoration: 'underline', cursor: 'pointer'}}>{item.email}</p>
        </div>

    )
}
