const gallery = document.getElementById("gallery");

fetch("./pawn_list.json")
  .then((res) => res.json())
  .then((pieces) => {
    renderPieces(pieces);
  })
  .catch((err) => console.error("Błąd ładowania JSON:", err));

function renderPieces(pieces) {
  pieces.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";

    const ability = p.ability;

    const categoriesHTML = ability.categories
      .map((c) => `<span class="tag">${c}</span>`)
      .join("");

    card.innerHTML = `
      <h2>${p.name}</h2>

      <div class="ability-name">Ability: ${ability.name}</div>

      <div class="categories">${categoriesHTML}</div>

      <div class="desc">${ability.description}</div>

      <div class="meta">
        ${ability.uses ? `Użycia: ${ability.uses}` : ""}
        ${ability.cooldown ? `CD: ${ability.cooldown}` : ""}

      </div>
    `;

    gallery.appendChild(card);
  });
}