import React from "react";
import { removeFromInstalledDB } from "../../utility/addToDB";
import { toast } from "react-toastify";

const InstalledCard = ({ data, onUninstall }) => {
  const { image, title, size, reviews, downloads, ratingAvg, id } = data;

  const handleUninstall = () => {
    removeFromInstalledDB(id);
    onUninstall(id);
    toast.success("✅ App uninstalled Successfully!");
  };

  return (
    <div>
      <div className=" w-full bg-white  rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 bg-white p-4 ">
            <img
              className="h-12 w-12 rounded-lg object-cover"
              src={image}
              alt={title}
            />

            <div className="flex flex-col justify-center">
              <h1 className="text-lg font-semibold text-[#001931]">{title}</h1>

              <div className="flex gap-6 text-sm text-[#627382] mt-1">
                <div className="flex items-center gap-1">
                  <span>⬇</span>
                  <span>{downloads.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  ⭐ <span>{ratingAvg}</span>
                </div>
                <div className="flex items-center gap-1">
                  💾 <span>{size} MB</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button onClick={handleUninstall} className="btn bg-[#00D390] mr-6">
              Uninstall
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalledCard;
