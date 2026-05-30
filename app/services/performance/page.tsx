import PerformanceProjects from "@/components/PerformanceProjects";
import NeonBackground from "@/components/NeonBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Performance Projects | Asnan Ali - Portfolio",
    description: "Explore my performance optimization work achieving faster load times.",
};

export default function PerformancePage() {
    return (
        <>
            <NeonBackground />
            <Navbar />
            <main className="relative z-10">
                <PerformanceProjects />
            </main>
            <Footer />
        </>
    );
}