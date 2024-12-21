const electron = require('electron')
const {app, BrowserWindow, Menu } = electron
const path = require('path')
const url = require('url')



// Keep a global reference so the garbage collector does not destroy our app
let mainWindow

function createWindow () {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    minWidth: 1124, //  The minimum width...
    minHeight: 700,//  The minimum height
    alwaysOnTop:false,
    icon:'icon.ico',
    scrollBounce: false,
    webPreferences: {
      nodeIntegration: true
    }
    // frame:false
  })
  // Load the index.html file
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  

  mainWindow.on('closed', () => {
    mainWindow = null
  })
};
// Opens the about window


// Create the window then the app is ready
app.on('ready', () => {
  createWindow()
  electron.powerMonitor.on('on-ac', () => {
    mainWindow.restore()
  })
  electron.powerMonitor.on('on-battery', () => {
    mainWindow.minimize()
  })
})

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Reopen the app on macOS
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})