import * as React from 'react';
import * as style from './style.css';
import {Map as ReactLeafletMap, TileLayer} from 'react-leaflet';

export interface Props  {
   
}

export class Map extends React.Component<Props> {     
    constructor(props: Props, context?: any) {
      super(props, context);      
    }  

    render() {
      const lat = 51.505;
      const lng = -0.09;
      const zoom = 13;       
      return (
        <div className={style.container}>
          <ReactLeafletMap style={{position: "relative", width: "100vw", height: "100vh"}} center={[lat, lng]} zoom={zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </ReactLeafletMap>
        </div>
      );
    }
}