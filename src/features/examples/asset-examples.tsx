import React from 'react';
import { framer } from 'framer-plugin';

export const AssetExamples: React.FC = () => {
  const addImage = async () => {
    const imageAsset = { src: 'https://placehold.co/600x400' };
    const addedImage = await framer.addImage({
      image: imageAsset.src,
      name: 'My Image',
    });
    console.log('Added image:', addedImage);
  };

  const addSVG = async () => {
    const svgString =
      '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /></svg>';
    const addedSvg = await framer.addSVG({
      svg: svgString,
      name: 'My SVG',
    });
    console.log('Added SVG:', addedSvg);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Asset Examples</h2>
      <button onClick={addImage} className="px-4 py-2 text-white bg-purple-500 rounded">
        Add Image
      </button>
      <button onClick={addSVG} className="px-4 py-2 text-white bg-yellow-500 rounded">
        Add SVG
      </button>
    </div>
  );
};
