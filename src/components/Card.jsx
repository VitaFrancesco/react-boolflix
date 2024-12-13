import style from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Card({ obj }) {
    const language = obj.original_language !== 'en' ? obj.original_language : 'gb';
    const flag = `https://flagcdn.com/w20/${language}.png`
    const dimensionPoster = 'w342'
    const poster = `https://image.tmdb.org/t/p/${dimensionPoster}${obj.poster_path}`;
    const vote = Math.round(obj.vote_average / 2)
    const star = [0, 0, 0, 0, 0]
    return (
        <div className="col">
            <div className={style.card}>
                <img className={style.poster} src={obj.poster_path ? poster : '/placeholder.jpg'} alt="#" />
                <div className={style.info}>
                    <p><strong>Titolo: </strong>{obj.title}</p>
                    <p className={obj.original_title !== obj.title ? '' : 'dNone'}><strong>Titolo originale: </strong>{obj.original_title}</p>
                    {flag ? <img className={style.language} src={flag} alt="#" /> : <p>{obj.original_language}</p>}
                    <p><strong>Voto: </strong>{
                        star.map((el, i) => {
                            return (
                                <FontAwesomeIcon key={i} className={i > vote ? style.grey : style.yellow} icon="fa-solid fa-star" />
                            )
                        })
                    }</p>
                    <p><strong>Overview: </strong>{obj.overview}</p>
                </div>
            </div>
        </div>
    )
}