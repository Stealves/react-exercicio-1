export const AppHeader = ({ logo, menus }) => {
  return (
    <header id="header">
      <div className="header--container">
        <h1 id="brand">{logo}</h1>
        <nav className="main-menu">
          <ul>
            {menus.map(link => <li key={ link.name }><a href={ link.link } className="main-menu--link">{ link.name }</a></li>)}
          </ul>
        </nav>
        <div className="main-search">
          <input name="search" id="search-input" placeholder="Search..."></input>
        </div>
      </div>
    </header>
  )
}
