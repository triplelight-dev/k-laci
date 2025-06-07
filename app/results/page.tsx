import Header from '@/components/Header';
import Footer from '@/components/Footer';

// sections
import CategoryRankingSection from './sections/CategoryRankingSection';

export default function ResultsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      <main
        className="container mx-auto flex-grow p-4"
        style={{ width: '100%' }}
      >
        <CategoryRankingSection />
      </main>

      <Footer />
    </div>
  );
}
