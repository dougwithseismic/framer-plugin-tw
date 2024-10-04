import React from 'react';
import { framer } from 'framer-plugin';
import { useSelection } from '../../hooks/use-selection';

export const SelectionExamples: React.FC = () => {
  const selectedNodes = useSelection();

  const selectFirstTwo = async () => {
    const allNodes = await framer.getCanvasRoot();
    const firstTwo = (await allNodes.getChildren()).slice(0, 2).map(node => node.id);
    framer.setSelection(firstTwo);
  };

  const selectAllTextNodes = async () => {
    const allNodes = await framer.getCanvasRoot();
    const allText = await allNodes.getNodesWithType('TextNode');

    framer.setSelection(allText.map(node => node.id));
  };

  const selectParentOfSelected = async () => {
    if (selectedNodes.length > 0) {
      const parentId = await framer.getParent(selectedNodes[0].id);
      if (parentId) {
        framer.setSelection([parentId.id]);
      }
    }
  };

  const clearSelection = () => {
    framer.setSelection([]);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Selection Examples</h2>
      <button onClick={selectFirstTwo} className="px-4 py-2 text-white bg-red-500 rounded">
        Select First Two Nodes
      </button>
      <button onClick={selectAllTextNodes} className="px-4 py-2 text-white bg-blue-500 rounded">
        Select All Text Nodes
      </button>
      <button
        onClick={selectParentOfSelected}
        className="px-4 py-2 text-white bg-green-500 rounded"
      >
        Select Parent of Selected
      </button>
      <button onClick={clearSelection} className="px-4 py-2 text-white bg-yellow-500 rounded">
        Clear Selection
      </button>
      <div>Currently selected: {selectedNodes.length} node(s)</div>
    </div>
  );
};
