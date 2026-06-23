 type="module">
  emailjs.init("1WeOSDx2Czsy-VPgJ");
  const EJ_SERVICE="service_fs3xh3y", EJ_OWNER="template_ac1p5p6", EJ_CUSTOMER="template_xra4fip";

  /* ── PRODUCTS DATA ── */
  const PRODUCTS = [
    {id:1, name:"Red Dragon Gaming Mouse", price:3699, mrp:5990, tag:"Gaming", rating:4.3, reviews:128, delivery:"2-3 days", charge:0,
     imgs:["https://i.ibb.co/fdx88XNy/Redragon-K1-NG-M916-PRO-Pink-49g-Ultra-Lightweight-3-Mode-PAW3395-Gaming-Mouse-Pink.jpg","https://i.ibb.co/HL4wmdXw/Mouse-Gamer-Redragon-King-Pro-Rosa-Pixart-PAW3395-26000-DPI-M916-P-PRO-1-K.jpg","https://i.ibb.co/HD8qCHMy/Redragon-M724-P-Throne-Pink-Ultra-Light-42g-Wired-12400-DPI-Gaming-Mouse-Pink.jpg"],
     highlights:["7200 DPI Precision sensor","RGB gaming Lighting","Ergonomic Grip Design","Ultra-Fast Response Time","Durable Gaming Switches"]},
    {id:2, name:"Premium keyboard", price:1299, mrp:2499, tag:"Gaming", rating:4.5, reviews:342, delivery:"11-12 days", charge:43,
     imgs:["https://i.ibb.co/rWLvfcQ/693272936432530794.jpg","https://i.ibb.co/tPhM6Wc9/Pink-Heart-Keyboard.jpg","https://i.ibb.co/F4Mqd866/YUNZII-B87.jpg"],
     highlights:["RGB Backlit Keys","Mechanical Feel Typing","Anti-Ghosting Technlogy","Durable Key Construction","Plug & Play Support"]},
    {id:3, name:"Stylish Latest CPU", price:18799, mrp:22699, tag:"Component", rating:4.2, reviews:215, delivery:"3-4 days", charge:32,
     imgs:["https://i.ibb.co/RTL1NjdZ/1.jpg","https://i.ibb.co/5WJYPMHf/8.jpg","https://i.ibb.co/bMqQCNDB/7.jpg","https://i.ibb.co/sv6DQRw8/9.jpg"],
     highlights:["High Performance Processor","RGB Gaming Cabinet","Fast SSD Storage","Efficent Cooling System","Smooth Multitasking Experience"]},
    {id:4, name:"iPhone 20W PD Fast Charger", price:549, mrp:999, tag:"Accessories", rating:4.4, reviews:892, delivery:"6-7 days", charge:40,
     imgs:["https://i.ibb.co/C5Lg3tCv/i-Phone-Fast-Charger-Cable-Fast-Charger-i-Phone-20-W-PD-USB-C-Wall-Charger-Type-C-Power-Adapter-Light.jpg","https://i.ibb.co/84TZ8hPw/for-i-Phone-16-15-Charger-6ft-Type-C-to-C-Cable-Cord-Long-USB-C-Fast-Charging-Block-for-Apple-i-Phon.jpg","https://i.ibb.co/cKzQFtcx/ALGUS-Original-i-Phone-20-W-Super-Fast-Charger-with-Cable-Compatible-with-Apple-i-Phone-14-i-Phone-1.jpg"],
     highlights:["20W Fast Charging","Type-C Power Delivery","Compact Travel Design","Overcharge Protection","Universal Compatiblity"]},
    {id:5, name:"HP Stream 14 Laptop 16GB RAM", price:43999, mrp:52999, tag:"Laptop", rating:4.1, reviews:67, delivery:"3-5 days", charge:0,
     imgs:["https://i.ibb.co/HpB4XMms/HP-Stream-14-Laptop-16-GB-RAM-416-GB-Storage-Intel-UHD.jpg","https://i.ibb.co/rRVK7csZ/laptop-pink-rosa.jpg","https://i.ibb.co/8GWz1Gm/4.jpg"],
     highlights:["16GB High-Speed RAM","Full HD Display","Light Weight Design","Long Battery Packup","Fast SSD Performance"]},
    {id:6, name:"boat Bluetooth Headphone", price:2199, mrp:3999, tag:"Audio", rating:4.4, reviews:189, delivery:"4-6 days", charge:0,
     imgs:["https://i.ibb.co/5zzwvXS/3.jpg","https://i.ibb.co/995Nyf6s/Boat-Rockerz-650-Pro.jpg","https://i.ibb.co/wFBzgKt5/Bo-At-Newly-Launched-Nirvana-Eutopia-Bluetooth-Headphones-with-Head-Tracking-Function-Spatial-Audio.jpg"],
     highlights:["Deep Bass Sound","Bluetooth 5.3 Connectivity","30 Hours Battery Life","Comfortable Ear Cushions","Built-in HD Microphone"]},
    {id:7, name:"Iphone 16 pro", price:69999, mrp:89999, tag:"Mobile", rating:4.0, reviews:456, delivery:"5-8 days", charge:30,
     imgs:["https://i.ibb.co/Hfp2TK4f/Apple-i-Phone-16-Price-Specs-Colors-Size-Reviews-AT-T.jpg","https://i.ibb.co/KcZzLWBT/i-Phone-16-128-GB-5-G-Mobile-Phone-with-Camera-Control-A18-Chip-and-a-Big-Boost-in-Battery-Life-Wor.jpg","https://i.ibb.co/kgFJbrjG/Apple-i-Phone-16-Plus-512-GB-Pink-With-Contract-and-36-Installment-Payments.jpg"],
     highlights:["Advance Triple Camera System","Super Retina Display","A-Series Powerful Chip","Fast Wireless Charging","Premium Titanium Design"]},
    {id:8, name:"Apple Smart Watch", price:14699, mrp:22999, tag:"Wearable", rating:4.3, reviews:301, delivery:"2-3 days", charge:23,
     imgs:["https://i.ibb.co/DHrzPPDN/Heart-Rate-Monitor-Bluetooth-Smart-Watch.jpg","https://i.ibb.co/ycvq9M67/Apple-Watch-Series-8-41mm-a2772-Gps-Lte-Starlight-Al-starlight-Sp-Band-s-m.jpg","https://i.ibb.co/5WRj4XMy/6.jpg"],
     highlights:["Heart Rate Monitoring","Fitness Activity Tracking","Bluetooth Calling Support","Water Resistant DEsign","Long Battery Life"]},
    {id:9, name:"Bluetooth Sound", price:349, mrp:699, tag:"Audio", rating:4.2, reviews:623, delivery:"8-10 days", charge:40,
     imgs:["https://i.ibb.co/5gwJfG4d/Portable-Bluetooth-Speaker-15-W-Loud-Stereo-Sound-with-53mm-Driver-TWS-IPX7-Waterproof-and-Dustpr.jpg","https://i.ibb.co/qY7xfy2k/Buy-bo-At-Wireless-Bluetooth-Speakers-Online.jpg","https://i.ibb.co/tM3QsYVL/Portable-Bluetooth-Speakers-Wireless-Speaker-Outdoor-Speaker-Waterproof-IPX5-Stereo-Pairing-Bas.jpg"],
     highlights:["Powerfull Deep Bass","BLuetooth 5.3 Connectivity","12 hours Battery Backup","Portable Compact Design","Built in HD Microphone"]},
    {id:10, name:"Smart TV LCD", price:63999, mrp:79999, tag:"Electronic", rating:4.1, reviews:142, delivery:"9-13 days", charge:27,
     imgs:["https://i.ibb.co/mFtRkLVp/Sony-Bravia-164-cm-65-inches-4-K-Ultra-HD-Smart-LED-Google-TV-KD-65-X82-L-Black.jpg","https://i.ibb.co/Cs3JWSBP/Sony-65.jpg","https://i.ibb.co/ynv2x3jQ/The-Best-TVs-We-ve-Tested-for-2026.jpg"],
     highlights:["43-inch 4k UHD Display","Smart Android ","Dolbyh Audio Support","Built in Wifi & Apps","Multiple HDMI & USB Ports"]},
    {id:11, name:"boat Earbuds", price:1899, mrp:3499, tag:"Audio", rating:4.5, reviews:267, delivery:"5-9 days", charge:0,
     imgs:["https://i.ibb.co/MDsLt8x0/Transparent-ID-50-ms-Beast-Mode-IPX4-Truly-Wireless-in-Ear-Earbuds-TWS-Ear-Buds.jpg","https://i.ibb.co/bgBpXmBc/Fones-de-ouvido-sem-fio-minimalistas-compati-veis-com-Bluetooth.jpg","https://i.ibb.co/xtP4QMg6/bo-At-Stone-352-Bluetooth-Speaker-with-10-W-RMS-Stereo-Sound-TWS-Feature-Up-to-12-H-Total-Playtime-M.jpg"],
     highlights:["13 hours Battery Lifee","Bluetooth 5.3 Technology","Deep Bass Audio","Touch control Support","Built-in Noise Reduction Mic"]},
    {id:12, name:"Galaxy Tab S10", price:57999, mrp:69999, tag:"Mobile", rating:4.6, reviews:198, delivery:"4-8 days", charge:20,
     imgs:["https://i.ibb.co/ksPs0QTK/Samsung-Galaxy-Tab-S10-Lite.jpg","https://i.ibb.co/fd7Fj4GJ/Samsung-Galaxy-Tab-S10-Lite-device-mid-range-bun-iata-detalii.jpg","https://i.ibb.co/y7CyFqB/Galaxy-Tab-S10-Lite-128-GB-com-S-Pen-tem-oferta-com-cupom-na-Magalu.jpg"],
     highlights:["Large AMOLED Display","S-Pen Included","Powerful Snapdragon Processor","Long Battery Backup","Multitasking Performance"]},
  ];

  /* ── DEFAULT REVIEWS (shown before Firebase loads) ── */
  /* 1 sample review per product — shown before Firebase loads, real reviews add on top */
  const DEFAULT_REVIEWS = {
    1: [{id:'def_1',userId:'__sample__',name:"Rohan Patil",   rating:5,title:"Excellent gaming mouse!",   body:"Smooth tracking, clicks feel great. RGB lighting looks amazing at night. Worth every rupee!",date:"10 Jun 2025"}],
    2: [{id:'def_2',userId:'__sample__',name:"Ananya Sharma", rating:4,title:"Great keyboard overall",    body:"Typing feels very satisfying. RGB is beautiful. Build quality is solid.",date:"8 Jun 2025"}],
    3: [{id:'def_3',userId:'__sample__',name:"Vikram Nair",   rating:4,title:"Good CPU for the price",   body:"Fast and quiet. Setup was easy. Works perfectly for office and light gaming.",date:"5 Jun 2025"}],
    4: [{id:'def_4',userId:'__sample__',name:"Pooja Desai",   rating:5,title:"Best charger I've used!",  body:"Charges iPhone 15 super fast. Cable is sturdy and long. No heating issues.",date:"3 Jun 2025"}],
    5: [{id:'def_5',userId:'__sample__',name:"Karan Mehta",   rating:4,title:"Decent laptop for study",  body:"16GB RAM makes multitasking smooth. Good for college work and basic coding.",date:"1 Jun 2025"}],
    6: [{id:'def_6',userId:'__sample__',name:"Divya Kulkarni",rating:5,title:"Boat headphones are 🔥",   body:"ANC is superb! Sound is deep and crisp. Battery easily lasts 2 days. Highly recommend.",date:"28 May 2025"}],
    7: [{id:'def_7',userId:'__sample__',name:"Sneha Joshi",   rating:5,title:"iPhone 16 Pro is amazing!", body:"Camera quality blew my mind. Battery lasts all day. Pink colour looks gorgeous!",date:"25 May 2025"}],
    8: [{id:'def_8',userId:'__sample__',name:"Arjun Tiwari",  rating:4,title:"Smart watch with great features", body:"Heart rate monitor is accurate. Display is bright and clear. Battery lasts 6 days.",date:"22 May 2025"}],
    9: [{id:'def_9',userId:'__sample__',name:"Riya Pandey",   rating:5,title:"Loud and clear sound!",    body:"Bass is powerful. Waterproof feature works great. Easily connects to two devices.",date:"20 May 2025"}],
    10:[{id:'def_10',userId:'__sample__',name:"Aditya Bose",  rating:4,title:"Best TV I've bought!", body:"  4K picture is crystal clear. Google TV has all apps. Sound is decent for a TV.",date:"18 May 2025"}],
    11:[{id:'def_11',userId:'__sample__',name:"Meera Singh",  rating:5,title:" Premium earbuds at mid price",     body:"ANC is very effective. Battery with case lasts 3 days. Comfortable for long use.",date:"15 May 2025"}],
    12:[{id:'def_12',userId:'__sample__',name:"Rahul Verma",  rating:5,title:"Galaxy Tab S10 is perfect!", body:"S Pen works flawlessly. Display is stunning. Perfect for drawing and note-taking.",date:"12 May 2025"}],
  };
  function renderGrid(products){
    const grid = document.getElementById('productGrid');
    grid.innerHTML = products.length === 0
      ? '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted)">No products found </div>'
      : products.map(p => {
          const disc = Math.round((p.mrp-p.price)/p.mrp*100);
          const stars = '⭐'.repeat(Math.floor(p.rating))+(p.rating%1>=0.5?'½':'');
          return `<div class="p-card" onclick="openProduct(${p.id})">
            <span class="p-card-badge">${disc}% OFF</span>
            <div class="p-img-wrap"><img src="${p.imgs[0]}" alt="${p.name}" loading="lazy"/></div>
            <div class="p-body">
              <div class="p-tag">${p.tag}</div>
              <div class="p-name">${p.name}</div>
              <div class="p-stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))} <span>${p.rating}</span></div>
              <div class="p-price">₹${p.price.toLocaleString('en-IN')}<span class="original">₹${p.mrp.toLocaleString('en-IN')}</span><span class="disc">${disc}% off</span></div>
              <div class="p-delivery">${p.charge===0?'🚚 FREE delivery':'🚚 ₹'+p.charge+' delivery'} · ${p.delivery}</div>
              <button class="btn-add" id="gb${p.id}" onclick="event.stopPropagation();addToCart(${p.id},this)">🛒 Add to Cart</button>
            </div>
          </div>`;
        }).join('');
  }
  renderGrid(PRODUCTS);

  /* ── FILTER ── */
  window.filterProducts = function(cat, el){
    document.querySelectorAll('.filter-tab').forEach(t=>t.classList.remove('active'));
    el.classList.add('active');
    renderGrid(cat==='All'?PRODUCTS:PRODUCTS.filter(p=>p.tag===cat));
  };

  /* ── SEARCH ── */
  const searchInput = document.getElementById('searchInput');
  const suggestions = document.getElementById('searchSuggestions');

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if(!q){ suggestions.classList.remove('show'); return; }
    const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q));
    if(!results.length){
      suggestions.innerHTML = '<div class="search-no-result">No products found for "'+q+'"</div>';
    } else {
      suggestions.innerHTML = results.map(p=>`
        <div class="suggestion-item" onclick="openProduct(${p.id});searchInput.value='';suggestions.classList.remove('show')">
          <img src="${p.imgs[0]}" alt="${p.name}"/>
          <div class="s-info">
            <div class="s-name">${p.name}</div>
            <div class="s-price">₹${p.price.toLocaleString('en-IN')}</div>
          </div>
        </div>`).join('');
    }
    suggestions.classList.add('show');
  });

  searchInput.addEventListener('keydown', e=>{ if(e.key==='Enter') doSearch(); });
  document.addEventListener('click', e=>{ if(!e.target.closest('.search-relative')) suggestions.classList.remove('show'); });

  window.doSearch = function(){
    const q = searchInput.value.trim().toLowerCase();
    if(!q) return;
    const results = PRODUCTS.filter(p=>p.name.toLowerCase().includes(q)||p.tag.toLowerCase().includes(q));
    suggestions.classList.remove('show');
    showPage('home');
    renderGrid(results);
    document.getElementById('productsSection').scrollIntoView({behavior:'smooth'});
  };

  /* ── PRODUCT DETAIL PAGE ── */
  window.openProduct = function(id){
    const p = PRODUCTS.find(x=>x.id===id);
    if(!p) return;
    lastProductId = id;
    const disc = Math.round((p.mrp-p.price)/p.mrp*100);
    const chargeHtml = p.charge===0
      ? '<span style="color:var(--green);font-weight:700">🎉 FREE Delivery</span>'
      : '<span style="color:#e65100;font-weight:600">₹'+p.charge+' delivery charge</span>';

    document.getElementById('productDetail').innerHTML = `
      <div class="gallery">
        <div class="main-img-wrap">
          <img id="mainImg" src="${p.imgs[0]}" alt="${p.name}" style="transition:opacity .25s"/>
        </div>
        <div class="thumb-row">
          ${p.imgs.map((img,i)=>`<div class="thumb ${i===0?'active':''}" onclick="switchImg('${img}',this)"><img src="${img}" alt="view ${i+1}"/></div>`).join('')}
        </div>
      </div>
      <div class="p-info">
        <div class="breadcrumb">
          <button class="btn-back-product" onclick="showPage('home')">← Back</button>
          <span onclick="showPage('home')" style="cursor:pointer">Home</span> › ${p.tag} › ${p.name.substring(0,28)}…
        </div>
        <h1>${p.name}</h1>
        <div class="rating-row">
          <div class="rating-badge">⭐ ${p.rating}</div>
          <div class="rating-count" id="ratingCount">Loading ratings…</div>
          <div style="font-size:.78rem;color:var(--blue);cursor:pointer" onclick="document.getElementById('reviewsSection').scrollIntoView({behavior:'smooth'})">See all reviews ↓</div>
        </div>
        <div class="price-section">
          <span class="current">₹${p.price.toLocaleString('en-IN')}</span>
          <span class="orig">₹${p.mrp.toLocaleString('en-IN')}</span>
          <span class="disc-pct">${disc}% off</span>
          <div class="emi">EMI from ₹${Math.round(p.price/12).toLocaleString('en-IN')}/month</div>
        </div>

        <div class="highlights">
          <h4>✨ Highlights</h4>
          ${p.highlights.map(h=>`<div class="highlight-item">${h}</div>`).join('')}
        </div>
        <div class="action-btns">
          <button class="btn-atc" id="detailAtc" onclick="addToCart(${p.id},this)">🛒 Add to Cart</button>
          <button class="btn-buy" onclick="addToCart(${p.id},null);openDrawer()">⚡ Buy Now</button>
        </div>
      </div>`;

    /* ── Load reviews from Firebase ── */
    loadReviews(id, p);

    /* ── Related products — same tag only, no name shown, direct product card ── */
    const related = PRODUCTS.filter(x=>x.id!==id && x.tag===p.tag);
    if(related.length > 0){
      document.getElementById('relatedSection').innerHTML = `
        <h2>Similar Products</h2>
        <div class="related-grid">
          ${related.map(r=>`
            <div class="related-card" onclick="openProduct(${r.id})">
              <img src="${r.imgs[0]}" alt="${r.name}" loading="lazy"/>
              <div class="related-card-body">
                <div class="related-card-price">₹${r.price.toLocaleString('en-IN')}</div>
                <div style="font-size:.7rem;color:var(--green);font-weight:600;margin-top:2px">${r.charge===0?'FREE delivery':'₹'+r.charge+' delivery'}</div>
              </div>
            </div>`).join('')}
        </div>`;
    } else {
      document.getElementById('relatedSection').innerHTML = '';
    }

    showPage('product');
    window.scrollTo({top:0,behavior:'smooth'});
  };

  window.switchImg = function(src, el){
    document.getElementById('mainImg').style.opacity='0';
    setTimeout(()=>{document.getElementById('mainImg').src=src;document.getElementById('mainImg').style.opacity='1';},200);
    document.querySelectorAll('.thumb').forEach(t=>t.classList.remove('active'));
    el.classList.add('active');
  };

  window.checkPin = function(){
    const pin = document.getElementById('pinInput').value.trim();
    const res = document.getElementById('pinResult');
    if(pin.length!==6||isNaN(pin)){res.innerHTML='<span style="color:#c62828">Please enter a valid 6-digit PIN</span>';return;}
    res.innerHTML='<span style="color:var(--green)">✅ Delivery available ! You can order..🤗</span>';
  };

  let selectedStar = 0;
  window.selectStar = function(s){
    selectedStar=s;
    document.querySelectorAll('.star-btn').forEach((b,i)=>{b.classList.toggle('active',i<s);});
  };

  /* ── Load reviews from Firebase ── */
  async function loadReviews(pid, p){
    const defaultRevs = DEFAULT_REVIEWS[pid] || [];
    // Show default reviews first while Firebase loads
    renderReviews(pid, defaultRevs, p, true);

    try {
      const {db, collection, query, where, orderBy, getDocs} = window._fb;
      const snap = await getDocs(query(
        collection(db,'reviews'),
        where('productId','==', pid)
      ));
      const fbReviews = [];
      snap.forEach(d => fbReviews.push({id:d.id, ...d.data()}));
      // Sort by date desc
      fbReviews.sort((a,b)=>(b.createdAt?.seconds||0)-(a.createdAt?.seconds||0));
      // Merge: default + firebase (no duplicates)
      const allReviews = [...fbReviews, ...defaultRevs];
      renderReviews(pid, allReviews, p, false);
    } catch(e){ console.warn('Reviews load error:', e); }
  }

  function renderReviews(pid, reviews, p, loading){
    const avgRating = reviews.length
      ? (reviews.reduce((s,r)=>s+r.rating,0)/reviews.length).toFixed(1)
      : p.rating;
    const ratingDist = [5,4,3,2,1].map(star=>({star, count:reviews.filter(r=>r.rating===star).length}));

    // Update rating count in product header
    const rcEl = document.getElementById('ratingCount');
    if(rcEl) rcEl.textContent = reviews.length + (reviews.length===1?' review':' reviews');

    document.getElementById('reviewsSection').innerHTML = `
      <div class="reviews-head"><h2>Ratings & Reviews</h2></div>
      <div class="rating-summary">
        <div class="rating-big">
          <div class="num">${avgRating}</div>
          <div class="stars">${'★'.repeat(Math.round(avgRating))}${'☆'.repeat(5-Math.round(avgRating))}</div>
          <div class="cnt">${reviews.length} ${reviews.length===1?'review':'reviews'}</div>
        </div>
        <div class="rating-bars">
          ${ratingDist.map(r=>`<div class="rating-bar-row">
            <span>${r.star}★</span>
            <div class="bar-track"><div class="bar-fill" style="width:${reviews.length ? Math.round(r.count/reviews.length*100) : r.star===5?70:r.star===4?20:5}%"></div></div>
            <span>${r.count}</span>
          </div>`).join('')}
        </div>
      </div>
      <div class="write-review">
        <h4>✍️ Write a Review</h4>
        <div class="star-select" id="starSelect">
          ${[1,2,3,4,5].map(s=>`<button class="star-btn" data-s="${s}" onclick="selectStar(${s})">★</button>`).join('')}
        </div>
        <div class="review-inputs">
          <input type="text" id="reviewTitle" placeholder="Review title (e.g. Great product!)"/>
          <textarea id="reviewBody" placeholder="Share your experience…"></textarea>
          <button class="btn-submit-review" onclick="submitReview(${pid})">Submit Review</button>
        </div>
      </div>
      <div id="reviewsList">
        ${loading ? '<p style="text-align:center;color:var(--muted);padding:20px;font-size:.85rem">Loading reviews…</p>' :
          reviews.length === 0 ? '<p style="text-align:center;color:var(--muted);padding:20px;font-size:.85rem">No reviews yet. Be the first! ⭐</p>' :
          reviews.map(r=>{
            const isMyReview = currentUser && r.userId === currentUser.uid;
            const dateStr = r.createdAt ? new Date(r.createdAt.seconds*1000).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}) : (r.date||'');
            const initial = (r.name||'U')[0].toUpperCase();
            return `<div class="review-card" id="rev_${r.id}">
              ${isMyReview ? `<button class="btn-delete-review" onclick="deleteReview('${r.id}','${pid}',event)">🗑️ Delete</button>` : ''}
              <div class="review-top">
                <span class="reviewer-name">
                  <div class="reviewer-avatar">${initial}</div>
                  ${r.name}
                  ${isMyReview ? '<span class="my-review-badge">My Review</span>' : ''}
                </span>
                <span class="review-date">${dateStr}</span>
              </div>
              <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
              ${r.title ? `<div class="review-title">${r.title}</div>` : ''}
              <div class="review-body">${r.body}</div>
              <div class="verified-badge">✅ Verified Purchase</div>
            </div>`;
          }).join('')
        }
      </div>`;
  }

  /* ── Submit review to Firebase ── */
  window.submitReview = async function(pid){
    if(!selectedStar){showToast('Please select a star rating ⭐','');return;}
    const title = document.getElementById('reviewTitle').value.trim();
    const body  = document.getElementById('reviewBody').value.trim();
    if(!body){showToast('Please write your review 📝','');return;}
    const btn = document.querySelector('.btn-submit-review');
    btn.disabled=true; btn.textContent='Submitting…';
    try {
      const {db, doc, setDoc, serverTimestamp} = window._fb;
      const reviewId = 'rev_' + currentUser.uid + '_' + pid + '_' + Date.now();
      await setDoc(doc(db,'reviews',reviewId),{
        productId:  pid,
        userId:     currentUser.uid,
        name:       currentUser.displayName || currentUser.email.split('@')[0],
        rating:     selectedStar,
        title:      title,
        body:       body,
        createdAt:  serverTimestamp()
      });
      showToast('Review submitted! Thank you 🙏','ok');
      document.getElementById('reviewTitle').value='';
      document.getElementById('reviewBody').value='';
      selectedStar=0;
      document.querySelectorAll('.star-btn').forEach(b=>b.classList.remove('active'));
      // Reload reviews
      const p = PRODUCTS.find(x=>x.id===pid);
      await loadReviews(pid, p);
    } catch(e){
      console.error(e);
      showToast('Could not submit review. Try again.','bad');
    } finally { btn.disabled=false; btn.textContent='Submit Review'; }
  };

  /* ── Delete review from Firebase ── */
  window.deleteReview = async function(reviewId, pid, event){
    event.stopPropagation();
    if(!confirm('Delete your review?')) return;
    try {
      const {db, deleteDoc, doc} = window._fb;
      await deleteDoc(doc(db,'reviews',reviewId));
      const card = document.getElementById('rev_'+reviewId);
      if(card){ card.style.opacity='0'; card.style.transform='translateX(20px)'; card.style.transition='all .3s'; setTimeout(()=>card.remove(),300); }
      showToast('Review deleted','ok');
    } catch(e){ console.error(e); showToast('Could not delete review','bad'); }
  };

  /* ── Go Home = scroll to products ── */
  window.goHome = function(){
    // If already on home page, just scroll to products
    if(document.getElementById('homePage').classList.contains('active')){
      document.getElementById('productsSection').scrollIntoView({behavior:'smooth'});
    } else {
      showPage('home');
      setTimeout(()=>{
        document.getElementById('productsSection').scrollIntoView({behavior:'smooth'});
      }, 50);
    }
  };

  /* ── PAGE NAVIGATION with scroll memory ── */
  let lastScrollY = 0;     // scroll position when user left home
  let lastProductId = null; // which product card user clicked

  window.showPage = function(name){
    if(name === 'home'){
      document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
      document.getElementById('homePage').classList.add('active');
      // Scroll to exact product card user clicked
      setTimeout(()=>{
        if(lastProductId){
          // Find the product card in grid by onclick attribute
          const cards = document.querySelectorAll('.p-card');
          let targetCard = null;
          cards.forEach(c=>{
            if(c.getAttribute('onclick') && c.getAttribute('onclick').includes('openProduct('+lastProductId+')')){
              targetCard = c;
            }
          });
          if(targetCard){
            const rect = targetCard.getBoundingClientRect();
            const scrollTop = window.scrollY + rect.top - 100; // 100px offset for nav
            window.scrollTo({top: scrollTop, behavior:'instant'});
            // Highlight the card briefly
            targetCard.style.boxShadow = '0 0 0 3px var(--rose)';
            setTimeout(()=>{ targetCard.style.boxShadow = ''; }, 1200);
          } else {
            window.scrollTo({top: lastScrollY, behavior:'instant'});
          }
        } else {
          window.scrollTo({top: lastScrollY, behavior:'instant'});
        }
      }, 20);
    } else if(name === 'product'){
      lastScrollY = window.scrollY;
      document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
      document.getElementById('productPage').classList.add('active');
      window.scrollTo({top:0, behavior:'instant'});
    } else {
      lastScrollY = window.scrollY;
      document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
      document.getElementById('ordersPage').classList.add('active');
      window.scrollTo({top:0, behavior:'instant'});
    }
  };

  /* ── ORDER SINGLE ITEM ── */
  window.orderSingleItem = function(id){
    const p = PRODUCTS.find(x=>x.id==id);
    if(!p) return;
    const qty = cart[id] || 1;
    const sub = p.price * qty;
    // Set pendingOrder with only this item
    const lines = [`• ${p.name} × ${qty}  →  ₹${sub.toLocaleString('en-IN')}`, `\n💰 TOTAL: ₹${sub.toLocaleString('en-IN')}`];
    pendingOrder = {
      name:'', phone:'', address:'', note:'',
      lines, total: sub, ids: [String(id)],
      singleItem: true
    };
    // Pre-fill summary in order modal
    document.getElementById('sumList').innerHTML = `<li>${p.name} × ${qty} — ₹${sub.toLocaleString('en-IN')}</li>`;
    document.getElementById('sumTotal').textContent = 'Total: ₹' + sub.toLocaleString('en-IN');
    if(currentUser) document.getElementById('oName').value = currentUser.displayName||'';
    // Close drawer, open order modal
    document.getElementById('drawer').classList.remove('on');
    document.getElementById('overlay').classList.remove('on');
    document.getElementById('modWrap').classList.add('on');
  };

  /* ── CART ── */
  let cart={}, currentUser=null, pendingOrder=null, selectedPay=null;

  window.addToCart = function(id, btn){
    cart[id]=(cart[id]||0)+1;
    if(btn){btn.textContent='✅ Added!';btn.classList.add('done');setTimeout(()=>{btn.textContent='🛒 Add to Cart';btn.classList.remove('done');},1300);}
    renderCart();showToast('Added to cart 💓','ok');
  };

  window.changeQty = function(id,d){
    cart[id]=(cart[id]||0)+d;
    if(cart[id]<=0) delete cart[id];
    renderCart();
  };

  function renderCart(){
    const ids=Object.keys(cart);
    const badge=document.getElementById('badge');
    const emptyEl=document.getElementById('emptyCart');
    const listEl=document.getElementById('cartList');
    const totalRow=document.getElementById('dtotal');
    const btnO=document.getElementById('btnOrder');
    const qty=ids.reduce((s,id)=>s+cart[id],0);
    badge.textContent=qty; badge.classList.toggle('off',qty===0);
    if(!ids.length){emptyEl.style.display='';listEl.innerHTML='';totalRow.style.display='none';btnO.disabled=true;return;}
    emptyEl.style.display='none';totalRow.style.display='flex';btnO.disabled=false;
    let total=0;
    listEl.innerHTML=ids.map(id=>{
      const p=PRODUCTS.find(x=>x.id==id);const sub=p.price*cart[id];total+=sub;
      return`<div class="ci">
        <img src="${p.imgs[0]}" alt="${p.name}"/>
        <div class="ci-info" style="width:100%">
          <div class="ci-name">${p.name}</div>
          <div class="ci-price">₹${p.price.toLocaleString('en-IN')} × ${cart[id]} = <strong>₹${sub.toLocaleString('en-IN')}</strong></div>
          <div class="ci-delivery">🚚 ${p.charge===0?'FREE delivery':'₹'+p.charge+' delivery'} · Expected in ${p.delivery}</div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:6px">
            <div class="ci-qty">
              <button class="qb" onclick="changeQty(${id},-1)">−</button>
              <span class="qn">${cart[id]}</span>
              <button class="qb" onclick="changeQty(${id},+1)">+</button>
            </div>
            <button class="btn-order-single" onclick="orderSingleItem(${id})">⚡ Order This Only</button>
          </div>
        </div>
      </div>`;
    }).join('');
    document.getElementById('totalAmt').textContent='₹'+total.toLocaleString('en-IN');
  }

  /* ── DRAWER ── */
  const overlay=document.getElementById('overlay'),drawer=document.getElementById('drawer');
  window.openDrawer=()=>{drawer.classList.add('on');overlay.classList.add('on');};
  const closeDrawer=()=>{drawer.classList.remove('on');overlay.classList.remove('on');};
  document.getElementById('fabCart').onclick=openDrawer;
  document.getElementById('dclose').onclick=closeDrawer;
  overlay.onclick=closeDrawer;

  /* ── ORDER FLOW ── */
  document.getElementById('btnOrder').onclick=()=>{
    const ids=Object.keys(cart);let total=0;
    document.getElementById('sumList').innerHTML=ids.map(id=>{
      const p=PRODUCTS.find(x=>x.id==id);const sub=p.price*cart[id];total+=sub;
      return`<li>${p.name} × ${cart[id]} — ₹${sub.toLocaleString('en-IN')}</li>`;
    }).join('');
    document.getElementById('sumTotal').textContent='Total: ₹'+total.toLocaleString('en-IN');
    if(currentUser) document.getElementById('oName').value=currentUser.displayName||'';
    document.getElementById('modWrap').classList.add('on');closeDrawer();
  };
  document.getElementById('modCancel').onclick=()=>document.getElementById('modWrap').classList.remove('on');
  document.getElementById('modWrap').onclick=e=>{if(e.target===document.getElementById('modWrap'))document.getElementById('modWrap').classList.remove('on');};

  document.getElementById('btnSend').onclick=()=>{
    const name=document.getElementById('oName').value.trim();
    const phone=document.getElementById('oPhone').value.trim();
    const address=document.getElementById('oAddress').value.trim();
    const note=document.getElementById('oNote').value.trim();
    if(!name||!phone){showToast('Please fill name and phone 👆','');return;}
    const ids=Object.keys(cart);let total=0;
    const lines=ids.map(id=>{const p=PRODUCTS.find(x=>x.id==id);const sub=p.price*cart[id];total+=sub;return`• ${p.name} × ${cart[id]} → ₹${sub.toLocaleString('en-IN')}`;});
    lines.push(`\n💰 TOTAL: ₹${total.toLocaleString('en-IN')}`);
    pendingOrder={name,phone,address,note,lines,total,ids};
    document.getElementById('payAmount').textContent='₹'+total.toLocaleString('en-IN');
    document.getElementById('modWrap').classList.remove('on');
    selectedPay=null;
    document.getElementById('codOpt').classList.remove('selected');
    document.getElementById('onlineOpt').classList.remove('selected');
    document.getElementById('btnPay').textContent='Confirm →';
    document.getElementById('payWrap').classList.add('on');
  };

  /* ── PAYMENT ── */
  document.getElementById('codOpt').onclick=()=>{selectedPay='cod';document.getElementById('codOpt').classList.add('selected');document.getElementById('onlineOpt').classList.remove('selected');document.getElementById('btnPay').textContent='✅ Confirm COD Order →';};
  document.getElementById('onlineOpt').onclick=()=>{selectedPay='online';document.getElementById('onlineOpt').classList.add('selected');document.getElementById('codOpt').classList.remove('selected');document.getElementById('btnPay').textContent='🔒 Pay Online →';};
  document.getElementById('btnPayBack').onclick=()=>{document.getElementById('payWrap').classList.remove('on');document.getElementById('modWrap').classList.add('on');};
  document.getElementById('payWrap').onclick=e=>{if(e.target===document.getElementById('payWrap'))document.getElementById('payWrap').classList.remove('on');};

  document.getElementById('btnPay').onclick=()=>{
    if(!pendingOrder){showToast('Something went wrong','bad');return;}
    if(!selectedPay){showToast('Please select a payment method 👆','');return;}
    if(selectedPay==='cod'){document.getElementById('payWrap').classList.remove('on');finalizeOrder(pendingOrder,'COD');return;}
    const {name,phone,total,ids}=pendingOrder;
    const opts={key:"rzp_test_T1ndLAyHATAitW",amount:total*100,currency:"INR",name:"Buy with Love 💓",description:`${ids.length} item(s)`,prefill:{name,email:currentUser.email,contact:phone},theme:{color:"#C2185B"},
      handler:async r=>{document.getElementById('payWrap').classList.remove('on');await finalizeOrder(pendingOrder,r.razorpay_payment_id);},
      modal:{ondismiss:()=>showToast('Payment cancelled','bad')}};
    try{new Razorpay(opts).open();}catch(e){showToast('Use COD instead','bad');}
  };

  async function finalizeOrder(order,paymentId){
    const {name,phone,address,note,lines,total,ids}=order;
    try{
      await emailjs.send(EJ_SERVICE,EJ_OWNER,{to_email:"sumitmethewad@gmail.com",customer_name:name,customer_phone:phone,customer_address:address||'Not provided',customer_note:note||'None',order_details:lines.join('\n'),order_total:'₹'+total.toLocaleString('en-IN'),user_email:currentUser.email});
      try{await emailjs.send(EJ_SERVICE,EJ_CUSTOMER,{to_email:currentUser.email,customer_name:name,customer_phone:phone,customer_address:address||'Not provided',customer_note:note||'None',order_details:lines.join('\n'),order_total:'₹'+total.toLocaleString('en-IN'),user_email:currentUser.email});}catch(e){}
      if(window._fb&&currentUser){
        const {db,doc,setDoc,serverTimestamp}=window._fb;
        const orderItems=ids.map(id=>{const p=PRODUCTS.find(x=>x.id==id);return{id:p.id,name:p.name,price:p.price,qty:cart[id],subtotal:p.price*cart[id]};});
        await setDoc(doc(db,'orders','order_'+Date.now()),{userId:currentUser.uid,userEmail:currentUser.email,customerName:name,customerPhone:phone,customerAddress:address||'',customerNote:note||'',items:orderItems,total,paymentId,status:'confirmed',createdAt:serverTimestamp()});
      }
      const so=document.getElementById('successOverlay');
      document.getElementById('successMsg').textContent='Confirmation sent to '+currentUser.email+' · Payment: '+paymentId;
      so.classList.add('show');setTimeout(()=>so.classList.remove('show'),4000);
      // Single item order — remove only that product from cart
      if(pendingOrder && pendingOrder.singleItem){
        pendingOrder.ids.forEach(id=>delete cart[id]);
      } else {
        cart={};
      }
      renderCart();pendingOrder=null;
      ['oName','oPhone','oNote'].forEach(x=>document.getElementById(x).value='');
      document.getElementById('oAddress').value='';
    }catch(e){console.error(e);showToast('Order failed. Try again.','bad');}
  }

  /* ── MY ORDERS ── */
  document.getElementById('btnMyOrders').onclick=()=>loadOrders();

  async function loadOrders(){
    showPage('orders');window.scrollTo({top:0,behavior:'smooth'});
    const listEl=document.getElementById('ordersList');
    listEl.innerHTML='<p style="text-align:center;color:var(--muted);padding:30px">Loading…</p>';
    // Pre-fill return form with user name
    if(currentUser && currentUser.displayName){
      const retName = document.getElementById('retName');
      if(retName && !retName.value) retName.value = currentUser.displayName;
    }
    try{
      const {db,collection,query,where,getDocs}=window._fb;
      const snap=await getDocs(query(collection(db,'orders'),where('userId','==',currentUser.uid)));
      if(snap.empty){listEl.innerHTML='<div class="no-orders"><span class="icon">📭</span><p style="font-weight:700;margin-bottom:4px">No orders yet</p><p style="font-size:.82rem">Start shopping!</p></div>';return;}
      const orders=[];snap.forEach(d=>orders.push({id:d.id,...d.data()}));
      orders.sort((a,b)=>(b.createdAt?.seconds||0)-(a.createdAt?.seconds||0));

      // Populate order dropdown in return form
      const retSelect = document.getElementById('retOrderId');
      if(retSelect){
        retSelect.innerHTML = '<option value="">-- Select your order --</option>';
        orders.forEach(o=>{
          if(o.status !== 'cancelled'){
            const date = o.createdAt ? new Date(o.createdAt.seconds*1000).toLocaleDateString('en-IN',{day:'numeric',month:'short'}) : '';
            const items = o.items ? o.items.map(i=>i.name).join(', ').substring(0,40) : '';
            retSelect.innerHTML += `<option value="${o.id}">#${o.id.replace('order_','')} · ${date} · ₹${o.total?.toLocaleString('en-IN')}</option>`;
          }
        });
      }

      listEl.innerHTML=orders.map(o=>{
        const date=o.createdAt?new Date(o.createdAt.seconds*1000).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}):'Just now';
        const items=o.items.map(i=>`${i.name} × ${i.qty}`).join(', ');
        const statusClass=o.status==='cancelled'?'status-cancelled':'status-confirmed';
        const statusText=o.status==='cancelled'?'❌ Cancelled':'✅ Confirmed';
        return`<div class="order-card" id="oc_${o.id}">
          <div class="order-card-head">
            <div><div class="order-id">Order #${o.id.replace('order_','')}</div><div class="order-date">📅 ${date}</div></div>
            <span class="order-status ${statusClass}">${statusText}</span>
          </div>
          <div class="order-items">🛍️ ${items}</div>
          ${o.customerAddress?`<div style="font-size:.78rem;color:var(--muted);margin-bottom:6px">📍 ${o.customerAddress}</div>`:''}
          <div class="order-total">₹${o.total?.toLocaleString('en-IN')}</div>
          <div class="order-payment">💳 Payment: ${o.paymentId||'N/A'}</div>
          <div class="order-actions">
            ${o.status!=='cancelled'?`<button class="btn-cancel-order" onclick="cancelOrder('${o.id}',this)">✕ Cancel</button>`:''}
            <button class="btn-delete-order" onclick="deleteOrder('${o.id}',this)">🗑️ Delete</button>
          </div>
        </div>`;
      }).join('');
    }catch(e){console.error(e);listEl.innerHTML='<p style="text-align:center;color:#c62828;padding:20px">Could not load orders.</p>';}
  }

  /* ── CANCEL ORDER ── */
  let cancelId=null,cancelBtn=null;
  window.cancelOrder=function(id,btn){cancelId=id;cancelBtn=btn;document.getElementById('cancelWrap').classList.add('on');};
  document.getElementById('btnKeep').onclick=()=>{document.getElementById('cancelWrap').classList.remove('on');cancelId=null;cancelBtn=null;};
  document.getElementById('btnConfirmCancel').onclick=async()=>{
    if(!cancelId)return;
    const btn=document.getElementById('btnConfirmCancel');
    btn.disabled=true;btn.textContent='Cancelling…';
    try{
      const {db,doc,setDoc}=window._fb;
      await setDoc(doc(db,'orders',cancelId),{status:'cancelled'},{merge:true});
      document.getElementById('cancelWrap').classList.remove('on');
      showToast('Order cancelled ✅','ok');
      const card=document.getElementById('oc_'+cancelId);
      if(card){
        card.querySelector('.order-status').textContent='❌ Cancelled';
        card.querySelector('.order-status').className='order-status status-cancelled';
        card.style.borderLeftColor='#c62828';
        if(cancelBtn)cancelBtn.remove();
      }
      cancelId=null;cancelBtn=null;
    }catch(e){console.error(e);showToast('Could not cancel','bad');}
    finally{btn.disabled=false;btn.textContent='Yes, Cancel';}
  };

  /* ── Return / Exchange Form ── */
  document.getElementById('btnReturnSubmit').onclick = async function(){
    const name    = document.getElementById('retName').value.trim();
    const phone   = document.getElementById('retPhone').value.trim();
    const orderId = document.getElementById('retOrderId').value;
    const type    = document.getElementById('retType').value;
    const reason  = document.getElementById('retReason').value.trim();
    if(!name || !phone || !orderId || !reason){
      showToast('Please fill all required fields 👆',''); return;
    }
    const orderDisplay = '#' + orderId.replace('order_','');
    const btn = document.getElementById('btnReturnSubmit');
    btn.disabled=true; btn.textContent='Sending…';
    try {
      // Send to owner
      await emailjs.send(EJ_SERVICE, EJ_OWNER, {
        to_email:         'sumitmethewad@gmail.com',
        customer_name:    name,
        customer_phone:   phone,
        customer_address: 'Order ID: ' + orderDisplay,
        customer_note:    '↩️ RETURN/EXCHANGE REQUEST — Type: ' + type,
        order_details:    'Order: '+orderDisplay+'\nType: '+type+'\nReason: '+reason,
        order_total:      'Return Request',
        user_email:       currentUser?.email || 'N/A'
      });
      // Send confirmation to customer (Firebase verified email only)
      try {
        await emailjs.send(EJ_SERVICE, EJ_CUSTOMER, {
          to_email:         currentUser.email,
          customer_name:    name,
          customer_phone:   phone,
          customer_address: 'Order ID: ' + orderDisplay,
          customer_note:    'Your return/exchange request has been received.',
          order_details:    'Request Type: '+type+'\nOrder: '+orderDisplay+'\nReason: '+reason+'\n\nWe will contact you within 24-48 hours.',
          order_total:      'Return Request Received ✅',
          user_email:       currentUser.email
        });
      } catch(e){ console.warn('Customer return email failed', e); }

      showToast('Return request sent! Confirmation email sent to you 📧','ok');
      document.getElementById('retReason').value='';
      document.getElementById('retOrderId').value='';
    } catch(e){
      console.error(e);
      const msg = encodeURIComponent('Return/Exchange Request\nName: '+name+'\nPhone: '+phone+'\nOrder: '+orderDisplay+'\nType: '+type+'\nReason: '+reason);
      window.open('https://wa.me/918956458529?text='+msg,'_blank');
      showToast('Request sent via WhatsApp 💬','ok');
    } finally { btn.disabled=false; btn.textContent='Submit Request 📨'; }
  };

  /* ── DELETE ORDER ── */
  window.deleteOrder=async function(id,btn){
    if(!confirm('Delete this order from history?'))return;
    btn.disabled=true;btn.textContent='Deleting…';
    try{
      const {db,deleteDoc,doc}=window._fb;
      await deleteDoc(doc(db,'orders',id));
      const card=document.getElementById('oc_'+id);
      if(card){card.style.transition='all .3s';card.style.opacity='0';card.style.transform='translateX(30px)';setTimeout(()=>{card.remove();if(!document.querySelector('.order-card'))document.getElementById('ordersList').innerHTML='<div class="no-orders"><span class="icon">📭</span><p style="font-weight:700">No orders yet</p></div>';},300);}
      showToast('Deleted 🗑️','ok');
    }catch(e){console.error(e);btn.disabled=false;btn.textContent='🗑️ Delete';showToast('Could not delete','bad');}
  };

  /* ── AUTH ── */
  function waitFb(cb){const check=()=>window._fb?cb():setTimeout(check,50);check();}
  waitFb(()=>{
    const {auth,db,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,updateProfile,sendEmailVerification,doc,setDoc,serverTimestamp}=window._fb;

    onAuthStateChanged(auth,async user=>{
      if(user){
        currentUser=user;
        document.getElementById('authWall').classList.add('hidden');
        document.getElementById('mainNav').style.display='block';
        if(!user.emailVerified){
          document.getElementById('verifyBanner').classList.add('show');
          document.getElementById('fabs').style.display='none';
          try{await sendEmailVerification(user);}catch(_){}
        }else{
          document.getElementById('verifyBanner').classList.remove('show');
          document.getElementById('fabs').style.display='flex';
        }
      }else{
        currentUser=null;
        document.getElementById('authWall').classList.remove('hidden');
        document.getElementById('mainNav').style.display='none';
        document.getElementById('fabs').style.display='none';
        document.getElementById('verifyBanner').classList.remove('show');
      }
    });

    document.getElementById('loginBtn').onclick=async()=>{
      const email=document.getElementById('loginEmail').value.trim();
      const pass=document.getElementById('loginPass').value;
      const errEl=document.getElementById('loginErr');const btn=document.getElementById('loginBtn');
      errEl.classList.remove('show');btn.disabled=true;btn.textContent='Signing in…';
      try{await signInWithEmailAndPassword(auth,email,pass);}
      catch(e){errEl.textContent=friendly(e.code);errEl.classList.add('show');}
      finally{btn.disabled=false;btn.textContent='Sign In →';}
    };

    document.getElementById('signupBtn').onclick=async()=>{
      const name=document.getElementById('signupName').value.trim();
      const email=document.getElementById('signupEmail').value.trim();
      const pass=document.getElementById('signupPass').value;
      const phone=document.getElementById('signupPhone').value.trim();
      const errEl=document.getElementById('signupErr');const btn=document.getElementById('signupBtn');
      if(!name||!email||!pass){errEl.textContent='Please fill all fields.';errEl.classList.add('show');return;}
      errEl.classList.remove('show');btn.disabled=true;btn.textContent='Creating…';
      try{
        const cred=await createUserWithEmailAndPassword(auth,email,pass);
        await updateProfile(cred.user,{displayName:name});
        try{await setDoc(doc(db,'users',cred.user.uid),{name,email,phone:phone||'',createdAt:serverTimestamp()});}catch(_){}
      }catch(e){errEl.textContent=friendly(e.code);errEl.classList.add('show');}
      finally{btn.disabled=false;btn.textContent='Create Account →';}
    };

    document.getElementById('logoutBtn').onclick=()=>signOut(auth);
    document.getElementById('btnResend').onclick=async()=>{
      const btn=document.getElementById('btnResend');btn.disabled=true;btn.textContent='Sending…';
      try{await sendEmailVerification(auth.currentUser);showToast('Verification email sent! Check inbox 📧','ok');}
      catch(e){showToast('Could not resend. Try again.','bad');}
      finally{setTimeout(()=>{btn.disabled=false;btn.textContent='Resend Email';},30000);}
    };

    ['loginEmail','loginPass'].forEach(id=>document.getElementById(id).addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('loginBtn').click();}));
    ['signupName','signupEmail','signupPass','signupPhone'].forEach(id=>document.getElementById(id).addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('signupBtn').click();}));
    document.querySelectorAll('.auth-tab').forEach(tab=>{tab.onclick=()=>{document.querySelectorAll('.auth-tab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.auth-form').forEach(f=>f.classList.remove('active'));tab.classList.add('active');document.getElementById(tab.dataset.tab+'Form').classList.add('active');};});
  });

  function friendly(code){
    const m={'auth/invalid-email':'Invalid email.','auth/user-not-found':'No account with this email.','auth/wrong-password':'Incorrect password.','auth/email-already-in-use':'Email already registered.','auth/weak-password':'Password must be 6+ characters.','auth/too-many-requests':'Too many attempts. Wait a moment.','auth/invalid-credential':'Wrong email or password.'};
    return m[code]||'Something went wrong. Try again.';
  }

  let tT;
  window.showToast=function(msg,type){const el=document.getElementById('toast');el.textContent=msg;el.className='toast show'+(type?' '+type:'');clearTimeout(tT);tT=setTimeout(()=>el.classList.remove('show'),2800);};
