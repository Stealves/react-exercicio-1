import { Card } from './Card';

export const CardsList = ({ articles }) => {
  return (
    <main id="articlesList">
      { articles.map((article, index) => {
          return <Card key={ article.title } title={ article.title } description={ article.description } />;
        })
      }
    </main>
  )
}