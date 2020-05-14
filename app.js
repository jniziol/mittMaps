mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obmF0aGFubml6aW9sIiwiYSI6ImNqcG5oZjR0cDAzMnEzeHBrZGUyYmF2aGcifQ.7vAuGZ0z6CY0kXYDkcaOBg';

navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude, position.coords.longitude);

  const map = new mapboxgl.Map({   
    container: 'map', 
    style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
    zoom: 14,
    center: [position.coords.longitude, position.coords.latitude],
  });

  const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat([position.coords.longitude, position.coords.latitude])
    .addTo(map);
  
});   