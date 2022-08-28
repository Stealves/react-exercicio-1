import './App.css';
import { AppHeader } from './components/AppHeader';
import { CardsList } from './components/CardsList';
import { CategoriesList } from './components/CategoriesList';
import { Sidebar } from './components/Sidebar';

let links = [
  { name: "Menu 1",
    link: "#link"
  }, 
  { name: "Menu 2",
    link: "#link"
  },
  { name: "Menu 3",
    link: "#link"
  },
  { name: "Menu 4",
    link: "#link"
  },
]
let articles = [
  { 
    title: "Article 1 Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { 
    title: "Article 2 Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { 
    title: "Article 3 Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { 
    title: "Article 4 Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

let categories = [
  { name: "Category 1",
    link: "#link"
  }, 
  { name: "Category 2",
    link: "#link"
  },
  { name: "Category 3",
    link: "#link"
  },
  { name: "Category 4",
    link: "#link"
  },
];

let recentArticles = [
  { name: "Article 1",
    link: "#link"
  }, 
  { name: "Article 2",
    link: "#link"
  },
  { name: "Article 3",
    link: "#link"
  },
  { name: "Article 4",
    link: "#link"
  },
]

function App() {
  return (
    <div id="pageContent">
      <AppHeader logo="New Logo" menus={ links } />
      <CategoriesList categories = { categories } />
      <CardsList articles={ articles }/>
      <Sidebar menus = { recentArticles }/>
    </div>
  );
}

export default App;