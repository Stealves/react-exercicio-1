export const Card = ({title, description}) => {
  return (
    <article className="article-card">
      <img src="https://picsum.photos/400" alt={ title } />
      <div>
        <h2>{ title }</h2>
        <p>{ description }</p>
      </div>
    </article>
  )
}
