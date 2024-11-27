import React, { createContext, useContext, useState } from 'react';

interface ListItem {
  id: string;
  name: string;
  quantity: number;
  category: string;
  subcategory: string;
}

interface NewListContextType {
  listName: string;
  setListName: (name: string) => void;
  items: ListItem[];
  addItem: (item: ListItem) => void;
  removeItem: (id: string) => void;
  clearList: () => void;
}

const NewListContext = createContext<NewListContextType | undefined>(undefined);

export const NewListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [listName, setListName] = useState<string>('');
  const [items, setItems] = useState<ListItem[]>([]);

  const addItem = (item: ListItem) => {
    setItems((prev) => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearList = () => {
    setListName('');
    setItems([]);
  };

  return (
    <NewListContext.Provider value={{ listName, setListName, items, addItem, removeItem, clearList }}>
      {children}
    </NewListContext.Provider>
  );
};

export const useNewList = (): NewListContextType => {
  const context = useContext(NewListContext);
  if (!context) {
    throw new Error('useNewList must be used within a NewListProvider');
  }
  return context;
};
