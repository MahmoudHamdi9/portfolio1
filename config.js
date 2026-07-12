/* ============================================================================
   CONFIG.JS — THE ONLY FILE YOU SHOULD NEED TO EDIT
   ============================================================================
   Everything on your site — your name, photo, projects, skills, links — is
   set right here. You do NOT need to touch index.html, styles.css, or
   main.js to update your content.

   HOW TO EDIT:
   1. Open this file in any plain text editor (Notepad, VS Code, etc.)
   2. Find the value in quotes " " that you want to change
   3. Replace only the text INSIDE the quotes
   4. Save the file
   5. Refresh index.html in your browser to see the change

   Do not delete commas (,) or quotation marks (") — they keep the file
   working. If something breaks, check that every line still ends the same
   way it did before (comma, or nothing on the very last item in a list).
   ========================================================================= */

window.SITE_CONFIG = {

  // --------------------------------------------------------------------
  // 1. IDENTITY — shown in the browser tab, hero section, and footer
  // --------------------------------------------------------------------
  identity: {
    name: "Mahmoud Hamdi",
    fullName: "Mahmoud Hamdi El-Sayed",
    title: "Data Analyst",
    // Short line shown under your name in the hero section.
    tagline: "I don't just visualize data — I engineer the pipeline that makes it trustworthy.",
    // 2–3 sentence value proposition, shown as the hero's supporting paragraph.
    valueProposition: "End-to-end analytics from raw data to executive decisions — building SQL Server databases, Power BI dashboards, and Python ETL pipelines that hold up under real business questions.",
    location: "Egypt",
    // Path to your profile photo. Replace the file in assets/images/
    // and keep this filename, or change the filename here to match.
    profileImage: "assets/images/profile.jpg",
    cvUrl: "assets/cv/Mahmoud_Hamdi_CV.pdf",
  },

  // --------------------------------------------------------------------
  // 2. ABOUT — your introduction paragraph(s)
  // --------------------------------------------------------------------
  about: {
    paragraphs: [
      "I'm a data analyst based in Egypt focused on turning raw, messy data into decisions people can act on. My work covers the full pipeline — scraping and collecting data, cleaning it in Python and SQL, modeling it properly, and shipping it as a Power BI dashboard someone actually opens every week.",
      "I care more about whether a number is trustworthy than whether a chart looks impressive. That means star schemas that hold up, DAX measures that return the same answer every time, and reports written in plain language for the people who have to make a call based on them.",
      "I learn by building. Every project below is a complete, working system — real data model, real SQL views, real dashboard — not a tutorial exercise."
    ],
  },

  // --------------------------------------------------------------------
  // 3. CONTACT & SOCIAL LINKS — used by all buttons across the site
  // --------------------------------------------------------------------
  contact: {
    email: "mahmoudhamdiwm@gmail.com",
    linkedin: "https://linkedin.com/in/Mahmoud-Hamdi-Analyst",
    github: "https://github.com/MahmoudHamdi9",
    // Shown in the Contact section as the closing call to action.
    ctaHeadline: "Have a data problem worth solving?",
    ctaSubtext: "I'm open to data analyst roles and freelance BI projects.",
  },

  // --------------------------------------------------------------------
  // 4. HERO KPI STRIP — real headline numbers pulled from your projects
  //    (edit the label/value pairs, keep the same structure)
  // --------------------------------------------------------------------
  heroStats: [
    { value: "4", label: "end-to-end BI projects shipped" },
    { value: "60+", label: "DAX measures authored" },
    { value: "$3.75B", label: "revenue analyzed across dashboards" },
    { value: "4,768+", label: "social posts processed" },
  ],

  // --------------------------------------------------------------------
  // 5. SKILLS — grouped by category. Add/remove items freely.
  // --------------------------------------------------------------------
  skillGroups: [
    {
      category: "Data Modeling",
      skills: ["Star Schema", "Galaxy Schema", "Dimensional Modeling", "T-SQL"],
    },
    {
      category: "BI & Reporting",
      skills: ["Power BI", "DAX", "Power Query", "Excel"],
    },
    {
      category: "Data Engineering",
      skills: ["Python", "Pandas", "ETL", "SQL Server", "Apify"],
    },
    {
      category: "Analysis",
      skills: ["NumPy", "Matplotlib", "Regex / NLP", "Data Cleaning"],
    },
  ],

  // --------------------------------------------------------------------
  // 6. FEATURED PROJECTS — this is the heart of the site.
  //    To add a new project, copy one whole { ... } block below,
  //    paste it before the closing ] bracket, and edit its values.
  //    Leave demoUrl as "" (empty quotes) to hide the "View Dashboard"
  //    button automatically.
  // --------------------------------------------------------------------
  projects: [
    {
      title: "Commercial Mall — End-to-End BI System",
      image: "assets/images/dashboard_financial.png",
      tools: ["SQL Server 2022", "Power BI", "DAX", "Galaxy Schema", "T-SQL"],
      problem: "A commercial mall's tenancy, finance, and HR data lived in disconnected records with no way to see collection performance or zone-level revenue leakage.",
      outcome: "Found a structural 25% collection gap persisting across 4 fiscal years, with the highest-traffic zone carrying the largest shortfall — a governance problem, not a demand problem.",
      metric: "74.7% collection efficiency uncovered",
      githubUrl: "https://github.com/MahmoudHamdi9/Commercial-Mall-End-to-End-BI-System",
      demoUrl: "",
    },
    {
      title: "Social Media Marketing Intelligence",
      image: "assets/images/Performance Exploration _ Facebook.png",
      tools: ["Python", "Power BI", "DAX", "Star Schema", "Apify", "Regex NLP"],
      problem: "A retail brand's social media team needed a clear read on Facebook, Instagram, and TikTok performance to plan content and platform investment.",
      outcome: "A six-part executive analysis with prioritized recommendations, KPIs, and a practical roadmap to improve content efficiency and platform allocation.",
      metric: "4,768+ posts processed across 3 platforms",
      githubUrl: "https://github.com/MahmoudHamdi9/Marketing-Intelligence-Dashboard",
      demoUrl: "",
    },
    {
      title: "Real Estate Performance Analytics",
      image: "assets/images/Real Estate Performance Review.png",
      tools: ["Power BI", "Power Query", "DAX", "Star Schema", "Time Intelligence"],
      problem: "Sales, agent performance, and client visit data across three fiscal years needed a single view to explain where revenue was actually coming from.",
      outcome: "Identified a 17% YoY drop in Miami lead/referral rates rooted in extended lead-to-sale cycles, and flagged the 2024 buyer cohort as the highest-ROI retargeting segment.",
      metric: "$1.54B revenue across 2,000 units analyzed",
      githubUrl: "https://github.com/MahmoudHamdi9/Real-Estate-Performance-Analytics-2026-",
      demoUrl: "",
    },
    {
      title: "BMW Global Market Performance & Strategic Growth",
      image: "assets/images/technical_performance_dashboard.png",
      tools: ["Excel", "Power BI", "Advanced Charting", "Comparative Analysis", "Data Visualization"],
      problem: "BMW's global market performance across models, regions, and fuel types lacked a unified strategic overview to identify pricing trends, market share dynamics, and performance gaps by segment.",
      outcome: "Built a comprehensive technical performance dashboard analyzing average pricing by model, mileage trends, fuel type market share, and regional performance — uncovering key strategic insights for product and market positioning.",
      metric: "$3.75B+ revenue mapped across 253M+ vehicles",
      githubUrl: "https://github.com/MahmoudHamdi9/BMW-Market-Performance-Analysis",
      demoUrl: "",
    },
  ],

  // --------------------------------------------------------------------
  // 7. CERTIFICATIONS — add/remove rows freely
  // --------------------------------------------------------------------
  certifications: [
    { name: "Microsoft Power BI Data Analyst Professional", issuer: "Microsoft / Coursera", scope: "8 Courses", credentialUrl: "" },
    { name: "IBM Data Analyst Professional", issuer: "IBM / Coursera", scope: "11 Courses", credentialUrl: "" },
    { name: "Google Data Analytics Professional", issuer: "Google / Coursera", scope: "9 Courses", credentialUrl: "" },
    { name: "Data Analysis with SQL & Python", issuer: "DataCamp", scope: "10+ Courses", credentialUrl: "" },
  ],

};
