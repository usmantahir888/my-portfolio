import FullStackProjects from "@/components/FullStackProjects";
import NeonBackground from "@/components/NeonBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Full-Stack Projects | Asnan Ali - Portfolio",
    description: "Explore my complete full-stack applications from frontend to database.",
};

export default function FullStackPage() {
    return (
        <>
            <NeonBackground />
            <Navbar />
            <main className="relative z-10">
                <FullStackProjects />
            </main>
            <Footer />
        </>
    );
}