const {app,BrowserWindow} = require('electron');
const {spawn} = require('child_process');

// Keep track of windows with a dictionary
var windows = {};

// Define window creation
function createWindow() {
    // Generate a random hash reference for the window
    var ref =  Math.random().toString(36).substring(2);

    // Create window
    windows[ref] = new BrowserWindow({
        width: 1280,
        height: 720,
        useContentSize: true
    });

    // Load html for window
    windows[ref].loadFile('main.html');

    // Emitted when the window is closed
    windows[ref].on('closed',()=>{
        // Dereference the window object
        delete windows[ref];
    });
}

// Start application
app.on('ready',createWindow);

// Execute on all window close
app.on('window-all-closed',()=>{
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

// For macs, when user clicks dock icom
app.on('activate',()=>{
    // Re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (windows === {}) {
        createWindow();
    }
});
