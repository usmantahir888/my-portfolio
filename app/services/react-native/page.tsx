import ReactNativeProjects from "@/components/ReactNativeProjects";
import NeonBackground from "@/components/NeonBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "React Native Projects | Asnan Ali - Portfolio",
    description: "Explore my React Native mobile applications for iOS and Android platforms.",
};

export default function ReactNativePage() {
    return (
        <>
            <NeonBackground />
            <Navbar />
            <main className="relative z-10">
                <ReactNativeProjects />
            </main>
            <Footer />
        </>
    );
}