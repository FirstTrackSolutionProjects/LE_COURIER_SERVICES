// import { useState, useEffect } from "react";
// import { Box } from "@mui/material";

// const API_URL = import.meta.env.VITE_APP_API_URL;

// const ComparePrices = ({
//   method, status, origin, dest, weight, payMode, codAmount,
//   volume, quantity, boxes, setShowCompare, isB2B, invoiceAmount
// }) => {
//   const [prices, setPrices] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`${API_URL}/shipment/domestic/price`, {
//           method: 'POST',
//           headers: { 'Accept': '*/*', 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             method, status, origin, dest, weight, payMode,
//             codAmount, volume, quantity, boxes, isB2B, invoiceAmount
//           }),
//         });
//         const result = await res.json();
//         setPrices(result.prices);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <Box className="w-full absolute z-[1] inset-0 overflow-y-scroll px-4 pt-24 pb-4 flex flex-col bg-gray-100 items-center space-y-6">
//       <Box className="text-center relative w-full">
//         <Box className="absolute right-5 text-2xl cursor-pointer" onClick={() => setShowCompare(false)}>x</Box>
//         <p className="text-3xl font-medium">CHOOSE YOUR SERVICE</p>
//       </Box>
//       <Box className="w-full p-4">
//         {prices.length ? prices.map((price) => (
//           <Box className="w-full h-16 bg-white relative justify-center px-4 flex flex-col border-b" key={price.name}>
//             <Box className="font-bold">{price.name + " " + price.weight}</Box>
//             <Box>{"Chargable Weight : " + price.chargableWeight}gm</Box>
//             <Box className="absolute right-4">{`₹${Math.round(price.price)}`}</Box>
//           </Box>
//         )) : null}
//       </Box>
//     </Box>
//   );
// };

// const Domestic = () => {
//   const [boxes, setBoxes] = useState([{ weight: 100, length: 5, breadth: 5, height: 5 }]);
//   const [formData, setFormData] = useState({
//     method: 'S',
//     status: 'Delivered',
//     origin: '',
//     dest: '',
//     payMode: 'COD',
//     codAmount: '0',
//     weight: 0,
//     volume: 0,
//     quantity: 0,
//     invoiceAmount: 0,
//     isB2B: false
//   });

//   const [showCompare, setShowCompare] = useState(false);

//   useEffect(() => {
//     let totalVolume = 0;
//     let totalWeight = 0;
//     boxes.forEach(box => {
//       totalVolume += parseFloat(box.length) * parseFloat(box.breadth) * parseFloat(box.height);
//       totalWeight += parseFloat(box.weight);
//     });

//     setFormData(prev => ({
//       ...prev,
//       weight: totalWeight,
//       volume: totalVolume,
//       quantity: boxes.length
//     }));
//   }, [boxes]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowCompare(true);
//   };

//   const handleBoxes = (index, event) => {
//     const { name, value } = event.target;
//     const updatedBoxes = [...boxes];
//     updatedBoxes[index][name] = value;
//     setBoxes(updatedBoxes);
//   };

//   const addBox = () => {
//     setBoxes([...boxes, { length: 5, breadth: 5, height: 5, weight: 100 }]);
//   };

//   const removeBox = (index) => {
//     const updatedBoxes = boxes.filter((_, i) => i !== index);
//     setBoxes(updatedBoxes);
//   };

//   return (
//     <>
//       {showCompare && <ComparePrices {...formData} boxes={boxes} setShowCompare={setShowCompare} />}
//       <form onSubmit={handleSubmit} className="flex flex-col max-w-[800px] w-full bg-red-50 p-6 rounded-lg space-y-4">
//         <h2 className="text-2xl font-semibold text-center">Calculate Your Shipping Price</h2>

//         <Box className="flex flex-wrap gap-4">
//           <Box className="flex-1 min-w-[260px]">
//             <label>Shipping Method</label>
//             <select name="method" value={formData.method} onChange={handleChange} className="w-full border rounded-lg py-2 px-4">
//               <option value="S">Surface</option>
//               <option value="E">Express</option>
//             </select>
//           </Box>

//           <Box className="flex-1 min-w-[260px]">
//             <label>Status</label>
//             <select name="status" value={formData.status} onChange={handleChange} className="w-full border rounded-lg py-2 px-4">
//               <option value="Delivered">Forward</option>
//               <option value="RTO">RTO</option>
//               <option value="DTO">Reverse</option>
//             </select>
//           </Box>

//           <Box className="flex-1 min-w-[260px]">
//             <label>Origin Pincode</label>
//             <input name="origin" value={formData.origin} onChange={handleChange} placeholder="Ex. 813210" className="w-full border rounded-lg py-2 px-4" />
//           </Box>

