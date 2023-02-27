import React from 'react'
import { urlFor } from '@/lib/urlFor';
import Link from 'next/link';
import Image from 'next/image';

export const PortableTextComponents = {
    types: {
      image: ({ value }: { value: { url: string } }) => (
        <img className="m-2" src={urlFor(value).url()} />
      ),
    },
    marks: {
        em: ({children}: {children: React.ReactNode}) => <em className="text-gray-600">{children}</em>,
    },
    list: {
      bullet: ({ children }: { children: React.ReactNode }) => (
        <ul className="list-disc m-5 text-left">{children}</ul>
      ),
      number: ({ children }: { children: React.ReactNode }) => (
        <ol className="list-decimal m-5 text-left">{children}</ol>
      ),
    },
    block: {
        normal: ({ children }: {children: React.ReactNode}) => (
            <p className="text-base mt-2 mb-2 text-left">{children}</p>
          ),
        h1: ({ children }: {children: React.ReactNode}) => (
            <h1 className="text-5xl mt-2 mb-2 text-left font-bold">{children}</h1>
          ),
        h2: ({ children }: {children: React.ReactNode}) => (
            <h2 className="text-4xl mt-2 mb-2 text-left font-bold">{children}</h2>
          ),
        h3: ({ children }: {children: React.ReactNode}) => (
            <h3 className="text-3xl mt-2 mb-2 text-left font-bold">{children}</h3>
          ),
        h4: ({ children }: {children: React.ReactNode}) => (
            <h4 className="text-base mt-2 mb-2 text-left font-bold">{children}</h4>
          ),
          blockquote: ({ children }: {children: React.ReactNode}) => (
            <blockquote className="text-base mt-2 mb-2 text-left font-bold text-[#1C97C2]">{children}</blockquote>
          ),
    },
  };