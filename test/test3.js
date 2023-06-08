document.addEventListener("DOMContentLoaded", () => {
    const nav = document.createElement("div");
    const about = document.createElement("div");
    const products = document.createElement("div");
    const technology = document.createElement("div");
    const downloads = document.createElement("div");
    const etc = document.createElement("div");

    document.body
      .appendChild(nav)
      .append(about, products, technology, downloads, etc);

    about.innerHTML = "About";
    products.innerHTML = "Products";
    technology.innerHTML = "Technology";
    downloads.innerHTML = "Downloads";
    etc.innerHTML = "ETC";

    nav.className = "nav";
    about.className = "about";
    products.className = "products";
    technology.className = "technology";
    downloads.className = "downloads";
    etc.className = "etc";

    const ab = document.querySelector("#About");
    const pd = document.querySelector("#Products");
    const tc = document.querySelector("#Technology");
    const dl = document.querySelector("#Downloads");
    const et = document.querySelector("#Etc");

    a();
    function a() {
      pd.remove();
      tc.remove();
      dl.remove();
      et.remove();
      document.body.append(ab);
      about.style.background = "red";
      ab.style.background = "red";
      etc.style.background = "black";
      setTimeout(p, 1500);
    }

    function p() {
      ab.remove();
      document.body.append(pd);
      products.style.background = "blue";
      pd.style.background = "blue";
      about.style.background = "black";
      setTimeout(t, 1500);
    }

    function t() {
      pd.remove();
      document.body.append(tc);
      technology.style.background = "green";
      tc.style.background = "green";
      products.style.background = "black";
      setTimeout(d, 1500);
    }
    function d() {
      tc.remove();
      document.body.append(dl);
      downloads.style.background = "orange";
      dl.style.background = "orange";
      technology.style.background = "black";
      setTimeout(e, 1500);
    }
    function e() {
      dl.remove();
      document.body.append(et);
      etc.style.background = "purple";
      et.style.background = "purple";
      downloads.style.background = "black";
      setTimeout(a, 1500);
    }
  });