import LastAddedPropertyesItem from './last-added-propertyes_item';
import LastPropertyesAdded from 'pages/api/last-propertyes-added';

export default function LastAddedPropertyesContent() {
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto my-6 bg-transparent">
      {LastPropertyesAdded.map((item) => (
        <LastAddedPropertyesItem item={item} key={item.id} />
      ))}
      <style jsx>{`
        article {
          width: 100%;
        }
        @media (max-width: 768px) {
          article {
            width: 95%;
          }
        }
      `}</style>
    </article>
  );
}
