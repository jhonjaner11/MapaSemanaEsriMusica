
require([
          "esri/Map",
          "esri/views/MapView",
          "esri/layers/FeatureLayer",
          "esri/PopupTemplate"
        ], function(Map, MapView,FeatureLayer,  popupTemplate) {

        var map = new Map({
          basemap: "streets-night-vector"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-73.783892,2.8894434],
          zoom: 5,
          popup: {
            dockEnabled: true,
            dockOptions: {
              // Disables the dock button from the popup
              buttonEnabled: false,
              // Ignore the default sizes that trigger responsive docking
              breakpoint: false
            }},
         });

        const layer = new FeatureLayer({
         url: "https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/Artistas/FeatureServer/0"
      });
      map.add(layer);
      var template = {
            // autocasts as new PopupTemplate()
            title: "{Nombre}",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "Lugar",
                    label: "LUGAR"
                  },
                  {
                    fieldName: "GENERO",
                    label: "GENERO",
                    format: {
                      digitSeparator: true,
                      places: 0
                    }
                  },

                ]
              },
              {
                type: "media",
                mediaInfos: [
                  {
                    title: "",
                    type: "image",

                    value: {
                      sourceURL:"{imagen}"
                    }
                  },
                ]
              }

            ]
          }

         layer.popupTemplate = template;

    });
