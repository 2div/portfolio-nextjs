import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle';

export default function Header() {
  return (
    <header> 
        <nav>
            <div>
                <Link href='/' className='font-serif text-2xl font-bold'>HB</Link>
            </div>
            <ul>
                <li>
                    <Link href='/post'>Posts</Link>
                </li>
                <li>
                    <Link href='/projects'>Projects</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            <div>
                <ThemeToggle />
            </div>
        </nav>
    </header>
  );
}
