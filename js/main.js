document.addEventListener("DOMContentLoaded", function () {
  var grid = document.getElementById("apps-grid");
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  apps.forEach(function (app) {
    var card = document.createElement("article");
    card.className = "app-card";

    var inner = document.createElement("div");
    inner.className = "app-info";

    var title = document.createElement("h3");
    title.textContent = app.name;

    var tagline = document.createElement("p");
    tagline.className = "app-tagline";
    tagline.textContent = app.tagline;

    var description = document.createElement("p");
    description.className = "app-description";
    description.textContent = app.description;

    var link = document.createElement("a");
    link.className = "btn btn-store";
    link.href = app.appStoreUrl;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "View on the App Store";

    inner.appendChild(title);
    inner.appendChild(tagline);
    inner.appendChild(description);
    inner.appendChild(link);
    card.appendChild(inner);
    grid.appendChild(card);
  });
});