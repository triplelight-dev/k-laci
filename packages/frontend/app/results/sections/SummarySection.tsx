import React from 'react';
import SummaryHeader from './components/SummaryHeader';
import SummaryContent from './components/SummaryContent';

const SummarySection: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <section>
        <SummaryHeader />
        <SummaryContent />
      </section>
    </div>
  );
};

export default SummarySection;
