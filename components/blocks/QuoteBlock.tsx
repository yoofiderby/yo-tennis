import { QuoteBlockProps } from "@/interfaces/components/quoteBlock";
const QuoteBlock: React.FC<QuoteBlockProps> = ({ quote, author }) => {
  return (
    <blockquote className="bg-[#120F19] text-center px-6 py-8 rounded-xl shadow-md border border-[#FFFFFF42]">
      <div className="mx-auto w-[27px] h-[23px] flex items-center justify-center text-[#FFB84D] text-[48px] rounded-md">
        &ldquo;
      </div>
      <p className="text-xl font-medium text-[#FFB84D] leading-relaxed mb-4">
        {quote}
      </p>
      {author && (
        <cite className="text-base text-[#FFB84D] font-semibold">
          &mdash; {author}
        </cite>
      )}
    </blockquote>
  );
};

export default QuoteBlock;
