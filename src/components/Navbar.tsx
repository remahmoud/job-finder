export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-12">
            <div>
                <h1 className="text-primary text-2xl">
                    <strong>Job</strong>Search
                </h1>
            </div>
            <div className="flex gap-8">
                <li className="text-[#6f6f6f] hover:text-primary">Jobs</li>
                <li className="text-[#6f6f6f] hover:text-primary">Companies</li>
                <li className="text-[#6f6f6f] hover:text-primary">About</li>
                <li className="text-[#6f6f6f] hover:text-primary">Contact</li>
                <li className="text-[#6f6f6f] hover:text-primary">Blog</li>
                <li className="text-[#6f6f6f] hover:text-primary">Login</li>
                <li className="text-[#6f6f6f] hover:text-primary">Register</li>
            </div>
        </nav>
    );
}
