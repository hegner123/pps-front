import config from 'config';
import { authHeader } from '../_helpers';


export const referenceService = {
    spotifyPreview
};


function spotifyPreview(song){
    const requestOptions ={
        method:'get',
        headers: authHeader(),
        body: {'search': song}
    }
    console.log(requestOptions)
    return fetch(`${config.apiUrl}/song-preview/`, requestOptions).then(handleResponse)
}





