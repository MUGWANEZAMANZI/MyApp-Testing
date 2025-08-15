import {
  Camera,
  FillLayer,
  MapView,
  ShapeSource,
  RasterSource,
  RasterLayer,
} from "@maplibre/maplibre-react-native";
import bboxPolygon from "@turf/bbox-polygon";




// Hardcoded EU bounds (example: [southwestLng, southwestLat, northeastLng, northeastLat])
const EU_BOUNDS = {
  sw: [-31.266001, 27.636311], // Southwest corner (Portugal/Azores)
  ne: [39.869301, 81.008797], // Northeast corner (Russia/Finland border)
};

const POLYGON = bboxPolygon([
  EU_BOUNDS.sw[0],
  EU_BOUNDS.sw[1],
  EU_BOUNDS.ne[0],
  EU_BOUNDS.ne[1],
]);


export function RestrictMapBounds() {
  return (
    <MapView style={{ flex: 1 }}>
      <Camera maxBounds={EU_BOUNDS} bounds={EU_BOUNDS} />
      <RasterSource
        id="maptiler"
        tileUrlTemplates={["https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=9sIRFJ766pISx8pvoqRd"]}
        tileSize={256}
      >
        <RasterLayer id="maptiler-layer" sourceID="maptiler" />
      </RasterSource>
      <ShapeSource id="bounds-source" shape={POLYGON}>
        <FillLayer
          id="bounds-fill"
          style={{
            fillColor: "blue",
            fillOpacity: 0.1,
            fillOutlineColor: "blue",
          }}
        />
      </ShapeSource>
    </MapView>
  );
}