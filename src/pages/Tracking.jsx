import React, { useEffect, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

const API_URL = import.meta.env.VITE_APP_API_URL

const Form = () => {
    const [isTracking, setIsTracking] = useState(false)
    const [formData,setFormData] = useState({
        awb : ''
    })

    useEffect(() => {
        if (localStorage.getItem('track')){
            setFormData({id: localStorage.getItem('track'), isWaybill: true})
            localStorage.setItem('track','')
            // handleSubmit(1)
        }
    }, [])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]:type === 'radio' ? checked : value
        }));
      };
    const [trackingData,setTrackingData] = useState(null)
    const closeResultModal = () => {
        setTrackingData(null)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsTracking(true)
        try{
            const data = await fetch(`${API_URL}/shipment/track`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then(response => response.json())
            setTrackingData(data)
        } catch (e) {
            console.log(e)
        } finally {
            setIsTracking(false)
        }
    }
    return (
        <>
            <Box className='w-full font-inter'>
                <Box className='w-full p-8 flex flex-col items-center space-y-16 mb-8'>
                    <Box className='text-center text-3xl font-medium'>Track your Parcel</Box>
                    
        <Box component={'form'} className="flex flex-col items-center  space-y-8" onSubmit={handleSubmit}>
            <Box className='flex'>
            <TextField size='small' type="text" label="AWB" name="awb" value={formData.id} onChange={handleChange} className="border py-2 px-4 rounded-l-xl bg-blue-50" placeholder="Enter Tracking Id/AWB" />
            <Button variant='outlined' sx={{borderTopRightRadius : '10px', borderBottomRightRadius: '10px'}} type='submit' className="border py-2 px-4 w-28 bg-blue-50" disabled={isTracking}>{isTracking?'Tracking...':'Track'}</Button>
            </Box>
        </Box>
                </Box>
            </Box>
            {trackingData && <ResultModal data={trackingData} onClose={closeResultModal} />}
        </>
    )
}

const Card = ({ scan }) => {
    return (
        <>
            <Box className="w-full h-16 bg-white relative items-center px-8 flex border-b space-x-4">
                <Box>{scan.ScanDateTime}</Box>
                <Box>{scan.ScannedLocation}</Box>
                <Box className="absolute right-8 cursor-pointer">{scan.Instructions}</Box>
            </Box>
        </>
    )
}
const FlightGoCard = ({ scan }) => {
    return (
        <>
            <Box className="w-full h-16 bg-white relative items-center px-8 flex border-b space-x-4">
                <Box>{scan.event_at}</Box>
                <Box>{scan.event_location}</Box>
                <Box className="absolute right-8 cursor-pointer">{scan.event_description}</Box>
            </Box>
        </>
    )
}
const MovinCard = ({ scan }) => {
    return (
        <>
            <Box className="w-full h-16 bg-white relative items-center px-8 flex border-b space-x-4">
                <Box>{scan.timestamp}</Box>
                <Box className="absolute right-8 cursor-pointer">{scan.package_status}</Box>
            </Box>
        </>
    )
}

const PickrrCard = ({ scan }) => {
    return (
        <>
            <Box className="w-full py-3 bg-white relative items-center justify-center px-8 flex border-b space-x-4">
                <Box className='flex flex-col items-center justify-center'>
                    <Box className='font-bold'>{scan.remarks}</Box>
                    <Box>{scan.location}</Box>
                    <Box>{scan.timestamp}</Box>
                </Box>
            </Box>
        </>
    )
}

const DillikingCard = ({ scan }) => {
    const date = scan.event_date;
    const time = scan.event_time;
    const formattedDate = `${date.substr(0,4)}/${date.substr(4,6)}/${date.substr(6,8)}`
    const formattedTime = `${time.substr(0,2)}:${time.substr(2,4)}`
    return (
    <>
        <Box className="w-full py-3 bg-white relative items-center justify-center px-8 flex border-b space-x-4">
            <Box className='flex flex-col items-center justify-center'>
                <Box className='font-bold'>{scan.remark}</Box>
                <Box>{scan.location}</Box>
                <Box>{`${formattedDate} ${formattedTime}`}</Box>
            </Box>
        </Box>
    </>
    )
}

const ShiprocketCard = ({ scan }) => {
    return (
    <>
        <Box className="w-full py-3 bg-white relative items-center justify-center px-8 flex border-b space-x-4">
            <Box className='flex flex-col items-center justify-center'>
                <Box className='font-bold'>{scan["sr-status-label"]}</Box>
                <Box>{scan.location}</Box>
                <Box>{scan.date}</Box>
            </Box>
        </Box>
    </>
    )
}


const ResultModal = ({ data, onClose }) => {
    useEffect(() => {
      console.log("data : ", data);
    }, [data]);
  
    return (
      <Box className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <Box className="bg-white rounded-lg shadow-lg w-11/12 max-w-md max-h-screen overflow-hidden relative">
          <button
            className="absolute top-2 right-6 z-50 text-gray-400 hover:text-gray-600 text-3xl"
            onClick={onClose}
          >
            ×
          </button>
          <Box className="w-full p-4 overflow-y-auto max-h-[80vh]">
          <h1 className='text-center text-2xl text-bold'>Shipment Tracking</h1>
            {/* Conditional Rendering for Cards */}
            {(data?.id === 1 || data?.id === 2) &&
              data?.data.ShipmentData[0].Shipment.Scans.slice()
                .reverse()
                .map((scan, index) => <Card key={index} scan={scan.ScanDetail} />)}
            {data?.id === 3 &&
              data?.data.map((scan, index) => (
                <MovinCard key={index} scan={scan} />
              ))}
            {data?.id === 4 &&
              data?.data.docket_events.map((scan, index) => (
                <FlightGoCard key={index} scan={scan} />
              ))}
            {data?.id === 5 &&
              data?.data.reverse().map((scan, index) => (
                <PickrrCard key={index} scan={scan} />
              ))}
            {data?.id === 6 &&
              data?.data.map((scan, index) => (
                <ShiprocketCard key={index} scan={scan} />
              ))}
            {data?.id === 7 &&
              data?.data.map((scan, index) => (
                <DillikingCard key={index} scan={scan} />
              ))}
          </Box>
        </Box>
      </Box>
    );
  };
  

const Tracking = () => {
  return (
    <>
        
        <Form />
        
    </>
  )
}

export default Tracking
