import Link from "next/link";

export default function Menu() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex space-x-4">
                <Link href="/packages/nextjs-application/public" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/customers" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  Customers
                </Link>
            </div>
        </nav>
    );
}