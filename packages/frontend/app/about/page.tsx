import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="container mx-auto flex-grow p-4">
        <h1 className="mb-6 text-3xl font-bold">About Us</h1>
        <p>This is the About page content.</p>
        {/* Add more About page content here */}
      </main>

      <Footer />
    </div>
  );
}
