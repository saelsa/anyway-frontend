import * as React from 'react';
import * as style from './style.css';
import {Map as ReactLeafletMap, TileLayer} from 'react-leaflet';

export interface Props  {
   
}

export class Map extends React.Component<Props> {     
    constructor(props: Props, context?: any) {
      super(props, context);      
    }  

    componentDidMount(){
      fetch('/markers?ne_lat=32.116469484914866&ne_lng=34.84361048916321&sw_lat=32.11165325156031&sw_lng=34.841014110836795&zoom=17&thin_markers=false&start_date=1522281600&end_date=1553817600&show_fatal=1&show_severe=1&show_light=1&approx=1&accurate=1&show_markers=1&show_accidents=1&show_discussions=1&show_rsa=1&show_urban=3&show_intersection=3&show_lane=3&show_day=7&show_holiday=0&show_time=24&start_time=25&end_time=25&weather=0&road=0&separation=0&surface=0&acctype=0&controlmeasure=0&district=0&case_type=0&age_groups%5B%5D=1&age_groups%5B%5D=2&age_groups%5B%5D=3&age_groups%5B%5D=4&age_groups%5B%5D=5&age_groups%5B%5D=6&age_groups%5B%5D=7&age_groups%5B%5D=8&age_groups%5B%5D=9&age_groups%5B%5D=10&age_groups%5B%5D=11&age_groups%5B%5D=12&age_groups%5B%5D=13&age_groups%5B%5D=14&age_groups%5B%5D=15&age_groups%5B%5D=16&age_groups%5B%5D=17&age_groups%5B%5D=18&age_groups%5B%5D=99&page=1&per_page=1000') // Call the fetch function passing the url of the API as a parameter
      .then(function(response) {
          console.log(response)
      })
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