'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Searchbar() {

    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query == '') {
            alert("enter a search word");
            return;
        }
        router.push(`/blog?search=${query}`);
        setQuery('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border rounded px-2 py-1"
            />
            <button type="submit" className="bg-blue-500 text-white px-3 py-1 cursor-pointer rounded">
                Search
            </button>
        </form>
    )
}

export default Searchbar