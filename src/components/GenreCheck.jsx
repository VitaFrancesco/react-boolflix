import style from './GenreCheck.module.css'

export default function GenreCheck({ genre, checked, onChange }) {

    return (
        <div className={style.col}>
            <div className={style.check}>
                <input id={genre.id} type="checkbox" checked={checked.includes(genre)} onChange={() => onChange(genre)} />
                <label htmlFor={genre.id}>{genre.name}</label>
            </div>
        </div>
    )
}