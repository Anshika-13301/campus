import React from "react";

const CampusGuideModal = ({ close }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">🗺 Campus Guide</h2>
        <p>Facilities and location inside the campus will show here</p>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CampusGuideModal;
