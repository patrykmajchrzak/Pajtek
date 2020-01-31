alert("Witam na stronie");







require (["esri/Map", "esri/views/MapView", "esri/WebMap", "esri/geometry/support/webMercatorUtils", "esri/widgets/BasemapToggle",
"esri/widgets/BasemapGallery"],
   function(Map, MapView, WebMap, webMercatorUtils, BasemapToggle, BasemapGallery)
   {
    let map1 = new Map({basemap:"topo"});
    let map2 = new Map({basemap:"satellite"});
    let map3 = new Map({basemap:"osm"});
    let map4 = new WebMap({
        portalItem: {
            id: "a798ad6e6c6d447f95f2ec668ef38eb1"
         }
    });

    let mapContainer = new MapView({
        container: "mapid",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
        map: map4  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
        
      });
      // let view = new MapView({
      //    container: "viewDiv",
      //   map: map,
      // })
      // let basemapGallery = new BasemapGallery({
      //    view: view,
      //    source: {
      //      portal: {
      //        url: "http://www.arcgis.com",
      //        useVectorBasemaps: true, // Load vector tile basemap group
      //      },
      //    } 
      //  });
 
      //  view.ui.add(basemapGallery, "top-right"); // Add to the view
    
    document.getElementById("przycisk").onclick = function() {
        console.log('klik');
        mapContainer.map = map2;
    };
    document.getElementById("przycisk2").onclick = function() {
        console.log('klik');
        mapContainer.map = map1;
    };
    document.getElementById("przycisk3").onclick = function() {
        console.log('klik');
        mapContainer.map = map3;
    };
    document.getElementById("przycisk4").onclick = function() {
        console.log('klik');
        mapContainer.map = map4;
    };
    mapContainer.on("click", function(evt){
      let cords = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
      console.log(cords.x);
      console.log(cords.y);
  });
   });
