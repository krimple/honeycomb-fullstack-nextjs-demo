'use client';

import {useCallback, useState} from "react";
import {getCustomers} from './actions/get-customers';

type Customer = {
    firstName: string;
    lastName: string;
}

type Customers = Array<Customer>;

export default function Page() {
    console.log(`Rendering at ${new Date().toISOString()}`);

    const [customers, setCustomers] = useState<Customers | null>(null);

    const handleLoadCustomers = useCallback(async() => {
        const customers = await getCustomers();
        // @ts-expect-error unknown type
        setCustomers(customers);
    }, []);

    return (
        <div>
            <h2>Customers</h2>
            <button onClick={handleLoadCustomers}>
                Load customers
            </button>

            { customers &&
                <pre>{ JSON.stringify(customers, null, 5) }</pre>
            }
        </div>
    );
}