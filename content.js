chrome.storage.local.get(['sites'], (result) => {
  const sites = result.sites || {};
  const currentUrl = window.location.hostname;
  // Default settings: greyscale on (default), invert off.
  const defaultSettings = { greyscale: true, invert: false };
  const settings = sites[currentUrl] || defaultSettings;

  // Get any existing filter (if any)
  const existingFilter = getComputedStyle(document.body).filter.replace('none', '');

  function setFilter(value) {
    if (value === '') {
      document.body.style.filter = existingFilter;
      return;
    }
    const restOfTheFilters = existingFilter
      .replace(/grayscale\([\d\.]+\)/, '')
      .replace(/sepia\([\d\.]+\)/, '')
      .replace(/\s+/g, ' ').trim();
    document.body.style.filter = [restOfTheFilters, value].join(' ');
  }

  if (settings.greyscale) {
    setFilter('grayscale(1) sepia(0.1)');
  } else {
    setFilter('');
  }

  // Handle the invert filter (custom JS)
  if (settings.invert) {
    document.documentElement.style.webkitFilter = 'invert()';
  } else {
    document.documentElement.style.webkitFilter = '';
  }
});