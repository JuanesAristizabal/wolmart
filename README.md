<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Walcart is a fictional university project landing page for affordable groceries, home essentials, transparent pricing, and fast delivery." />
  <title>Walcart — Everyday Essentials, Honestly Priced</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

    :root{
      --navy:#0B2E4F;
      --navy-deep:#071F38;
      --blue:#145B93;
      --gold:#F2B705;
      --cream:#FAF7F0;
      --coral:#E85D3D;
      --mint:#DFF4E8;
      --ink:#12202E;
      --muted:#5E6B78;
      --white:#FFFFFF;
      --line:rgba(11,46,79,0.13);
      --shadow:0 22px 55px rgba(7,31,56,0.13);
      --radius:22px;
      --max:1180px;
    }

    *{margin:0;padding:0;box-sizing:border-box;}
    html{scroll-behavior:smooth;}
    body{
      font-family:'Inter',sans-serif;
      color:var(--ink);
      background:var(--cream);
      line-height:1.6;
    }
    h1,h2,h3{font-family:'Space Grotesk',sans-serif;font-weight:700;letter-spacing:-0.025em;}
    a{color:inherit;}
    .container{width:min(var(--max),88vw);margin:0 auto;}
    .eyebrow{
      display:inline-flex;
      align-items:center;
      gap:.45rem;
      font-weight:800;
      font-size:.76rem;
      letter-spacing:.14em;
      text-transform:uppercase;
      color:var(--coral);
      margin-bottom:.75rem;
    }
    .eyebrow::before{content:"";width:9px;height:9px;border-radius:99px;background:currentColor;}
    .section-pad{padding:5.6rem 0;}
    .section-head{max-width:720px;margin-bottom:2.8rem;}
    .section-head h2{font-size:clamp(2rem,4vw,3rem);line-height:1.08;margin-bottom:.9rem;}
    .section-head p{color:var(--muted);font-size:1.05rem;}

    /* NAV */
    .nav{
      position:sticky;top:0;z-index:100;
      background:rgba(250,247,240,.92);
      backdrop-filter:blur(16px);
      border-bottom:1px solid var(--line);
    }
    .nav-inner{height:74px;display:flex;align-items:center;justify-content:space-between;gap:1.5rem;}
    .logo{
      font-family:'Archivo Black',sans-serif;
      font-size:1.6rem;
      letter-spacing:-.04em;
      color:var(--navy);
      text-decoration:none;
      white-space:nowrap;
    }
    .logo span{color:var(--coral);}
    .nav-links{display:flex;align-items:center;gap:1.7rem;font-weight:700;font-size:.92rem;color:rgba(18,32,46,.76);}
    .nav-links a{text-decoration:none;transition:.2s;}
    .nav-links a:hover{color:var(--coral);}
    .nav-cta{
      display:inline-flex;align-items:center;justify-content:center;
      background:var(--navy);color:#fff;text-decoration:none;
      padding:.78rem 1.25rem;border-radius:999px;font-weight:800;font-size:.92rem;
      box-shadow:0 10px 22px rgba(7,31,56,.16);
    }
    .menu-toggle{display:none;}

    /* HERO */
    .hero{
      position:relative;
      overflow:hidden;
      background:
        radial-gradient(circle at 85% 12%, rgba(242,183,5,.24), transparent 28%),
        radial-gradient(circle at 12% 78%, rgba(232,93,61,.16), transparent 30%),
        linear-gradient(135deg,var(--navy-deep),var(--navy));
      color:#fff;
      padding:6.2rem 0 4.8rem;
    }
    .hero-grid{display:grid;grid-template-columns:1.03fr .97fr;gap:3.2rem;align-items:center;}
    .hero h1{font-size:clamp(2.7rem,5.6vw,5.7rem);line-height:.97;margin:.3rem 0 1.35rem;}
    .hero h1 em{font-style:normal;color:var(--gold);}
    .hero-copy{font-size:1.14rem;color:rgba(255,255,255,.78);max-width:610px;margin-bottom:2rem;}
    .btn-row{display:flex;gap:1rem;flex-wrap:wrap;align-items:center;}
    .btn{
      display:inline-flex;align-items:center;justify-content:center;gap:.5rem;
      padding:.95rem 1.45rem;border-radius:999px;text-decoration:none;font-weight:900;
      transition:.2s;min-height:48px;
    }
    .btn-primary{background:var(--gold);color:var(--navy-deep);}
    .btn-secondary{border:1px solid rgba(255,255,255,.25);color:#fff;background:rgba(255,255,255,.06);}
    .btn:hover{transform:translateY(-2px);}
    .trust-row{display:flex;gap:1.4rem;flex-wrap:wrap;margin-top:2rem;color:rgba(255,255,255,.73);font-size:.92rem;}
    .trust-row strong{color:#fff;}

    .hero-card{
      background:rgba(255,255,255,.1);
      border:1px solid rgba(255,255,255,.18);
      border-radius:34px;
      padding:1.2rem;
      box-shadow:0 35px 75px rgba(0,0,0,.28);
      backdrop-filter:blur(14px);
    }
    .cart-visual{
      min-height:500px;
      border-radius:26px;
      background:linear-gradient(180deg,#fff,#f7f0df);
      color:var(--ink);
      padding:1.4rem;
      position:relative;
      overflow:hidden;
    }
    .cart-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.2rem;}
    .cart-title{font-family:'Space Grotesk';font-weight:800;font-size:1.15rem;color:var(--navy);}
    .cart-pill{background:var(--mint);padding:.45rem .7rem;border-radius:999px;font-weight:800;color:#16603A;font-size:.8rem;}
    .product-grid{display:grid;grid-template-columns:1fr 1fr;gap:.9rem;}
    .product-mini{
      background:#fff;border:1px solid rgba(11,46,79,.1);border-radius:20px;
      padding:1rem;box-shadow:0 12px 30px rgba(7,31,56,.08);
    }
    .icon-box{height:102px;border-radius:16px;margin-bottom:.85rem;display:grid;place-items:center;font-size:3rem;}
    .bg-gold{background:#FFF0B9}.bg-mint{background:#DFF4E8}.bg-coral{background:#FFE0D8}.bg-blue{background:#E0F0FF}
    .product-mini h3{font-size:1rem;margin-bottom:.1rem;}
    .product-mini p{color:var(--muted);font-size:.82rem;}
    .price{font-weight:900;color:var(--coral);margin-top:.5rem;}
    .saving-box{position:absolute;left:1.4rem;right:1.4rem;bottom:1.4rem;background:var(--navy);color:#fff;border-radius:22px;padding:1.1rem;display:flex;justify-content:space-between;gap:1rem;align-items:center;}
    .saving-box strong{display:block;color:var(--gold);font-size:1.45rem;font-family:'Space Grotesk';}

    /* VALUE */
    .value-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.1rem;}
    .value-card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:1.5rem;box-shadow:0 12px 30px rgba(7,31,56,.06);}
    .value-card .num{width:44px;height:44px;border-radius:15px;display:grid;place-items:center;background:var(--navy);color:var(--gold);font-weight:900;margin-bottom:1rem;}
    .value-card h3{font-size:1.16rem;margin-bottom:.45rem;}
    .value-card p{color:var(--muted);font-size:.94rem;}

    /* DEALS */
    .deals{background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line);}
    .deals-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;}
    .deal-card{background:var(--cream);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;box-shadow:0 15px 35px rgba(7,31,56,.07);}
    .deal-img{height:190px;display:grid;place-items:center;font-size:4.5rem;position:relative;}
    .deal-img::after{content:"AI generated concept image";position:absolute;right:.8rem;bottom:.7rem;font-size:.65rem;font-weight:800;color:rgba(18,32,46,.55);background:rgba(255,255,255,.78);border-radius:999px;padding:.25rem .55rem;}
    .deal-body{padding:1.25rem;}
    .deal-body h3{font-size:1.25rem;margin-bottom:.35rem;}
    .deal-body p{color:var(--muted);font-size:.94rem;margin-bottom:.8rem;}
    .deal-price{display:flex;align-items:flex-end;gap:.6rem;}
    .deal-price strong{font-size:1.7rem;color:var(--navy);font-family:'Space Grotesk';line-height:1;}
    .deal-price span{text-decoration:line-through;color:var(--muted);font-weight:700;}

    /* COMPARISON */
    .compare{background:var(--navy);color:#fff;}
    .compare .eyebrow{color:var(--gold);}
    .compare .section-head p{color:rgba(255,255,255,.7);}
    .table-wrap{overflow:auto;border:1px solid rgba(255,255,255,.16);border-radius:var(--radius);background:rgba(255,255,255,.05);}
    table{width:100%;border-collapse:collapse;min-width:720px;}
    th,td{text-align:left;padding:1.05rem 1.2rem;border-bottom:1px solid rgba(255,255,255,.12);}
    th{font-family:'Space Grotesk';text-transform:uppercase;letter-spacing:.06em;font-size:.8rem;color:rgba(255,255,255,.58);}
    th:nth-child(2),td:nth-child(2){color:var(--gold);font-weight:900;}
    tr:last-child td{border-bottom:none;}

    /* BLOG + FAQ */
    .split-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.35rem;align-items:start;}
    .blog-card,.faq-box,.newsletter-box,.ad-card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:1.65rem;box-shadow:0 15px 35px rgba(7,31,56,.06);}
    .blog-card h3{font-size:1.55rem;margin:.45rem 0 .75rem;}
    .blog-card p{color:var(--muted);margin-bottom:1rem;}
    .read-link{color:var(--coral);font-weight:900;text-decoration:none;}
    details{border-bottom:1px solid var(--line);padding:1rem 0;}
    details:last-child{border-bottom:none;}
    summary{cursor:pointer;font-family:'Space Grotesk';font-weight:800;list-style:none;display:flex;justify-content:space-between;gap:1rem;}
    summary::-webkit-details-marker{display:none;}
    summary::after{content:"+";color:var(--coral);font-size:1.25rem;}
    details[open] summary::after{content:"–";}
    details p{color:var(--muted);font-size:.94rem;margin-top:.65rem;}

    /* NEWSLETTER */
    .newsletter-section{background:linear-gradient(135deg,var(--gold),#FFD85A);}
    .newsletter-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:2rem;align-items:center;}
    .newsletter-section h2{font-size:clamp(2rem,4vw,3.1rem);line-height:1.05;color:var(--navy-deep);}
    .newsletter-section p{color:rgba(7,31,56,.72);font-weight:600;margin-top:.9rem;}
    .newsletter-box form{display:flex;gap:.7rem;margin-top:1.1rem;}
    .newsletter-box input{flex:1;min-width:0;border:1px solid var(--line);padding:1rem;border-radius:14px;font:inherit;}
    .newsletter-box button{border:none;background:var(--navy);color:#fff;border-radius:14px;padding:0 1.2rem;font-weight:900;cursor:pointer;}
    .email-preview{margin-top:1rem;background:#F6F8FA;border:1px solid var(--line);border-radius:16px;padding:1rem;}
    .email-preview h3{font-size:1.05rem;color:var(--navy);}
    .email-preview p{font-size:.9rem;margin-top:.35rem;color:var(--muted);}

    /* ADS */
    .ads-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.2rem;}
    .ad-card .ad-label{font-size:.8rem;font-weight:900;color:#1A73E8;margin-bottom:.25rem;}
    .ad-card h3{color:#1A0DAB;font-size:1.25rem;line-height:1.25;margin-bottom:.35rem;}
    .ad-url{color:#0B8043;font-size:.88rem;margin-bottom:.5rem;}
    .ad-card p{color:#3C4043;font-size:.95rem;}

    footer{background:var(--navy-deep);color:rgba(255,255,255,.65);padding:2.4rem 0;}
    .footer-grid{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;align-items:center;}
    .footer-note{font-size:.86rem;}

    @media (max-width:980px){
      .hero-grid,.newsletter-grid,.split-grid{grid-template-columns:1fr;}
      .hero{padding:4.8rem 0 3.8rem;}
      .cart-visual{min-height:auto;}
      .saving-box{position:static;margin-top:1rem;}
      .value-grid{grid-template-columns:repeat(2,1fr);}
      .deals-grid{grid-template-columns:1fr 1fr;}
    }
    @media (max-width:720px){
      .nav-inner{height:auto;min-height:68px;align-items:flex-start;padding:1rem 0;}
      .nav-links{display:none;}
      .nav-cta{font-size:.84rem;padding:.66rem .9rem;}
      .hero{padding:3.7rem 0 3rem;}
      .hero-copy{font-size:1rem;}
      .product-grid,.value-grid,.deals-grid,.ads-grid{grid-template-columns:1fr;}
      .section-pad{padding:4rem 0;}
      .newsletter-box form{flex-direction:column;}
      .newsletter-box button{height:50px;}
      .trust-row{gap:.8rem;}
      .cart-visual{padding:1rem;}
      .deal-img{height:155px;}
    }
  </style>
</head>
<body>
  <nav class="nav" aria-label="Main navigation">
    <div class="container nav-inner">
      <a class="logo" href="#top">Wal<span>cart</span></a>
      <div class="nav-links" aria-label="Website sections">
        <a href="#why">Why us</a>
        <a href="#deals">Deals</a>
        <a href="#compare">Compare</a>
        <a href="#faq">FAQ</a>
        <a href="#blog">Blog</a>
      </div>
      <a class="nav-cta" href="#newsletter">Get weekly deals</a>
    </div>
  </nav>

  <header class="hero" id="top">
    <div class="container hero-grid">
      <div>
        <span class="eyebrow">Fictional university project</span>
        <h1>Everyday essentials, <em>honestly priced.</em></h1>
        <p class="hero-copy">Walcart is a fictional online retail store offering affordable groceries, home essentials, and fast delivery with transparent pricing and no membership fees.</p>
        <div class="btn-row">
          <a href="#newsletter" class="btn btn-primary">Start saving today</a>
          <a href="#compare" class="btn btn-secondary">Compare benefits</a>
        </div>
        <div class="trust-row">
          <div><strong>$0</strong> membership fees</div>
          <div><strong>$35+</strong> free shipping</div>
          <div><strong>30 days</strong> easy returns</div>
        </div>
      </div>

      <div class="hero-card" aria-label="Product preview">
        <div class="cart-visual">
          <div class="cart-top">
            <div class="cart-title">This week's cart</div>
            <div class="cart-pill">18% avg. savings</div>
          </div>
          <div class="product-grid">
            <article class="product-mini">
              <div class="icon-box bg-gold">🛒</div>
              <h3>Family groceries</h3>
              <p>Fresh basics for every week.</p>
              <div class="price">From $24.90</div>
            </article>
            <article class="product-mini">
              <div class="icon-box bg-mint">🥬</div>
              <h3>Fresh produce</h3>
              <p>Local-first sourcing.</p>
              <div class="price">From $3.50</div>
            </article>
            <article class="product-mini">
              <div class="icon-box bg-coral">🧼</div>
              <h3>Home care</h3>
              <p>Daily cleaning essentials.</p>
              <div class="price">From $5.99</div>
            </article>
            <article class="product-mini">
              <div class="icon-box bg-blue">📦</div>
              <h3>Fast delivery</h3>
              <p>Pickup or delivery options.</p>
              <div class="price">Free over $35</div>
            </article>
          </div>
          <div class="saving-box">
            <div>
              <strong>$12.40 saved</strong>
              <span>compared with a typical weekly cart</span>
            </div>
            <div>→</div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main>
    <section class="section-pad" id="why">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Why choose Walcart</span>
          <h2>A simpler way to buy the essentials you need every week.</h2>
          <p>Walcart focuses on clear prices, reliable delivery, and a curated product selection so customers can spend less time comparing and more time saving.</p>
        </div>
        <div class="value-grid">
          <article class="value-card">
            <div class="num">01</div>
            <h3>No membership required</h3>
            <p>Everyone gets the same low prices without annual fees or subscriptions.</p>
          </article>
          <article class="value-card">
            <div class="num">02</div>
            <h3>Transparent pricing</h3>
            <p>No hidden fees, confusing bundles, or surprise charges at checkout.</p>
          </article>
          <article class="value-card">
            <div class="num">03</div>
            <h3>Fast flexible delivery</h3>
            <p>Choose home delivery or same-day pickup at select local points.</p>
          </article>
          <article class="value-card">
            <div class="num">04</div>
            <h3>Local-first sourcing</h3>
            <p>Regional suppliers are prioritized whenever possible for fresher goods.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad deals" id="deals">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">AI-style product images</span>
          <h2>Popular weekly deals</h2>
          <p>These simple product visuals are designed as AI-style concept images for the university exercise.</p>
        </div>
        <div class="deals-grid">
          <article class="deal-card">
            <div class="deal-img bg-mint">🥗</div>
            <div class="deal-body">
              <h3>Fresh Essentials Box</h3>
              <p>Vegetables, fruit, and pantry basics for a smarter weekly shop.</p>
              <div class="deal-price"><strong>$29.90</strong><span>$36.80</span></div>
            </div>
          </article>
          <article class="deal-card">
            <div class="deal-img bg-gold">🍝</div>
            <div class="deal-body">
              <h3>Pantry Starter Pack</h3>
              <p>Pasta, rice, sauces, snacks, and breakfast basics in one bundle.</p>
              <div class="deal-price"><strong>$19.50</strong><span>$24.00</span></div>
            </div>
          </article>
          <article class="deal-card">
            <div class="deal-img bg-coral">🧴</div>
            <div class="deal-body">
              <h3>Home Care Kit</h3>
              <p>Cleaning and hygiene essentials for busy homes and students.</p>
              <div class="deal-price"><strong>$14.99</strong><span>$18.40</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad compare" id="compare">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Comparison table</span>
          <h2>Walcart vs. traditional big-box retailers</h2>
          <p>A clear comparison helps customers understand why they should choose Walcart over a traditional retailer.</p>
        </div>
        <div class="table-wrap">
          <table aria-label="Walcart comparison table">
            <thead>
              <tr><th>Feature</th><th>Walcart</th><th>Traditional big-box retailer</th></tr>
            </thead>
            <tbody>
              <tr><td>Membership fee</td><td>No membership fee</td><td>Often needed for best deals</td></tr>
              <tr><td>Pricing</td><td>Transparent everyday prices</td><td>Frequent bundles and changing promos</td></tr>
              <tr><td>Shipping</td><td>Free over $35</td><td>Varies by order or membership</td></tr>
              <tr><td>Local sourcing</td><td>Prioritized when available</td><td>Rarely emphasized</td></tr>
              <tr><td>Returns</td><td>30-day easy return policy</td><td>Often conditional</td></tr>
              <tr><td>Customer focus</td><td>Simple essential shopping</td><td>Large catalog, harder comparison</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section-pad" id="faq">
      <div class="container split-grid">
        <div>
          <div class="section-head">
            <span class="eyebrow">FAQ</span>
            <h2>Questions, answered</h2>
            <p>This FAQ section is included as part of the GEO/SEO website structure requested in the assignment.</p>
          </div>
          <div class="faq-box">
            <details open>
              <summary>What is Walcart?</summary>
              <p>Walcart is a fictional online retail store created for a university Google Ads and website exercise.</p>
            </details>
            <details>
              <summary>Does Walcart require a membership?</summary>
              <p>No. The brand promise is simple: honest prices without membership fees.</p>
            </details>
            <details>
              <summary>What products does Walcart sell?</summary>
              <p>Walcart focuses on groceries, pantry products, home care items, and everyday household essentials.</p>
            </details>
            <details>
              <summary>Does Walcart offer delivery?</summary>
              <p>Yes. The website presents delivery and same-day pickup as fictional service options.</p>
            </details>
            <details>
              <summary>Why should customers choose Walcart?</summary>
              <p>Because it combines transparent pricing, curated essentials, local-first sourcing, and simple delivery options.</p>
            </details>
          </div>
        </div>

        <div id="blog">
          <div class="section-head">
            <span class="eyebrow">Blog</span>
            <h2>Smart shopping content</h2>
            <p>A blog section helps the website look complete and supports search-friendly informational content.</p>
          </div>
          <article class="blog-card">
            <span class="eyebrow">Household budgeting</span>
            <h3>5 ways to stretch your grocery budget without sacrificing quality</h3>
            <p>Grocery bills can rise quickly when shoppers rely on last-minute purchases, confusing promotions, and unnecessary memberships. A smarter approach is to plan weekly meals, compare unit prices, buy seasonal products, and choose stores with clear everyday pricing.</p>
            <p>Walcart's fictional model is built around one idea: make essential shopping easier, more transparent, and more affordable.</p>
            <a class="read-link" href="#newsletter">Get more tips →</a>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad newsletter-section" id="newsletter">
      <div class="container newsletter-grid">
        <div>
          <span class="eyebrow" style="color:var(--navy-deep)">Newsletter</span>
          <h2>Get weekly savings and simple shopping tips in your inbox.</h2>
          <p>This mock newsletter form is part of the university exercise. It does not submit real data.</p>
        </div>
        <div class="newsletter-box">
          <h3>Sign up for Walcart Weekly</h3>
          <form onsubmit="alert('Thanks for signing up! This is a demo form.'); return false;">
            <input type="email" placeholder="you@email.com" aria-label="Email address" required />
            <button type="submit">Sign up</button>
          </form>
          <div class="email-preview">
            <h3>Newsletter preview</h3>
            <p><strong>Subject:</strong> This week's essentials: groceries, home care, and easy savings.</p>
            <p><strong>Content:</strong> Three quick deals, one budget tip, and new local-first product picks.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad" id="ads">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Google Ads variants</span>
          <h2>Sample ad copy for the campaign</h2>
          <p>These two ad variants can be used as examples when creating the Google Ads campaign for this published landing page.</p>
        </div>
        <div class="ads-grid">
          <article class="ad-card">
            <div class="ad-label">Sponsored</div>
            <h3>Affordable Groceries Online | No Membership Fees</h3>
            <div class="ad-url">juanesaristizabal.github.io/wolmart/</div>
            <p>Shop everyday essentials with honest prices, free shipping over $35, and fast delivery options.</p>
          </article>
          <article class="ad-card">
            <div class="ad-label">Sponsored</div>
            <h3>Save More on Daily Essentials | Walcart Deals</h3>
            <div class="ad-url">juanesaristizabal.github.io/wolmart/</div>
            <p>Compare prices, skip hidden fees, and get groceries and home essentials delivered with ease.</p>
          </article>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-grid">
      <a class="logo" href="#top" style="color:#fff">Wal<span>cart</span></a>
      <div class="footer-note">© 2026 Walcart. Fictional brand for a university Google Ads exercise.</div>
      <div class="footer-note">Everyday essentials, honestly priced.</div>
    </div>
  </footer>
</body>
</html>
