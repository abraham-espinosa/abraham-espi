fetch("js/skills.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Could not load skills data.");
    }
    return response.json();
  })
  .then(({ groups }) => {
    const skillGroups = document.querySelector(".skill-groups");

    groups.forEach((group) => {
      const section = document.createElement("section");
      const heading = document.createElement("h3");
      const list = document.createElement("ul");

      section.className = "skill-group";
      heading.textContent = group.title;
      group.items.forEach((skill) => {
        const item = document.createElement("li");
        item.textContent = skill;
        list.appendChild(item);
      });

      section.append(heading, list);
      skillGroups.appendChild(section);
    });
  })
  .catch((error) => {
    document.querySelector(".skill-groups").textContent = error.message;
  });