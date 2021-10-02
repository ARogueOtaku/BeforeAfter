function initBeforeAfter(root, beforePic, afterPic) {
  const divider = document.createElement("div");
  divider.classList.add("divider");
  const dragger = document.createElement("div");
  dragger.classList.add("dragger");
  const before = document.createElement("div");
  before.classList.add("before");
  const after = document.createElement("div");
  after.classList.add("after");

  root.appendChild(after);
  root.appendChild(before);
  root.appendChild(divider);
  divider.appendChild(dragger);
  root.setAttribute("data-beforeafter", "");

  const rootRect = root.getBoundingClientRect();
  before.style.backgroundImage = `url(${beforePic})`;
  before.style.backgroundSize = `${rootRect.width}px 100%`;
  after.style.backgroundImage = `url(${afterPic})`;
  after.style.backgroundSize = `${rootRect.width}px 100%`;

  function slideBeforeAfter(dragEvent) {
    const rootRect = root.getBoundingClientRect();
    const rootWidth = rootRect.width;
    const rootLeft = rootRect.left;
    const eventX = dragEvent.clientX;
    const dividerLeft = eventX - rootLeft;
    const percentage = Math.max(Math.min((dividerLeft / rootWidth) * 100, 100), 0);
    divider.style.left = `${percentage}%`;
    before.style.width = `${percentage}%`;
  }

  function addMouseMove() {
    document.addEventListener("mousemove", slideBeforeAfter);
  }
  function removeMouseMove() {
    document.removeEventListener("mousemove", slideBeforeAfter);
  }

  dragger.addEventListener("mousedown", addMouseMove);
  root.addEventListener("click", slideBeforeAfter);
  document.addEventListener("mouseup", removeMouseMove);
  dragger.addEventListener("dragstart", (e) => e.preventDefault());
}
