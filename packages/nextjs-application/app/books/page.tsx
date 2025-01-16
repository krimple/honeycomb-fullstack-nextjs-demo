'use client';

import {useCallback, useState} from "react";
import {getLibraryBooks} from './actions/get-library-books';

interface Book {
    id: string;
    isbn: string;
    name: string;
    description: string;
}

export default function Page() {
    console.log(`Rendering at ${new Date().toISOString()}`);

    const [libraryBooks, setLibraryBooks] = useState<Book[]| null>(null);

    const handleLoadLibraryBooks = useCallback(async() => {
        debugger;
        const books = await getLibraryBooks();
        // @ts-expect-error unknown type
        setLibraryBooks(books);
    }, []);

    return (
        <div>
            <h2>Book List</h2>
            <button onClick={handleLoadLibraryBooks}>
                Load books
            </button>

            { libraryBooks &&
                <pre>{ JSON.stringify(libraryBooks, null, 5) }</pre>
            }
        </div>
    );
}