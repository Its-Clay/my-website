const articles = [
  {
    title: "How I Built My Garage Bench Power Setup",
    date: "2026-02-01",
    summary: "A practical walkthrough of wiring, safety choices, and why I picked each part for my starter electronics bench.",
    url: "articles/garage-bench-power-setup.html",
    featured: true
  },
  {
    title: "3 Lessons From Rebuilding a Used Dirt Bike",
    date: "2026-01-17",
    summary: "What surprised me most about troubleshooting vibration, sourcing parts, and setting realistic rebuild checkpoints.",
    url: "articles/dirt-bike-rebuild-lessons.html",
    featured: true
  },
  {
    title: "Starting Small With Embedded Projects",
    date: "2025-12-28",
    summary: "A beginner-friendly plan for moving from blinking LEDs to complete projects without getting overwhelmed.",
    url: "articles/starting-small-with-embedded-projects.html",
    featured: false
  }
];

const featuredArticles = articles.filter((article) => article.featured);
let currentFeaturedIndex = 0;
let carouselInterval;

const featuredTitle = document.getElementById("featured-title");
const featuredSummary = document.getElementById("featured-summary");
const featuredLink = document.getElementById("featured-link");
const articlesList = document.getElementById("articles-list");
const prevButton = document.getElementById("prev-featured");
const nextButton = document.getElementById("next-featured");

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function renderFeaturedArticle() {
  const pool = featuredArticles.length > 0 ? featuredArticles : articles;
  const article = pool[currentFeaturedIndex];

  featuredTitle.textContent = article.title;
  featuredSummary.textContent = article.summary;
  featuredLink.href = article.url;
}

function moveFeatured(direction) {
  const pool = featuredArticles.length > 0 ? featuredArticles : articles;
  currentFeaturedIndex = (currentFeaturedIndex + direction + pool.length) % pool.length;
  renderFeaturedArticle();
}

function renderArticlesList() {
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  articlesList.innerHTML = sortedArticles
    .map(
      (article) => `
      <li>
        <a href="${article.url}">${article.title}</a>
        <p class="article-meta">${formatDate(article.date)} · ${article.featured ? "Featured" : "Article"}</p>
      </li>
    `
    )
    .join("");
}

function startCarousel() {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(() => moveFeatured(1), 5000);
}

prevButton.addEventListener("click", () => {
  moveFeatured(-1);
  startCarousel();
});

nextButton.addEventListener("click", () => {
  moveFeatured(1);
  startCarousel();
});

renderFeaturedArticle();
renderArticlesList();
startCarousel();
