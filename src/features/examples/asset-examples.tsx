import React from "react";
import { framer } from "framer-plugin";

export const AssetExamples: React.FC = () => {
  // Function to add an image to the canvas
  const addImage = async () => {
    // Define the image asset (in this case, a placeholder image)
    const imageAsset = { src: "https://placehold.co/600x400" };
    // Add the image to the canvas using the Framer API
    const addedImage = await framer.addImage({
      image: imageAsset.src,
      name: "My Image",
    });
    console.log("Added image:", addedImage);
  };

  // Function to add an SVG to the canvas
  const addSVG = async () => {
    // Define the SVG as a string
    const svgString =
      '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /></svg>';
    // Add the SVG to the canvas using the Framer API
    const addedSvg = await framer.addSVG({
      svg: svgString,
      name: "My SVG",
    });
    console.log("Added SVG:", addedSvg);
  };

  // Render buttons for adding image and SVG assets
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Asset Examples</h2>
      <button
        onClick={addImage}
        className="px-4 py-2 text-white bg-purple-500 rounded"
      >
        Add Image
      </button>
      <button
        onClick={addSVG}
        className="px-4 py-2 text-white bg-yellow-500 rounded"
      >
        Add SVG
      </button>
    </div>
  );
};
