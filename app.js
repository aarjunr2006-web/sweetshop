/* ==========================================================================
   KESAR HERITAGE - INTERACTIVE STATE & SYSTEM LOGIC
   ========================================================================== */

// 1. MENU DATABASE
const MENU_ITEMS = [
  {
    id: 'sweet-kaju-katli',
    name: 'Kaju Katli (Premium Ghee)',
    category: 'sweets',
    description: 'Traditional cashew fudge made with premium silver leaf and fine organic cashews. Melt-in-mouth richness.',
    rating: 4.9,
    image: 'assets/sweets_category.png',
    isVeg: true,
    priceOptions: [
      { name: '1 Kg Box', price: 900 },
      { name: '500g Box', price: 460 },
      { name: '250g Box', price: 240 }
    ],
    featured: true
  },
  {
    id: 'sweet-motichoor',
    name: 'Desi Ghee Motichoor Ladoo',
    category: 'sweets',
    description: 'Fine gram flour globules fried in pure desi ghee, sweetened and infused with saffron and cardamom seeds.',
    rating: 4.8,
    image: 'assets/hero_banner.png',
    isVeg: true,
    priceOptions: [
      { name: '1 Kg Box', price: 600 },
      { name: '500g Box', price: 310 }
    ],
    featured: true
  },
  {
    id: 'sweet-rasgulla',
    name: 'Kesar Rasgulla',
    category: 'sweets',
    description: 'Spongy cottage cheese balls soaked in a cardamom and Kashmiri saffron infused light sugar syrup.',
    rating: 4.7,
    image: 'assets/sweets_category.png',
    isVeg: true,
    priceOptions: [
      { name: 'Box of 6 Pcs', price: 180 },
      { name: 'Box of 12 Pcs', price: 340 }
    ],
    featured: false
  },
  {
    id: 'sweet-gulab-jamun',
    name: 'Shahi Mawa Gulab Jamun',
    category: 'sweets',
    description: 'Soft milk solids dumplings stuffed with pistachios and cardamom, fried to gold, dipped in warm sugar syrup.',
    rating: 4.8,
    image: 'assets/hero_banner.png',
    isVeg: true,
    priceOptions: [
      { name: 'Box of 6 Pcs', price: 180 },
      { name: 'Box of 12 Pcs', price: 340 }
    ],
    featured: true
  },
  {
    id: 'namkeen-kaju-mix',
    name: 'Royal Kaju Mixture',
    category: 'namkeen',
    description: 'Crisp spicy gram flour needles mixed with premium cashews, raisins, almonds, and traditional spices.',
    rating: 4.7,
    image: 'assets/chaat_dining.png',
    isVeg: true,
    priceOptions: [
      { name: '500g Pack', price: 280 },
      { name: '250g Pack', price: 150 }
    ],
    featured: false
  },
  {
    id: 'namkeen-samosa',
    name: 'Premium Ghee Samosa',
    category: 'namkeen',
    description: 'Flaky pastry pockets stuffed with spiced potatoes, green peas, and cashews, fried in pure cow ghee.',
    rating: 4.6,
    image: 'assets/chaat_dining.png',
    isVeg: true,
    priceOptions: [
      { name: 'Plate of 2 Pcs', price: 50 },
      { name: 'Party Pack (10 Pcs)', price: 220 }
    ],
    featured: true
  },
  {
    id: 'fastfood-chole-bhature',
    name: 'Classic Delhi Chole Bhature',
    category: 'fast-food',
    description: 'Spicy chickpeas cooked with authentic Punjabi spices, served with 2 large fluffy bhaturas, pickles, and onions.',
    rating: 4.9,
    image: 'assets/chaat_dining.png',
    isVeg: true,
    priceOptions: [
      { name: 'Standard Plate', price: 160 }
    ],
    featured: true
  },
  {
    id: 'fastfood-pav-bhaji',
    name: 'Special Amul Butter Pav Bhaji',
    category: 'fast-food',
    description: 'Mashed spiced vegetable curry cooked on a flat tawa with loads of Amul butter, served with toasted soft pav buns.',
    rating: 4.8,
    image: 'assets/chaat_dining.png',
    isVeg: true,
    priceOptions: [
      { name: 'Standard Plate', price: 140 }
    ],
    featured: false
  },
  {
    id: 'fastfood-dahi-chaat',
    name: 'Delhi Style Dahi Papdi Chaat',
    category: 'fast-food',
    description: 'Crispy flat pooris topped with boiled potatoes, sweetened yogurt, tangy tamarind chutney, mint chutney, and sev.',
    rating: 4.7,
    image: 'assets/chaat_dining.png',
    isVeg: true,
    priceOptions: [
      { name: 'Standard Plate', price: 110 }
    ],
    featured: false
  },
  {
    id: 'course-paneer-tikka',
    name: 'Shahi Paneer Tikka Masala',
    category: 'main-course',
    description: 'Tandoor grilled cottage cheese cubes cooked in a rich, buttery onion-tomato gravy with cashew paste.',
    rating: 4.9,
    image: 'assets/restaurant_dining.png',
    isVeg: true,
    priceOptions: [
      { name: 'Full Bowl', price: 290 },
      { name: 'Half Bowl', price: 170 }
    ],
    featured: true
  },
  {
    id: 'course-dal-makhani',
    name: 'Slow Cooked Dal Makhani',
    category: 'main-course',
    description: 'Black lentils and kidney beans slow-cooked overnight on tandoor coals, finished with pure butter and cream.',
    rating: 4.8,
    image: 'assets/restaurant_dining.png',
    isVeg: true,
    priceOptions: [
      { name: 'Full Bowl', price: 250 },
      { name: 'Half Bowl', price: 150 }
    ],
    featured: true
  },
  {
    id: 'course-naan',
    name: 'Garlic Butter Naan',
    category: 'main-course',
    description: 'Leavened clay-oven flatbread brushed with garlic cloves and melted butter. Best with Dal Makhani.',
    rating: 4.6,
    image: 'assets/restaurant_dining.png',
    isVeg: true,
    priceOptions: [
      { name: '1 Piece', price: 50 },
      { name: 'Basket of 3', price: 130 }
    ],
    featured: false
  },
  {
    id: 'bev-mango-lassi',
    name: 'Royal Kesar Mango Lassi',
    category: 'beverages',
    description: 'Thick, creamy yogurt drink blended with sweet Alphonso mango pulp, saffron strands, and almond shavings.',
    rating: 4.8,
    image: 'assets/hero_banner.png',
    isVeg: true,
    priceOptions: [
      { name: 'Regular Glass', price: 90 },
      { name: 'Jumbo Kullad', price: 140 }
    ],
    featured: true
  },
  {
    id: 'bev-chai',
    name: 'Adrak Elaichi Masala Chai',
    category: 'beverages',
    description: 'Brewed milk tea infused with crushed fresh ginger, green cardamom, and special spices.',
    rating: 4.5,
    image: 'assets/restaurant_dining.png',
    isVeg: true,
    priceOptions: [
      { name: 'Kullad Cup', price: 40 }
    ],
    featured: false
  }
];

