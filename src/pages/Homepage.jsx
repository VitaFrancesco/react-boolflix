import { useContext } from "react"
import ResearchContext from "../contexts/ResearchContext";
import Card from "../components/Card";

export default function Homepage() {
    const { tvSeries, movies } = useContext(ResearchContext);
    return (
        <>
            <div className="container">
                <h2>Film</h2>
                <div className="row">
                    {
                        movies.map((movie, i) => (
                            <Card key={i} obj={movie} />
                        ))
                    }
                </div>
            </div>
            <div className="container">
                <h2>Serie TV</h2>
                <div className="row">
                    {
                        tvSeries.map((series, i) => (
                            <Card key={i} obj={series} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}