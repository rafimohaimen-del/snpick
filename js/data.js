/**
 * snpick Central Article Data Store
 * Powers live search, recommendations, and dynamic category filtering
 */

const ARTICLES_DATA = [
  {
    id: "red-sea-shipping-crisis",
    title: "Why a shipping crisis in the Red Sea ends up on your grocery bill",
    summary: "Longer routes mean higher freight and insurance — and consumers pay last. The whole supply chain, in one place.",
    category: "Middle East",
    format: "Analysis",
    author: "Mosharaf",
    date: "Sep 26, 2026",
    readTime: "8 min read",
    url: "article.html",
    image: "assets/images/thumb-red-sea.svg",
    tags: ["RedSea", "SupplyChains", "Inflation"],
    featured: true
  },
  {
    id: "climate-finance-pledges",
    title: "Climate finance: what was pledged vs. what actually arrived",
    summary: "Summits announce billions. How much reaches the ground? Three questions to cut through it.",
    category: "Climate",
    format: "Explainer",
    author: "Mosharaf",
    date: "Sep 26, 2026",
    readTime: "6 min read",
    url: "article.html",
    image: "assets/images/thumb-climate.svg",
    tags: ["ClimateFinance", "COP", "GlobalSouth"]
  },
  {
    id: "global-rate-cuts-remittances",
    title: "Global rate cuts: what they mean for remittances and emerging currencies",
    summary: "A weaker dollar has winners and losers. A simple guide for families who rely on money from abroad.",
    category: "Economy",
    format: "Analysis",
    author: "Mosharaf",
    date: "Sep 26, 2026",
    readTime: "7 min read",
    url: "article.html",
    image: "assets/images/thumb-economy.svg",
    tags: ["InterestRates", "Remittances", "EmergingMarkets"]
  },
  {
    id: "europe-ai-rules",
    title: "Why Europe's AI rules will reach the apps on your phone",
    summary: "How regulation written in Brussels becomes a global standard, in five steps.",
    category: "World",
    format: "Explainer",
    author: "Mosharaf",
    date: "Sep 26, 2026",
    readTime: "9 min read",
    url: "article.html",
    image: "assets/images/thumb-climate.svg",
    tags: ["AIRegulation", "TechPolicy", "Europe"]
  },
  {
    id: "refugee-repatriation-talks",
    title: "The question nobody is asking in refugee repatriation talks",
    summary: "Without guarantees of safety and citizenship, return is a photo opportunity, not a policy.",
    category: "Asia",
    format: "Opinion",
    author: "Mosharaf",
    date: "Sep 26, 2026",
    readTime: "5 min read",
    url: "article.html",
    image: "assets/images/thumb-dark.svg",
    tags: ["Refugees", "HumanRights", "Asia"]
  },
  {
    id: "sudans-war-displacement",
    title: "Sudan's war: why the world's largest displacement isn't making headlines",
    summary: "How media attention gets rationed — and what that costs in human terms.",
    category: "World",
    format: "Analysis",
    author: "Mosharaf",
    date: "Sep 26, 2026",
    readTime: "6 min read",
    url: "article.html",
    image: "assets/images/thumb-dark.svg",
    tags: ["Sudan", "Displacement", "MediaEthics"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ARTICLES_DATA };
}
