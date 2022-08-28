export const CategoriesList = ({ categories }) => {
  return (
    <section id="categorySection">
      <ul>
        { categories.map(category => <li><a href={ category.link } className="category--link">{ category.name }</a></li>) }
      </ul>
    </section>
  )
}