// 2. COUPON DATABASE
const COUPON_CODES = {
  'FESTIVE10': { code: 'FESTIVE10', type: 'percent', value: 10, minPurchase: 499 },
  'WELCOME50': { code: 'WELCOME50', type: 'flat', value: 50, minPurchase: 299 }
};

// 3. APPLICATION STATE
let state = {
  cart: [],
  wishlist: [],
  activeCategory: 'all',
  searchQuery: '',
  vegOnly: false,
  sortBy: 'default',
  appliedCoupon: null,
  deliveryMode: 'delivery', // 'delivery' or 'pickup'
  activeOrder: null,
  trackingTimer: null
};

// Load initial state from LocalStorage
function loadState() {
  const cachedCart = localStorage.getItem('kh_cart');
  const cachedWishlist = localStorage.getItem('kh_wishlist');
  
  if (cachedCart) {
    state.cart = JSON.parse(cachedCart);
  }
  if (cachedWishlist) {
    state.wishlist = JSON.parse(cachedWishlist);
  }
}

// Save dynamic states to LocalStorage
function saveCartState() {
  localStorage.setItem('kh_cart', JSON.stringify(state.cart));
}

function saveWishlistState() {
  localStorage.setItem('kh_wishlist', JSON.stringify(state.wishlist));
}

// 4. UI INITIALIZATION & SELECTORS
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initializeCategoryPills();
  renderMenuGrid();
  updateHeaderAndCartDrawers();
  initializeEventListeners();
  
  // Initialize Lucide Icons CDN icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// Selectors
const cartToggleBtn = document.getElementById('cart-toggle-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartDrawer = document.getElementById('cart-drawer');
const cartDrawerBackdrop = document.getElementById('cart-drawer-backdrop');
const cartCountBadge = document.getElementById('cart-count');
const cartTotalText = document.getElementById('cart-total-text');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartFooterCalculations = document.getElementById('cart-footer-calculations');

const wishlistToggleBtn = document.getElementById('wishlist-toggle-btn');
const closeWishlistBtn = document.getElementById('close-wishlist-btn');
const wishlistDrawer = document.getElementById('wishlist-drawer');
const wishlistDrawerBackdrop = document.getElementById('wishlist-drawer-backdrop');
const wishlistCountBadge = document.getElementById('wishlist-count');
const wishlistItemsContainer = document.getElementById('wishlist-items-container');

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeDrawerBtn = document.getElementById('close-drawer-btn');
const mobileDrawer = document.getElementById('mobile-drawer');

const searchToggleBtn = document.getElementById('search-toggle-btn');
const closeSearchBtn = document.getElementById('close-search-btn');
const searchOverlay = document.getElementById('search-overlay');
const headerSearchInput = document.getElementById('header-search-input');

const menuSearchInput = document.getElementById('menu-search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const vegOnlyCheckbox = document.getElementById('veg-only-checkbox');
const menuSortSelect = document.getElementById('menu-sort-select');
const menuItemsGrid = document.getElementById('menu-items-grid');
const noProductsFound = document.getElementById('no-products-found');

const checkoutModalBackdrop = document.getElementById('checkout-modal-backdrop');
const closeCheckoutBtn = document.getElementById('close-checkout-btn');
const checkoutForm = document.getElementById('checkout-form');
const proceedCheckoutBtn = document.getElementById('proceed-checkout-btn');

const trackingModalBackdrop = document.getElementById('tracking-modal-backdrop');
const closeTrackingBtn = document.getElementById('close-tracking-btn');

// 5. RENDERING UTILITIES

// Generate categories navigation pills
function initializeCategoryPills() {
  const pillsContainer = document.getElementById('category-pills');
  const categoriesContainer = document.getElementById('categories-container');
  if (!pillsContainer) return;
  
  const categories = [
    { key: 'all', label: 'All Items', icon: 'utensils' },
    { key: 'sweets', label: 'Royal Sweets', icon: 'candy' },
    { key: 'namkeen', label: 'Namkeen Snacks', icon: 'package' },
    { key: 'fast-food', label: 'Street Chaat & Fast Food', icon: 'cookies' },
    { key: 'main-course', label: 'Main Course Meals', icon: 'beef' },
    { key: 'beverages', label: 'Beverages', icon: 'soup' }
  ];

  // Render Category pills in Menu Section
  pillsContainer.innerHTML = categories.map(cat => `
    <button class="category-pill ${state.activeCategory === cat.key ? 'active' : ''}" data-category="${cat.key}">
      ${cat.label}
    </button>
  `).join('');

  // Add event listeners to category pills
  pillsContainer.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      pillsContainer.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeCategory = pill.getAttribute('data-category');
      renderMenuGrid();
      updateActiveFilterSummary();
    });
  });

  // Render category cards in Categories Section on landing page
  if (categoriesContainer) {
    const landingCategories = categories.filter(c => c.key !== 'all');
    categoriesContainer.innerHTML = landingCategories.map(cat => `
      <div class="category-card" data-category="${cat.key}">
        <div class="category-icon-wrapper">
          <i data-lucide="${cat.icon}"></i>
        </div>
        <h3>${cat.label}</h3>
        <span>Explore authentic ${cat.key.replace('-', ' ')}</span>
      </div>
    `).join('');
    
    categoriesContainer.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const catKey = card.getAttribute('data-category');
        state.activeCategory = catKey;
        
        // Update menu pills
        pillsContainer.querySelectorAll('.category-pill').forEach(p => {
          if (p.getAttribute('data-category') === catKey) {
            p.classList.add('active');
            p.scrollIntoView({ behavior: 'smooth', inline: 'center' });
          } else {
            p.classList.remove('active');
          }
        });
        
        renderMenuGrid();
        updateActiveFilterSummary();
        
        // Scroll down to menu section
        document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
}

