import NodePalette from '../components/NodePalette';
import WorkflowCanvas from '../components/WorkflowCanvas';

export default function Editor() {
  return (
    <div className="flex h-screen">
      <NodePalette />
      <WorkflowCanvas />
    </div>
  );
}
