const pages = {
home: `<h1>Nnaemeka Onochie</h1>
      <p class="subtitle">Computer Science + AI + Full-stack @ Indiana University '26</p>
      <p>Experienced in frontend systems, AI-driven applications, and full-stack development. I build scalable solutions that solve real problems and create delightful user experiences.</p>
      <h2 class="sec-head">Warehouse Optimizer</h2>
      <p>Built a smart backroom management system that helps store teams <strong>pick the right work at the right time</strong> — preventing stockouts, reducing substitutions, and keeping shelves consistently stocked.</p>
      <img src="imgs/Warehouse-optimizer.png" alt="Warehouse Optimizer Dashboard" style="display:block; width:100%; height:auto; margin-bottom:1.5rem;" />
      <ul class="project-desc">
        <li>🎯 Problem — Associates lose time zig-zagging the backroom and working the wrong priorities, leading to long pick cycles, empty shelves, and recurring substitutions.</li>
        <li>🛠️ Approach — Tasks are scored by revenue at risk, deadline urgency, and substitution risk, then batched and sequenced to minimize walking under aisle/slot and cart capacity constraints. The system re-optimizes in near real time as events arrive (put-aways, moves, cycle counts, claims) stored in PostgreSQL, with a lightweight dashboard surfacing task urgency and route efficiency.</li>
        <li>📈 Impact — In scenario tests, walking distance dropped by 15–30% and late picks were significantly reduced — improving on-shelf availability with no new hardware required.</li>
      </ul>
      <button class="btn" data-page="services">View Our Services</button>
      <button class="btn" data-page="about">About Us</button>`,
about: `<h1>About Nnaemeka</h1>
      <img src="imgs/IMG_3341.JPG" alt="Nnaemeka Onochie" style="max-width:300px; border-radius:12px; display:block; margin:0 auto 2rem;" />
      <p class="subtitle" style="text-align:center; margin-bottom:1.5rem;">Software Engineer II Intern &mdash; Walmart Global Tech &bull; Bentonville, AR</p>
      <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:1rem; max-width:700px; margin:0 auto;">
        <li>Redesigned receiving and shortage flow using Spring Boot and Apache Kafka, replacing paper missing-pallet forms with an event-driven pipeline — eliminated 95% of paper forms, reduced claim processing time by 20%, and cut data entry errors by over 15%</strong>.</li>
        <li>Set up Kafka topics for receiving events, claims, and exceptions — enabling traceable audit logs and replayable recovery, saving over 5 hours of manual labor per site per week.</li>
        <li>Partnered with Operations and Finance on rollout and KPI tracking; projected to save approximately $25M annually through faster audits, reduced shrink risk, and improved exception resolution.</li>
      </ul>`,
services: `<h1>Our Services</h1>
      <p>We offer web design, UI/UX development, branding, and custom JavaScript solutions tailored to your business needs. Let us help you stand out.</p>
      <div class="card">
        <h2>Complete Website Transformation</h2>
        <p class="subtitle">Turn your outdated site into a conversion machine</p>
        <img src="imgs/Redesign-Your-Website-to-Do-What-Your-Customers-Want.jpg" alt="Web pic" style="display:block; width:100%; height:auto;" />
        <ul class="service-list">
          <p> Modern responsive design that works on all devices</p>
          <p> Performance optimization (3x faster load times)</p>
          <p> SEO improvements for better search rankings</p>
          <p> Conversion-focused UX that drives results</p>
        </ul>
      </div>`,
contact: `<h1>Contact Us</h1>
      <p>Have a project in mind? Reach out to us at <strong>nnaemekaacademy.com</strong> and we'll get back to you within 24 hours. We'd love to hear from you and.</p>
            <img src="imgs/Contact-Us-Page-Examples.jpg" alt="pls contact us" style="max-width:300px; border-radius:12px; display:block;" />`
};

//DOM
const app = document.querySelector("#app");
const links = document.querySelectorAll("nav a");

//functions
function setActiveLink(clickedLink) {
    links.forEach((link) => link.classList.remove("active"));
    clickedLink.classList.add("active");
}

function loadPage(pageID) {
    app.innerHTML = pages[pageID];
}

function handleClick(e){
    e.preventDefault();
    const pageID = e.currentTarget.id;
    setActiveLink(e.currentTarget);
    loadPage(pageID);
}

//EVent listeners
links.forEach((link) => {
    link.addEventListener("click", handleClick);
});

// Delegated click for in-page buttons (e.g. services button on home)
app.addEventListener("click", function (e) {
    if (e.target.dataset.page) {
        const targetID = e.target.dataset.page;
        setActiveLink(document.querySelector("#" + targetID));
        loadPage(targetID);
    }
});

loadPage("home");