import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto p-4">
        {/* Section 1 */}
        <section className="my-8 p-4">
          <h2 className="text-2xl font-bold mb-4">Section 1 Title</h2>
          <p>This is the content for section 1.</p>
          {/* Add more content for section 1 */}
        </section>

        {/* Section 2 */}
        <section className="my-8 p-4">
          <h2 className="text-2xl font-bold mb-4">Section 2 Title</h2>
          <p>This is the content for section 2.</p>
          {/* Add more content for section 2 */}
        </section>

        {/* Section 3 */}
        <section className="my-8 p-4">
          <h2 className="text-2xl font-bold mb-4">Section 3 Title</h2>
          <p>This is the content for section 3.</p>
          {/* Add more content for section 3 */}
        </section>

        {/* Add more sections as needed */}

      </main>

      <Footer />
    </div>
  );
}
