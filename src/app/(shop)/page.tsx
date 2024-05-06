'use client'
import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { useState,MouseEvent } from "react";

const products = initialData.products; // obtiene los productos de la semilla del archivo seed.ts

interface Position {
  x: number;
  y: number;
}
export default function Home() {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div onMouseMove={handleMouseMove}>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
      />
      <ProductGrid
        products={products}
        mousePosition={mousePosition}
      />
    </div>
  );
}
