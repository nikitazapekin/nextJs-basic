import Link from "next/link"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: " ABOUT Next App",
 
  };
  
export default function HomepageLayout({children}: {children: React.ReactNode}) {
return (
    <div>
        <h1>About Us</h1>
        <ul>
            <li>
                <Link href="/homepage/contacts">
                Contacts
                </Link>
            </li>
        </ul>
        {children}
    </div>
)
}