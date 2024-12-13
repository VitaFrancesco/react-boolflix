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
            <div className="card">
                <div className="poster">
                    <img src={obj.poster_path ? poster : '/placeholder.jpg'} alt="#" />
                </div>
                <div className="info">
                    <h3>{obj.title}</h3>
                    <h4 className={obj.original_title !== obj.title ? '' : 'dNone'}>{obj.original_title}</h4>
                    <div>
                        {flag ? <img src={flag} alt="#" /> : <p>{obj.original_language}</p>}
                    </div>
                    <div className="vote">{
                        star.map((el, i) => {
                            return (
                                <FontAwesomeIcon key={i} className={i > vote ? 'black' : 'yellow'} icon="fa-solid fa-star" />
                            )
                        })
                    }</div>
                </div>
            </div>
        </div>
    )
}