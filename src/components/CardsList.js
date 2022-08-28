import { Card } from './Card';

export const CardsList = ({ articles }) => {
  return (
    <main id="articlesList">
      { articles.map((article, index) => {
          return <Card title={ article.title } description={ article.description } />;
        })
      }
    </main>
  )
}