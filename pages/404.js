import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import {useRouter} from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() =>{
            router.push("/");
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-60">
    <h1 className="font-bold text-red-600 text-9xl">404</h1>
    <h6 className="text-5xl font-bold text-gray-600">
       Page Not Found
    </h6>
    <p className="text-gray-500 mt-3">{" The page you're looking for does not exist."}</p>
    <Link href="/">
      <a className="bg-orange-600 border-solid text-gray-800 mt-5 font-semibold px-6 py-2 text-sm">Home</a>
    </Link>
  </div>
  )
}

export default NotFound;