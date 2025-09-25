import React from "react";
import MenuCard from "./MenuCard";

export default function MenuSection({ items, onAddToCart, onGenerateDescription }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-3">Suggestions For you</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(item => (
          <MenuCard 
            key={item.id} 
            item={item} 
            onAddToCart={onAddToCart} 
            onGenerateDescription={onGenerateDescription} 
          />
        ))}
      </div>
    </section>
  );
}
