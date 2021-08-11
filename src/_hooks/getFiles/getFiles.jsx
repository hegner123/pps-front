import firebase from 'firebase'

export const getFiles = (file) => {
    const storage = firebase.storage()
    // Create a reference from a Google Cloud Storage URI
    var gsReference = storage.refFromURL(
        `gs://proprojectstudio.appspot.com/${file}`
    )

    const img = gsReference
        .getDownloadURL()
        .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            // Or inserted into an <img> element
            console.log(url)
            return url
        })
        .catch((error) => {
            console.error(error)
            return error
        })

        return img
}
