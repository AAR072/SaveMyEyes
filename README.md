# Save My Eyes

This Firefox extension allows you to:  

- **Apply Greyscale Mode**: Automatically adds a greyscale filter to all websites.  
- **Manage Exceptions**: Easily exclude specific sites from greyscale mode.  
- **Run Custom JavaScript**: Applies a custom inversion script (`invert()`) on selected sites.  
- **Persistent Settings**: Remembers your preferences for each site, even after closing the browser.  

## Features  

- **Toggle Greyscale**: Click the extension icon to enable/disable greyscale for a site.  
- **Run & Save Custom JS**: Executes and remembers a custom script (`invert()`) per site.  
- **Auto Refresh**: Changes take effect immediately with an automatic page reload.  

## Installation  
### Coming to firefox store soon
1. Download or clone the extension folder.  
2. Open Firefox and go to `about:debugging`.  
3. Select **"This Firefox"** and click **"Load Temporary Add-on"**.  
4. Choose the `manifest.json` file from the extension folder.  

## Notes  

- The extension starts with **greyscale enabled by default** for all sites.  
- Exceptions for greyscale and custom scripts are stored locally in Firefox storage.  
- Running the custom script automatically refreshes the page to apply changes.  
