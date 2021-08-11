import firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {firebaseConfig} from '../secret.js'
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage()

// Create a storage reference from our storage service
var storageRef = storage.ref()

export function uploadFile(file) {
    const ref = firebase.storage().ref().child(file.name)
    ref.put(file).then((snapshot) => {
        console.log('Uploaded a blob or file!')
        console.log(snapshot)
    })
}
