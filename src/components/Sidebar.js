export const Sidebar = ({ menus }) => {
  return (
    <aside>
      <h2>Recent Articles</h2>
      <hr />
      <ul>
      { menus.map(articleLink => <li><a href={ articleLink.link } className="recent-article--link">{ articleLink.name }</a></li>) }
      </ul>
    </aside>
  )
}