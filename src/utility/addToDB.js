const getInstallApp = () => {
  const installAppSTR = localStorage.getItem("installList");

  if (installAppSTR) {
    const installAppData = JSON.parse(installAppSTR);
    return installAppData;
  } else {
    return [];
  }
};

const addToInstalledDB = (id) => {
  const installAppData = getInstallApp();

  if (installAppData.includes(id)) {
    console.log("hello");
  } else {
    installAppData.push(id);
    const data = JSON.stringify(installAppData);
    localStorage.setItem("installList", data);
  }
};

export { addToInstalledDB, getInstallApp };