// Render the product grid using filters & search query
function renderMenuGrid() {
  if (!menuItemsGrid) return;

  // Filter items
  let filtered = MENU_ITEMS.filter(item => {
    const matchesCategory = state.activeCategory === 'all' || item.category === state.activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    const matchesVeg = !state.vegOnly || item.isVeg === true;
    return matchesCategory && matchesSearch && matchesVeg;
  });

  // Sort items
  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.priceOptions[0].price - b.priceOptions[0].price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.priceOptions[0].price - a.priceOptions[0].price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Check empty state
  if (filtered.length === 0) {
    menuItemsGrid.innerHTML = '';
    noProductsFound.classList.remove('hidden');
    return;
  }
  noProductsFound.classList.add('hidden');

  // Populate grid
  menuItemsGrid.innerHTML = filtered.map(item => {
    const isWishlisted = state.wishlist.includes(item.id);
    const firstOption = item.priceOptions[0];
    
    // Check if this item is in the cart to render quantity selector or add-to-cart button
    const cartItemIndex = state.cart.findIndex(ci => ci.id === item.id && ci.selectedOption === firstOption.name);
    const quantity = cartItemIndex > -1 ? state.cart[cartItemIndex].quantity : 0;
    
    // Select options template
    let sizeSelectHtml = '';
    if (item.priceOptions.length > 1) {
      sizeSelectHtml = `
        <select class="product-size-select" data-item-id="${item.id}" aria-label="Select size or packaging option">
          ${item.priceOptions.map(opt => `<option value="${opt.name}" data-price="${opt.price}">${opt.name} - ₹${opt.price}</option>`).join('')}
        </select>
      `;
    }

    return `
      <article class="product-card" id="card-${item.id}">
        <div class="product-img-wrapper">
          <div class="product-type-badge">
            <span class="veg-icon" title="Vegetarian Only"></span>
          </div>
          <button class="fav-btn ${isWishlisted ? 'active' : ''}" data-item-id="${item.id}" aria-label="Add to favorites">
            <i data-lucide="heart" class="${isWishlisted ? 'heart-filled' : ''}"></i>
          </button>
          <div class="product-rating">
            <i data-lucide="star" class="star-icon-small"></i> ${item.rating}
          </div>
          <img src="${item.image}" alt="${item.name}" class="product-card-img" loading="lazy">
        </div>
        <div class="product-info">
          <h3 class="product-title">${item.name}</h3>
          <p class="product-desc">${item.description}</p>
          
          ${sizeSelectHtml}
          
          <div class="product-action-row">
            <div class="price-box">
              <span class="p-amount" id="price-display-${item.id}">₹${firstOption.price}</span>
            </div>
            
            <div class="product-actions-btn-wrap" id="action-wrapper-${item.id}">
              ${quantity > 0 ? `
                <div class="qty-adjuster">
                  <button class="qty-btn dec-qty" data-item-id="${item.id}" data-option="${firstOption.name}">-</button>
                  <span class="qty-val">${quantity}</span>
                  <button class="qty-btn inc-qty" data-item-id="${item.id}" data-option="${firstOption.name}">+</button>
                </div>
              ` : `
                <button class="btn btn-sm btn-primary add-to-cart-btn" data-item-id="${item.id}">Add to Cart</button>
              `}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Re-instantiate icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Hook product event listeners
  hookProductCardEvents();
}

// Attach event listeners inside newly rendered product cards
function hookProductCardEvents() {
  // Option Select dropdowns
  menuItemsGrid.querySelectorAll('.product-size-select').forEach(select => {
    select.addEventListener('change', (e) => {
      const itemId = select.getAttribute('data-item-id');
      const selectedOption = e.target.value;
      const selectedPrice = e.target.options[e.target.selectedIndex].getAttribute('data-price');
      
      // Update Price display
      document.getElementById(`price-display-${itemId}`).innerText = `₹${selectedPrice}`;
      
      // Update quantity controls to reference this specific option
      const actionWrap = document.getElementById(`action-wrapper-${itemId}`);
      const cartItemIndex = state.cart.findIndex(ci => ci.id === itemId && ci.selectedOption === selectedOption);
      const quantity = cartItemIndex > -1 ? state.cart[cartItemIndex].quantity : 0;
      
      if (quantity > 0) {
        actionWrap.innerHTML = `
          <div class="qty-adjuster">
            <button class="qty-btn dec-qty" data-item-id="${itemId}" data-option="${selectedOption}">-</button>
            <span class="qty-val">${quantity}</span>
            <button class="qty-btn inc-qty" data-item-id="${itemId}" data-option="${selectedOption}">+</button>
          </div>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons();
      } else {
        actionWrap.innerHTML = `<button class="btn btn-sm btn-primary add-to-cart-btn" data-item-id="${itemId}">Add to Cart</button>`;
      }
    });
  });

  // Add to Cart buttons
  menuItemsGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = btn.getAttribute('data-item-id');
      const selectNode = menuItemsGrid.querySelector(`.product-size-select[data-item-id="${itemId}"]`);
      const selectedOption = selectNode ? selectNode.value : 'Regular';
      
      addToCart(itemId, selectedOption);
    });
  });

  // Increment/Decrement quantity buttons
  menuItemsGrid.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const itemId = btn.getAttribute('data-item-id');
      const selectedOption = btn.getAttribute('data-option');
      const isIncrement = btn.classList.contains('inc-qty');
      
      const cartIndex = state.cart.findIndex(ci => ci.id === itemId && ci.selectedOption === selectedOption);
      if (cartIndex > -1) {
        const currentQty = state.cart[cartIndex].quantity;
        const newQty = isIncrement ? currentQty + 1 : currentQty - 1;
        updateCartQuantity(cartIndex, newQty);
      }
    });
  });

  // Wishlist Heart toggles
  menuItemsGrid.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = btn.getAttribute('data-item-id');
      toggleWishlist(itemId, btn);
    });
  });
}

