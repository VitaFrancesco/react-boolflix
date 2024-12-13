import { useContext, useState } from "react";
import ResearchContext from "../contexts/ResearchContext";

export default function Header() {
    const [search, setSearch] = useState('');
    const { reSearch, setReSearch } = useContext(ResearchContext);

    function research(e) {
        e.preventDefault();
        setReSearch(search)
        setSearch('')
    }
    return (
        <form onSubmit={(e) => research(e)}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="cerca..." />
            <button>cerca</button>
        </form>
    )
}