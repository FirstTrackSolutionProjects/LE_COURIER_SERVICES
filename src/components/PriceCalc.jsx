// import { useState, useEffect } from "react";

// const API_URL = import.meta.env.VITE_APP_API_URL
// const ComparePrices = ({method, status, origin, dest, weight, payMode, codAmount, volume, quantity, boxes, setShowCompare, isB2B, invoiceAmount}) => {
//   const [prices,setPrices] = useState([])
//   useEffect(()=>{
//     console.log({method, status, origin, dest, weight, payMode, codAmount, volume, quantity, boxes})
//     const data = async () => {
//       await fetch(`${API_URL}/shipment/domestic/price`, {
//         method: 'POST',
//         headers: { 'Accept': '*/*',
//           'Content-Type': 'application/json'
//         },
//           body : JSON.stringify({method: method, status : status, origin : origin, dest : dest, weight : weight, payMode : payMode, codAmount : codAmount,volume, quantity, boxes, isB2B, invoiceAmount}),
        
//       }).then(response => response.json()).then(result => {console.log(result); setPrices(result.prices)}).catch(error => console.log(error + " " + error.message))
//     }  
//     data()
//   }, []) 
//   return (
//     <>
//       <div className="w-full absolute z-[1] inset-0 overflow-y-scroll px-4 pt-24 pb-4 flex flex-col bg-gray-100 items-center space-y-6">
//         <div className="text-center relative w-full">
//           <div className="absolute right-5 text-2xl cursor-pointer" onClick={()=>setShowCompare(false)}>x</div>
//           <p className="text-3xl font-medium">CHOOSE YOUR SERVICE</p>
//         </div>
//         <div className="w-full p-4 ">
//           {
//             prices.length ? prices.map((price)=>(
//               <div className="w-full h-16 bg-white relative justify-center px-4 flex flex-col border-b" >
//           <div className="font-bold">{price.name+" "+price.weight}</div>
//           <div>{"Chargable Weight : "+price.chargableWeight}gm</div>
//           <div className="absolute right-4">{`₹${Math.round((price.price))}`}</div>
//         </div>
//             ))
//           : null
//           }
          
//         </div>
//       </div>
//     </>
//   )
// }


// const Domestic = () => {
//   const [boxes, setBoxes] = useState([{weight : 100, length : 5, breadth : 5, height : 5}])
//   const [formData, setFormData] = useState({
//     method : 'S',
//     status: 'Delivered',
//     origin : '',
//     dest : '',
//     payMode : 'COD',
//     codAmount : '0',
//     weight : 0,
//     volume : 0,
//     quantity : 0,
//     invoiceAmount : 0,
//     isB2B : false
//   })
//   useEffect(()=>{
//     let totalVolume = 0;
//     let totalWeight = 0;
//     boxes.map((box,index)=>{
//         totalVolume += parseFloat(box.length) * parseFloat(box.breadth) * parseFloat(box.height)
//         totalWeight += parseFloat(box.weight)
//     })
//     setFormData((prevData) => ({
//      ...prevData,
//       weight : totalWeight,
//       volume : totalVolume,
//       quantity : boxes.length
//     }));
//   },[boxes])
//   const [showCompare, setShowCompare] = useState(false)
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowCompare(true)
//   }
//   const handleBoxes = (index, event) => {
//     const { name, value } = event.target;
//     const updatedBoxes = [...boxes];
//     updatedBoxes[index][name] = value;
//     setBoxes(updatedBoxes);
//   };
//   const addBox = () => {
//     setBoxes([...boxes, {  length: 5 , breadth : 5 , height : 5  , weight: 100 }]);
//   };
//   const removeBox = (index) => {
//     const updatedBoxes = boxes.filter((_, i) => i !== index);
//     setBoxes(updatedBoxes);
//   };
//   return (
//     <>
//       {showCompare && <ComparePrices {...formData} boxes={boxes} setShowCompare={setShowCompare} />}
//       <form action="" className="flex flex-col max-w-[724px] space-y-4" onSubmit={handleSubmit}>
//           <div className="w-full flex mb-2 flex-wrap ">
//             <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2 flex flex-col justify-center">
//               <label htmlFor="method">Shipping Method</label>
//               <select
//                 name="method"
//                 id="method"
//                 className="border py-2 px-4 rounded-lg"
//                 value={formData.method}
//                 onChange={handleChange}
//               >
//                 <option value="S">Surface</option>
//                 <option value="E">Express</option>
//               </select>
//             </div>
//             <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2 flex flex-col justify-center">
//               <label htmlFor="status">Status</label>
//               <select
//                 name="status"
//                 id="status"
//                 className="border py-2 px-4 rounded-lg"
//                 value={formData.status}
//                 onChange={handleChange}
//               >
//                 <option value="Delivered">Forward</option>
//                 <option value="RTO">RTO</option>
//                 <option value="DTO">Reverse</option>
//               </select>
//             </div>
//           </div>
//           <div className="w-full flex mb-2 flex-wrap ">
//             <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
//               <label htmlFor="origin">Origin Pincode</label>
//               <input required
//                 className="w-full border py-2 px-4 rounded-lg"
//                 type="text"
//                 id="origin"
//                 name="origin"
//                 placeholder="Ex. 813210"
//                 value={formData.origin}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
//               <label htmlFor="dest">Destination Pincode</label>
//               <input required
//                 className="w-full border py-2 px-4 rounded-lg"
//                 type="text"
//                 id="dest"
//                 name="dest"
//                 placeholder="Ex. 845401"
//                 value={formData.dest}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div className="w-full flex mb-2 flex-wrap ">
//           <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2 flex flex-col justify-center">
//               <label htmlFor="codAmount">COD Amount</label>
//               <input required
//                 className="w-full border py-2 px-4 rounded-lg"
//                 type="text"
//                 id="codAmount"
//                 name="codAmount"
//                 placeholder="Ex. 157"
//                 value={formData.codAmount}
//                 onChange={handleChange}
//               />
//             </div>
            
