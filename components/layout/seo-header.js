import Head from 'next/head';

export default function SeoHeader() {
  return (
    <Head>
      <title>Grupo Torres - bienes raíces</title>
      <link rel="icon" type="image/png" href="/favicon-color16h.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#0F0F10"></meta>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Sistema de manejo de ventas online, venta de productos con manejo de inventario y ganancias"
      />
      <meta name="keywords" content="Bienes, Raíces, Ventas, Facebook" />
      <meta name="author" content="Adrian Nieves Uribe" />
      <meta name="copyright" content="Plazmedia &copy; 2020" />
      <html lang="es"></html>
    </Head>
  );
}
