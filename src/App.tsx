import JobList from "./components/JobList";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import About from "./components/About";

export default function App() {
    return (
        <div className="w-[85%] m-auto bg-white">
            <Navbar />
            <Search />
            <JobList />
            <About />
        </div>
    );
}
