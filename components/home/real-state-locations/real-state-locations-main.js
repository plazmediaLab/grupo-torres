import RealStateLocationsContent from './real-state-locations_content';

export default function RealSstateLocationsMain() {
  return (
    <section className="bg-background pb-12">
      <article className="container mx-auto text-center my-0 sm:my-2">
        <h3 className="px-3 text-title-lg font-semibold mb-1">Ubicaciones disponibles</h3>
        <p className="px-4 text-title-sub font-light">
          Encuentre una casa en venta o alquiler según la ubicación.
        </p>
      </article>
      <RealStateLocationsContent />
      <style jsx>{``}</style>
    </section>
  );
}
