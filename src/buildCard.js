function buildCard(employee) {
  let roleInfo;
  let icon;
  const role = employee.getRole();
  if (role === "Engineer") {
    roleInfo = `Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
    icon = "glasses";
  } else if (role === "Intern") {
    roleInfo = `School: ${employee.getSchool()}`;
    icon = "user-graduate"
  } else if (role === "Manager") {
    roleInfo = `Office number: ${employee.getOfficeNumber()}`
    icon = "mug-hot";
  }

  return `<section class="card">
        <div class="card-header">
          <h2>${employee.getName()}</h2>
          <h3><i class="fas fa-${icon}"></i>  ${employee.getRole()}</h3>
        </div>
        <div class="card-body">
          <p>ID: ${employee.getId()}</p>
          <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
          <p>${roleInfo}</p>
        </div>
      </section>`
}

module.exports = buildCard;