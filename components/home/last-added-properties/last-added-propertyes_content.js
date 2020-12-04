import LastAddedPropertyesItem from './last-added-propertyes_item';

export default function LastAddedPropertyesContent() {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto my-4 bg-transparent">
      <LastAddedPropertyesItem />
      <div className=" bg-teal-500"></div>
      <div className=" bg-teal-500"></div>
      <div className=" bg-teal-500"></div>
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
