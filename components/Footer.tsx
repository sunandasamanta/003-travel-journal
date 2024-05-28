// Objective: Create a footer component.

//importing modules
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
        <div className="flex justify-center items-center gap-1 bg-[#00043C] text-[#F5F5F5] py-4">
            <p>
                © 2024 <Link href="https://www.instagram.com/thedoubleengineer/">@thedoubleenginner</Link>
            </p>
        </div>
    </footer>
  )
}
