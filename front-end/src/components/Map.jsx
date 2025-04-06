import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const Map = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setLocation([lat, lng]);
    });
  }, []); // 👈 only run once

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center  px-8 md:px-10 lg:px-16 h-[70vh] py-12">
      <div className="flex flex-col gap-3 w-full h-full justify-center ">
        <h3 className="font-bold text-xl md:text-2xl lg:text-4xl text-primary lg:w-3/4 ">
          Trouvez un mécanicien proche de chez vous
        </h3>
        <p className="text-xs md:text-sm lg:text-base">
          Explorez la carte pour localiser les ateliers à proximité, consulter
          leurs services et prendre rendez-vous facilement. Plus besoin de
          chercher, tout est à portée de main.
        </p>
      </div>
      <div className="h-full w-full ">
        {location && (
          <MapContainer
            center={location}
            zoom={15}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location}>
              <Popup>ZIZO MECHANIC</Popup>
            </Marker>
          </MapContainer>
        )}
        {!location && <p className="text-center mt-10">Loading map...</p>}
      </div>
    </div>
  );
};

export default Map;
