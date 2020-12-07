import SectionRepresentativesItem from './section-representative_item';

export default function SectionRepresentativesContent() {
  const repres = [
    {
      name: 'Adian Nieves',
      rol: 'Programador WEB',
      email: 'example.test@grupotorres.com',
      web: 'www.example.com',
      phone: '9876543210',
      image: '/perfil/person-1.jpg'
    },
    {
      name: 'Peter Ruck',
      rol: 'Consultor',
      email: 'adriangd.1337@grupotorres.com',
      web: 'www.example.com',
      phone: '9876543210',
      image: '/perfil/person-2.jpg'
    },
    {
      name: 'Nancy Collins',
      rol: 'Director',
      email: 'adriangd.1337@grupotorres.com',
      web: 'www.example.com',
      phone: '9876543210',
      image: '/perfil/person-3.jpg'
    }
  ];
  return (
    <ul className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 my-4">
      {repres.map((item, index) => (
        <SectionRepresentativesItem item={item} key={index} index={index} />
      ))}
    </ul>
  );
}
