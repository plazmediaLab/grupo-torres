import RealStateLocationsItem from './real-state-locations_item';

export default function RealStateLocationsContent() {
  const locations = [
    {
      name: 'Querétaro',
      slug: 'QRO',
      available: 16,
      country: 'MXN',
      image: '/locations/location-available-qro.jpg'
    },
    {
      name: 'Guanajuato',
      slug: 'GTO',
      available: 4,
      country: 'MXN',
      image: '/locations/location-available-gto.jpg'
    },
    {
      name: 'Hidalgo',
      slug: 'HGO',
      available: 0,
      country: 'MXN',
      image: '/locations/location-available-hgo.jpg'
    },
    {
      name: 'Jalisco',
      slug: 'JAL',
      available: 1,
      country: 'MXN',
      image: '/locations/location-available-jal.jpg'
    },
    {
      name: 'Puebla',
      slug: 'PUE',
      available: 6,
      country: 'MXN',
      image: '/locations/location-available-pue.jpg'
    },
    {
      name: 'Ciudad de México',
      slug: 'CMX',
      available: 7,
      country: 'MXN',
      image: '/locations/location-available-cmx.jpg'
    }
  ];

  return (
    <ul className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
      {locations.map((item) => (
        <RealStateLocationsItem item={item} key={item.slug} />
      ))}
    </ul>
  );
}
