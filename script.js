document
  .getElementById("metaTagForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Gather form values
    const values = {
      pageTitle: document.getElementById("pageTitle").value,
      pageDescription: document.getElementById("pageDescription").value,
      keywords: document.getElementById("keywords").value,
      ogTitle: document.getElementById("ogTitle").value,
      ogDescription: document.getElementById("ogDescription").value,
      ogImage: document.getElementById("ogImage").value,
      ogUrl: document.getElementById("ogUrl").value,
      ogSiteName: document.getElementById("ogSiteName").value,
      twitterTitle: document.getElementById("twitterTitle").value,
      twitterDescription: document.getElementById("twitterDescription").value,
      twitterImage: document.getElementById("twitterImage").value,
      twitterUrl: document.getElementById("twitterUrl").value,
      twitterHandle: document.getElementById("twitterHandle").value,
      faviconUrl: document.getElementById("faviconUrl").value,
      canonicalUrl: document.getElementById("canonicalUrl").value,
    };

    // Generate meta tags
    let metaTags = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${values.pageTitle}</title>
        <meta name="description" content="${values.pageDescription}">
        <meta name="keywords" content="${values.keywords}">
        <!-- Open Graph Tags -->
        <meta property="og:type" content="website">
        <meta property="og:title" content="${values.ogTitle}">
        <meta property="og:description" content="${values.ogDescription}">
        <meta property="og:image" content="${values.ogImage}">
        <meta property="og:url" content="${values.ogUrl}">
        <meta property="og:site_name" content="${values.ogSiteName}">
    
        <!-- Twitter Card Tags -->
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="${values.twitterHandle}">
        <meta name="twitter:title" content="${values.twitterTitle}">
        <meta name="twitter:description" content="${values.twitterDescription}">
        <meta name="twitter:image" content="${values.twitterImage}">
        <meta name="twitter:url" content="${values.twitterUrl}">
    
        <!-- Favicon -->
        <link rel="icon" href="${values.faviconUrl}" type="image/x-icon">
    
        <!-- Canonical Tag -->
        <link rel="canonical" href="${values.canonicalUrl || values.ogUrl}">
    
        <!-- Meta Robots Tag -->
        <meta name="robots" content="index, follow">

        <!-- Theme Color -->
        <meta name="theme-color" content="${themeColor}">
    `;

    // Display the generated meta tags
    document.getElementById("result").innerText = metaTags;
  });
