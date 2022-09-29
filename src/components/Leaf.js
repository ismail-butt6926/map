import React,{useState} from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import "./Leaf.css"

const location1 = [
    {
      id: 1,
      city: 'Islamabad',
      lat: '33.738045',
      long: '73.084488',
      counts: 40,
    },
    {
      id: 2,
      city: 'Abbottabad',
      lat: '34.1688',
      long: '73.084488',
      counts: 10,
    },
  ]

const Leaf = () => {

    const [count, setCount] = useState(34)
    const center = [33.58652372261319, 73.08590065983122]
    const rectangle = [
      [34.1688, 73.2215],
      [34.1678, 73.2215],
    ]

    const position = [34.1688, 73.2215]

    const fillBlueOptions = { fillColor: 'blue' }


    const fillRedOptions = { fillColor: 'red' }

    const greenOptions = { color: 'green', fillColor: 'green' }

    const purpleOptions = { color: 'purple' }

    const handleClick = () => {
      console.log('jjjj')
    }

    const markerIcon = L.icon({
        iconUrl:
          'https://i.pinimg.com/originals/0f/61/ba/0f61ba72e0e12ba59d30a50295964871.png',
        iconSize: [40, 40],
        label: 'jjj',
        iconAnchor: [17, 46], //[left/right, top/bottom]
        popupAnchor: [0, -46], //[left/right, top/bottom]
      })

    return (
      <>
            <div>
        <MapContainer
          className="leaflet-container"
          center={[34.1688, 73.2215]}
          zoom={2}
          maxZoom={18}
          style={{ height: '20vh', minHeight: '20vh' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* {props.mapLocation?.map((item) => (
            <Marker
              position={[item.coordinates?.lat, item.coordinates?.long]}
              icon={markerIcon}
              key={item.id}
            >
              <Tooltip direction="right" offset={[0, 0]} opacity={1} permanent>
                {item.doc_count}
              </Tooltip>
              <Popup>
                <div  style ={{height: "25vh", overflowY: "scroll"}} >
                {item?.posts?.map((item1) => (
                  <div  style={{ border: "1px solid #D6D6D6", padding: "10px", }}>
                    <div className="d-flex anchorColor">
                    <a href={item1?.url_c} target="_blank">     <img
                        style={{ borderRadius: '50%' }}
                        src={item1?.author?.image}
                      /> </a>
                      <p className="ml-2 anchorColor">{item1.author?.name}</p>
                    </div>
       <p className='anchorColor'>{item1.text_c}</p>
                  </div>
                ))}
                </div>
              </Popup>
            </Marker>
          ))} */}
        </MapContainer>
      </div></>
       

)
}
               
    



export default Leaf






