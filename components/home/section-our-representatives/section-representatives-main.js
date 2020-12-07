import SectionRepresentativesContent from './section-representatives_content';

export default function SectionRepresentativesMain() {
  return (
    <section className="bg-background pb-12 pt-10">
      <article className="container mx-auto text-center my-0 sm:my-2">
        <h3 className="px-3 text-title-lg font-semibold mb-1">Nuestros representantes</h3>
        <p className="px-4 text-title-sub font-light">
          Nuestro equipo está listo para ayudarlo a alcanzar sus objetivos inmobiliarios.
        </p>
        <SectionRepresentativesContent />
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
