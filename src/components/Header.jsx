import { useContext, useState } from "react";
import ResearchContext from "../contexts/ResearchContext";
import style from "./Header.module.css"

export default function Header() {
    const [search, setSearch] = useState('');
    const { reSearch, setReSearch } = useContext(ResearchContext);

    function research(e) {
        e.preventDefault();
        setReSearch(search)
        setSearch('')
    }

    return (
        <header>
            <nav className={style.nav}>
                <img className={style.logo} src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="" />
                <form onSubmit={(e) => research(e)}>
                    <input className={style.search} type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="cerca..." />
                    <button className={style.send}>cerca</button>
                </form>
            </nav>
        </header>
    )
}