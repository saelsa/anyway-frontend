import * as React from 'react';
import * as style from './style.css';
import { Map } from '../Map';

//leaflet initialization
import * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const marker = require('leaflet/dist/images/marker-icon.png');
const marker2x = require('leaflet/dist/images/marker-icon-2x.png');
const markerShadow = require('leaflet/dist/images/marker-shadow.png');
const L: any = Leaflet;
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: marker2x,
    iconUrl: marker,
    shadowUrl: markerShadow
});
//end of leaflet initialization

export interface Props  {
   
}

export class App extends React.Component<Props> {     
    constructor(props: Props, context?: any) {
      super(props, context);      
    }  

    render() {       
      return (
        <div className={style.container}>
          <Map />
        </div>
      );
    }
}