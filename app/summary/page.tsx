import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SummaryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="container mx-auto flex-grow p-4">
        <h1 className="mb-6 text-3xl font-bold">Summary</h1>
        <p>This is the Summary page content.</p>
        {/* Add more Summary page content here */}
      </main>

      <Footer />
    </div>
  );
}
