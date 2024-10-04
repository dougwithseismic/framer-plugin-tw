import React from 'react';
import { framer } from 'framer-plugin';

export const StyleExamples: React.FC = () => {
  const createColorStyle = async () => {
    const newColorStyle = await framer.createColorStyle({
      name: 'Primary Color',
      light: '#007AFF',
    });
    console.log('Created color style:', newColorStyle);
  };

  const createTextStyle = async () => {
    const newTextStyle = await framer.createTextStyle({
      name: 'Heading 1',
      fontSize: '24px',
    });
    console.log('Created text style:', newTextStyle);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Style Examples</h2>
      <button onClick={createColorStyle} className="px-4 py-2 text-white bg-indigo-500 rounded">
        Create Color Style
      </button>
      <button onClick={createTextStyle} className="px-4 py-2 text-white bg-pink-500 rounded">
        Create Text Style
      </button>
    </div>
  );
};
