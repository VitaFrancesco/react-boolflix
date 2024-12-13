import { useContext } from "react"
import ResearchContext from "../contexts/ResearchContext";
import ListPoster from "../components/ListPoster";

export default function Homepage() {
    const { tvSeries, movies } = useContext(ResearchContext);
    return (
        <main>
            <ListPoster list={movies} type={'Film'} />
            <ListPoster list={tvSeries} type={'Serie TV'} />
        </main>
    )
}