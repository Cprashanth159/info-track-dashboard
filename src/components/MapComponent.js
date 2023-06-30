import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Typography from "@mui/material/Typography";

export default function MapComponent() {
  const googleMapsApiKey = "AIzaSyBT5MaN7oBdBzn-RUwuiDBurO3uTHj4ffg";
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: googleMapsApiKey,
    libraries: ["places"],
  });
  const svgMarkerIcon = {
    path:
      'M12 0C7.31 0 3.39 2.27 0 6.02 1.16 9.35 4.68 14.37 12 24 19.32 14.37 22.84 9.35 24 6.02 20.61 2.27 16.69 0 12 0Z',
    fillColor: '#ff0000', 
    fillOpacity: 1.0,
    strokeWeight: 0,
    scale: 1.5, 
  };

  if (!isLoaded) {
    return <></>;
  }


  return (
    
      <Card style={{ borderRadius: '20px'}}>
        <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{fontWeight: 'bold'}}>
         Track on Map
        </Typography>
        <div style={{ height: 400, width: "100%", borderRadius: '20p' }}>
          <GoogleMap
            mapContainerStyle={{ height: "100%", width: "100%" }}
            zoom={8}
            center={{ lat: 36.2048, lng: 138.2529 }}
            apiKey={googleMapsApiKey}
            onLoad={() => {
             
              console.log("Google Maps API loaded.");
            }}
            onUnmount={() => {
              // Cleanup
            }}
          >
             <Marker position={{ lat: 36.2048, lng: 138.2529 }} icon={svgMarkerIcon} />
          </GoogleMap>
           </div>
        </CardContent>
      </Card>
    
  );
}
