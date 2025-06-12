import Link from 'next/link';
import React from 'react';


export default function Header() {
    return (
        <header>
            <main>
                <div className='Logo'>Logo</div>

                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>

                    <li>
                        <Link href="/about">About</Link>
                    </li>

                    <li>
                        <Link href="/course">Courses</Link>
                    </li>
                </ul>
            </main>
        </header>
    )
}
