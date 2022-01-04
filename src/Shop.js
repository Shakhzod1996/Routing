import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Shop() {
    const style = {
        color: '#000',
        textDecoration: 'none'
    }
    useEffect(()=> {
        fetchItems() 
    }, [])

    const [items, setItems] = useState([])
    const fetchItems = async () => {
        const data = await fetch('https://reqres.in/api/users?page=1');

        const items = await data.json()
        setItems(items.data)
    }
    return (
        <div>
            {items.map(item => (
                <h1 key={item.id}>
                    <Link to={`/shop/${item.id}`} style={style}>
                        {item.first_name}
                    </Link>
                </h1>
            ))}
        </div>
    )
}
