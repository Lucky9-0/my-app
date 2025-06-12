import React from 'react';
import image from '@/images/Banner.png';
import Image from 'next/image';
import Link from 'next/link';


export default function Coursepage() {
    return (
        <>
        <main>

           
            <h1>Course Page</h1>

            </main>
            <main>
          
             <ul>
                <li>
                    <Link href="/course/course-details/course1">
                        Course1
                    </Link>
                </li>

                <li>
                    <Link href="/course/course-details/course2">
                        Course2
                    </Link>
                </li>

                <li>
                    <Link href="/course/course-details/course3">
                        Course3
                    </Link>
                </li>

                <li>
                    <Link href="/course/course-details/course4">
                        Course4
                    </Link>
                </li>

                <li>
                    <Link href="/course/course-details/course5">
                        Course5
                    </Link>
                </li>
             </ul>












            {/* <img src={image.src} alt="" /> //default way */}
            {/* <Image width={200} height={200} src={image.src} alt="Banner" /> */}
            {/* <Image fill src={image.src} alt="" /> */}



            {/* next.config.mjs  */}
            {/* <Image fill src="https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=1024x1024&w=is&k=20&c=ZRzdKZTGsNQqzQ4HpvVsrWT1BL9NjKmB76pIteut-xs=" alt="Banner" /> */}

        </main>
        </>
    )
}
