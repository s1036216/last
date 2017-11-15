<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, user-scalable=no,  maximum-scale=1, minimum-scale=1, width=device-width" charset="UTF-8">
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2po9awT3gcPJdB_pK8XKHVZitS2zg-1U&callback=mapstart" async defer></script>

<style>
#map {height: 100%;}
</style>
    <title> Google Map </title>
</head>
<body>
    <div id="map"></div>

<!--JS LINK-->

<script>
	alert('map 시작');
	var map;
	var geocoder;
	function mapstart() {
		console.log('넘어온 세션////'+sessionStorage.getItem('mapAddress'));
		var mapOptions = {
				zoom : 17,
				center : new google.maps.LatLng(37.5651, 126.98955), //서울
			};
	    map = new google.maps.Map(document.getElementById('map'),mapOptions);
	    geoAddress();
	};


	function geoAddress() {
		geocoder = new google.maps.Geocoder();
		var address = sessionStorage.getItem('mapAddress');
		geocoder.geocode( { 'address': address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {

				var lat = results[0]['geometry']['location']['lat']();
				var lng = results[0]['geometry']['location']['lng']();
			
				map.setCenter(results[0].geometry.location); 
				
				var marker = new google.maps.Marker({
					map: map,
					position: results[0].geometry.location,
					animation:google.maps.Animation.DROP,
					title:address
				});
				
			} else {
				alert('Geocode was not successful for the followingreason: ' + status);
			}
		});
	};



</script>

</body>
</html>