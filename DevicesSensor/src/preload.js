const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld("api", {
  getCPUStatus: () => ipcRenderer.invoke('system:cpu'),
  getGPUStatus: () => ipcRenderer.invoke('system:gpu'),
  getNetworkStatus: () =>ipcRenderer.invoke('system:network'),
  closeapp: () =>  ipcRenderer.invoke('App:close'),
  setOpacity: (OpValue) => ipcRenderer.send('set:Opacity', OpValue),
  openSettingWindow: () => ipcRenderer.invoke('App:setting')
});
  