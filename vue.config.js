module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    manifestOptions: {
      name: "Example",
      short_name: "Example",
      start_url: ".",
      display: "standalone",
      theme_color: "#9c27b0",
      "icons": [
        {
            "src": "./img/icons/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/img/icons/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    },

    themeColor: "#9c27b0",
    msTileColor: "#9c27b0",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
   
  },  
  // devServer: {
  //   proxy: 'xxx',
  // }   
}
