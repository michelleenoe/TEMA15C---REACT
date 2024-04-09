export default function Card(props) {
    return (
        <article>
            <h2>{props.header}</h2>
            <p>{props.body}</p>
        </article>
    );
}
