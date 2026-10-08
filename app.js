// Saltwater marketing site — plain JS.
// GA4 (gtag.js) and the GTM container are loaded in index.html; replace G-XXXXXXXXXX and GTM-XXXXXXX before deploying.
function ga(eventName, params) {
  if (window.gtag) window.gtag("event", eventName, params || {});
}
function handleSignup(event) {
  event.preventDefault();
  const clinic = document.getElementById("signup-clinic").value;
  ga("sign_up", { method: "email" });
  window.dataLayer.push({ event: "signup_submitted", clinic_size: "unknown" });
  alert(`Welcome, ${clinic}! Check your inbox.`);
  event.target.reset();
}
document.getElementById("signup-form").addEventListener("submit", handleSignup);
document.getElementById("hero-cta").addEventListener("click", () => ga("select_content", { content_type: "cta", item_id: "hero_start_free" }));
const POSTS = [
  { slug: "shipping-small", title: "The case for shipping small", date: "Aug 20, 2026", read: "6 min" },
  { slug: "logs-you-read", title: "Write logs you'll actually read", date: "Aug 12, 2026", read: "4 min" },
  { slug: "boring-stack", title: "In praise of the boring stack", date: "Jul 30, 2026", read: "8 min" },
];

function renderPosts() {
  const el = document.getElementById("posts");
  el.innerHTML = "";
  for (const post of POSTS) {
    const a = document.createElement("article");
    a.innerHTML =
      `<h2><a href="#${post.slug}" data-post="${post.slug}">${post.title}</a></h2>` +
      `<div class="meta">${post.date} · ${post.read} read</div>`;
    el.appendChild(a);
  }
}

function handleViewPost(slug) {
  ga("select_content", { content_type: "post", item_id: slug });
}

function handleSubscribe(event) {
  event.preventDefault();
  const email = document.getElementById("subscribe-email").value;
  ga("generate_lead", { lead_type: "newsletter" });
  window.dataLayer.push({ event: "newsletter_subscribed" });
  alert("Thanks for subscribing!");
  event.target.reset();
}

function handleContact(event) {
  event.preventDefault();
  const name = document.getElementById("contact-name").value;
  ga("generate_lead", { lead_type: "contact" });
  alert("Message sent!");
  event.target.reset();
}

document.getElementById("posts").addEventListener("click", (e) => {
  const slug = e.target.getAttribute("data-post");
  if (slug) handleViewPost(slug);
});
document.getElementById("subscribe-form").addEventListener("submit", handleSubscribe);
document.getElementById("contact-form").addEventListener("submit", handleContact);
renderPosts();
