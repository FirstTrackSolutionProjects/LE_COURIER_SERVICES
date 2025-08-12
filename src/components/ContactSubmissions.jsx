import { useEffect , useState  } from 'react'
const API_URL = import.meta.env.VITE_APP_API_URL

const View = ({reqId, uid ,fullName, email, phone, gst, setView, businessName, cin, aadhar_number, pan_number, address, city,  state, pin, account_number, ifsc, bank}) => {
    const handleApprove = async () => {
        await fetch(`${API_URL}/verification/request/accept`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : localStorage.getItem('token'),
            },
            body: JSON.stringify({uid, reqId})
        }).then(response => response.json()).then(result => alert(result.message));
    }
    const handleReject = async () => {
        await fetch(`${API_URL}/verification/request/reject`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : localStorage.getItem('token'),
            },
            body: JSON.stringify({uid, reqId})
        }).then(response => response.json()).then(result => alert(result.message));
    }
    return (
        <>
            <div className='absolute inset-0 bg-[rgba(0,0,0,0.5)] z-50 flex justify-center items-center overflow-y-auto'>
                <div className='relative p-6 max-w-[400px] bg-white rounded-2xl overflow-hidden space-y-8'>
                <p className='absolute top-5 right-6 cursor-pointer' onClick={()=>{setView(false)}}>X</p>
                    <p className='text-2xl font-medium text-center'>Merchant Details</p>
                    <div className='w-full space-y-6'>
                        <div className='w-full flex items-center justify-center space-x-8'>
                            <div className='flex justify-center items-center w-32 h-32'>
                                <img src='user.webp'/>
                            </div>
                            <div className=''>
                                <p className='font-medium text-xl'>{businessName}</p>
                                <p className='font-medium text-sm text-gray-600'>({fullName})</p>
                                <p className='font-medium text-sm text-gray-600'>{email}</p>
                                <p className='font-medium text-sm text-gray-600'>{phone}</p>
                                <p className='font-medium text-sm text-green-400'>Balance(Coming Soon)</p>
                            </div>
                        </div>
                        <div className='w-full font-medium text-gray-700'>
                            <p>GSTIN : {gst}</p>
                            <p>CIN : {cin}</p>
                            <p>Aadhar Number : {aadhar_number}</p>
                            <p>PAN Number : {pan_number}</p>
                            <p>Address : {address}</p>
                            <p>City : {city}</p>
                            <p>State : {state}</p>
                            <p>Pincode : {pin}</p>
                            <p>Bank Name : {bank}</p>
                            <p>A/C No. : {account_number}</p>
                            <p>IFSC : {ifsc}</p>
                        </div>
                    </div>
                    <button onClick={handleApprove} className=" bg-blue-500 text-white mx-2  py-2 px-4 rounded-3xl">
                        Approve
                    </button>
                    <button onClick={handleReject} className=" bg-red-500 text-white mx-2  py-2 px-6 rounded-3xl">
                        Reject
                    </button>
                </div>
            </div>
        </>
    )
}


const Card = ({request}) => {
    const [view, setView] = useState(false)
    return (
        <>
            {view && <View {...request} setView={setView} />}
            <div className='p-4 border cursor-pointer ' onClick={()=>setView(true)} >
                <p>Request Id : {request.name}</p>
                <p>User Id : {request.email}</p>
                <p>Name : {request.phone}</p>
                <p>Business Name : {request.message}</p>
            </div>
        </>
    )
}

const ContactSubmissions =  () => {
    const [requests, setRequests] = useState([])
    useEffect(() => {
        const getVerificationRequests = async () => {
            const response = await fetch(`${API_URL}/contact/all`, {
                method: 'POST',
                headers: { 'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token'),
                }
            })
            const data = await response.json();
            setRequests(data.data)
        }
        getVerificationRequests();
    },[]);
  return (
    <>
    <div className=" py-16 w-full h-full flex flex-col items-center overflow-x-hidden overflow-y-auto">
      <div className='w-full p-8 flex flex-col items-center space-y-8'>
      <div className='text-center text-3xl font-medium text-black'>Contact Requests</div>
      <div className='w-full bg-white p-8'>
        {
            requests.map(((request,index)=>(
                <Card key={index}  request={request}/>
            )))
        }
      </div>
      </div>
    </div>
    </>
  )
}

export default ContactSubmissions
