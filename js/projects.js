fetch("js/projects.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Could not load project data.");
    }
    return response.json();
  })
  .then(({ projects }) => {
    const projectList = document.querySelector(".project-list");

    projects.forEach((project, index) => {
      const entry = document.createElement("article");
      const number = document.createElement("span");
      const heading = document.createElement("div");
      const category = document.createElement("p");
      const title = document.createElement("h3");
      const details = document.createElement("div");
      const description = document.createElement("p");
      const technologies = document.createElement("ul");
      const links = document.createElement("div");

      entry.className = "project-entry";
      number.className = "project-number";
      number.textContent = String(index + 1).padStart(2, "0");
      heading.className = "project-heading";
      category.className = "project-type";
      category.textContent = project.category;
      title.textContent = project.title;
      details.className = "project-details";
      description.className = "project-description";
      description.textContent = project.description;
      technologies.className = "project-stack";

      project.technologies.forEach((technology) => {
        const item = document.createElement("li");
        item.textContent = technology;
        technologies.appendChild(item);
      });

      links.className = "project-links";
      project.links.forEach((projectLink) => {
        const link = document.createElement("a");
        link.href = projectLink.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = projectLink.label;

        const arrow = document.createElement("span");
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "\u2197";
        link.appendChild(arrow);
        links.appendChild(link);
      });

      heading.append(category, title);
      details.append(description, technologies, links);
      entry.append(number, heading, details);
      projectList.appendChild(entry);
    });
  })
  .catch((error) => {
    document.querySelector(".project-list").textContent = error.message;
  });