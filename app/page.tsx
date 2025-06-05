import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IntroSection from './home/IntroSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="container mx-auto flex-grow p-4" style={{ paddingTop: '3rem' }}>
        {/* Section 1 */}
        <IntroSection />
        <IntroSection />


        {/* Section 2 */}
        <section className="my-8 p-4">
          <h2 className="mb-4 text-2xl font-bold">Section 2 Title</h2>
          <p>This is the content for section 2.</p>
          {/* Add more content for section 2 */}
        </section>

        {/* Section 3 */}
        <section className="my-8 p-4">
          <h2 className="mb-4 text-2xl font-bold">Section 3 Title</h2>
          <p>This is the content for section 3.</p>
          {/* Add more content for section 3 */}
        </section>

        {/* Add more sections as needed */}
      </main>

      <Footer />
    </div>
  );
}
