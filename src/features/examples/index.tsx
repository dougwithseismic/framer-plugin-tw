import React from 'react';
import { NodeExamples } from './node-examples';
import { AssetExamples } from './asset-examples';
import { SelectionExamples } from './selection-examples';
import { StyleExamples } from './style-examples';
import { CMSExamples } from './cms-examples';

export const Examples: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Framer Plugin Examples</h1>
      <NodeExamples />
      <AssetExamples />
      <SelectionExamples />
      <StyleExamples />
      <CMSExamples />
    </div>
  );
};
