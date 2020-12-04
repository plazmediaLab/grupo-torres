import LastAddedPropertyesContent from './last-added-propertyes_content';

export default function LastAddedPropertyesMain() {
  return (
    <section className="bg-white py-6">
      <aside className="container mx-auto text-center my-0 sm:my-2">
        <h3 className="px-3 text-title-lg font-semibold mb-1">Propiedades más recientes</h3>
        <p className="px-4 text-title-sub font-light">
          Lo unico que tienes que hacer es muy es contactarnos
        </p>
      </aside>
      <LastAddedPropertyesContent />
    </section>
  );
}
