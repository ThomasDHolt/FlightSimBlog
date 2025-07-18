import Link from "next/link";

export function NavBar() {
    return (
        <div className="flex flex-row justify-center text-[52px]">
            <Link className="hover:underline" href="/">Posts</Link>
        </div>
    );
}