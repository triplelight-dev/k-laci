import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResultsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Search Results</h1>
        <p>This is the search results page content.</p>
        {/* Add more Results page content here */}
      </main>

      <Footer />
    </div>
  );
} 