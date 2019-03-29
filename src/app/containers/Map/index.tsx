import * as React from 'react';
import * as style from './style.css';
import { connect } from "react-redux";
import { Map as ReactLeafletMap, TileLayer, Marker } from 'react-leaflet';


export interface Props {}

export interface State {
  markers: any;
}

export class Map extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context);
    this.state = { markers: [] };
  }

  handleMapMoveEnd = (e: L.LeafletEvent) => {
    console.log(e.target.getBounds())
  }

  componentDidMount() {
    fetch(
      '/markers?ne_lat=32.08508828439704&ne_lng=34.781903715202134&sw_lat=32.082679371985286&sw_lng=34.779661388465684&zoom=18&thin_markers=false&start_date=1522281600&end_date=1553817600&show_fatal=1&show_severe=1&show_light=1&approx=1&accurate=1&show_markers=1&show_accidents=1&show_discussions=1&show_rsa=1&show_urban=3&show_intersection=3&show_lane=3&show_day=7&show_holiday=0&show_time=24&start_time=25&end_time=25&weather=0&road=0&separation=0&surface=0&acctype=0&controlmeasure=0&district=0&case_type=0&age_groups%5B%5D=1&age_groups%5B%5D=2&age_groups%5B%5D=3&age_groups%5B%5D=4&age_groups%5B%5D=5&age_groups%5B%5D=6&age_groups%5B%5D=7&age_groups%5B%5D=8&age_groups%5B%5D=9&age_groups%5B%5D=10&age_groups%5B%5D=11&age_groups%5B%5D=12&age_groups%5B%5D=13&age_groups%5B%5D=14&age_groups%5B%5D=15&age_groups%5B%5D=16&age_groups%5B%5D=17&age_groups%5B%5D=18&age_groups%5B%5D=99&page=1&per_page=1000&total_pages=1&total_entries=76'
    )
      .then((r) => r.json().then((data) => ({ status: r.status, markers: data.markers })))
      .then((obj) => this.setState({ markers: obj.markers }))
      .catch(function() {
        console.log('error');
      });
  }

  render() {
    const { markers } = this.state;

    const lat = 32.08508828439704;
    const lng = 34.781903715202134;
    const zoom = 17;

    return (
      <div className={style.container}>
        <ReactLeafletMap useCanves={true} onMoveend={this.handleMapMoveEnd}
          style={{ position: 'relative', width: '100vw', height: '100vh' }}
          center={[lat, lng]}
          zoom={zoom}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {markers.map((marker: any) => (
            <Marker key={marker.id} position={[marker.latitude, marker.longitude]} />
          ))}

        </ReactLeafletMap>
      </div>
    );
  }
}

function mapStatetoProps(state: any) {
  return {
    tabs: state
  };
}

export default connect(
  mapStatetoProps, null
)(Map);
