export default function RealStateLocationsContent() {
  const locations = [
    { name: 'Querétaro', slug: 'QRO', available: 16, country: 'MXN' },
    { name: 'Guanajuato', slug: 'GTO', available: 4, country: 'MXN' },
    { name: 'Hidalgo', slug: 'HGO', available: 0, country: 'MXN' },
    { name: 'Jalisco', slug: 'JAL', available: 1, country: 'MXN' },
    { name: 'Puebla', slug: 'PUE', available: 6, country: 'MXN' },
    { name: 'Ciudad de México', slug: 'CMX', available: 7, country: 'MXN' }
  ];

  return (
    <ul className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
      {locations.map((item) => (
        <li className="h-12 bg-teal-500" key={item.slug} item={item}></li>
      ))}
    </ul>
  );
}
