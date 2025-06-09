import React from "react";
import SkipCard from "../components/SkipCard/SkipCard";
import { useEffect } from "react";
import { useState } from "react";
import { getSkips } from "../services/skipService";
import Modale from "../components/Modale";

import AOS from "aos";
import "aos/dist/aos.css";
import { Loading } from "../components/LoadingComponent";


function groupSkidCardByTwo(skids) {
  const groups = [];
  for (let i = 0; i < skids.length; i += 2) {
    groups.push(skids.slice(i, i + 2));
  }
  return groups;
}

export default function SelectSkip() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [groupedData, setGroupedData] = useState([]);

  React.useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getSkips();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

    useEffect(() => {
    if ( data&&data.length > 0) {
      const grouped = groupSkidCardByTwo(data);
      setGroupedData(grouped);
      console.log("les données groupées", data);
    }
  }, [data]);


  
  if (loading) {
    return ( <Loading />)
  }

  console.log("data", data);
  if (error) {
    return <div>Erreur : {error}</div>;
  }
  const groupCard=groupSkidCardByTwo(data)

  console.log("les données groupé", groupCard);
  return (
    <div className="col">
      <h4 className="text-2xl sm:text-3xl text-center sm:text-start">
        Choose Your Skip Size
      </h4>
      <p className="text-base text-center sm:text-start  pt-5">
        Select the skip size that best suits your needs
      </p>
      <div className="block h-16"></div>
      {/* Mobile Device */}

      <div className="w-full  h-auto grid  grid-cols-2  gap-10  relative ">
        {data.map((item, index) => (
          <div className=" w-full col-span-2 sm:col-span-1 bg-red block sm:hidden " key={item.id|| index} >
            <SkipCard
              item={item}
              index={index}
              selectedSkip={(skip) => {
                setSelectedSkip(skip);
                setModalOpen(true);
              }}
              className=''
            />
          </div>
        ))}
   
          
        
      
      </div>
           {/**Destop */}

      <div className="hidden sm:block w-full">
         {groupedData?.map((group, groupIndex) => (
          <div
            key={groupIndex}
            data-aos="fade-up"
            className="grid grid-cols-2 gap-4 mb-8 "
          >
            {group.map((item, index) => (
              <div
                key={item.id || index}
                className=""
              >
                <SkipCard
                  item={item}
                  index={groupIndex * 2 + index}
                  selectedSkip={(skip) => {
                    setSelectedSkip(skip);
                    setModalOpen(true);
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
        {selectedSkip && (
          <Modale
            skip={selectedSkip}
            open={modalOpen}
            onClose={() => setModalOpen(false)}
          />
        )}
    </div>
  );
}
