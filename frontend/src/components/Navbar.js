import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex flex-row gap-3">
      <Image src="/images/logooo.svg" alt="Logo" width={50} height={50} />
      <span className="font-bold text-2xl">Palta Bot</span>
      <ul className="list-none flex flex-col gap-2">
        <li>Nosotros</li>
        <li>Software</li>
        <li>Alianzas</li>
        <li>Testimonios</li>
        <li>Blog</li>
        <li>+51 987 654 321</li>
      </ul>
    </nav>
  );
}
