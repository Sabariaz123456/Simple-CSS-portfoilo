import Link from 'next/link';

export default function Footer(){
  return (
    <div className="header">
      <ul className="header-buttons">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}