//             <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2 flex flex-col justify-center">
//               <label htmlFor="payMode">Payment Mode</label>
//               <select required
//                 name="payMode"
//                 id="payMode"
//                 className="border py-2 px-4 rounded-lg"
//                 value={formData.payMode}
//                 onChange={handleChange}

//               >
//                 <option value="COD">COD</option>
//                 <option value="Pre-paid">Prepaid</option>
//               </select>
//             </div>
            
//           </div>
//           <div className="w-full flex mb-2 flex-wrap ">
//           <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2 flex flex-col justify-center">
//               <label htmlFor="shipmentType">Shipment Type</label>
//               <select
//                 name="isB2B"
//                 id="shipmentType"
//                 className="border py-2 px-4 rounded-lg"
//                 value={formData.isB2B}
//                 onChange={handleChange}

//               >
//                 <option value={false}>B2C</option>
//                 <option value={true}>B2B</option>
//               </select>
//             </div>
            
//             <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2 flex flex-col justify-center">
//               <label htmlFor="invoiceAmount">Invoice Amount</label>
//               <input
//                 className="w-full border py-2 px-4 rounded-lg"
//                 type="text"
//                 id="invoiceAmount"
//                 name="invoiceAmount"
//                 placeholder="Ex. 157"
//                 value={formData.invoiceAmount}
//                 onChange={handleChange}
//               />
//             </div>
            
