import React from "react";
import { framer } from "framer-plugin";
import { useSelection } from "../../hooks/use-selection";

export const SelectionExamples: React.FC = () => {
  // Use the custom hook to get the currently selected nodes
  const selectedNodes = useSelection();

  // Function to select the first two nodes in the canvas
  const selectFirstTwo = async () => {
    // Get the root node of the canvas
    const allNodes = await framer.getCanvasRoot();
    // Get the first two children of the root node and extract their IDs
    const firstTwo = (await allNodes.getChildren())
      .slice(0, 2)
      .map((node) => node.id);
    // Set the selection to these two nodes
    framer.setSelection(firstTwo);
  };

  // Function to select all text nodes in the canvas
  const selectAllTextNodes = async () => {
    // Get the root node of the canvas
    const allNodes = await framer.getCanvasRoot();
    // Get all nodes of type "TextNode"
    const allText = await allNodes.getNodesWithType("TextNode");
    // Set the selection to all text nodes
    framer.setSelection(allText.map((node) => node.id));
  };

  // Function to select the parent of the first selected node
  const selectParentOfSelected = async () => {
    if (selectedNodes.length > 0) {
      // Get the parent of the first selected node
      const parentId = await framer.getParent(selectedNodes[0].id);
      if (parentId) {
        // Set the selection to the parent node
        framer.setSelection([parentId.id]);
      }
    }
  };

  // Function to clear the current selection
  const clearSelection = () => {
    framer.setSelection([]);
  };

  // Render buttons for each selection function and display the number of selected nodes
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Selection Examples</h2>
      <button
        onClick={selectFirstTwo}
        className="px-4 py-2 text-white bg-red-500 rounded"
      >
        Select First Two Nodes
      </button>
      <button
        onClick={selectAllTextNodes}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Select All Text Nodes
      </button>
      <button
        onClick={selectParentOfSelected}
        className="px-4 py-2 text-white bg-green-500 rounded"
      >
        Select Parent of Selected
      </button>
      <button
        onClick={clearSelection}
        className="px-4 py-2 text-white bg-yellow-500 rounded"
      >
        Clear Selection
      </button>
      <div>Currently selected: {selectedNodes.length} node(s)</div>
    </div>
  );
};
