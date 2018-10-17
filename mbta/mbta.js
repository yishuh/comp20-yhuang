function init()
{		
	// set the South station as the landmark
	var landmark = new google.maps.LatLng(42.352035, -71.055182);
			
	// Set up map
	var myOptions = {
		zoom: 13, 
		center: landmark,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		};

	
	// Create the map
	var themap = new google.maps.Map(document.getElementById("map"), myOptions);
	
	// Create a marker				
	var marker = new google.maps.Marker({
		position: landmark,
		title: "South Station, Boston, MA"
		});
	marker.setMap(themap);
				
	// Create a global info window that opens onclick
	var infowindow = new google.maps.InfoWindow();

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(marker.title);
		infowindow.open(themap, marker);
		});

	//set up station list with objects
	var station = [
	{
		"name":"South Station",
		"lat":"42.352271",
		"lon":"-71.05524200000001",
		"id":"place-sstat"
	},{
		"name":"Andrew",
		"lat":"42.330154",
		"lon":"-71.057655",
		"id":"place-andrw"
	},{
		"name":"Porter Square",
		"lat":"42.3884",
		"lon":"-71.11914899999999",
		"id":"place-portr"
	},{
		"name":"Harvard Square",
		"lat":"42.373362",
		"lon":"-71.118956",
		"id":"place-harsq"
	},{
		"name":"JFK/UMass",
		"lat":"42.320685",
		"lon":"-71.052391",
		"id":"place-jfk"
	},{
		"name":"Savin Hill",
		"lat":"42.31129",
		"lon":"-71.053331",
		"id":"place-shmnl"
	},{
		"name":"Park Street",
		"lat":"42.35639457",
		"lon":"-71.0624242",
		"id":"place-pktrm"
	},{
		"name":"Broadway",
		"lat":"42.342622",
		"lon":"-71.056967",
		"id":"place-brdwy"
	},{
		"name":"North Quincy",
		"lat":"42.275275",
		"lon":"-71.029583",
		"id":"place-nqncy"
	},{
		"name":"Shawmut",
		"lat":"42.29312583",
		"lon":"-71.06573796000001",
		"id":"place-smmnl"
	},{
		"name":"Davis",
		"lat":"42.39674",
		"lon":"-71.121815",
		"id":"place-davis"
	},{
		"name":"Alewife",
		"lat":"42.395428",
		"lon":"-71.142483",
		"id":"place-alfcl"
	},{
		"name":"Kendall/MIT",
		"lat":"42.36249079",
		"lon":"-71.08617653",
		"id":"place-knncl"
	},{
		"name":"Charles/MGH",
		"lat":"42.361166",
		"lon":"-71.070628",
		"id":"place-chmnl"
	},{
		"name":"Downtown Crossing",
		"lat":"42.355518",
		"lon":"-71.060225",
		"id":"place-dwnxg"
	},{
		"name":"Quincy Center",
		"lat":"42.251809",
		"lon":"-71.005409",
		"id":"place-qnctr"
	},{
		"name":"Quincy Adams",
		"lat":"42.233391",
		"lon":"-71.007153",
		"id":"place-qamnl"
	},{
		"name":"Ashmont",
		"lat":"42.284652",
		"lon":"-71.06448899999999",
		"id":"place-asmnl"
	},{
		"name":"Wollaston",
		"lat":"42.2665139",
		"lon":"-71.0203369",
		"id":"place-wlsta"
	},{
		"name":"Fields Corner",
		"lat":"42.300093",
		"lon":"-71.061667",
		"id":"place-fldcr"
	},{
		"name":"Central Square",
		"lat":"42.365486",
		"lon":"-71.103802",
		"id":"place-cntsq"
	},{
		"name":"Braintree",
		"lat":"42.2078543",
		"lon":"-71.0011385",
		"id":"place-brntn"

	}];

	displaystations(station, themap);


}

function displaystations(station, themap)
{

	var slat = new Array();
	var slon = new Array();
	var sid = new Array();
	
	for (var i = 0; i < station.length; i++)
	{

		slat.push(station[i].lat);
		slon.push(station[i].lon);
		sid.push(station[i].id);

		if(i != 0)
		{
			var newmark = new google.maps.LatLng(slat[i], slon[i]);
			var newmarker = new google.maps.Marker({
			position: newmark,
			title: "station[i]" + ", Boston, MA"
			});
			newmarker.setMap(themap);

			var newwindow = new google.maps.InfoWindow();

			google.maps.event.addListener(newmarker, 'click', function() {
				newinfowindow.setContent(newmarker.title);
				newinfowindow.open(themap, marker);
			});
		}

	}

}