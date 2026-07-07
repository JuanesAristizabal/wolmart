<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Walcart — Everyday Essentials, Honestly Priced</title>
<meta name="description" content="Walcart is a fictional online retail store for affordable groceries, home essentials, transparent prices, and fast delivery." />
<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

:root{
  --navy:#0B2E4F;
  --navy2:#071F38;
  --blue:#164B7A;
  --gold:#F2B705;
  --cream:#FAF7F0;
  --cream2:#FFFDF8;
  --coral:#E85D3D;
  --green:#1F8A5B;
  --ink:#12202E;
  --muted:#5E6B77;
  --line:rgba(11,46,79,.13);
  --shadow:0 20px 55px rgba(7,31,56,.13);
  --radius:22px;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:Inter,sans-serif;color:var(--ink);background:var(--cream);line-height:1.6}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
h1,h2,h3{font-family:'Space Grotesk',sans-serif;line-height:1.08;letter-spacing:-.03em}
.eyebrow{font-size:.76rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:var(--coral)}
.section{padding:5.5rem 6vw}
.section-head{max-width:740px;margin-bottom:2.6rem}.section-head h2{font-size:clamp(2rem,4vw,3.1rem);margin-top:.5rem}.section-head p{margin-top:1rem;color:var(--muted);font-size:1.05rem}

