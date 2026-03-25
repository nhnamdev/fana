import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

// Parse price string like '300.000 ₫' → 300000
function parsePrice(price) {
  if (typeof price === 'number') return price
  return parseInt(price.replace(/\./g, '').replace(/[^\d]/g, '')) || 0
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addToCart = useCallback((product) => {
    const normalizedProduct = { ...product, priceNum: parsePrice(product.price) }
    setItems(prev => {
      const existing = prev.find(i => i.id === normalizedProduct.id)
      if (existing) {
        return prev.map(i => i.id === normalizedProduct.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...normalizedProduct, qty: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])

  const updateQty = useCallback((id, qty) => {
    if (qty < 1) return
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  }, [])

  const cartCount = items.reduce((sum, i) => sum + i.qty, 0)
  const cartTotal = items.reduce((sum, i) => sum + i.priceNum * i.qty, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
