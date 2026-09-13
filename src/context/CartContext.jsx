import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('ctickers_demo_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('ctickers_demo_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to sync cart to storage', e);
    }
  }, [cartItems]);

  const showToast = (message, item = null) => {
    setToast({ message, item, timestamp: Date.now() });
    setTimeout(() => {
      setToast((prev) => (prev?.timestamp ? null : prev));
    }, 3200);
  };

  const addToCart = (product, qty = 1, options = {}) => {
    const itemKey = `${product.id}-${options.size || product.size || '3"'}-${options.finish || product.finish || 'Glossy'}-${options.shape || product.shape || 'Die-cut'}`;
    
    setCartItems((prev) => {
      const existingIdx = prev.findIndex((item) => item.key === itemKey);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += qty;
        return updated;
      } else {
        const newItem = {
          key: itemKey,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: options.size || product.size || '3" x 3"',
          finish: options.finish || product.finish || 'Glossy',
          shape: options.shape || product.shape || 'Die-cut',
          quantity: qty,
          customDetails: options.customDetails || null,
        };
        return [...prev, newItem];
      }
    });

    showToast(`Added "${product.name}" to cart!`, product);
  };

  const removeFromCart = (key) => {
    setCartItems((prev) => prev.filter((item) => item.key !== key));
  };

  const updateQuantity = (key, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.key === key) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        toast,
        setToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
