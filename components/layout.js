import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <button className='bg-transparent mr-5 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300 focus:bg-gray-200' onClick={() => setTheme('light')}>🌞</button>
            )
        }
        else {
            return (
                <button className='bg-transparent mr-5 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300 focus:bg-gray-200' onClick={() => setTheme('dark')}>🌒</button>
            )
        }
    }

    return (
        <div className='flex flex-col min-h-screen'>
            <header className='bg-gray-100 dark:bg-gray-800 shadow-sm mb-8 py-5'>
                <div className='container mx-auto flex justify-center'>
                    <Link href='/'>
                        <a className="md:ml-7 ml-5 p-1 border-2 border-black dark:border-white rounded-lg"><img className="fill-current w-6 dark-png" src="/logo.png" alt="logo" /></a>
                    </Link>
                    <span className='ml-2 my-2 mr-auto font-bold'>R-Verse Blog 👽️</span>
                    {renderThemeChanger()}
                </div>
            </header>
            <main className='container md:mx-auto px-5 flex-1'>{children}</main>
            <footer className='bg-gray-100 dark:bg-gray-800 mt-8 py-4'>
                <div className='container mx-auto flex justify-center'>
                    &copy; 2022 Made with ❤️ by Ragillio Aji
                </div>
            </footer>
        </div>
    );
}