//           <Box className="flex-1 min-w-[260px]">
//             <label>Destination Pincode</label>
//             <input name="dest" value={formData.dest} onChange={handleChange} placeholder="Ex. 845401" className="w-full border rounded-lg py-2 px-4" />
//           </Box>

//           <Box className="flex-1 min-w-[260px]">
//             <label>COD Amount</label>
//             <input name="codAmount" value={formData.codAmount} onChange={handleChange} className="w-full border rounded-lg py-2 px-4" />
//           </Box>

//           <Box className="flex-1 min-w-[260px]">
//             <label>Payment Mode</label>
//             <select name="payMode" value={formData.payMode} onChange={handleChange} className="w-full border rounded-lg py-2 px-4">
//               <option value="COD">COD</option>
//               <option value="Pre-paid">Prepaid</option>
//             </select>
//           </Box>

//           <Box className="flex-1 min-w-[260px]">
//             <label>Shipment Type</label>
//             <select name="isB2B" value={formData.isB2B} onChange={handleChange} className="w-full border rounded-lg py-2 px-4">
//               <option value={false}>B2C</option>
//               <option value={true}>B2B</option>
//             </select>
//           </Box>

//           <Box className="flex-1 min-w-[260px]">
//             <label>Invoice Amount</label>
//             <input name="invoiceAmount" value={formData.invoiceAmount} onChange={handleChange} className="w-full border rounded-lg py-2 px-4" />
//           </Box>
//         </Box>

//         {boxes.map((box, index) => (
//           <Box key={index} className="bg-gray-100 rounded-md p-4 flex flex-col space-y-2 relative">
//             <Box className="flex flex-wrap gap-3 items-end">
//               <Box>
//                 <label>Weight</label>
//                 <input type="number" name="weight" value={box.weight} onChange={(e) => handleBoxes(index, e)} className="border rounded-lg px-2 py-1 w-24" />
//               </Box>
//               <Box>
//                 <label>W unit</label>
//                 <select className="border rounded-lg px-2 py-1 w-20">
//                   <option>g</option>
//                   <option>kg</option>
//                 </select>
//               </Box>
//               <Box>
//                 <label>L (in cm)</label>
//                 <input type="number" name="length" value={box.length} onChange={(e) => handleBoxes(index, e)} className="border rounded-lg px-2 py-1 w-24" />
//               </Box>
//               <Box>
//                 <label>B (in cm)</label>
//                 <input type="number" name="breadth" value={box.breadth} onChange={(e) => handleBoxes(index, e)} className="border rounded-lg px-2 py-1 w-24" />
//               </Box>
//               <Box>
//                 <label>H (in cm)</label>
//                 <input type="number" name="height" value={box.height} onChange={(e) => handleBoxes(index, e)} className="border rounded-lg px-2 py-1 w-24" />
//               </Box>
//               <Box>
//                 <label>Count</label>
//                 <input type="number" name="count" value={box.count || ''} onChange={(e) => handleBoxes(index, e)} placeholder="Ex. 2.5" className="border rounded-lg px-2 py-1 w-24" />
//               </Box>

//               {boxes.length > 1 && (
//                 <button type="button" className="ml-4 mt-6 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-sm" onClick={() => removeBox(index)}>x</button>
//               )}
//             </Box>
//           </Box>
//         ))}

//         <button type="button" className="m-2 px-5 py-1 border border-red-500 rounded-lg bg-white text-red-500" onClick={addBox}>Add More Boxes</button>
//         <button type="submit" className="border bg-red-500 text-white mx-2 py-2 px-4 rounded-lg">Submit and Compare</button>
//       </form>
//     </>
//   );
// };

// const PriceCalc = () => {
//   return (
//     <Box className="w-full p-8 flex flex-col items-center space-y-6">
//       <Domestic />
//     </Box>
//   );
// };

// export default PriceCalc;

import { useState, useEffect } from "react";
import { Box } from "@mui/material";

