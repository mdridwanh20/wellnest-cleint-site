import { UserIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { HeadingH3 } from "../../Component/Common/Typography/Typography";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuhtProvider/AuthProvider";
import { TbFidgetSpinner } from "react-icons/tb";

export default function AddressForm() {
  const [data, setData] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [thanas, setThanas] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("divisions.json")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((error) => console.log("Failed to load JSON:", error));
  }, []);

  useEffect(() => {
    // Scroll to order summary if URL has #order-summary after reload
    if (window.location.hash === "#order-summary") {
      const orderSection = document.getElementById("order-summary");
      if (orderSection) {
        orderSection.scrollIntoView({ behavior: "smooth" });
        // Remove hash from URL after scrolling
        history.replaceState(
          "",
          document.title,
          window.location.pathname + window.location.search
        );
      }
    }
  }, []);

  const handleDivisionChange = (e) => {
    const division = e.target.value;
    setSelectedDivision(division);
    setSelectedDistrict("");
    setThanas([]);
    const selected = data.find((d) => d.division === division);
    setDistricts(selected ? selected.districts : []);
  };

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    const selected = data.find((d) => d.division === selectedDivision);
    setThanas(selected?.thana?.[district] || []);
  };

  const handleSubmitAddress = (e) => {
    e.preventDefault();
    const form = e.target;
    const shippingRegion = form.shippingFeeOption.value;
    const shippingFee = shippingRegion === "dhaka" ? 70 : 120;

    const address = {
      fullName: form.fullName.value,
      number: form.number.value,
      division: form.selectedDivision.value,
      district: form.selectedDistrict.value,
      thana: form.selectedThana.value,
      shippingRegion,
      shippingFee,
      fullAddress: form.fullAddress.value,
    };

    localStorage.setItem("userAddress", JSON.stringify(address));
    toast.success("Your address has been saved successfully!");

    setTimeout(() => {
      // Reload page with hash to scroll after reload
      window.location.href = window.location.pathname + "#order-summary";
    }, 1000);
  };

  return (
    <div
      id="address-form"
      className="mt-12 bg-white border-1 rounded-2xl p-6 border-t-1 border-b-5 border-[var(--primaryColor)] max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center space-x-2">
        <MapPinIcon className="w-6 h-6 text-indigo-600" />
        <HeadingH3 headingH3={"Add / Change Address"} />
      </h2>
      <form onSubmit={handleSubmitAddress} className="space-y-5">
        <div className="relative">
          <UserIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
        </div>
        <div className="relative">
          <input
            type="number"
            name="number"
            placeholder="Enter number"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-start mb-1 text-sm font-medium text-gray-700">
              Division
            </label>
            <select
              name="selectedDivision"
              required
              onChange={handleDivisionChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            >
              <option value="">Select Division</option>
              {data.map((div) => (
                <option key={div.id} value={div.division}>
                  {div.division}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-start mb-1 text-sm font-medium text-gray-700">
              District
            </label>
            <select
              name="selectedDistrict"
              required
              onChange={handleDistrictChange}
              disabled={!selectedDivision}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm disabled:opacity-60"
            >
              <option value="">
                {selectedDivision ? "Select District" : "Select Division First"}
              </option>
              {districts.map((dist, i) => (
                <option key={i} value={dist}>
                  {dist}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-start mb-1 text-sm font-medium text-gray-700">
              Thana / Upazila
            </label>
            <select
              name="selectedThana"
              required
              disabled={!selectedDistrict}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm disabled:opacity-60"
            >
              <option value="">
                {selectedDistrict ? "Select Thana" : "Select District First"}
              </option>
              {thanas.map((thana, i) => (
                <option key={i} value={thana}>
                  {thana}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-start mb-1 text-sm font-medium text-gray-700">
            Shipping Fee
          </label>
          <select
            name="shippingFeeOption"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          >
            <option value="">Select Shipping Region</option>
            <option value="dhaka">Dhaka City (70 TK)</option>
            <option value="bd">All Bangladesh (120 TK)</option>
          </select>
        </div>
        <div>
          <textarea
            name="fullAddress"
            placeholder="Full Address"
            rows={2}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
        </div>

        <div className="w-full cursor-pointer py-3 bg-[var(--primaryColor)] text-white font-semibold rounded-lg transition hover:bg-opacity-90">
          {loading ? (
            <>
              <TbFidgetSpinner className="animate-spin text-lg" />{" "}
            </>
          ) : (
            <button
              type="submit"
              className=""
            >
              Save Address
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
