const works = [...document.querySelectorAll(".work details")];

function closeOthers(current) {
  for (const item of works) {
    if (item !== current) item.open = false;
  }
}

for (const item of works) {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    closeOthers(item);
    const id = item.closest(".work")?.id;
    if (id) history.replaceState(null, "", `#${id}`);
  });
}

function openFromHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const work = document.getElementById(id);
  const item = work?.querySelector("details");
  if (!item) return;
  item.open = true;
  work.scrollIntoView();
}

openFromHash();
window.addEventListener("hashchange", openFromHash);
