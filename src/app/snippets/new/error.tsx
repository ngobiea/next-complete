'use client';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}


export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600">{error.message}</h1>
      <button
        className="bg-red-600 text-white rounded p-2 mt-4"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
} 
