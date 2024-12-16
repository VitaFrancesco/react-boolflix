import { useContext, useState, useEffect } from "react"
import ResearchContext from "../contexts/ResearchContext";
import ListPoster from "../components/ListPoster";
import GenreCheck from "../components/GenreCheck";

export default function Homepage() {
    const { tvSeries, movies, genres } = useContext(ResearchContext);
    const [checked, setChecked] = useState([]);
    const [showMovies, setShowMovies] = useState([]);
    const [showTvSeries, setShowTvSeries] = useState([]);


    function checkedSelector(gen) {
        checked.includes(gen) ?
            setChecked(checked.filter((el) => el !== gen)) :
            setChecked([...checked, gen]);
    }

    function filterArray(array, setShowArray) {
        const filteredArray = [];
        if (checked.length === 0) {
            setShowArray(array);
        } else {
            array.map((el) => {
                checked.map((genre) => {

                    if (el.genre_ids.includes(genre.id)) {
                        if (!filteredArray.includes(el)) {
                            filteredArray.push(el);
                        }
                    }

                })

            })

            setShowArray(filteredArray);
        }
    }

    // ogni volta che cambia la lista dei generi selezionata parte la funzione filterArray passando l'array globale
    // cosi da averli sempre tutti salvati e da poter tornare indietro in caso di deselezione del genere senza dover
    // fare una nuova chiamata all'api, come secondo parametro la funzione che permette di settare quelli che vanno mostrati.
    useEffect(() => {
        filterArray(movies, setShowMovies);
        filterArray(tvSeries, setShowTvSeries);
    }, [checked, movies, tvSeries]);

    return (
        <main>
            <section>
                <div className="container check">
                    <div className="filter">
                        {
                            genres.map((genre) => {
                                return (
                                    <GenreCheck key={genre.id} genre={genre} checked={checked} onChange={(gen) => checkedSelector(gen)} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section>
                <ListPoster list={showMovies} type={'Film'} />
            </section>
            <section>
                <ListPoster list={showTvSeries} type={'Serie TV'} />
            </section>
            {!movies.length && !tvSeries.length ?
                <div className="container"><h1>Fai una ricerca per visualizzare i risultati</h1></div> :
                null}
        </main>
    )
}