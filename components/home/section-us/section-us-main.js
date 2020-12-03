import SectionUsInfoContent from './section-us-info_content';

export default function SectionUsMain() {
  return (
    <section className="bg-background pb-12">
      <div></div>
      <article className="container mx-auto text-center my-0 sm:my-2">
        <h3 className="px-3 text-title-lg font-semibold mb-1">Tu mejor opción inmobiliaria</h3>
        <p className="px-4 text-title-sub font-light">
          Lo unico que tienes que hacer es muy es contactarnos
        </p>
      </article>
      <SectionUsInfoContent />
      <style jsx>{`
        div {
          padding-top: 4.3rem;
          padding-bottom: 4.3rem;
        }
        @media (max-width: 768px) {
          div {
            padding-top: 10.5rem;
            padding-bottom: 13rem;
          }
        }
      `}</style>
    </section>
  );
}