//           </div>
//           {boxes.map((box,index)=>(
//             <>
//               <div className="w-full relative z-0 flex mb-2 flex-wrap ">
//               <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
//               <label htmlFor="weight">Weight (In grams)</label>
//               <input required
//                 className="w-full border py-2 px-4 rounded-lg"
//                 type="text"
//                 id="weight"
//                 name="weight"
//                 min={50}
//                 placeholder="Ex. 1500"
//                 value = {box.weight}
//                 onChange={(e)=>handleBoxes(index,e)}
//               />
//             </div>
//             <div className="flex-1 mx-2 mb-2 min-w-[300px] flex">
//             <div className="flex-1 mx-2 mb-2 min-w-[90px] space-y-2">
//               <label htmlFor="length">L (in cm)</label>
//               <input required
//                 className="w-full border py-2 px-4 rounded-lg"
//                 type="text"
//                 id="length"
//                 name="length"
//                 min={1}
//                 placeholder="Ex. 2.5"
//                 value={box.length}
//                 onChange={(e)=>handleBoxes(index,e)}
//               />
//             </div>
//             <div className="flex-1 mx-2 mb-2 min-w-[90px] space-y-2">
//               <label htmlFor="breadth">B (in cm)</label>
//               <input required
//                 className="w-full border py-2 px-4 rounded-lg"
//                 type="text"
//                 id="breadth"
//                 name="breadth"
//                 min={1}
//                 placeholder="Ex. 2.5"
//                 value={box.breadth}
//                 onChange={(e)=>handleBoxes(index,e)}
//               />
//             </div>
//             <div className="flex-1 mx-2 mb-2 min-w-[90px] space-y-2">
//               <label htmlFor="height">H (in cm)</label>
//               <input required
//                 className="w-full border py-2 px-4 rounded-lg"
//                 type="text"
//                 id="height"
//                 name="height"
//                 min={1}
//                 placeholder="Ex. 2.5"
//                 value={box.height}
//                 onChange={(e)=>handleBoxes(index,e)}
//               />
//             </div>
//             </div>
//             {boxes.length > 1 && <button type="button" className="absolute w-5 h-5 text-sm flex justify-center items-center top-0 right-0  border rounded-full bg-red-500 text-white" onClick={() => removeBox(index)}>X</button>}
//             </div>
//             </>
//           ))}
//             <button type="button" className="m-2 px-5 py-1 border border-red-500 rounded-lg bg-white text-red-500" onClick={addBox}>Add More Boxes</button>
//             <button type="submit" className="border bg-red-500 text-white mx-2  py-2 px-4 rounded-lg">
//               Submit and Compare
//             </button>
//         </form>
//     </>
//   )
// }




// const PriceCalc = () => {
//   return (
//     <>
//       <div className="w-full p-8 flex flex-col items-center space-y-6">
//         <div className="justify-center text-center text-3xl font-medium mb-8 flex">
//           Calculate your shipping price
//         </div>
//         <Domestic />
//       </div>
//     </>
//   );
// };

// export default PriceCalc



import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_APP_API_URL;

