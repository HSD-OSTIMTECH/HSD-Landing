import React from 'react';

export type FormCardProps = {
  id: number;
  title: string;
  questionCount: number;
  onClick?: () => void;
};

const FormCard: React.FC<FormCardProps> = ({ id, title, questionCount, onClick }) => {
  return (
    <div
      className="bg-black border border-neutral-800 rounded-xl p-6 cursor-pointer hover:border-primary transition-colors"
      onClick={onClick}
    >
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <div className="text-neutral-400 text-sm">{questionCount} soru</div>
    </div>
  );
};

export default FormCard;
