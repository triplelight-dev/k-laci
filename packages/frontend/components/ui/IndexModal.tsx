'use client';

import React from 'react';

interface IndexData {
  category: string;
  value: string;
}

interface IndexModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: IndexData;
}

const IndexModal: React.FC<IndexModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{data.category}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-600">지표명</div>
            <div className="text-lg font-semibold">{data.value}</div>
          </div>
          
          <div>
            <div className="text-sm text-gray-600">설명</div>
            <div className="text-sm text-gray-700">
              이 지표는 {data.category} 유형의 지역에서 중요한 평가 기준입니다. 
              높은 수치는 해당 지역의 강점을 나타내며, 낮은 수치는 개선이 필요한 영역을 의미합니다.
            </div>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="w-full mt-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default IndexModal; 