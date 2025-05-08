import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl">HypeAI-Flow Dashboard</h1>
      <Link href="/editor"><a className="text-blue-500">Go to Workflow Editor →</a></Link>
    </div>
  );
}
