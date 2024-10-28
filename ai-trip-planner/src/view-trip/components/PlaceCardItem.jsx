import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/servies/GlobalApi"; 
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=GOOGLE_MAP_API_KE';
function PlaceCardItem({places}) {

  const [PhotoUrl,setPhotoUrl]=useState();

  useEffect(()=>{
    places&&GetPlacePhoto();    
  },[places])

  const GetPlacePhoto=async()=>{
    const data={
      textQuery:places.place
    };
    const result=await GetPlaceDetails(data).then(resp=>{

      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    })
  }

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+places.place} target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md curser-pointer'>
        <img src={PhotoUrl} className='w-[130px] h-[130px] rounded-xl object-cover' />
        <div>
            <h2 className='font-bold text-lg'>{places.place}</h2>
            <p className='text-sm text-gray-400'>{places.details}</p>
            <h2 className='mt-2'>🕙{places.timeToTravel}</h2>
            <Button><FaMapLocationDot /></Button>
        </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem