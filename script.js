document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('company-form');
  const input = document.getElementById('company-input');
  const list = document.getElementById('company-list');

  // Retrieve companies from localStorage or initialize an empty array
  const getCompanies = () => {
    const stored = localStorage.getItem('companies');
    return stored ? JSON.parse(stored) : [];
  };

  // Save the current list of companies to localStorage
  const saveCompanies = companies => {
    localStorage.setItem('companies', JSON.stringify(companies));
  };

  // Render the companies in the list section
  const renderCompanies = () => {
    list.innerHTML = '';
    const companies = getCompanies();
    companies.forEach((company, idx) => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${company}</span>
                      <button class="remove-btn" data-index="${idx}">Delete</button>`;
      list.appendChild(li);
    });
  };

  // Add a new company to the list if it's not a duplicate
  const addCompany = company => {
    const companies = getCompanies();
    // Check for duplicate (case-insensitive)
    const isDuplicate = companies.some(existing => existing.toLowerCase() === company.toLowerCase());
    if (isDuplicate) {
      alert('This company is already in your list!');
      return;
    }
    companies.push(company);
    saveCompanies(companies);
    renderCompanies();
  };

  // Remove a company based on its index
  const removeCompany = index => {
    const companies = getCompanies();
    companies.splice(index, 1);
    saveCompanies(companies);
    renderCompanies();
  };

  // Handle form submission
  form.addEventListener('submit', e => {
    e.preventDefault();
    const company = input.value.trim();
    if (company) {
      addCompany(company);
      input.value = '';
    }
  });

  // Delegate the click event for dynamically added delete buttons
  list.addEventListener('click', e => {
    if (e.target.classList.contains('remove-btn')) {
      const idx = e.target.getAttribute('data-index');
      removeCompany(idx);
    }
  });

  // Initial render
  renderCompanies();
});
