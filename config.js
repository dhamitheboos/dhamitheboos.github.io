// ✅ One variable to rule all ads
window.ADS_ENABLED = true; // set false to disable ads globally

// ================= CONFIG / API CALLS =================
const apiUrl = "https://api.npoint.io/15812aaae7d99303c10f";
let companyInfo = {};

// Fetch company + games data
async function fetchCompanyInfo() {
  try {
    const res = await fetch(apiUrl);
    companyInfo = await res.json();
    return companyInfo;
  } catch (err) {
    console.error("API fetch failed:", err);
    return {};
  }
}

// Fetch section (games list)
async function fetchGames(url) {
  if (!url) return [];
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.error("Games fetch failed:", err);
    return [];
  }
}

