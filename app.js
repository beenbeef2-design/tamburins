/* ==========================================================================
   TAMBURINS KIOSK - INTERACTIVE LOGIC
   ========================================================================== */

// 1. Multi-language Translation Dictionary
const translations = {
  ko: {
    tagline: "익숙함에서 오는 낯설음, 탬버린즈가 제안하는 새로운 향의 세계를 경험해보세요.",
    title: "로그인",
    subtitle: "탬버린즈 키오스크 서비스 이용을 위해 로그인해 주세요.",
    username_label: "이메일 또는 휴대폰 번호",
    password_label: "비밀번호",
    find_credentials: "아이디/비밀번호 찾기",
    btn_login: "로그인",
    btn_signup: "회원가입",
    btn_guest: "비회원 시작하기",
    modal_close: "확인",
    
    // Shop Page Translations
    btn_back: "이전으로",
    label_size: "용량 선택",
    label_collection: "컬렉션 둘러보기",
    btn_add_to_cart: "장바구니 담기",
    cart_title: "장바구니",
    cart_empty: "장바구니가 비어 있습니다.",
    cart_total: "합계",
    btn_checkout: "결제하기",
    
    // Checkout Translations
    checkout_processing: "결제를 처리 중입니다. 잠시만 기다려주세요...",
    checkout_success_title: "주문 완료",
    checkout_success_subtitle: "주문이 성공적으로 접수되었습니다. 아래의 영수증을 확인해 주십시오.",
    receipt_total: "총 결제 금액",
    checkout_timer_text: "초 후 자동으로 초기 로그인 화면으로 이동합니다.",
    btn_checkout_done: "시작 화면으로",
    
    // Alerts / Dynamic content
    alert_login_success: "로그인에 성공했습니다. 탬버린즈 매장에 오신 것을 환영합니다.",
    alert_signup_nav: "회원가입 페이지로 이동합니다. 약관 동의를 진행해주세요.",
    alert_guest_nav: "비회원 주문/시향 모드로 서비스를 시작합니다.",
    alert_input_missing: "이메일(휴대폰 번호)과 비밀번호를 모두 입력해주세요.",
    alert_added_to_cart: "장바구니에 상품이 추가되었습니다.",
    alert_checkout_empty: "장바구니가 비어 있어 결제를 진행할 수 없습니다."
  },
  en: {
    tagline: "Discover the unfamiliar in the familiar. Experience the new world of scents proposed by Tamburins.",
    title: "SIGN IN",
    subtitle: "Please sign in to experience the Tamburins kiosk services.",
    username_label: "Email or Phone Number",
    password_label: "Password",
    find_credentials: "Forgot ID/Password?",
    btn_login: "LOG IN",
    btn_signup: "CREATE ACCOUNT",
    btn_guest: "CONTINUE AS GUEST",
    modal_close: "CONFIRM",
    
    // Shop Page Translations
    btn_back: "BACK",
    label_size: "SELECT SIZE",
    label_collection: "EXPLORE COLLECTION",
    btn_add_to_cart: "ADD TO CART",
    cart_title: "SHOPPING CART",
    cart_empty: "Your cart is empty.",
    cart_total: "TOTAL",
    btn_checkout: "CHECKOUT",
    
    // Checkout Translations
    checkout_processing: "Processing payment. Please wait a moment...",
    checkout_success_title: "ORDER COMPLETED",
    checkout_success_subtitle: "Your order has been successfully placed. Please verify your receipt below.",
    receipt_total: "TOTAL PAID",
    checkout_timer_text: "s later, automatically returning to the start screen.",
    btn_checkout_done: "BACK TO START",
    
    // Alerts / Dynamic content
    alert_login_success: "Login successful. Welcome to the Tamburins experience.",
    alert_signup_nav: "Redirecting to account creation. Please accept the terms.",
    alert_guest_nav: "Starting kiosk service in guest checkout & discovery mode.",
    alert_input_missing: "Please enter both your email/phone number and password.",
    alert_added_to_cart: "Item added to cart.",
    alert_checkout_empty: "Your cart is empty. Cannot proceed to checkout."
  },
  zh: {
    tagline: "探寻熟悉中的陌生感。体验 Tamburins 带来的全新香氛世界。",
    title: "登录",
    subtitle: "请登录以使用 Tamburins 自助机系统。",
    username_label: "邮箱或手机号码",
    password_label: "密码",
    find_credentials: "找回账号/密码",
    btn_login: "登录",
    btn_signup: "注册账户",
    btn_guest: "游客模式体验",
    modal_close: "确认",
    
    // Shop Page Translations
    btn_back: "返回",
    label_size: "选择容量",
    label_collection: "探索系列",
    btn_add_to_cart: "加入购物车",
    cart_title: "购物车",
    cart_empty: "您的购物车是空的。",
    cart_total: "总额",
    btn_checkout: "立即结算",
    
    // Checkout Translations
    checkout_processing: "正在处理支付，请稍候...",
    checkout_success_title: "订单完成",
    checkout_success_subtitle: "您的订单已成功受理。请确认下方小票。",
    receipt_total: "支付总额",
    checkout_timer_text: "秒后将自动返回起始页面。",
    btn_checkout_done: "返回起始页",
    
    // Alerts / Dynamic content
    alert_login_success: "登录成功。欢迎来到 Tamburins 空间。",
    alert_signup_nav: "正在前往注册页面。请阅读并同意条款。",
    alert_guest_nav: "正在以游客身份启动自助机体验。",
    alert_input_missing: "请输入您的账号和密码。",
    alert_added_to_cart: "商品已成功加入购物车。",
    alert_checkout_empty: "购物车为空，无法结账。"
  },
  ja: {
    tagline: "見慣れたものの中にある未知なる発見。タンバリンズ가 제안하는 새로운 향의 세계를 경험해보세요.",
    title: "ログイン",
    subtitle: "タンバリンズのキオスクサービスをご利用いただくために、ログインしてください。",
    username_label: "メールアドレスまたは電話番号",
    password_label: "パスワード",
    find_credentials: "ID・パスワードをお忘れの方",
    btn_login: "ログイン",
    btn_signup: "新規会員登録",
    btn_guest: "ゲストで開始",
    modal_close: "確認",
    
    // Shop Page Translations
    btn_back: "戻る",
    label_size: "サイズ選択",
    label_collection: "コレクションを探索",
    btn_add_to_cart: "カートに入れる",
    cart_title: "ショッピングカート",
    cart_empty: "カートは空です。",
    cart_total: "合計",
    btn_checkout: "決済に進む",
    
    // Checkout Translations
    checkout_processing: "決済処理中です。少々お待ちください...",
    checkout_success_title: "注文完了",
    checkout_success_subtitle: "ご注文が正常に受け付けられました。以下の領収書をご確認ください。",
    receipt_total: "お支払い合計",
    checkout_timer_text: "秒後に自動的に初期スタート画面に戻ります。",
    btn_checkout_done: "スタート画面に戻る",
    
    // Alerts / Dynamic content
    alert_login_success: "ログインに成功しました。タンバリンズへようこそ。",
    alert_signup_nav: "会員登録ページへ移動します。利用規約に同意してください。",
    alert_guest_nav: "ゲストモードでキオスクサービスを開始します。",
    alert_input_missing: "IDとパスワードの両方を入力してください。",
    alert_added_to_cart: "商品がカートに追加されました。",
    alert_checkout_empty: "カートが空のため、決済を進めることができません。"
  }
};

