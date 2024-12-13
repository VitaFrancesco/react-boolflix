import { useRef, useContext, useState } from 'react';
import ResearchContext from "../contexts/ResearchContext";
import style from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Card({ obj }) {
    const language = obj.original_language !== 'en' ? obj.original_language : 'gb';
    const { languages } = useContext(ResearchContext);
    const flag = `https://flagcdn.com/w20/${language}.png`

    const dimensionPoster = 'w342'
    const poster = `https://image.tmdb.org/t/p/${dimensionPoster}${obj.poster_path}`;

    const vote = Math.round(obj.vote_average / 2)
    const star = [0, 0, 0, 0, 0] //come faccio un ciclo di n volte senza un array?

    const [isImageVisible, setIsImageVisible] = useState(true);
    const timeoutRef = useRef(null);

    return (
        <div className="col">
            <div className={style.card} onMouseLeave={(e) => {
                clearTimeout(timeoutRef.current);
                setIsImageVisible(true)
            }}>
                <img className={style.poster} src={obj.poster_path ? poster : '/placeholder.jpg'} alt="#" style={isImageVisible ? { display: 'block' } : { display: 'none' }} onMouseEnter={(e) => {
                    timeoutRef.current = setTimeout(() => {
                        setIsImageVisible(false);
                    }, 800)
                }} />
                <div className={style.info}>
                    <p><strong>Titolo: </strong>{obj.title}</p>
                    <p className={obj.original_title !== obj.title ? '' : 'dNone'}><strong>Titolo originale: </strong>{obj.original_title}</p>
                    {languages[language] ? <img className={style.language} src={flag} alt="#" /> : <p>{language}</p>}
                    <p><strong>Voto: </strong>{
                        star.map((el, i) => {
                            return (
                                <FontAwesomeIcon key={i} className={i > vote ? style.grey : style.yellow} icon="fa-solid fa-star" />
                            )
                        })
                    }</p>
                    <p className={obj.overview !== '' ? '' : 'dNone'}><strong>Overview: </strong>{obj.overview}</p>
                </div>
            </div>
        </div>
    )
}