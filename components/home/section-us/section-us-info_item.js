import Link from 'next/link';

export default function SectionUsInfoItem({ children, label, content }) {
  return (
    <li className="text-center">
      <Link href="/home/contact-us">
        <a className="p-5 inline-block text-rose-500 bg-transparent hover:bg-white border-4 lg:border-8 border-white hover:border-background-dark rounded-full">
          {children}
        </a>
      </Link>
      <h4 className="text-title-sub font-semibold my-2">{label}</h4>
      <p className="mx-auto w-2/3">{content}</p>
    </li>
  );
}