// 2. Product Database
const products = [
  {
    id: "chamo",
    name: "CHAMO",
    image: "chamo.png",
    prices: { 10: 38000, 50: 139000, 100: 219000 },
    notes: {
      top: "Thyme, Chamomile",
      middle: "Clary Sage, Cypriol",
      base: "Amber, Musk, White Wood"
    },
    description: {
      ko: "진한 리치, 부드러운 카모마일 향에 달콤한 마지판과 씁쓸한 머스크가 어우러져 깊고 포근한 자연의 위안을 건넵니다.",
      en: "Rich honeyed chamomile blended with sweet marzipan and bitter musk, offering a deep and cozy consolation of nature.",
      zh: "浓郁的洋甘菊混以甜蜜的杏仁蛋白糖与苦涩木质麝香，传递出深邃而温暖的大自然慰藉。",
      ja: "濃密なハチミツの甘さを持つカモミールに、甘いマジパンとほろ苦いムスクが調和し、深く温かい自然の慰めを与えます。"
    }
  },
  {
    id: "lale",
    name: "LALE",
    image: "lale.png",
    prices: { 10: 38000, 50: 139000, 100: 219000 },
    notes: {
      top: "Apple, Eucalyptus, Bergamot",
      middle: "Tulip, Mimosa, Rosemary",
      base: "Leather, Sandalwood, Musk"
    },
    description: {
      ko: "이슬을 머금은 싱그러운 튤립의 첫 느낌 뒤로, 쌉싸름한 가죽과 은은한 미모사가 조화롭게 이어지며 이국적인 잔향을 남깁니다.",
      en: "Starting with a fresh, dew-kissed green tulip, it follows with bitter leather and subtle mimosa, leaving a clean, exotic trail.",
      zh: "以沾满露珠的鲜绿郁金香开始，继而带来苦涩的皮革与幽香合欢，留下一抹清爽而异域的余韵。",
      ja: "朝露を含んだ新鮮なグリーンのチューリップに始まり、ほろ苦いレザーとほのかなミモザが調和し、清潔感のある異国的な余韻を残します。"
    }
  },
  {
    id: "bilingual",
    name: "BILINGUAL",
    image: "bilingual.png",
    prices: { 10: 39000, 50: 142000, 100: 224000 },
    notes: {
      top: "Marshmallow, Orange Blossom",
      middle: "Tobacco, Juniper Berry",
      base: "Tonka Bean, Leather, Wood"
    },
    description: {
      ko: "서로 다른 언어가 만나 빚어내는 낯설지만 매혹적인 울림처럼, 차가운 마시멜로와 따스한 가죽의 향이 세련된 대조를 이룹니다.",
      en: "Like a unique echo of two different languages, the cool marshmallow and warm leather create a sophisticated, contrasting harmony.",
      zh: "如同两种语言碰撞出的独特回响，清凉的棉花糖与温暖的皮革融合，演绎出冷冷相融的摩登对比感。",
      ja: "2つの異なる言語が出会って奏でるユニークな響きのように、冷たいマシュマロと温かいレザーの香りが洗練された美しいコントラストを描きます。"
    }
  }
];

