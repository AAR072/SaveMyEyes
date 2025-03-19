function updateSiteSettings(hostname, newSettings, callback) {
  const defaultSettings = { greyscale: true, invert: false };
  chrome.storage.local.get(['sites'], function(result) {
    const sites = result.sites || {};
    // Only store settings if they differ from the defaults.
    if (newSettings.greyscale === defaultSettings.greyscale && newSettings.invert === defaultSettings.invert) {
      delete sites[hostname];
    } else {
      sites[hostname] = newSettings;
    }
    chrome.storage.local.set({ sites: sites }, callback);
  });
}

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var tab = tabs[0];
  var hostname = new URL(tab.url).hostname;
  const defaultSettings = { greyscale: true, invert: false };

  chrome.storage.local.get(['sites'], function(result) {
    const sites = result.sites || {};
    const settings = sites[hostname] || defaultSettings;
    document.getElementById('toggle-greyscale').checked = settings.greyscale;
    document.getElementById('toggle-invert').checked = settings.invert;
  });

  // Toggle greyscale setting (persistent exception when unchecked)
  document.getElementById('toggle-greyscale').addEventListener('change', function(e) {
    chrome.storage.local.get(['sites'], function(result) {
      const sites = result.sites || {};
      const currentSettings = sites[hostname] || defaultSettings;
      currentSettings.greyscale = e.target.checked;
      updateSiteSettings(hostname, currentSettings, function() {
        chrome.tabs.reload(tab.id);
      });
    });
  });

  // Toggle invert filter setting and automatically refresh the page
  document.getElementById('toggle-invert').addEventListener('change', function(e) {
    chrome.storage.local.get(['sites'], function(result) {
      const sites = result.sites || {};
      const currentSettings = sites[hostname] || defaultSettings;
      currentSettings.invert = e.target.checked;
      updateSiteSettings(hostname, currentSettings, function() {
        chrome.tabs.reload(tab.id);
      });
    });
  });
});
