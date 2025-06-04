import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p>This is the About page content.</p>
        {/* Add more About page content here */}
      </main>

      <Footer />
    </div>
  );
} 