// Update filter text summary UI
function updateActiveFilterSummary() {
  const summaryBox = document.getElementById('active-filters-summary');
  const summaryText = document.getElementById('filters-summary-text');
  if (!summaryBox || !summaryText) return;

  const filters = [];
  if (state.activeCategory !== 'all') {
    filters.push(`Category: "${state.activeCategory.charAt(0).toUpperCase() + state.activeCategory.slice(1)}"`);
  }
  if (state.searchQuery !== '') {
    filters.push(`Search: "${state.searchQuery}"`);
  }
  if (state.vegOnly) {
    filters.push(`"Veg Only"`);
  }

  if (filters.length > 0) {
    summaryText.innerText = `Active Filters: ${filters.join(', ')}`;
    summaryBox.classList.remove('hidden');
  } else {
    summaryBox.classList.add('hidden');
  }
}

// 6. STATE OPERATIONS

// Add item to cart
function addToCart(itemId, optionName) {
  const menuItem = MENU_ITEMS.find(item => item.id === itemId);
  if (!menuItem) return;

  const priceOpt = menuItem.priceOptions.find(opt => opt.name === optionName);
  const basePrice = priceOpt ? priceOpt.price : menuItem.priceOptions[0].price;

  const existingIndex = state.cart.findIndex(ci => ci.id === itemId && ci.selectedOption === optionName);
  
  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += 1;
  } else {
    state.cart.push({
      id: itemId,
      name: menuItem.name,
      image: menuItem.image,
      selectedOption: optionName,
      basePrice: basePrice,
      quantity: 1
    });
  }

  saveCartState();
  updateHeaderAndCartDrawers();
  renderMenuGrid(); // update card view with qty picker
  
  // Show drawer confirmation feed
  openCartDrawer();
}

// Update Cart Quantity modifier
function updateCartQuantity(cartIndex, qty) {
  if (qty <= 0) {
    state.cart.splice(cartIndex, 1);
  } else {
    state.cart[cartIndex].quantity = qty;
  }
  
  saveCartState();
  updateHeaderAndCartDrawers();
  renderMenuGrid();
}

// Toggle items inside Wishlist array
function toggleWishlist(itemId, btnNode) {
  const index = state.wishlist.indexOf(itemId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    if (btnNode) btnNode.classList.remove('active');
  } else {
    state.wishlist.push(itemId);
    if (btnNode) btnNode.classList.add('active');
  }
  
  saveWishlistState();
  updateHeaderAndCartDrawers();
  renderWishlistDrawerItems();
}

// Apply Coupon validation
function applyCouponCode(code) {
  const couponMsg = document.getElementById('coupon-message');
  if (!couponMsg) return;

  const upperCode = code.toUpperCase().trim();
  const coupon = COUPON_CODES[upperCode];

  if (!coupon) {
    state.appliedCoupon = null;
    couponMsg.innerText = '❌ Invalid coupon code.';
    couponMsg.className = 'coupon-msg error';
    calculateCartTotals();
    return;
  }

  // Calculate Subtotal for min purchase verification
  const subtotal = state.cart.reduce((sum, item) => sum + (item.basePrice * item.quantity), 0);
  
  if (subtotal < coupon.minPurchase) {
    state.appliedCoupon = null;
    couponMsg.innerText = `❌ Min. order value of ₹${coupon.minPurchase} required for this coupon.`;
    couponMsg.className = 'coupon-msg error';
    calculateCartTotals();
    return;
  }

  state.appliedCoupon = coupon;
  couponMsg.innerText = `🎉 Coupon "${upperCode}" applied successfully!`;
  couponMsg.className = 'coupon-msg success';
  calculateCartTotals();
}