const ComparePrices = ({
  method, status, origin, dest, weight, payMode, codAmount,
  volume, quantity, boxes, setShowCompare, isB2B, invoiceAmount
}) => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/shipment/domestic/price`, {
          method: 'POST',
          headers: { 'Accept': '*/*', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            method, status, origin, dest, weight, payMode,
            codAmount, volume, quantity, boxes, isB2B, invoiceAmount
          }),
        });
        const result = await res.json();
        setPrices(result.prices);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full absolute z-[1] inset-0 overflow-y-scroll px-4 pt-24 pb-4 flex flex-col bg-gray-100 items-center space-y-6">
      <div className="text-center relative w-full">
        <div className="absolute right-5 text-2xl cursor-pointer" onClick={() => setShowCompare(false)}>x</div>
        <p className="text-3xl font-medium">CHOOSE YOUR SERVICE</p>
      </div>
      <div className="w-full p-4">
        {prices.length ? prices.map((price) => (
          <div className="w-full h-16 bg-white relative justify-center px-4 flex flex-col border-b" key={price.name}>
            <div className="font-bold">{price.name + " " + price.weight}</div>
            <div>{"Chargable Weight : " + price.chargableWeight}gm</div>
            <div className="absolute right-4">{`₹${Math.round(price.price)}`}</div>
          </div>
        )) : null}
      </div>
    </div>
  );
};

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
    <>
      {showCompare && <ComparePrices {...formData} boxes={boxes} setShowCompare={setShowCompare} />}
      <form onSubmit={handleSubmit} className="flex flex-col max-w-[800px] w-full bg-red-50 p-6 rounded-lg space-y-4">
        <h2 className="text-2xl font-semibold text-center">Calculate Your Shipping Price</h2>

        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[260px]">
            <label>Shipping Method</label>
            <select name="method" value={formData.method} onChange={handleChange} className="w-full border rounded-lg py-2 px-4">
              <option value="S">Surface</option>
              <option value="E">Express</option>
            </select>
          </div>

          <div className="flex-1 min-w-[260px]">
            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange} className="w-full border rounded-lg py-2 px-4">
              <option value="Delivered">Forward</option>
              <option value="RTO">RTO</option>
              <option value="DTO">Reverse</option>
            </select>
          </div>

          <div className="flex-1 min-w-[260px]">
            <label>Origin Pincode</label>
            <input name="origin" value={formData.origin} onChange={handleChange} placeholder="Ex. 813210" className="w-full border rounded-lg py-2 px-4" />
          </div>

          <div className="flex-1 min-w-[260px]">
            <label>Destination Pincode</label>
            <input name="dest" value={formData.dest} onChange={handleChange} placeholder="Ex. 845401" className="w-full border rounded-lg py-2 px-4" />
          </div>

          <div className="flex-1 min-w-[260px]">
            <label>COD Amount</label>
            <input name="codAmount" value={formData.codAmount} onChange={handleChange} className="w-full border rounded-lg py-2 px-4" />
          </div>

          <div className="flex-1 min-w-[260px]">
            <label>Payment Mode</label>
            <select name="payMode" value={formData.payMode} onChange={handleChange} className="w-full border rounded-lg py-2 px-4">
              <option value="COD">COD</option>
              <option value="Pre-paid">Prepaid</option>
            </select>
          </div>

          <div className="flex-1 min-w-[260px]">
            <label>Shipment Type</label>
            <select name="isB2B" value={formData.isB2B} onChange={handleChange} className="w-full border rounded-lg py-2 px-4">
              <option value={false}>B2C</option>
              <option value={true}>B2B</option>
            </select>
          </div>

          <div className="flex-1 min-w-[260px]">
            <label>Invoice Amount</label>
            <input name="invoiceAmount" value={formData.invoiceAmount} onChange={handleChange} className="w-full border rounded-lg py-2 px-4" />
          </div>
        </div>

        {boxes.map((box, index) => (
          <div key={index} className="bg-gray-100 rounded-md p-4 flex flex-col space-y-2 relative">
          <div className="flex flex-wrap gap-3 items-end">
          <div>
        <label>Weight</label>
        <input type="number" name="weight" value={box.weight} onChange={(e) => handleBoxes(index, e)} className="border rounded-lg px-2 py-1 w-24" />
        </div>
        <div>
        <label>W unit</label>
        <select enabled className="border rounded-lg px-2 py-1 w-20">
          <option>g</option>
          <option>kg</option>
        </select>
         </div>
        <div>
        <label>L (in cm)</label>
        <input type="number" name="length" value={box.length} onChange={(e) => handleBoxes(index, e)} className="border rounded-lg px-2 py-1 w-24" />
      </div>
      <div>
        <label>B (in cm)</label>
        <input type="number" name="breadth" value={box.breadth} onChange={(e) => handleBoxes(index, e)} className="border rounded-lg px-2 py-1 w-24" />
      </div>
      <div>
        <label>H (in cm)</label>
        <input type="number" name="height" value={box.height} onChange={(e) => handleBoxes(index, e)} className="border rounded-lg px-2 py-1 w-24" />
      </div>
      <div>
        <label>Count</label>
        <input type="number" name="count" value={box.count || ''} onChange={(e) => handleBoxes(index, e)} placeholder="Ex. 2.5" className="border rounded-lg px-2 py-1 w-24" />
      </div>

      {boxes.length > 1 && (
        <button type="button" className="ml-4 mt-6 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-sm" onClick={() => removeBox(index)}>x</button>
          )}
          </div>
        </div>
        ))}


        <button type="button" className="m-2 px-5 py-1 border border-red-500 rounded-lg bg-white text-red-500" onClick={addBox}>Add More Boxes</button>
        <button type="submit" className="border bg-red-500 text-white mx-2 py-2 px-4 rounded-lg">Submit and Compare</button>
      </form>
    </>
  );
};

const PriceCalc = () => {
  return (
    <div className="w-full p-8 flex flex-col items-center space-y-6">
      <Domestic />
    </div>
  );
};

export default PriceCalc;
