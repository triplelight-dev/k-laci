import React from 'react';
import SummaryHeader from './components/SummaryHeader';
import SummaryContent from './components/SummaryContent';

const SummarySection: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
      }}
    >
      <section
        className="flex w-full flex-col items-center py-8"
        style={{ width: '50%' }}
      >
        <SummaryHeader />
        <SummaryContent />
      </section>
    </div>
  );
};

export default SummarySection;
