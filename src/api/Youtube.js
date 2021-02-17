import axios from 'axios';

const KEY = 'AIzaSyC6ny00lyznot1URae6wejTDFwuzocoUxE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'videos',
      maxResults: 5,
      key: KEY
  }
})


