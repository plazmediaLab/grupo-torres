import SectionCustomersContent from './section-customers_content';

export default function SectionCustomersMain() {
  return (
    <section className="bg-background-light pb-12 pt-10">
      <article className="container mx-auto text-center my-0 sm:my-2">
        <h3 className="px-3 text-title-lg font-semibold mb-1">Lo que dicen nuestros clientes</h3>
        <p className="px-4 text-title-sub font-light">
          Las siguientes citas son típicas de la apreciación del cliente que recibe Grupo Torres.
        </p>
        <SectionCustomersContent />
      </article>
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
    </section>
  );
}
