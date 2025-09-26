import React from "react";
import MenuCard from "./MenuCard";

export default function MenuSection({ items, onAddToCart, onGenerateDescription }) {
  return (
    <section className="mb-8 px-3 md:px-6">
      <h2 className="text-xl font-bold mb-3">Suggestions For You</h2>
      
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        gap-4
      ">
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