/* Topbar / Nav */
.topbar{background:var(--navy2);color:#fff;text-align:center;padding:.65rem 1rem;font-size:.86rem;font-weight:700}.topbar span{color:var(--gold)}
nav{position:sticky;top:0;z-index:90;display:flex;align-items:center;justify-content:space-between;gap:1.2rem;padding:1rem 6vw;background:rgba(250,247,240,.92);backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}
.logo{font-family:'Archivo Black',sans-serif;font-size:1.45rem;color:var(--navy);letter-spacing:-.03em}.logo span{color:var(--coral)}
.nav-links{display:flex;gap:1.6rem;font-size:.92rem;font-weight:700;color:#2D3A46}.nav-links a{opacity:.78}.nav-links a:hover{opacity:1;color:var(--coral)}
.nav-actions{display:flex;align-items:center;gap:.8rem}.search{display:flex;align-items:center;gap:.45rem;background:#fff;border:1px solid var(--line);padding:.62rem .9rem;border-radius:999px;color:var(--muted);font-size:.88rem;min-width:210px}.nav-cta,.btn-primary{background:var(--navy);color:#fff;padding:.78rem 1.2rem;border-radius:999px;font-weight:800;box-shadow:0 10px 25px rgba(11,46,79,.18)}
.mobile-toggle{display:none;border:none;background:var(--navy);color:#fff;border-radius:10px;font-size:1.2rem;padding:.55rem .75rem}

/* Hero */
.hero{position:relative;overflow:hidden;background:linear-gradient(135deg,var(--navy2),var(--navy));color:#fff;padding:5.5rem 6vw 4.5rem}.hero:before{content:"";position:absolute;right:-160px;top:-220px;width:620px;height:620px;border-radius:50%;background:radial-gradient(circle,rgba(242,183,5,.28),transparent 68%)}.hero-grid{position:relative;display:grid;grid-template-columns:1.02fr .98fr;gap:3rem;align-items:center;max-width:1240px;margin:auto}.hero h1{font-size:clamp(2.8rem,6vw,5rem);margin:.8rem 0 1.1rem}.hero h1 em{font-style:normal;color:var(--gold)}.hero p{font-size:1.15rem;color:rgba(255,255,255,.82);max-width:590px;margin-bottom:1.8rem}.btn-row{display:flex;flex-wrap:wrap;gap:.9rem}.btn-primary{background:var(--gold);color:var(--navy2);display:inline-flex}.btn-secondary{border:1px solid rgba(255,255,255,.32);padding:.78rem 1.2rem;border-radius:999px;color:#fff;font-weight:800}.trust-row{display:flex;gap:1.3rem;flex-wrap:wrap;margin-top:1.7rem;color:rgba(255,255,255,.74);font-weight:700;font-size:.92rem}.trust-row strong{color:#fff}.hero-card{background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.16);border-radius:32px;padding:1.1rem;box-shadow:var(--shadow);backdrop-filter:blur(10px)}.mockup{background:#fff;border-radius:24px;color:var(--ink);padding:1.2rem}.mockup-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}.cart-title{font-weight:900}.badge{background:rgba(31,138,91,.12);color:var(--green);padding:.35rem .6rem;border-radius:999px;font-size:.78rem;font-weight:900}.hero-products{display:grid;grid-template-columns:1fr 1fr;gap:.8rem}.hero-product{background:var(--cream2);border:1px solid var(--line);border-radius:18px;padding:1rem}.emoji{font-size:2rem}.hero-product h4{font-size:.95rem;margin:.35rem 0}.price{font-size:1.3rem;font-weight:900;color:var(--navy)}.save{font-size:.8rem;color:var(--green);font-weight:800}.checkout{margin-top:1rem;background:var(--navy);color:#fff;border-radius:18px;padding:1rem;display:flex;justify-content:space-between;align-items:center}.checkout strong{color:var(--gold)}

/* Stats / categories */
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;max-width:1150px;margin:-2.2rem auto 0;position:relative;z-index:3;padding:0 6vw}.stat{background:#fff;border:1px solid var(--line);border-radius:20px;padding:1.4rem;text-align:center;box-shadow:0 10px 35px rgba(7,31,56,.08)}.stat strong{display:block;font-family:'Space Grotesk';font-size:2rem;color:var(--navy)}.stat span{color:var(--muted);font-size:.9rem;font-weight:700}
.categories{display:grid;grid-template-columns:repeat(6,1fr);gap:1rem}.category{background:#fff;border:1px solid var(--line);border-radius:20px;padding:1.2rem;text-align:center;transition:.2s}.category:hover,.product:hover,.why-card:hover{transform:translateY(-4px);box-shadow:0 18px 45px rgba(7,31,56,.1)}.category div{font-size:2rem}.category strong{display:block;margin-top:.3rem;color:var(--navy)}

/* Cards */
.why-grid,.product-grid,.blog-grid,.testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem}.why-card,.product,.blog-card,.testimonial{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:1.6rem;transition:.2s}.icon{width:48px;height:48px;border-radius:16px;background:rgba(242,183,5,.18);display:grid;place-items:center;font-size:1.45rem;margin-bottom:1rem}.why-card h3,.blog-card h3{font-size:1.25rem;margin-bottom:.55rem}.why-card p,.blog-card p,.testimonial p{color:var(--muted);font-size:.95rem}.product-img{height:150px;border-radius:18px;background:linear-gradient(135deg,#fff4c7,#e9f6ef);display:grid;place-items:center;font-size:4rem;margin-bottom:1rem}.product-top{display:flex;justify-content:space-between;gap:1rem;align-items:start}.product h3{font-size:1.15rem}.old{text-decoration:line-through;color:#8b98a4;font-size:.85rem;margin-right:.4rem}.product button{width:100%;margin-top:1rem;border:none;background:var(--navy);color:#fff;border-radius:999px;padding:.8rem;font-weight:900;cursor:pointer}.deals{background:#fff}.deal-banner{display:grid;grid-template-columns:1.1fr .9fr;gap:2rem;align-items:center;background:linear-gradient(135deg,var(--gold),#FFD766);border-radius:34px;padding:2.5rem;box-shadow:var(--shadow)}.deal-banner h2{font-size:clamp(2rem,4vw,3.4rem);color:var(--navy2)}.coupon{background:var(--navy2);color:#fff;border-radius:24px;padding:2rem}.coupon code{display:block;background:rgba(255,255,255,.1);padding:.9rem;border-radius:12px;margin:1rem 0;font-size:1.2rem;color:var(--gold);font-weight:900;text-align:center}

/* How / comparison */
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem}.step{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:1.6rem}.num{font-family:'Space Grotesk';font-weight:900;color:var(--coral);font-size:2rem}.compare{background:var(--navy);color:#fff}.compare .section-head p{color:rgba(255,255,255,.7)}.compare .eyebrow{color:var(--gold)}.table-wrap{overflow:auto;border-radius:24px;border:1px solid rgba(255,255,255,.16)}table{width:100%;border-collapse:collapse;background:rgba(255,255,255,.04);min-width:720px}th,td{text-align:left;padding:1.05rem 1.2rem;border-bottom:1px solid rgba(255,255,255,.1)}th{font-size:.8rem;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.62)}td:nth-child(2){color:var(--gold);font-weight:900}.check{color:#7BE0A4;font-weight:900}.x{color:#ff9a88;font-weight:900}

/* Testimonials FAQ Blog Newsletter Footer */
.stars{color:var(--gold);font-weight:900;margin-bottom:.8rem}.person{margin-top:1rem;font-weight:900;color:var(--navy)}.faq-list{max-width:900px}.faq-item{background:#fff;border:1px solid var(--line);border-radius:18px;margin-bottom:.75rem;padding:1.1rem 1.2rem}.faq-item summary{font-family:'Space Grotesk';font-weight:800;cursor:pointer;list-style:none;display:flex;justify-content:space-between}.faq-item summary::-webkit-details-marker{display:none}.faq-item summary:after{content:'+';color:var(--coral);font-size:1.3rem}.faq-item[open] summary:after{content:'–'}.faq-item p{margin-top:.7rem;color:var(--muted)}.newsletter{background:linear-gradient(135deg,var(--navy2),var(--navy));color:#fff;border-radius:36px;padding:3rem;display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:center}.newsletter h2{font-size:clamp(2rem,4vw,3rem)}.newsletter ul{list-style:none;margin-top:1rem;color:rgba(255,255,255,.78)}.newsletter form{background:#fff;border-radius:24px;padding:1rem;display:flex;gap:.7rem}.newsletter input{flex:1;border:1px solid var(--line);padding:.95rem 1rem;border-radius:999px;font-family:Inter}.newsletter button{border:none;background:var(--gold);color:var(--navy2);border-radius:999px;padding:.95rem 1.2rem;font-weight:900}.final-cta{text-align:center;background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.final-cta h2{font-size:clamp(2rem,4vw,3.4rem);margin-bottom:1rem}footer{background:var(--navy2);color:rgba(255,255,255,.7);padding:3.5rem 6vw}.footer-grid{display:grid;grid-template-columns:1.6fr repeat(3,1fr);gap:2rem;max-width:1200px;margin:auto}.footer-grid h4{color:#fff;margin-bottom:.8rem}.footer-grid a{display:block;margin:.4rem 0;color:rgba(255,255,255,.62);font-size:.9rem}.fineprint{max-width:1200px;margin:2rem auto 0;padding-top:1.2rem;border-top:1px solid rgba(255,255,255,.12);font-size:.85rem}

@media(max-width:980px){
  .search{display:none}
  .mobile-toggle{display:block}
  .nav-links{display:none;position:absolute;top:100%;left:5vw;right:5vw;flex-direction:column;gap:.2rem;background:#fff;border:1px solid var(--line);border-radius:18px;padding:.7rem;box-shadow:0 16px 35px rgba(7,31,56,.14)}
  .nav-links.open{display:flex}
  .nav-links a{padding:.85rem 1rem;border-radius:12px}
  .nav-links a:hover{background:var(--cream)}
  .hero-grid,.deal-banner,.newsletter{grid-template-columns:1fr}
  .hero-grid{gap:2rem}
  .stats{grid-template-columns:repeat(2,1fr)}
  .categories{grid-template-columns:repeat(3,1fr)}
  .why-grid,.product-grid,.blog-grid,.testimonial-grid,.steps{grid-template-columns:1fr 1fr}
  .footer-grid{grid-template-columns:1fr 1fr}
  .hero{padding-top:4rem}
}
@media(max-width:640px){
  .topbar{font-size:.78rem;line-height:1.35}
  .section{padding:3.5rem 5vw}
  nav{padding:.9rem 5vw}
  .logo{font-size:1.25rem}
  .nav-actions .nav-cta{display:none}
  .hero{padding:3.4rem 5vw 3.6rem}
  .hero h1{font-size:clamp(2.35rem,12vw,2.9rem)}
  .hero p{font-size:1rem}
  .btn-row a{width:100%;justify-content:center;text-align:center}
  .hero-products,.stats,.categories,.why-grid,.product-grid,.blog-grid,.testimonial-grid,.steps,.footer-grid{grid-template-columns:1fr}
  .stats{margin:-1.3rem 5vw 0;padding:0}
  .stat{padding:1.1rem}
  .product-top{align-items:flex-start}
  .deal-banner,.newsletter{padding:1.45rem;border-radius:24px}
  .newsletter form{flex-direction:column;padding:.85rem}
  .newsletter input,.newsletter button{width:100%}
  .trust-row{gap:.8rem}
  .checkout{align-items:flex-start;flex-direction:column;gap:.4rem}
  table{min-width:620px}
}
@media(max-width:380px){
  .hero-product{padding:.8rem}
  .product-img{height:120px;font-size:3rem}
  .section-head h2{font-size:2rem}
}
</style>
</head>
<body>
<div class="topbar">🚚 Free delivery over <span>$35</span> · Today only: <span>15% OFF</span> local produce with code FRESH15</div>
<nav>
  <a class="logo" href="#">Wal<span>cart</span></a>
  <div class="nav-links">
    <a href="#categories">Categories</a><a href="#why">Why Us</a><a href="#deals">Deals</a><a href="#compare">Compare</a><a href="#faq">FAQ</a><a href="#blog">Blog</a>
  </div>
  <div class="nav-actions"><div class="search">🔎 Search groceries...</div><a class="nav-cta" href="#newsletter">Get Deals</a><button class="mobile-toggle">☰</button></div>
</nav>
<header class="hero">
  <div class="hero-grid">
    <div>
      <span class="eyebrow">No membership. No markup.</span>
      <h1>Everyday groceries, <em>without everyday markups.</em></h1>
      <p>Walcart is a fictional online retail store built for this university project. It offers affordable groceries, home essentials, transparent prices, and fast delivery.</p>
      <div class="btn-row"><a class="btn-primary" href="#products">Start Shopping</a><a class="btn-secondary" href="#compare">Compare Prices</a></div>
      <div class="trust-row"><span>★★★★★ <strong>4.9 rating</strong></span><span>🔒 Secure checkout</span><span>↩ 30-day returns</span></div>
    </div>
    <div class="hero-card" aria-label="Shopping cart preview">
      <div class="mockup">
        <div class="mockup-head"><div class="cart-title">Your weekly cart</div><div class="badge">Saved $18.40</div></div>
        <div class="hero-products">
          <div class="hero-product"><div class="emoji">🥑</div><h4>Fresh Avocados</h4><div class="price">$1.49</div><div class="save">12% less than average</div></div>
          <div class="hero-product"><div class="emoji">🥛</div><h4>Organic Milk</h4><div class="price">$2.99</div><div class="save">No membership needed</div></div>
          <div class="hero-product"><div class="emoji">🧻</div><h4>Paper Towels</h4><div class="price">$7.99</div><div class="save">Free pickup</div></div>
          <div class="hero-product"><div class="emoji">🍞</div><h4>Whole Grain Bread</h4><div class="price">$2.50</div><div class="save">Local bakery</div></div>
        </div>
        <div class="checkout"><div>Total today <strong>$28.97</strong></div><div>Checkout →</div></div>
      </div>
    </div>
  </div>
</header>
<div class="stats">
  <div class="stat"><strong>250K+</strong><span>Happy customers</span></div>
  <div class="stat"><strong>4.9★</strong><span>Average rating</span></div>
  <div class="stat"><strong>$0</strong><span>Membership fees</span></div>
  <div class="stat"><strong>30</strong><span>Days for returns</span></div>
</div>
<section class="section" id="categories">
  <div class="section-head"><span class="eyebrow">Featured categories</span><h2>Shop essentials by category.</h2><p>Simple product categories make the website feel real while keeping the exercise easy to present.</p></div>
  <div class="categories">
    <div class="category"><div>🥬</div><strong>Fresh Produce</strong></div><div class="category"><div>🥛</div><strong>Dairy</strong></div><div class="category"><div>🥩</div><strong>Meat</strong></div><div class="category"><div>🧼</div><strong>Cleaning</strong></div><div class="category"><div>🐶</div><strong>Pet Supplies</strong></div><div class="category"><div>🍫</div><strong>Snacks</strong></div>
  </div>
</section>
<section class="section" id="why">
  <div class="section-head"><span class="eyebrow">Why choose Walcart</span><h2>Retail-level prices with a simpler, more transparent experience.</h2></div>
  <div class="why-grid">
    <div class="why-card"><div class="icon">💸</div><h3>No membership required</h3><p>Every shopper gets the same low prices without annual subscriptions or hidden conditions.</p></div>
    <div class="why-card"><div class="icon">🏷️</div><h3>Transparent pricing</h3><p>Clear prices, visible savings, and no confusing bundled deals that look better than they are.</p></div>
    <div class="why-card"><div class="icon">🚚</div><h3>Fast, flexible delivery</h3><p>Free delivery over $35 and pickup options for customers who need groceries quickly.</p></div>
  </div>
</section>
<section class="section" id="products">
  <div class="section-head"><span class="eyebrow">Popular products</span><h2>Weekly essentials at honest prices.</h2></div>
  <div class="product-grid">
    <div class="product"><div class="product-img">🥑</div><div class="product-top"><h3>Fresh Avocados</h3><div class="price">$1.49</div></div><p><span class="old">$1.99</span> Local supplier pick</p><button>Add to cart</button></div>
    <div class="product"><div class="product-img">🥛</div><div class="product-top"><h3>Organic Milk</h3><div class="price">$2.99</div></div><p><span class="old">$3.69</span> Family-size value</p><button>Add to cart</button></div>
    <div class="product"><div class="product-img">🍞</div><div class="product-top"><h3>Whole Grain Bread</h3><div class="price">$2.50</div></div><p><span class="old">$3.10</span> Baked locally</p><button>Add to cart</button></div>
  </div>
</section>
<section class="section deals" id="deals">
  <div class="deal-banner"><div><span class="eyebrow">Limited offer</span><h2>Save 15% on local produce this week.</h2><p>Use this promotional section as part of the Google Ads landing page. It gives the campaign a clear offer and call to action.</p></div><div class="coupon"><h3>Weekly coupon</h3><code>FRESH15</code><p>Use at checkout for selected fruits and vegetables. Offer created for academic demonstration purposes.</p></div></div>
</section>
<section class="section">
  <div class="section-head"><span class="eyebrow">How it works</span><h2>Three steps from cart to kitchen.</h2></div>
  <div class="steps"><div class="step"><div class="num">01</div><h3>Browse products</h3><p>Search groceries, compare options, and build your weekly cart.</p></div><div class="step"><div class="num">02</div><h3>Order online</h3><p>Pay securely and choose delivery or pickup depending on your schedule.</p></div><div class="step"><div class="num">03</div><h3>Receive tomorrow</h3><p>Get essentials delivered quickly with simple returns if something is not right.</p></div></div>
</section>
<section class="section compare" id="compare">
  <div class="section-head"><span class="eyebrow">Comparison table</span><h2>Walcart vs. traditional big-box retailers.</h2><p>This section directly covers the GEO/website requirement from the assignment.</p></div>
  <div class="table-wrap"><table><thead><tr><th>Feature</th><th>Walcart</th><th>Traditional Big-Box</th></tr></thead><tbody>
    <tr><td>Membership fee</td><td><span class="check">✓</span> None</td><td><span class="x">✕</span> Often required for best prices</td></tr>
    <tr><td>Shipping</td><td><span class="check">✓</span> Free over $35</td><td>Varies by retailer</td></tr>
    <tr><td>Local sourcing</td><td><span class="check">✓</span> Prioritized</td><td>Rarely emphasized</td></tr>
    <tr><td>Return window</td><td><span class="check">✓</span> 30 days</td><td>Often shorter or conditional</td></tr>
    <tr><td>Price transparency</td><td><span class="check">✓</span> Upfront pricing</td><td>Promotions can be unclear</td></tr>
    <tr><td>Same-day pickup</td><td><span class="check">✓</span> Select locations</td><td>Limited availability</td></tr>
  </tbody></table></div>
</section>
<section class="section">
  <div class="section-head"><span class="eyebrow">Customer stories</span><h2>Designed to feel trustworthy for a Google Ads visitor.</h2></div>
  <div class="testimonial-grid"><div class="testimonial"><div class="stars">★★★★★</div><p>“I switched from traditional supermarkets and save around $40 every week.”</p><div class="person">Emily Carter</div></div><div class="testimonial"><div class="stars">★★★★★</div><p>“Delivery is fast and prices are always clear before checkout.”</p><div class="person">Michael Green</div></div><div class="testimonial"><div class="stars">★★★★★</div><p>“A simple grocery site with no confusing membership rules.”</p><div class="person">Sarah Jones</div></div></div>
</section>
<section class="section" id="faq">
  <div class="section-head"><span class="eyebrow">FAQ</span><h2>Frequently asked questions.</h2></div>
  <div class="faq-list"><details class="faq-item" open><summary>What makes Walcart different?</summary><p>Walcart focuses on transparent prices, no membership fees, and a curated selection of everyday essentials.</p></details><details class="faq-item"><summary>Does Walcart offer free shipping?</summary><p>Yes, free delivery is included on orders over $35, with pickup options available at select locations.</p></details><details class="faq-item"><summary>Is this a real company?</summary><p>No. Walcart is a fictional brand created for a university website and Google Ads exercise.</p></details><details class="faq-item"><summary>What is the return policy?</summary><p>Unopened items can be returned within 30 days for a full refund.</p></details></div>
</section>
<section class="section" id="blog">
  <div class="section-head"><span class="eyebrow">Blog</span><h2>Tips for smarter everyday spending.</h2></div>
  <div class="blog-grid"><article class="blog-card"><span class="eyebrow">Budgeting</span><h3>5 ways to stretch your grocery budget</h3><p>Small habits like comparing unit prices, shopping seasonal produce, and avoiding unnecessary fees can reduce weekly costs.</p></article><article class="blog-card"><span class="eyebrow">Local sourcing</span><h3>Why local suppliers matter</h3><p>Regional sourcing can support communities while helping customers access fresher everyday products.</p></article><article class="blog-card"><span class="eyebrow">Delivery</span><h3>How to plan a faster weekly shop</h3><p>A recurring cart and simple pickup options can make grocery shopping easier for busy households.</p></article></div>
</section>
<section class="section" id="newsletter">
  <div class="newsletter"><div><span class="eyebrow">Newsletter</span><h2>Join 120,000 smart shoppers.</h2><ul><li>✓ Weekly discounts</li><li>✓ Local offers</li><li>✓ Simple recipes</li></ul></div><form onsubmit="return false;"><input type="email" placeholder="you@email.com" required><button type="submit">Subscribe</button></form></div>
</section>
<section class="section final-cta"><h2>Ready to save on every grocery trip?</h2><p>Start shopping today with transparent pricing and zero membership fees.</p><br><a class="nav-cta" href="#products">Shop now</a></section>
<footer>
  <div class="footer-grid"><div><div class="logo" style="color:#fff">Wal<span>cart</span></div><p style="margin-top:.8rem">A fictional retail brand created for a university Google Ads and website exercise.</p></div><div><h4>Company</h4><a>About</a><a>Careers</a><a>Press</a></div><div><h4>Support</h4><a>Help Center</a><a>Shipping</a><a>Returns</a></div><div><h4>Legal</h4><a>Privacy</a><a>Terms</a><a>Cookies</a></div></div>
  <div class="fineprint">© 2026 Walcart. Academic project. Not affiliated with any real retailer.</div>
</footer>

<script>
  const menuButton = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.textContent = isOpen ? '×' : '☰';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = '☰';
      });
    });
  }
</script>
</body>
</html>
