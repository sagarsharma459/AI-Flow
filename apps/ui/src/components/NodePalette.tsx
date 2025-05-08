export default function NodePalette() {
  const nodes = ['Trigger', 'Action', 'AI'];
  return (
    <div className="w-1/4 bg-gray-100 p-4">
      {nodes.map(n => <div key={n} className="p-2 border mb-2">{n}</div>)}
    </div>
  );
}
