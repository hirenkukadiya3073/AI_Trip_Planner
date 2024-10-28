import React, { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/servies/GlobalApi";
import { Link } from 'react-router-dom';

const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=GOOGLE_MAP_API_KE';
function HotelCardItem({hotel}) {
    const [PhotoUrl,setPhotoUrl]=useState();

  useEffect(()=>{
    hotel&&GetPlacePhoto();    
  },[hotel])

  const GetPlacePhoto=async()=>{
    const data={
      textQuery:hotel?.name,
    };
    const result=await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[3].name)

      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    })
  }
  return (
        <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.name+","+hotel?.address} target='_blank'>
          <div className="hover:scale-105 transition-all curser-pointer" >
            <img src={PhotoUrl} className="rounded-xl h-[180px] w-full object-cover" />
            <div className="my-2 flex flex-col gap-2">
              <h2 className="font-medium">
                {" "}
                {hotel?.name || "Hotel Name Missing"}{" "}
              </h2>
              <h2 className="text-xs text-gray-500">📍
                {hotel?.address || "Address Missing"}
              </h2>
              <h2 className="text-sm">💰{hotel?.price} </h2>
              <h2 className="text-sm">⭐{hotel?.rating} </h2>
            </div>
          </div>
          </Link>
  )
}

export default HotelCardItem