// 3. Application State
let currentLang = 'ko';
let currentProduct = products[0]; // Default: CHAMO
let selectedSize = 10; // Default size: 10ml
let cart = []; // Array of { product, size, qty }

// DOM Elements
const langButtons = document.querySelectorAll('.lang-btn');
const translatableElements = document.querySelectorAll('[data-i18n]');
const transitionContainers = document.querySelectorAll('.text-transition');
const screenLogin = document.getElementById('screen-login');
const screenShop = document.getElementById('screen-shop');

// Login Form Elements
const kioskLoginForm = document.getElementById('kiosk-login-form');
const inputUsername = document.getElementById('input-username');
const inputPassword = document.getElementById('input-password');
const btnLogin = document.getElementById('btn-login');
const btnSignup = document.getElementById('btn-signup');
const btnGuest = document.getElementById('btn-guest');
const passwordToggle = document.querySelector('.password-toggle');

// Shop Detail Elements
const shopPerfumeBg = document.getElementById('shop-perfume-bg');
const shopPerfumeTitle = document.getElementById('shop-perfume-title');
const shopPerfumeDesc = document.getElementById('shop-perfume-desc');
const noteTop = document.getElementById('note-top');
const noteMiddle = document.getElementById('note-middle');
const noteBase = document.getElementById('note-base');
const sizeButtons = document.querySelectorAll('.size-btn');
const shopPrice = document.getElementById('shop-price');
const btnAddToCart = document.getElementById('btn-add-to-cart');
const btnBackToLogin = document.getElementById('btn-back-to-login');
const perfumeCarousel = document.getElementById('perfume-carousel');

// Cart Elements
const btnCartToggle = document.getElementById('btn-cart-toggle');
const btnCartClose = document.getElementById('btn-cart-close');
const cartPanel = document.getElementById('cart-panel');
const cartBackdrop = document.getElementById('cart-backdrop');
const cartCountBadge = document.getElementById('cart-count');
const cartItemsList = document.getElementById('cart-items-list');
const cartEmptyMessage = document.getElementById('cart-empty-message');
const cartTotalValue = document.getElementById('cart-total-value');
const btnCheckout = document.getElementById('btn-checkout');

// Modal Elements (Shared Dialog)
const alertModal = document.getElementById('alert-modal');
const modalMsg = document.getElementById('modal-msg');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.querySelector('.modal-backdrop');

// Checkout Simulation Elements
const checkoutModal = document.getElementById('checkout-modal');
const stateProcessing = document.getElementById('state-processing');
const stateSuccess = document.getElementById('state-success');
const receiptItemsList = document.getElementById('receipt-items-list');
const receiptTotalValue = document.getElementById('receipt-total-value');
const receiptDateText = document.getElementById('receipt-date');
const closeTimerSpan = document.getElementById('close-timer');
const btnCheckoutDone = document.getElementById('btn-checkout-done');
let checkoutAutoTimer = null;

// Cursor Elements
const customCursor = document.querySelector('.custom-cursor');
const cursorFollower = document.querySelector('.custom-cursor-follower');

// ==========================================================================
// A. SPA SCREEN CONTROLLER & INITIALIZATION
// ==========================================================================

function showScreen(screenId) {
  if (screenId === 'login') {
    screenShop.classList.remove('active');
    setTimeout(() => {
      screenShop.style.display = 'none';
      screenLogin.style.display = 'block';
      setTimeout(() => screenLogin.classList.add('active'), 50);
    }, 400);
    
    // Clear inputs and state
    inputUsername.value = '';
    inputPassword.value = '';
    cart = [];
    updateCartUI();
  } else if (screenId === 'shop') {
    screenLogin.classList.remove('active');
    setTimeout(() => {
      screenLogin.style.display = 'none';
      screenShop.style.display = 'block';
      setTimeout(() => screenShop.classList.add('active'), 50);
    }, 400);
    
    // Set default product
    selectProduct(products[0].id);
  }
}

// ==========================================================================
// B. MULTILINGUAL CONTROLLER
// ==========================================================================

function setLanguage(lang) {
  if (lang === currentLang) return;
  
  // Transition Fade-out
  transitionContainers.forEach(container => {
    container.classList.add('lang-changing');
  });
  
  // Also fade the shop details
  const shopDetails = document.querySelector('.perfume-detail');
  const pricingSection = document.querySelector('.shop-pricing-section');
  if (shopDetails) shopDetails.classList.add('lang-changing');
  if (pricingSection) pricingSection.classList.add('lang-changing');

  setTimeout(() => {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Apply main dictionary translations
    translatableElements.forEach(element => {
      const translationKey = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][translationKey]) {
        element.textContent = translations[lang][translationKey];
      }
    });

    // Translate Active Product details
    if (currentProduct) {
      shopPerfumeDesc.textContent = currentProduct.description[lang];
    }

    // Synchronize language buttons across screens
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update cart elements since language text swapped
    updateCartUI();

    // Transition Fade-in
    transitionContainers.forEach(container => {
      container.classList.remove('lang-changing');
    });
    if (shopDetails) shopDetails.classList.remove('lang-changing');
    if (pricingSection) pricingSection.classList.remove('lang-changing');
  }, 300);
}

// Bind Lang Buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const selectedLang = e.target.getAttribute('data-lang');
    setLanguage(selectedLang);
  });
});

// ==========================================================================
// C. PRODUCT CAROUSEL & SELECTION LOGIC
// ==========================================================================

function initCarousel() {
  perfumeCarousel.innerHTML = '';
  products.forEach(prod => {
    const card = document.createElement('div');
    card.className = `carousel-card ${prod.id === currentProduct.id ? 'active' : ''}`;
    card.setAttribute('data-id', prod.id);
    
    card.innerHTML = `
      <div class="carousel-card-img-wrapper">
        <img src="${prod.image}" alt="${prod.name}">
      </div>
      <div class="carousel-card-title">${prod.name}</div>
    `;
    
    card.addEventListener('click', () => {
      selectProduct(prod.id);
    });
    
    perfumeCarousel.appendChild(card);
  });
}

function selectProduct(productId) {
  const selected = products.find(p => p.id === productId);
  if (!selected) return;
  
  currentProduct = selected;
  
  // Add quick visual switch transition
  const shopDetails = document.querySelector('.perfume-detail');
  const pricingSection = document.querySelector('.shop-pricing-section');
  shopDetails.classList.add('lang-changing');
  pricingSection.classList.add('lang-changing');
  
  setTimeout(() => {
    // Update text content
    shopPerfumeTitle.textContent = selected.name;
    shopPerfumeDesc.textContent = selected.description[currentLang];
    
    // Update background image
    shopPerfumeBg.style.backgroundImage = `url('${selected.image}')`;
    
    // Update Notes
    noteTop.textContent = selected.notes.top;
    noteMiddle.textContent = selected.notes.middle;
    noteBase.textContent = selected.notes.base;
    
    // Reset selected size back to 10ml
    selectedSize = 10;
    sizeButtons.forEach(btn => {
      if (btn.getAttribute('data-size') === '10') {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Update price display
    updatePrice();

    // Re-active carousel highlight
    document.querySelectorAll('.carousel-card').forEach(card => {
      if (card.getAttribute('data-id') === productId) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
    
    shopDetails.classList.remove('lang-changing');
    pricingSection.classList.remove('lang-changing');
  }, 250);
}

function updatePrice() {
  const price = currentProduct.prices[selectedSize];
  shopPrice.textContent = price.toLocaleString();
}

// Bind Size buttons
sizeButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    sizeButtons.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    selectedSize = parseInt(e.target.getAttribute('data-size'));
    updatePrice();
  });
});

// ==========================================================================
// D. CART STATE MANAGEMENT & RENDER
// ==========================================================================

function addToCart() {
  // Check if item already exists with the same size
  const existingItemIndex = cart.findIndex(item => item.product.id === currentProduct.id && item.size === selectedSize);
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].qty += 1;
  } else {
    cart.push({
      product: currentProduct,
      size: selectedSize,
      qty: 1
    });
  }
  
  // Show mini-modal notification that it has been added
  showModal('alert_added_to_cart');
  updateCartUI();
}

function updateCartUI() {
  // Cart Badge count
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCountBadge.textContent = totalCount;
  
  // Render Cart Item List
  cartItemsList.innerHTML = '';
  
  if (cart.length === 0) {
    cartEmptyMessage.style.display = 'flex';
    cartTotalValue.textContent = '₩0';
  } else {
    cartEmptyMessage.style.display = 'none';
    
    let totalPrice = 0;
    
    cart.forEach((item, index) => {
      const itemPriceSum = item.product.prices[item.size] * item.qty;
      totalPrice += itemPriceSum;
      
      const cartItemDiv = document.createElement('div');
      cartItemDiv.className = 'cart-item';
      cartItemDiv.innerHTML = `
        <div class="cart-item-info">
          <div class="cart-item-img-wrapper">
            <img src="${item.product.image}" alt="${item.product.name}">
          </div>
          <div class="cart-item-meta">
            <span class="cart-item-name">${item.product.name}</span>
            <span class="cart-item-size">${item.size}ml</span>
          </div>
        </div>
        
        <div class="cart-item-qty-control">
          <button class="qty-btn" onclick="adjustQty(${index}, -1)">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="adjustQty(${index}, 1)">+</button>
        </div>
        
        <div class="cart-item-right">
          <span class="cart-item-price">₩${itemPriceSum.toLocaleString()}</span>
          <button class="cart-item-remove" onclick="removeCartItem(${index})">Remove</button>
        </div>
      `;
      cartItemsList.appendChild(cartItemDiv);
    });
    
    cartTotalValue.textContent = `₩${totalPrice.toLocaleString()}`;
  }
}

// Global functions for inline HTML button triggers
window.adjustQty = function(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  updateCartUI();
};

window.removeCartItem = function(index) {
  cart.splice(index, 1);
  updateCartUI();
};

// Bind Cart Toggle panel handlers
btnCartToggle.addEventListener('click', () => {
  cartPanel.classList.add('active');
  cartBackdrop.classList.add('active');
});

btnCartClose.addEventListener('click', () => {
  cartPanel.classList.remove('active');
  cartBackdrop.classList.remove('active');
});

cartBackdrop.addEventListener('click', () => {
  cartPanel.classList.remove('active');
  cartBackdrop.classList.remove('active');
});

btnAddToCart.addEventListener('click', addToCart);

// ==========================================================================
// E. FORM HANDLERS & NAVIGATION LINKS
// ==========================================================================

btnBackToLogin.addEventListener('click', () => {
  showScreen('login');
});

kioskLoginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = inputUsername.value.trim();
  const password = inputPassword.value.trim();
  
  if (!username || !password) {
    showModal('alert_input_missing');
  } else {
    showModal('alert_login_success');
    // Swap screen to shop after modal closes or directly
    setTimeout(() => {
      hideModal();
      showScreen('shop');
    }, 1500);
  }
});

btnSignup.addEventListener('click', () => {
  showModal('alert_signup_nav');
});

btnGuest.addEventListener('click', () => {
  showModal('alert_guest_nav');
  setTimeout(() => {
    hideModal();
    showScreen('shop');
  }, 1200);
});

// Password Toggle Button
passwordToggle.addEventListener('click', () => {
  const isPassword = inputPassword.type === 'password';
  inputPassword.type = isPassword ? 'text' : 'password';
  
  const eyeIcon = passwordToggle.querySelector('.eye-icon');
  if (isPassword) {
    eyeIcon.style.opacity = '1';
    eyeIcon.style.stroke = 'var(--color-accent)';
  } else {
    eyeIcon.style.opacity = '0.5';
    eyeIcon.style.stroke = 'currentColor';
  }
});

// Shared Message Dialog Modal Close Handlers
function showModal(messageKey) {
  const translatedMessage = translations[currentLang][messageKey] || messageKey;
  modalMsg.textContent = translatedMessage;
  alertModal.classList.add('active');
}

function hideModal() {
  alertModal.classList.remove('active');
}

modalClose.addEventListener('click', hideModal);
modalBackdrop.addEventListener('click', hideModal);

// ==========================================================================
// F. CHECKOUT SIMULATOR
// ==========================================================================

