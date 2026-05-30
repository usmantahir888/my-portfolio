import FigmaProjects from "@/components/FigmaProjects";
import NeonBackground from "@/components/NeonBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Figma Projects | Asnan Ali - Portfolio",
    description: "Explore my UI/UX designs created in Figma for web and mobile applications.",
};

export default function FigmaPage() {
    return (
        <>
            <NeonBackground />
            <Navbar />
            <main className="relative z-10">
                <FigmaProjects />
            </main>
            <Footer />
        </>
    );
}