const Domestic = () => {
  const [boxes, setBoxes] = useState([{ weight: 100, length: 5, breadth: 5, height: 5 }]);
  const [formData, setFormData] = useState({
    method: 'S',
    status: 'Delivered',
    origin: '',
    dest: '',
    payMode: 'COD',
    codAmount: '0',
    weight: 0,
    volume: 0,
    quantity: 0,
    invoiceAmount: 0,
    isB2B: false
  });

  const [showCompare, setShowCompare] = useState(false);

  useEffect(() => {
    let totalVolume = 0;
    let totalWeight = 0;
    boxes.forEach(box => {
      totalVolume += parseFloat(box.length) * parseFloat(box.breadth) * parseFloat(box.height);
      totalWeight += parseFloat(box.weight);
    });

    setFormData(prev => ({
      ...prev,
      weight: totalWeight,
      volume: totalVolume,
      quantity: boxes.length
    }));
  }, [boxes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCompare(true);
  };

  const handleBoxes = (index, event) => {
    const { name, value } = event.target;
    const updatedBoxes = [...boxes];
    updatedBoxes[index][name] = value;
    setBoxes(updatedBoxes);
  };

  const addBox = () => {
    setBoxes([...boxes, { length: 5, breadth: 5, height: 5, weight: 100 }]);
  };

  const removeBox = (index) => {
    const updatedBoxes = boxes.filter((_, i) => i !== index);
    setBoxes(updatedBoxes);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 max-w-[900px] mx-auto">
      {showCompare && (
        <ComparePrices {...formData} boxes={boxes} setShowCompare={setShowCompare} />
      )}
      <form onSubmit={handleSubmit} className="flex flex-col bg-red-50 p-4 sm:p-6 rounded-lg space-y-4 w-full">
        <h2 className="text-2xl font-semibold text-center">Calculate Your Shipping Price</h2>

        <Box className="flex flex-wrap gap-4">
          {[
            {
              label: "Shipping Method",
              name: "method",
              type: "select",
              options: [
                { value: "S", label: "Surface" },
                { value: "E", label: "Express" }
              ]
            },
            {
              label: "Status",
              name: "status",
              type: "select",
              options: [
                { value: "Delivered", label: "Forward" },
                { value: "RTO", label: "RTO" },
                { value: "DTO", label: "Reverse" }
              ]
            },
            {
              label: "Origin Pincode",
              name: "origin",
              type: "input",
              placeholder: "Ex. 813210"
            },
            {
              label: "Destination Pincode",
              name: "dest",
              type: "input",
              placeholder: "Ex. 845401"
            },
            {
              label: "COD Amount",
              name: "codAmount",
              type: "input"
            },
            {
              label: "Payment Mode",
              name: "payMode",
              type: "select",
              options: [
                { value: "COD", label: "COD" },
                { value: "Pre-paid", label: "Prepaid" }
              ]
            },
            {
              label: "Shipment Type",
              name: "isB2B",
              type: "select",
              options: [
                { value: false, label: "B2C" },
                { value: true, label: "B2B" }
              ]
            },
            {
              label: "Invoice Amount",
              name: "invoiceAmount",
              type: "input"
            }
          ].map((field, idx) => (
            <Box className="flex-1 min-w-[260px] w-full" key={idx}>
              <label className="block mb-1 font-medium">{field.label}</label>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full border rounded-lg py-2 px-4"
                >
                  {field.options.map((opt, i) => (
                    <option key={i} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  name={field.name}
                  value={formData[field.name]}
                  placeholder={field.placeholder || ""}
                  onChange={handleChange}
                  className="w-full border rounded-lg py-2 px-4"
                />
              )}
            </Box>
          ))}
        </Box>

        {boxes.map((box, index) => (
          <Box key={index} className="bg-gray-100 rounded-md p-4 flex flex-col space-y-2 relative w-full">
            <Box className="flex flex-wrap gap-3 items-end">
              {["weight", "length", "breadth", "height", "count"].map((key) => (
                <Box key={key}>
                  <label className="block text-sm capitalize">
                    {key === "breadth" ? "B (in cm)" : key === "height" ? "H (in cm)" : key === "length" ? "L (in cm)" : key === "weight" ? "Weight" : "Count"}
                  </label>
                  <input
                    type="number"
                    name={key}
                    value={box[key] || ""}
                    onChange={(e) => handleBoxes(index, e)}
                    className="border rounded-lg px-2 py-1 w-24"
                    placeholder={key === "count" ? "Ex. 2.5" : ""}
                  />
                </Box>
              ))}
              <Box>
                <label className="block text-sm">W Unit</label>
                <select className="border rounded-lg px-2 py-1 w-20">
                  <option>g</option>
                  <option>kg</option>
                </select>
              </Box>

              {boxes.length > 1 && (
                <button
                  type="button"
                  className="ml-4 mt-6 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-sm"
                  onClick={() => removeBox(index)}
                >
                  x
                </button>
              )}
            </Box>
          </Box>
        ))}

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
          <button
            type="button"
            onClick={addBox}
            className="px-5 py-2 border border-red-500 rounded-lg bg-white text-red-500"
          >
            Add More Boxes
          </button>
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded-lg"
          >
            Submit and Compare
          </button>
        </div>
      </form>
    </div>
  );
};

export default Domestic;
