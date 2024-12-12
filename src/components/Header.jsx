import { useState } from "react";

export default function Header() {
    const [search, setSearch] = useState('');
    const [reSearch, setReSearch] = useState('');

    function research(e) {
        e.preventDefault();
        const arraySearch = search.split(' ' || ',');
        setReSearch(arraySearch.join('+'))
    }
    return (
        <form onSubmit={(e) => research(e)}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="cerca..." />
            <button>cerca</button>
            <div>{reSearch}</div>
        </form>
    )
}