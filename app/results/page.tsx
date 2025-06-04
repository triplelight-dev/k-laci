import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ResultsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="container mx-auto flex-grow p-4">
        <h1 className="mb-6 text-3xl font-bold">Search Results</h1>
        <p>This is the search results page content.</p>
        {/* Add more Results page content here */}
      </main>

      <Footer />
    </div>
  );
}
