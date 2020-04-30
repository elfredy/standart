/*Yandex map */
$(document).ready(function () {
    /* ymaps.ready(function () {
         var myMap = new ymaps.Map('YMapsID', {
             center: [40.38, 49.87],
             zoom: 12,
             /**
              * Please note that in the API 2.1, the map is created with controls by default.
              * If you don't need to add them to the map, pass an empty array in the "controls" field in its parameters.
              */
    controls: []
});

/*
        var myPlacemark = new ymaps.Placemark([
            40.38, 49.87

        ], {
            balloonContentBody: [
                '<address>',
                '<strong>Baku Xatai 193</strong>',
                '<br/>',
                'Address: 1000, Baku, S.S.Axundov, 16',
                '<br/>',
                'For more information, see: <a href="https://gocreative.com.tr"</a>',
                '</address>'
            ].join('')
        }, {
            preset: 'islands#redDotIcon',

        });

        var myPlacemark2 = new ymaps.Placemark([
            40.40, 49.85
        ], {
            balloonContentBody: [
                '<address>',
                '<strong>Baku Binagadi 200</strong>',
                '<br/>',
                'Address: 1000, Baku, Azadliq Avenue, 16',
                '<br/>',
                'For more information, see: <a href="https://gocreative.com.tr"</a>',
                '</address>'
            ].join('')
        }, {
            preset: 'islands#redDotIcon',

        });



        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark2);
    });


}); */


/* Google map */
var map, infoWindow;
const city = document.getElementById('branchLink-1');
const city2 = document.getElementById('branchLink-2');

function initMap() {
    var myLatlng = { lat: 40.40, lng: 49.85 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: myLatlng

        
    });

    var marker = new google.maps.Marker({
        position: { lat: 40.40, lng: 49.85 },
        map: map,
        title: 'Click to zoom'
    });

    var marker1 = new google.maps.Marker({
        position: { lat: 39.21, lng: 45.55 },
        map: map,
        title: 'Click to zoom'
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
        map.setZoom(10);
        map.setCenter(marker.getPosition());
    });

    marker1.addListener('click', function () {
        infowindow1.open(map, marker1);
        map.setZoom(10);
        map.setCenter(marker1.getPosition());
    });

    $(city).click(function () {
        infowindow.open(map, marker);
        map.setZoom(10);
        map.setCenter(marker.getPosition());
    });

    $(city2).click(function () {
        infowindow1.open(map, marker1);
        map.setZoom(10);
        map.setCenter(marker1.getPosition());
    });


    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Bakı</h3>' +
        '<div id="bodyContent">' +
        '<p><b>1.	Bakı    - Xətai ray., Q.Nəbi küç., ev 12, məh. 19 </b> </p>' +
        '<p><b>Hümbətov Zaur Tahir oğlu - ZHumbatov@standardinsurance.az - 070 909 92 38 </b></p>'
    '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var contentString1 = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Nakhcivan</h3>' +
        '<div id="bodyContent">' +
        '<p><b>2. Nakhcivan - Naxçıvan şəhəri. Ərəzin kəndi </b> </p>' +
        '<p><b> Məhəmməd Məmmədli - ZHumbatov@standardinsurance.az - 050 - 555 55 55 </b></p>'
    '</div>' +
        '</div>';

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
    });
    
   

}

