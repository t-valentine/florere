// header image
document.getElementsByClassName("header")[0].innerHTML = `<h1>Florere</h1>`;

// sidebar image and nav
let sidebar = document.getElementsByClassName("right")[0].firstElementChild;
let sidebarContent = `          
<img src="./" width="250px" height="250px" />
<div id="nav-menu">
    <a href="./index.html">Home</a>
    <a href="./about.html">About</a>
    <a href="./archive.html">Archive</a>
</div>`;
sidebar.insertAdjacentHTML("afterbegin", sidebarContent);

// socials
document.querySelector("#socials").innerHTML = `
<a href="">Bsky</a>
<a href="">Tumblr</a>
<p>Don't miss an update:</p><p>Subscribe to the <a href="rss.xml">RSS feed!</a></p>
`;

// footer
document.getElementsByClassName(
  "footer"
)[0].innerHTML = `<p>T. Valentine &#169; 2025</p>`;
