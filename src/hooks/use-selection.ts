import { useState, useEffect } from 'react';
import { CanvasNode, framer } from 'framer-plugin';

export const useSelection = () => {
  const [selectedNodes, setSelectedNodes] = useState<CanvasNode[]>([]);

  useEffect(() => {
    const unsubscribe = framer.subscribeToSelection(selection => {
      setSelectedNodes(selection);
      console.log(
        selection.length > 0
          ? `Selected nodes: ${selection.map(node => node.id).join(', ')}`
          : 'No nodes selected'
      );
    });

    return () => unsubscribe();
  }, []);

  return selectedNodes;
};