btnCheckout.addEventListener('click', () => {
  if (cart.length === 0) {
    showModal('alert_checkout_empty');
    return;
  }
  
  // Close the cart slider
  cartPanel.classList.remove('active');
  cartBackdrop.classList.remove('active');
  
  // Open checkout panel overlay
  checkoutModal.classList.add('active');
  stateProcessing.style.display = 'flex';
  stateSuccess.style.display = 'none';
  
  // Simulate processing time (2.5s)
  setTimeout(() => {
    stateProcessing.style.display = 'none';
    stateSuccess.style.display = 'flex';
    
    // Inject current date
    const now = new Date();
    const formattedDate = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    receiptDateText.textContent = formattedDate;
    
    // Build Receipt list
    receiptItemsList.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
      const itemPriceSum = item.product.prices[item.size] * item.qty;
      totalPrice += itemPriceSum;
      
      const itemRow = document.createElement('div');
      itemRow.className = 'receipt-item-row';
      itemRow.innerHTML = `
        <span>${item.product.name} (${item.size}ml) x${item.qty}</span>
        <span>₩${itemPriceSum.toLocaleString()}</span>
      `;
      receiptItemsList.appendChild(itemRow);
    });
    
    receiptTotalValue.textContent = `₩${totalPrice.toLocaleString()}`;
    
    // Launch Auto closing countdown (10 seconds)
    let countdown = 10;
    closeTimerSpan.textContent = countdown;
    
    if (checkoutAutoTimer) clearInterval(checkoutAutoTimer);
    
    checkoutAutoTimer = setInterval(() => {
      countdown -= 1;
      closeTimerSpan.textContent = countdown;
      
      if (countdown <= 0) {
        clearInterval(checkoutAutoTimer);
        closeCheckoutAndReturn();
      }
    }, 1000);
    
  }, 2500);
});

function closeCheckoutAndReturn() {
  if (checkoutAutoTimer) clearInterval(checkoutAutoTimer);
  checkoutModal.classList.remove('active');
  // Back to Start Login Screen
  showScreen('login');
}

btnCheckoutDone.addEventListener('click', closeCheckoutAndReturn);

// ==========================================================================
// G. CUSTOM INTERACTIVE MOUSE CURSOR
// ==========================================================================

let mouseX = 0, mouseY = 0; // Actual mouse position
let cursorX = 0, cursorY = 0; // Smaller dot position
let followerX = 0, followerY = 0; // Lagging ring position

const isTouchDevice = () => {
  return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
};

if (!isTouchDevice()) {
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    customCursor.style.left = mouseX + 'px';
    customCursor.style.top = mouseY + 'px';
    customCursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
  });

  const renderCursor = () => {
    // Lerp follow with inertia
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;

    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(renderCursor);
  };
  requestAnimationFrame(renderCursor);

  // Selector list for interactive cursor expansion scale
  const interactiveSelector = 'button, input, a, .lang-btn, .password-toggle, .carousel-card, .qty-btn, .size-btn';
  
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add('hovering-interactive');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove('hovering-interactive');
    }
  });
  
  document.addEventListener('mouseleave', () => {
    customCursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
  });
} else {
  // Hide on touch
  customCursor.style.display = 'none';
  cursorFollower.style.display = 'none';
}

// Active press animation behavior
document.addEventListener('mousedown', (e) => {
  const clickTarget = e.target.closest('.btn, .lang-btn, .modal-close-btn, .carousel-card, .size-btn, .qty-btn, .cart-toggle-btn');
  if (clickTarget) {
    clickTarget.style.transform = 'scale(0.96)';
  }
});

document.addEventListener('mouseup', (e) => {
  const clickTarget = e.target.closest('.btn, .lang-btn, .modal-close-btn, .carousel-card, .size-btn, .qty-btn, .cart-toggle-btn');
  if (clickTarget) {
    clickTarget.style.transform = '';
  }
});

// ==========================================================================
// H. STARTUP INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Build dynamic carousel cards
  initCarousel();
  // Ensure we start at Login
  showScreen('login');
});
