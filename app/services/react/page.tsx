import ReactProjects from "@/components/ReactProjects";
import NeonBackground from "@/components/NeonBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "React Projects | Asnan Ali - Portfolio",
    description: "Explore my React.js projects including e-commerce platforms, task managers, AI tools, and more.",
};

export default function ReactPage() {
    return (
        <>
            <NeonBackground />
            <Navbar />
            <main className="relative z-10">
                <ReactProjects />
            </main>
            <Footer />
        </>
    );
}