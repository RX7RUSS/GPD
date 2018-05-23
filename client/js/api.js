var _data;

_GetAPI = () => {
var ExoUrl = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,ra,dec&order=dec&format=JSON'

  var ExamplePlanetDetails = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=JSON&select=&#42;&where=pl_hostname%20like%20%27HD%20142022%20A%27%20'

  _REQ = (type, url, callback)=>{
    var xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (callback) callback(JSON.parse(xhr.responseText))
      }
    }
    xhr.send(null)
  }

  REQ('GET', ExoUrl, (data)=>{
    console.log('All ExoPlanets Descovered:', data)
  })

  REQ('GET', ExamplePlanetDetails, (data)=>{
    console.log('Exoplanet Details:', data)
  })

}

_GetAPI()