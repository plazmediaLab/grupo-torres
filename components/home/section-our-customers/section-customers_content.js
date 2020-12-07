import SectionCustomersItem from './section-customers_item';

export default function SectionCustomersContent() {
  const comments = [
    {
      customer: 'Laura Lancaster',
      comment:
        'Si desea que su casa se venda sin problemas, debe comunicarse con Karen y Paul. Vendió mi casa tomando el proceso personalizado a mi caso.',
      tag: 'Servicio personalizado',
      image: '/last-property-photo-2.jpg'
    },
    {
      customer: 'Brad Urbach',
      comment:
        'Mi experiencia con Michael fue simplemente excepcional. Mi esposa y yo estábamos buscando reducir el tamaño a una casa más pequeña en venta y Grupo torre encontro la adecuada.',
      tag: '¡Muy bien!',
      image: '/last-property-photo-3.jpg'
    },
    {
      customer: 'Daniel William',
      comment:
        'Tuvimos el placer de negociar con Grupo torres para la venta de nuestra propiedad en Nueva York y no podríamos estar más felices con nuestras ganancias.',
      tag: '¡Excelentes servicios!',
      image: '/last-property-photo-4.jpg'
    }
  ];

  return (
    <ul className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 my-4">
      {comments.map((item, index) => (
        <SectionCustomersItem item={item} key={index} index={index} />
      ))}
    </ul>
  );
}
