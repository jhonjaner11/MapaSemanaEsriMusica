
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
          center: [-73.783892,5.5],
          zoom: 5.5,
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

                    type: "image",

                    value: {
                      sourceURL:"{imagen}"
                    },
                      title: "<div id='Contenedor_Redes' align='center'> <a href='{Spotify}' target='_blank'> <div id='facebookgeo'style=' width: 33px;  height: 35px; border-radius:20px; text-align:center;margin-left:125px; background-image: url(https://image.flaticon.com/icons/svg/174/174872.svg); float: left; background-position: center; background-repeat: no-repeat;'></div></a> <a href='{Youtube}' target='_blank'> <div id='facebookgeo'style=' width: 33px;  height: 35px; margin-left:50px; border-radius:12px;  background-image: url(https://image.flaticon.com/icons/svg/174/174883.svg); float: left; background-position: center; background-repeat: no-repeat;'></div></a><br><iframe src={CANCION} width='300' height='80' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe> </div>"
                  },



                ]
              }

            ]
          }

         layer.popupTemplate = template;

    });