// Recalculate cart pricing values
function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.basePrice * item.quantity), 0);
  
  // Discount
  let discountAmt = 0;
  if (state.appliedCoupon) {
    if (state.appliedCoupon.type === 'percent') {
      discountAmt = Math.round(subtotal * (state.appliedCoupon.value / 100));
    } else if (state.appliedCoupon.type === 'flat') {
      discountAmt = state.appliedCoupon.value;
    }
  }

  // Shipping delivery charges
  let shipping = 40;
  if (state.deliveryMode === 'pickup') {
    shipping = 0;
  } else {
    // Free delivery on orders above ₹499
    if (subtotal - discountAmt >= 499) {
      shipping = 0;
    }
  }

  // GST (5%)
  const taxableAmount = Math.max(0, subtotal - discountAmt);
  const gst = Math.round(taxableAmount * 0.05);
  
  const grandTotal = taxableAmount + shipping + gst;

  // Update UI Elements
  document.getElementById('summary-subtotal').innerText = `₹${subtotal}`;
  
  const discRow = document.getElementById('discount-row');
  const appliedCouponName = document.getElementById('applied-coupon-name');
  const summaryDiscount = document.getElementById('summary-discount');
  
  if (discountAmt > 0 && state.appliedCoupon) {
    appliedCouponName.innerText = state.appliedCoupon.code;
    summaryDiscount.innerText = `-₹${discountAmt}`;
    discRow.classList.remove('hidden');
  } else {
    discRow.classList.add('hidden');
  }

  const shippingRow = document.getElementById('shipping-charge-row');
  const summaryShipping = document.getElementById('summary-shipping');
  if (shippingRow && summaryShipping) {
    if (state.deliveryMode === 'pickup') {
      summaryShipping.innerText = 'FREE';
    } else {
      summaryShipping.innerText = shipping === 0 ? 'FREE' : `₹${shipping}`;
    }
  }

  document.getElementById('summary-gst').innerText = `₹${gst}`;
  document.getElementById('summary-total').innerText = `₹${grandTotal}`;
  
  // Checkout Modal prices
  const chGrandTotal = document.getElementById('checkout-grand-total');
  const chGrandTotalCod = document.getElementById('checkout-grand-total-cod');
  const chFinalBtnAmt = document.getElementById('checkout-final-btn-amt');
  if (chGrandTotal) chGrandTotal.innerText = grandTotal;
  if (chGrandTotalCod) chGrandTotalCod.innerText = grandTotal;
  if (chFinalBtnAmt) chFinalBtnAmt.innerText = grandTotal;

  // Header mini total
  if (cartTotalText) {
    cartTotalText.innerText = `₹${grandTotal}`;
  }

  return { subtotal, discountAmt, shipping, gst, grandTotal };
}

// Update totals, badges, list structures
function updateHeaderAndCartDrawers() {
  const cartQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Badges update
  if (cartCountBadge) cartCountBadge.innerText = cartQty;
  const cartDrawerCount = document.getElementById('cart-drawer-count');
  if (cartDrawerCount) cartDrawerCount.innerText = cartQty;
  
  if (wishlistCountBadge) wishlistCountBadge.innerText = state.wishlist.length;
  const wishlistDrawerCount = document.getElementById('wishlist-drawer-count');
  if (wishlistDrawerCount) wishlistDrawerCount.innerText = state.wishlist.length;

  // Render Drawer cart items
  renderCartDrawerItems();
  renderWishlistDrawerItems();
}

// Generate HTML structures for cart items in drawer
function renderCartDrawerItems() {
  if (!cartItemsContainer) return;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-state">
        <i data-lucide="shopping-bag" class="empty-cart-icon"></i>
        <p>Your cart is empty.</p>
        <p class="empty-subtext">Add traditional sweets or hot dishes to begin your ordering experience.</p>
        <button class="btn btn-primary" id="start-shopping-btn">Explore Menu</button>
      </div>
    `;
    cartFooterCalculations.classList.add('hidden');
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    // Bind Start shopping button inside drawer
    const startShop = document.getElementById('start-shopping-btn');
    if (startShop) {
      startShop.addEventListener('click', () => {
        closeCartDrawer();
        document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
      });
    }
    return;
  }

  cartFooterCalculations.classList.remove('hidden');

  cartItemsContainer.innerHTML = state.cart.map((item, index) => {
    return `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <div>
            <h4>${item.name}</h4>
            <span class="cart-item-desc">${item.selectedOption}</span>
          </div>
          <div class="cart-item-meta">
            <span class="cart-item-price">₹${item.basePrice * item.quantity}</span>
            <div class="qty-adjuster">
              <button class="qty-btn" onclick="adjustQtyFromDrawer(${index}, -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="adjustQtyFromDrawer(${index}, 1)">+</button>
            </div>
            <button class="remove-item-btn" onclick="removeCartItem(${index})" aria-label="Remove item"><i data-lucide="trash-2"></i></button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  calculateCartTotals();
}

// Global functions for inline drawer click actions
window.adjustQtyFromDrawer = function(index, delta) {
  const currentQty = state.cart[index].quantity;
  updateCartQuantity(index, currentQty + delta);
};

window.removeCartItem = function(index) {
  updateCartQuantity(index, 0);
};

