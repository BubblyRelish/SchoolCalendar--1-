import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.LewistonSchools.EventApp',
  appName: 'Lewiston School District Events',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    "CapacitorHttp": {
      "enabled": true
    },
    "GoogleAuth": {
   
  }
  }
};

export default config;
