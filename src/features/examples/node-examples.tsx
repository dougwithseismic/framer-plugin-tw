import React from 'react';
import { framer } from 'framer-plugin';

export const NodeExamples: React.FC = () => {
  const createFrameNode = async () => {
    const newFrame = await framer.createFrameNode({
      name: 'New Frame',
    });
    console.log('Created new frame:', newFrame);
  };

  const cloneNode = async () => {
    const selection = await framer.getSelection();
    if (selection.length > 0) {
      const clonedNode = await framer.cloneNode(selection[0].id);
      console.log('Cloned node:', clonedNode);
    } else {
      console.log('No node selected to clone');
    }
  };

  const createHeroSection = async () => {
    const heroSection = await framer.createFrameNode({
      name: 'Hero Section',
    });

    const heroTitle = await framer.createFrameNode({
      name: 'Hero Title',
    });

    if (!heroTitle || !heroSection) {
      console.error('Failed to create hero title');
      return;
    }

    await framer.setParent(heroTitle?.id, heroSection?.id);
    console.log('Created hero section:', heroSection);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Node Examples</h2>
      <button onClick={createFrameNode} className="px-4 py-2 text-white bg-blue-500 rounded">
        Create Frame Node
      </button>
      <button onClick={createHeroSection} className="px-4 py-2 text-white bg-green-500 rounded">
        Create Hero Section
      </button>
      <button onClick={cloneNode} className="px-4 py-2 text-white bg-green-500 rounded">
        Clone Selected Node
      </button>
    </div>
  );
};
