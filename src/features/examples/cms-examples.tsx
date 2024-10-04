import React, { useState, useEffect } from 'react';
import { Collection, CollectionItem, framer } from 'framer-plugin';

export const CMSExamples: React.FC = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [collectionItems, setCollectionItems] = useState<{ [key: string]: CollectionItem[] }>({});

  useEffect(() => {
    const fetchCollectionsAndItems = async () => {
      const allCollections = await framer.getCollections();
      setCollections(allCollections);

      const itemsMap: { [key: string]: CollectionItem[] } = {};
      for (const collection of allCollections) {
        const items = await collection.getItems();
        itemsMap[collection.id] = items;
      }
      setCollectionItems(itemsMap);
    };
    fetchCollectionsAndItems();
  }, []);

  const getActiveCollection = async () => {
    const activeCollection = await framer.getActiveCollection();
    console.log('Active collection:', activeCollection);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">CMS Examples</h2>
      <div>Number of Collections: {collections.length}</div>
      <button onClick={getActiveCollection} className="px-4 py-2 rounded">
        Get Active Collection
      </button>
      {collections.map(collection => (
        <div key={collection.id} className="p-4 mt-4">
          <h3 className="text-lg font-semibold">{collection.name}</h3>
          <p>ID: {collection.id}</p>
          <p>Items: {collectionItems[collection.id]?.length || 0}</p>
          {collectionItems[collection.id]?.map(item => (
            <div key={item.id} className="rounded">
              <p>
                {item.id}: {item.slug}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
