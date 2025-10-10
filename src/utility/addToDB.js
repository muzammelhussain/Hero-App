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

const removeFromInstalledDB = (id) => {
  const numericId = id.toString();
  const stored = getInstallApp();
  // const stored2 = parseInt(stored);
  const updated = stored.filter((item) => item !== numericId);
  localStorage.setItem("installList", JSON.stringify(updated));
  console.log("🗑️ Removed ID:", numericId);
  console.log("✅ Updated LocalStorage:", updated);
};

export { addToInstalledDB, getInstallApp, removeFromInstalledDB };
