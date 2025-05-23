import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from 'mdx/types';

interface MDXBlockProps {
  content: string;
}

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-6xl font-semibold text-white mt-10 mb-6">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-5xl font-semibold text-white mt-10 mb-6">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-4xl font-semibold text-white mt-10 mb-6">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-3xl font-semibold text-white mt-10 mb-6">{children}</h4>
  ),
  p: ({ children }) => {
    if (typeof children === 'string') {
      return (
        <p className="text-2xl font-normal text-white mb-4 whitespace-pre-line">
          {children}
        </p>
      );
    }
    return (
      <p className="text-2xl font-normal text-white mb-4">{children}</p>
    );
  },
  strong: ({ children }) => (
    <strong className="font-bold text-yellow-300">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-gray-300">{children}</em>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-l-[#FFFFFF42] pl-6 my-8 text-[24px] italic text-white whitespace-pre-line">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-8 mb-6 space-y-3 text-[28px] text-white">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-8 mb-6 space-y-3 text-[28px] text-white">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="mb-2 whitespace-pre-line">{children}</li>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 underline hover:text-blue-300"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="bg-gray-800 text-yellow-300 px-2 py-1 rounded text-sm">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
      {children}
    </pre>
  ),
};

const MDXBlock: React.FC<MDXBlockProps> = ({ content }) => {
  if (!content) return null;

  // Replace \n with actual line breaks
  const processedContent = content.replace(/\\n/g, '\n');

  return (
    <div className="mdx-block prose prose-invert max-w-none">
      <MDXRemote source={processedContent} components={components} />
    </div>
  );
};

export default MDXBlock; 