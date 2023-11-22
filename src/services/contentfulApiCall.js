import { URL } from "./requestUrl"

const apiCall = (contentType) => {

  const spaceID = process.env.GATSBY_CONTENTFUL_SPACE_ID
  const accessToken = process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
  const apiUrl = `${URL.contentfulBaseUrl}/spaces/${spaceID}/entries?access_token=${accessToken}&content_type=${contentType}`

  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        resolve(data || []);
      })
      .catch(e => {
        reject(e);
      })
  });
}

export default apiCall