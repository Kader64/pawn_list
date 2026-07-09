const gallery = document.getElementById("gallery");

fetch("./pawn_list.json")
  .then((res) => res.json())
  .then((pieces) => {
    renderPieces(pieces);
  })
  .catch((err) => console.error("Błąd ładowania JSON:", err));

function renderPieces(pieces) {
  gallery.innerHTML = "";

  pieces.forEach((piece) => {
    const ability = piece.ability;

    const card = document.createElement("div");
    card.className = "card";

    const typeClass = `type-${ability.type.toLowerCase().replace("_", "-")}`;

    card.innerHTML = `
      <div class="pawn-name">${piece.name}</div>

      <div class="collection">
        Collection: ${piece.collection}
      </div>

      <div class="ability-name">
        <span class="label">Ability:</span>
        ${ability.name}
      </div>

      <div class="ability-type">
        <span class="label">Type:</span>
        <span class="badge ${typeClass}">
          ${ability.type}
        </span>
      </div>

    ${ability.limit_type && ability.limit_value ? `
        <div class="ability-limit">
          <span class="label">${ability.limit_type}:</span>
           ${ability.limit_value}
        </div>
      ` : ''}

      <div class="ability-desc">
        ${ability.description}
      </div>
    `;
    gallery.appendChild(card);
  });
}