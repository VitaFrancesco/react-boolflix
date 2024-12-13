import style from './Card.module.css'

export default function Card({ obj }) {
    const language = obj.original_language !== 'en' ? obj.original_language : 'gb';
    const flag = `https://flagcdn.com/w20/${language}.png`
    return (
        <div className="col">
            <div className="card">
                <div className="poster"></div>
                <div className="info">
                    <h3>{obj.title}</h3>
                    <h4 className={obj.original_title !== obj.title ? '' : 'dNone'}>{obj.original_title}</h4>
                    <div>
                        {flag ? <img src={flag} alt="#" /> : <p>{obj.original_language}</p>}
                    </div>
                    <div className="vote">{obj.vote_average}</div>
                </div>
            </div>
        </div>
    )
}