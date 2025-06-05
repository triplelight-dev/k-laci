import React from "react";
import NewsletterInput from "../atoms/NewsletterInput";

const NewsletterForm = () => {
  return (
    <form className="flex gap-2 w-full">
      <div className="flex w-full" style={{ gap: '0.5rem' }}>
        <NewsletterInput
          type="text"
          placeholder="Name | 이름"
          flex={1}
        />
        <NewsletterInput
          type="email"
          placeholder="E-mail | 이메일"
          flex={1.5}
        />
        <button
          type="submit"
          style={{ flex: 1, width: '100%', background: '#2563eb', color: 'white', borderRadius: '0.375rem', padding: '0.5rem', fontWeight: 600, transition: 'background 0.2s' }}
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm; 