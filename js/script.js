$(document).ready(function() {
	
	navigator.geolocation.getCurrentPosition(success, error);

	function success(position) {
		console.log(position.coords.latitude + " " + position.coords.longitude);
		
		$.ajax({
			url: 'https://developers.zomato.com/api/v2.1/geocode',
			headers: {
				'user-key': '835470154cf96b6011895cc8f04cc166',
				'Accept': 'application/json'				
			},
			data: {
				'lat': position.coords.latitude,
				'lon': position.coords.longitude
			},
			success: function(result) {
				console.log(result);
				$text = JSON.stringify(result);
				$('#result').append($text);
			}
		});
	}

	function error(err) {
		console.log(err);
	}

});