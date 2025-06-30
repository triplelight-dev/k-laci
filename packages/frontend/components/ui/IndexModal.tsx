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
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="mx-4 w-full max-w-md rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
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
              높은 수치는 해당 지역의 강점을 나타내며, 낮은 수치는 개선이 필요한
              영역을 의미합니다.
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-gray-200 py-2 text-gray-800 transition-colors hover:bg-gray-300"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default IndexModal;
