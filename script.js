// curl -X POST "https://accounts.spotify.com/api/token" \
//      -H "Content-Type: application/x-www-form-urlencoded" \
//      -d "grant_type=client_credentials&client_id=5b13afec50114add99a3841e550a2243&client_secret=1b179c59beac427b8722705824af4374"

//Log the six types pof data

let data = async () => {
    let res = await fetch('https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl',{
        headers:{
            "Authorization" : "Bearer BQAM_VsNENKcoQGeZIRNKch2rYFDAu6CGTwGR5rgg8p16kkURLghHxG0np6FyuuGFViPXBKCCI7TwvhXcfiB3jbjS385SiHFXgo_KrVJaY71TWgxMe8" 
        }
    });
    let trackData = await res.json()
    console.log(data)

    return trackData;
}

data().then((trackData) => {})



console.log(trackData)

function displayTrackInfo() {

}

console.log(album.name)





