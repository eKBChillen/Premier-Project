import utils from './utils';

/*-----------------------------------------------
|   Google Map
-----------------------------------------------*/

const mapInstances = [];
const panoramaInstances = [];

function destroyMap(map) {
  if (map) {
    window.google.maps.event.clearInstanceListeners(map);
  }
}

function destroyAll() {
  mapInstances.forEach(destroyMap);
  mapInstances.length = 0;
  panoramaInstances.length = 0;
}

function initMap() {
  const themeController = document.body;
  const $googlemaps = [...document.querySelectorAll('[data-gmap]')];

  if (!$googlemaps.length || !window.google) return;

  Promise.all([
    window.google.maps.importLibrary('maps'),
    window.google.maps.importLibrary('marker'),
    window.google.maps.importLibrary('core')
  ]).then(([mapsLib, markerLib, coreLib]) => {
    const { Map, InfoWindow } = mapsLib;
    const { AdvancedMarkerElement } = markerLib;
    const { ColorScheme } = coreLib;

    $googlemaps.forEach((itm) => {
      const latLng = utils.getData(itm, 'latlng').split(',');
      const zoom = utils.getData(itm, 'zoom');
      const mapId = utils.getData(itm, 'mapid');
      const markerPopup = itm.innerHTML;

      const lightIconUrl = utils.getData(itm, 'icon')
        || 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png';

      const darkIconUrl = utils.getData(itm, 'dark-icon') || lightIconUrl;

      /* ---------- Street View ---------- */
      if (utils.getData(itm, 'theme') === 'streetview') {
        const panorama = new window.google.maps.StreetViewPanorama(itm, {
          position: { lat: +latLng[0], lng: +latLng[1] },
          pov: utils.getData(itm, 'pov'),
          zoom,
          gestureHandling: 'none',
          scrollwheel: false,
          visible: true
        });

        panoramaInstances.push(panorama);
        return;
      }

      /* ---------- Map ---------- */
      const map = new Map(itm, {
        mapId,
        zoom,
        center: { lat: +latLng[0], lng: +latLng[1] },
        scrollwheel: utils.getData(itm, 'scrollwheel'),
        colorScheme:
          localStorage.getItem('theme') === 'dark'
            ? ColorScheme.DARK
            : ColorScheme.LIGHT
      });

      mapInstances.push(map);

      const infowindow = new InfoWindow({
        content: markerPopup
      });

      const iconImage = document.createElement('img');
      iconImage.src = localStorage.getItem('theme') === 'dark'
          ? darkIconUrl
          : lightIconUrl;

      const marker = new AdvancedMarkerElement({
        map,
        position: { lat: +latLng[0], lng: +latLng[1] },
        content: iconImage
      });

      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });
    });

    /* ---------- Theme switch listener (ONCE) ---------- */
    themeController?.addEventListener('clickControl', ({ detail }) => {
      if (detail.control === 'theme') {
        destroyAll();
        initMap();
      }
    });
  });
}

export default initMap;
