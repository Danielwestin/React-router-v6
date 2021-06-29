import { useState, useEffect, useRef } from "react";
import ReactMapGL, { FlyToInterpolator, Marker, Popup } from "react-map-gl";
import useSupercluster from "use-supercluster";
import styles from "./mapbox.module.css";

export default function MapBox({ title, latitude, longitude, systembolag }) {
  const mapRef = useRef(null);
  const [selectedShop, setSelectedShop] = useState(null);
  const [viewport, setViewport] = useState(() => ({
    latitude,
    longitude,
    width: "100%",
    height: "100%",
    zoom: 10,
    transitionInterpolator: new FlyToInterpolator({ speed: 2 }),
    transitionDuration: "auto",
  }));

  useEffect(() => {
    setViewport({
      ...viewport,
      latitude,
      longitude,
      transitionInterpolator: new FlyToInterpolator({ speed: 2 }),
      transitionDuration: "auto",
    });
  }, [latitude, longitude]);

  const points = systembolag.map((shop) => ({
    type: "Feature",
    properties: {
      cluster: false,
      id: shop.SiteId,
      shop,
    },
    geometry: {
      type: "Point",
      coordinates: [shop.Position.Long, shop.Position.Lat],
    },
  }));

  // get map bounderies

  const bounds =
    mapRef.current && mapRef.current.getMap().getBounds().toArray().flat();

  // use cluster
  const { clusters, supercluster } = useSupercluster({
    points,
    zoom: viewport.zoom,
    bounds,
    options: { radius: 75, maxZoom: 15 },
  });

  //zoom on cluster click
  const clusterZoom = (clusterId) => {
    const expansionZoom = Math.min(
      supercluster.getClusterExpansionZoom(clusterId),
      15
    );
    return setViewport({
      ...viewport,
      longitude,
      latitude,
      zoom: expansionZoom,
      transitionInterpolator: new FlyToInterpolator({ speed: 2 }),
      transitionDuration: "auto",
    });
  };

  return (
    <>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={(viewport) => setViewport(viewport)}
                // mapStyle="mapbox://styles/petradaniel/ckhddlvbq0gq31amqpjmus2f8"
                ref={mapRef}
              >
                {clusters.map((cluster) => {
                  const [longitude, latitude] = cluster.geometry.coordinates;
                  const {
                    cluster: isCluster,
                    point_count: pointCount,
                    shop,
                  } = cluster.properties;
                  if (isCluster) {
                    return (
                      <Marker
                        key={cluster.id}
                        latitude={latitude}
                        longitude={longitude}
                      >
                        <div
                          className={styles.cluster_marker}
                          style={{
                            width: `${
                              20 + (pointCount / points.length) * 50
                            }px`,
                            height: `${
                              20 + (pointCount / points.length) * 50
                            }px`,
                          }}
                          onClick={() => clusterZoom(cluster.id)}
                        >
                          {pointCount}
                        </div>
                      </Marker>
                    );
                  }
                  return (
                    <Marker
                      className={styles.marker}
                      key={cluster.properties.id}
                      latitude={latitude}
                      longitude={longitude}
                      onClick={() => setSelectedShop(shop)}
                    >
                      <div className={styles.marker_arrow}></div>
                      <button>
                        <img
                          className={styles.systembolaget_logo}
                          src="/Systembolaget_logo.svg"
                          alt="systembolaget logo"
                        />
                      </button>
                    </Marker>
                  );
                })}
                {selectedShop && (
                  <Popup
                    className={styles.popup}
                    latitude={selectedShop.Position.Lat}
                    longitude={selectedShop.Position.Long}
                    onClose={() => setSelectedShop(null)}
                    offsetTop={-30}
                    offsetLeft={5}
                  >
                    <div className={styles.popup_wrapper}>
                      <h1 className="text-1xl font-bold text-gray-900">
                        Systembolaget
                      </h1>
                      <p>
                        {selectedShop.Address}, {selectedShop.Alias}
                      </p>
                      <p>
                        {selectedShop.PostalCode} {selectedShop.City}
                      </p>
                      <p>
                        Vardagar: <b>{selectedShop.OpeningHours}</b>
                      </p>
                    </div>
                  </Popup>
                )}
              </ReactMapGL>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
