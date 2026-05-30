import ShopifyProjects from "@/components/ShopifyProjects";
import NeonBackground from "@/components/NeonBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Shopify Projects | Asnan Ali - Portfolio",
    description: "Explore my custom Shopify stores with unique themes, apps, and integrations.",
};

export default function ShopifyPage() {
    return (
        <>
            <NeonBackground />
            <Navbar />
            <main className="relative z-10">
                <ShopifyProjects />
            </main>
            <Footer />
        </>
    );
}