const doList = document.querySelector(".do-list");

fetch("../../do.json")
  .then((res) => res.json())
  .then((res) => {
    let cards = "";
    res.forEach((r) => {
      cards += `
      <div class="list-wrapper">
        <div class="number">${r.no}</div>
        <div class="list">
          <div class="what">
            <p>${r.what}</p>
          </div>
          <div class="is-checked">
            <img src="../assets/img/check-mark.png" alt="done" />
          </div>
        </div>
      </div>
      `;
    });
    doList.innerHTML = cards;
  });