// Generate HTML structures for favorites list
function renderWishlistDrawerItems() {
  if (!wishlistItemsContainer) return;

  if (state.wishlist.length === 0) {
    wishlistItemsContainer.innerHTML = `
      <div class="empty-cart-state">
        <i data-lucide="heart" class="empty-cart-icon"></i>
        <p>Your wishlist is empty.</p>
        <p class="empty-subtext">Click the heart icon on any food item to save it for quick ordering later.</p>
      </div>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  const wishlistedItems = MENU_ITEMS.filter(item => state.wishlist.includes(item.id));

  wishlistItemsContainer.innerHTML = wishlistedItems.map(item => {
    return `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <div>
            <h4>${item.name}</h4>
            <span class="cart-item-desc">${item.category.replace('-', ' ')}</span>
          </div>
          <div class="cart-item-meta">
            <span class="cart-item-price">₹${item.priceOptions[0].price}</span>
            <button class="btn btn-xs btn-primary" onclick="addWishlistItemToCart('${item.id}')">Add To Cart</button>
            <button class="remove-item-btn" onclick="toggleGlobalWishlist('${item.id}')" aria-label="Remove from favorites"><i data-lucide="heart-off"></i></button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

window.addWishlistItemToCart = function(itemId) {
  addToCart(itemId, 'Regular');
};

window.toggleGlobalWishlist = function(itemId) {
  toggleWishlist(itemId, null);
};

// 7. MULTI-STEP CHECKOUT SYSTEM
let checkoutCurrentStep = 1;

function updateCheckoutStepsUI() {
  // Hide all steps
  document.getElementById('checkout-step-1').classList.add('hidden');
  document.getElementById('checkout-step-2').classList.add('hidden');
  document.getElementById('checkout-step-3').classList.add('hidden');
  
  document.getElementById('step-ind-1').classList.remove('active');
  document.getElementById('step-ind-2').classList.remove('active');
  document.getElementById('step-ind-3').classList.remove('active');

  // Show active step
  document.getElementById(`checkout-step-${checkoutCurrentStep}`).classList.remove('hidden');
  
  // Highlight indicators
  for(let i=1; i<=checkoutCurrentStep; i++) {
    document.getElementById(`step-ind-${i}`).classList.add('active');
  }

  // Configure toggle fields based on Delivery Mode selection
  const deliveryFields = document.getElementById('delivery-fields-wrapper');
  const pickupFields = document.getElementById('pickup-fields-wrapper');
  const addrStepTitle = document.getElementById('address-step-title');
  const addrStepDesc = document.getElementById('address-step-desc');
  
  if (state.deliveryMode === 'pickup') {
    if (deliveryFields) deliveryFields.classList.add('hidden');
    if (pickupFields) pickupFields.classList.remove('hidden');
    if (addrStepTitle) addrStepTitle.innerText = 'Pickup & Table Selection';
    if (addrStepDesc) addrStepDesc.innerText = 'Choose estimated pickup time or order straight to your table.';
  } else {
    if (deliveryFields) deliveryFields.classList.remove('hidden');
    if (pickupFields) pickupFields.classList.add('hidden');
    if (addrStepTitle) addrStepTitle.innerText = 'Delivery Address Details';
    if (addrStepDesc) addrStepDesc.innerText = 'Provide accurate address to ensure hot and timely delivery.';
  }
}

// Validate field entries for steps
function validateCheckoutStep(step) {
  if (step === 1) {
    const name = document.getElementById('bill-name').value.trim();
    const phone = document.getElementById('bill-phone').value.trim();
    if (!name) {
      alert('Please enter your full name.');
      return false;
    }
    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return false;
    }
    return true;
  }
  
  if (step === 2) {
    if (state.deliveryMode === 'delivery') {
      const address = document.getElementById('bill-address').value.trim();
      const locality = document.getElementById('bill-locality').value.trim();
      if (!address || !locality) {
        alert('Please fill out all required address fields.');
        return false;
      }
    }
    return true;
  }
  return true;
}

// 8. ORDER STATUS LIVE TRACKING TIMER SIMULATION
function triggerLiveOrderTracking() {
  const steps = [
    { id: 'track-step-1', completed: true, active: true },
    { id: 'track-step-2', completed: false, active: false },
    { id: 'track-step-3', completed: false, active: false },
    { id: 'track-step-4', completed: false, active: false }
  ];

  // Random Order ID
  const orderIdVal = 'BS-' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('lbl-tracking-order-id').innerText = orderIdVal;
  
  // Set current order items list
  const listNode = document.getElementById('tracking-items-list');
  const totals = calculateCartTotals();
  
  listNode.innerHTML = state.cart.map(item => `
    <li>
      <span>${item.name} (${item.selectedOption}) x${item.quantity}</span>
      <span>₹${item.basePrice * item.quantity}</span>
    </li>
  `).join('');
  
  document.getElementById('tracking-total-amount').innerText = `₹${totals.grandTotal}`;

  // Time stamps
  const now = new Date();
  const formatTime = (dt) => dt.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  
  document.getElementById('track-time-1').innerText = formatTime(now);
  
  // Reset stages UI
  document.querySelectorAll('.status-step').forEach(node => {
    node.className = 'status-step';
  });
  document.getElementById('track-step-1').className = 'status-step active';
  document.getElementById('track-time-2').innerText = 'Under preparation';
  document.getElementById('track-time-3').innerText = state.deliveryMode === 'pickup' ? 'Pending pickup handover' : 'Pending kitchen handover';
  document.getElementById('track-time-4').innerText = state.deliveryMode === 'pickup' ? 'Awaiting customer arrival' : 'Awaiting rider arrival';
  
  document.getElementById('eta-display-text').innerText = state.deliveryMode === 'pickup' ? '15 - 20 Mins' : '25 - 35 Mins';

  // Rider Details Adjustment
  const riderBox = document.getElementById('rider-profile-box');
  const step3Title = document.getElementById('track-title-step3');
  const step4Title = document.getElementById('track-title-step4');
  
  if (state.deliveryMode === 'pickup') {
    if (riderBox) riderBox.classList.add('hidden'); // No rider for pickup
    if (step3Title) step3Title.innerText = 'Ready for Pickup';
    if (step4Title) step4Title.innerText = 'Picked Up';
  } else {
    if (riderBox) riderBox.classList.remove('hidden');
    if (step3Title) step3Title.innerText = 'Out for Delivery';
    if (step4Title) step4Title.innerText = 'Delivered Safely';
  }

  // Empty actual cart state
  const orderCopy = [...state.cart]; // Keep copy for Repeat Order option
  state.cart = [];
  state.appliedCoupon = null;
  saveCartState();
  updateHeaderAndCartDrawers();

  // Show tracking modal
  openTrackingModal();

  // Clear older timers if any
  if (state.trackingTimer) clearInterval(state.trackingTimer);

  let currentSimStep = 1;
  const timeIntervals = [5000, 5000, 5000]; // 5s step movements

  state.trackingTimer = setInterval(() => {
    currentSimStep++;
    const simTime = new Date();
    
    if (currentSimStep === 2) {
      document.getElementById('track-step-1').className = 'status-step completed';
      document.getElementById('track-step-2').className = 'status-step active';
      document.getElementById('track-time-2').innerText = formatTime(simTime);
      document.getElementById('eta-display-text').innerText = state.deliveryMode === 'pickup' ? '10 - 15 Mins' : '20 - 25 Mins';
    } 
    else if (currentSimStep === 3) {
      document.getElementById('track-step-2').className = 'status-step completed';
      document.getElementById('track-step-3').className = 'status-step active';
      document.getElementById('track-time-3').innerText = formatTime(simTime);
      document.getElementById('eta-display-text').innerText = state.deliveryMode === 'pickup' ? '5 Mins' : '10 - 15 Mins';
    } 
    else if (currentSimStep === 4) {
      document.getElementById('track-step-3').className = 'status-step completed';
      document.getElementById('track-step-4').className = 'status-step active';
      document.getElementById('track-time-4').innerText = formatTime(simTime);
      document.getElementById('eta-display-text').innerText = 'Arrived!';
      clearInterval(state.trackingTimer);
    }
  }, 5000);

  // Repeat Order button handler
  const repeatBtn = document.getElementById('repeat-order-btn');
  if (repeatBtn) {
    // Clear old listener
    const newRepeatBtn = repeatBtn.cloneNode(true);
    repeatBtn.parentNode.replaceChild(newRepeatBtn, repeatBtn);
    newRepeatBtn.addEventListener('click', () => {
      state.cart = [...orderCopy];
      saveCartState();
      updateHeaderAndCartDrawers();
      closeTrackingModal();
      openCartDrawer();
    });
  }
}

// 9. EVENT LISTENERS SETUP
function initializeEventListeners() {
  // Mobile Drawer toggles
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
    });
  }
  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
    });
  }

  // Cart Drawer triggers
  if (cartToggleBtn) {
    cartToggleBtn.addEventListener('click', openCartDrawer);
  }
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCartDrawer);
  }
  if (cartDrawerBackdrop) {
    cartDrawerBackdrop.addEventListener('click', closeCartDrawer);
  }

  // Wishlist Drawer triggers
  if (wishlistToggleBtn) {
    wishlistToggleBtn.addEventListener('click', openWishlistDrawer);
  }
  if (closeWishlistBtn) {
    closeWishlistBtn.addEventListener('click', closeWishlistDrawer);
  }
  if (wishlistDrawerBackdrop) {
    wishlistDrawerBackdrop.addEventListener('click', closeWishlistDrawer);
  }

  // Search Toggle
  if (searchToggleBtn) {
    searchToggleBtn.addEventListener('click', () => {
      searchOverlay.classList.toggle('active');
      if (searchOverlay.classList.contains('active')) {
        headerSearchInput.focus();
      }
    });
  }
  if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
    });
  }

  // Search Input inside header
  if (headerSearchInput) {
    headerSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (menuSearchInput) {
        menuSearchInput.value = state.searchQuery;
      }
      renderMenuGrid();
      updateActiveFilterSummary();
    });
  }

  // Search Input inside Menu controls
  if (menuSearchInput) {
    menuSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (headerSearchInput) {
        headerSearchInput.value = state.searchQuery;
      }
      if (state.searchQuery) {
        clearSearchBtn.classList.remove('hidden');
      } else {
        clearSearchBtn.classList.add('hidden');
      }
      renderMenuGrid();
      updateActiveFilterSummary();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      menuSearchInput.value = '';
      if (headerSearchInput) headerSearchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      renderMenuGrid();
      updateActiveFilterSummary();
    });
  }

  // Veg only checkbox filter toggle
  if (vegOnlyCheckbox) {
    vegOnlyCheckbox.addEventListener('change', (e) => {
      state.vegOnly = e.target.checked;
      renderMenuGrid();
      updateActiveFilterSummary();
    });
  }

  // Sorting selection dropdown
  if (menuSortSelect) {
    menuSortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderMenuGrid();
    });
  }

  // Clear filters link reset
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  const clearAllFiltersBtn = document.getElementById('clear-all-filters-btn');
  const resetFunc = () => {
    state.activeCategory = 'all';
    state.searchQuery = '';
    state.vegOnly = false;
    state.sortBy = 'default';
    
    // Reset inputs
    if (menuSearchInput) menuSearchInput.value = '';
    if (headerSearchInput) headerSearchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
    if (vegOnlyCheckbox) vegOnlyCheckbox.checked = false;
    if (menuSortSelect) menuSortSelect.value = 'default';
    
    // Reset active pill
    const pills = document.getElementById('category-pills');
    if (pills) {
      pills.querySelectorAll('.category-pill').forEach(p => {
        if (p.getAttribute('data-category') === 'all') {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    }

    renderMenuGrid();
    updateActiveFilterSummary();
  };

  if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetFunc);
  if (clearAllFiltersBtn) clearAllFiltersBtn.addEventListener('click', resetFunc);

  // Delivery vs Pickup selection toggle buttons in drawer footer
  const devOpt = document.getElementById('delivery-option-btn');
  const pickOpt = document.getElementById('pickup-option-btn');

  if (devOpt && pickOpt) {
    devOpt.addEventListener('click', () => {
      devOpt.classList.add('active');
      pickOpt.classList.remove('active');
      state.deliveryMode = 'delivery';
      calculateCartTotals();
    });

    pickOpt.addEventListener('click', () => {
      pickOpt.classList.add('active');
      devOpt.classList.remove('active');
      state.deliveryMode = 'pickup';
      calculateCartTotals();
    });
  }

  // Coupon apply click trigger
  const appCpn = document.getElementById('apply-coupon-btn');
  if (appCpn) {
    appCpn.addEventListener('click', () => {
      const inp = document.getElementById('coupon-code-input');
      if (inp) {
        applyCouponCode(inp.value);
      }
    });
  }

  // Apply discount buttons from special offers cards directly
  document.querySelectorAll('.apply-coupon-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      const inp = document.getElementById('coupon-code-input');
      if (inp) {
        inp.value = code;
        openCartDrawer();
        applyCouponCode(code);
      }
    });
  });

  // Combo Deal Button
  document.querySelectorAll('.add-combo-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Simulate adding combo items: Paneer Tikka (Full), Dal Makhani (Full), Garlic Naan (Basket)
      addToCart('course-paneer-tikka', 'Full Bowl');
      addToCart('course-dal-makhani', 'Full Bowl');
      addToCart('course-naan', 'Basket of 3');
      addToCart('sweet-gulab-jamun', 'Box of 6 Pcs');
      
      // Auto apply coupon code logic (optional, we can just open cart drawer)
      openCartDrawer();
    });
  });

  // Loyalty calculator button logic
  const calculatePointsBtn = document.getElementById('calculate-points-btn');
  if (calculatePointsBtn) {
    calculatePointsBtn.addEventListener('click', () => {
      const val = parseFloat(document.getElementById('spending-input').value);
      const resBox = document.getElementById('calc-result');
      
      if (isNaN(val) || val <= 0) {
        alert('Please enter a valid amount.');
        return;
      }

      // 1 point per ₹10 spent, 1 point = ₹0.50 cash value
      const points = Math.floor(val / 10);
      const cashVal = points * 0.5;

      document.getElementById('calc-points').innerText = points;
      document.getElementById('calc-value').innerText = `₹${cashVal.toFixed(2)}`;
      resBox.classList.remove('hidden');
    });
  }

  // Bulk inquiry form submit logic
  const cateringForm = document.getElementById('catering-inquiry-form');
  const cateringSuccessMsg = document.getElementById('catering-success-msg');
  if (cateringForm) {
    cateringForm.addEventListener('submit', (e) => {
      e.preventDefault();
      cateringForm.classList.add('hidden');
      cateringSuccessMsg.classList.remove('hidden');
    });
  }

  // Newsletter form subscription trigger
  const newsForm = document.getElementById('newsletter-form');
  const newsSuccess = document.getElementById('newsletter-success');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      newsForm.classList.add('hidden');
      newsSuccess.classList.remove('hidden');
    });
  }

  // Checkout modal toggles
  if (proceedCheckoutBtn) {
    proceedCheckoutBtn.addEventListener('click', () => {
      closeCartDrawer();
      openCheckoutModal();
    });
  }

  if (closeCheckoutBtn) {
    closeCheckoutBtn.addEventListener('click', closeCheckoutModal);
  }

  // Multi-step Checkout navigation next/prev buttons
  document.querySelectorAll('.next-step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (validateCheckoutStep(checkoutCurrentStep)) {
        checkoutCurrentStep++;
        updateCheckoutStepsUI();
      }
    });
  });

  document.querySelectorAll('.prev-step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      checkoutCurrentStep--;
      updateCheckoutStepsUI();
    });
  });

  // Payment radio selectors toggle panes
  document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const method = e.target.value;
      
      // Hide all panes
      document.getElementById('payment-pane-upi').classList.add('hidden');
      document.getElementById('payment-pane-card').classList.add('hidden');
      document.getElementById('payment-pane-cod').classList.add('hidden');

      // Show matching pane
      document.getElementById(`payment-pane-${method}`).classList.remove('hidden');
    });
  });

  // Complete checkout placing order form submit action
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Final step validate check
      if (validateCheckoutStep(3)) {
        closeCheckoutModal();
        triggerLiveOrderTracking();
      }
    });
  }

  // Close tracking / browsings
  if (closeTrackingBtn) {
    closeTrackingBtn.addEventListener('click', closeTrackingModal);
  }
  const contBrowse = document.getElementById('continue-browsing-btn');
  if (contBrowse) {
    contBrowse.addEventListener('click', closeTrackingModal);
  }
}

// 10. DRAWER & MODAL TOGGLE UTILITIES

function openCartDrawer() {
  cartDrawer.classList.add('active');
  cartDrawerBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  cartDrawer.classList.remove('active');
  cartDrawerBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function openWishlistDrawer() {
  wishlistDrawer.classList.add('active');
  wishlistDrawerBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
  renderWishlistDrawerItems();
}

function closeWishlistDrawer() {
  wishlistDrawer.classList.remove('active');
  wishlistDrawerBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function openCheckoutModal() {
  checkoutCurrentStep = 1;
  updateCheckoutStepsUI();
  checkoutModalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  checkoutModalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function openTrackingModal() {
  trackingModalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeTrackingModal() {
  trackingModalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}
