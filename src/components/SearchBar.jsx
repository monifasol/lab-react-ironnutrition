import { Input } from "antd";
import { useState } from 'react';

const SearchBar = (props) => {

    const { Search } = Input;

    const [query, setQuery] = useState("")

    const updateState = (e) => {
        let userQuery = e.target.value
        setQuery(userQuery)
        props.searchFood(userQuery)     // invokes CB defined in the parent and coming in props, to send state back to the parent  
    }

    return (
        <div>
            <Search placeholder="- input search text -" value={query} onChange={updateState} enterButton />
        </div>
    )
}

export default SearchBar
