import Card from "../components/Card";

export default function ListPoster({ type, list }) {
    const showOrNot = list.length ? 'container' : 'dNone';
    return (
        <div className={showOrNot}>
            <h2>{type}</h2>
            <div className="row">
                {
                    list.map((listItem, i) => (
                        <Card key={i} obj={listItem} />
                    ))
                }
            </div>
        </div>
    )
}