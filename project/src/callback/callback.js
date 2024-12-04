import axios from 'axios';

async function getAccessToken() {
    const code = new URLSearchParams(window.location.search).get('code');

    const res = await axios.post(
        "http://144.24.100.37:5000/login/oauth/access_token",
        {
            client_id: 'Ov23liJXs3PPaCWpwZsh',
            client_secret: 'e897822e84059a2aeb2b69b0e874e7c0481e2225',
            code: code
        }
    );

    const access_token = res.data.access_token; // Access token directly from the response
    return access_token;
}

// Getting User Data
async function getUserData(access_token) {
    const userResponse = await axios.get(
        "http://144.24.100.37:5000/user",
        {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        }
    );
    return userResponse.data; // Return user data
}

// Getting PR Data For Sayan Sanpui
async function getPullRequests(access_token) {
    try {
        const response = await axios.get(
            "http://144.24.100.37:5000/repos/sayansanpui/Hackerspace_Portfolio-Flutter-App/pulls",
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            }
        );
        return response.data; // Return the data directly
    } catch (error) {
        console.error("Error fetching pull requests:", error);
        throw error; // Rethrow the error to handle it in the component
    }
}

// Getting Issues Data
async function getIssues(access_token) {
    try {
        const response = await axios.get(
            "http://144.24.100.37:5000/repos/sayansanpui/Hackerspace_Portfolio-Flutter-App/issues",
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            }
        );
        return response.data; // Return the data directly
    } catch (error) {
        console.error("Error fetching issues:", error);
        throw error; // Rethrow the error to handle it in the component
    }
}

// Getting PR Data For Bidisha
async function getPullRequests1(access_token) {
  try {
      const response = await axios.get(
          "http://144.24.100.37:5000/repos/bidisha-15/Quiz-app-backend/pulls",
          {
              headers: {
                  'Authorization': `Bearer ${access_token}`
              }
          }
      );
      return response.data; // Return the data directly
  } catch (error) {
      console.error("Error fetching pull requests:", error);
      throw error; // Rethrow the error to handle it in the component
  }
}

// Getting Issues Data
async function getIssues1(access_token) {
  try {
      const response = await axios.get(
          "http://144.24.100.37:5000/repos/bidisha-15/Quiz-app-backend/issues",
          {
              headers: {
                  'Authorization': `Bearer ${access_token}`
              }
          }
      );
      return response.data; // Return the data directly
  } catch (error) {
      console.error("Error fetching issues:", error);
      throw error; // Rethrow the error to handle it in the component
  }
}

// Getting PR Data For Ankit
async function getPullRequests2(access_token) {
  try {
      const response = await axios.get(
          "http://144.24.100.37:5000/repos/Ankit-Koder/cartoonify/pulls",
          {
              headers: {
                  'Authorization': `Bearer ${access_token}`
              }
          }
      );
      return response.data; // Return the data directly
  } catch (error) {
      console.error("Error fetching pull requests:", error);
      throw error; // Rethrow the error to handle it in the component
  }
}

// Getting Issues Data
async function getIssues2(access_token) {
  try {
      const response = await axios.get(
          "http://144.24.100.37:5000/repos/Ankit-Koder/cartoonify/issues",
          {
              headers: {
                  'Authorization': `Bearer ${access_token}`
              }
          }
      );
      return response.data; // Return the data directly
  } catch (error) {
      console.error("Error fetching issues:", error);
      throw error; // Rethrow the error to handle it in the component
  }
}

// Getting PR Data For Debangan
async function getPullRequests3(access_token) {
  try {
      const response = await axios.get(
          "http://144.24.100.37:5000/repos/tikuzaa/Quiz-app-frontend/pulls",
          {
              headers: {
                  'Authorization': `Bearer ${access_token}`
              }
          }
      );
      return response.data; // Return the data directly
  } catch (error) {
      console.error("Error fetching pull requests:", error);
      throw error; // Rethrow the error to handle it in the component
  }
}

// Getting Issues Data
async function getIssues3(access_token) {
  try {
      const response = await axios.get(
          "http://144.24.100.37:5000/repos/tikuzaa/Quiz-app-frontend/issues",
          {
              headers: {
                  'Authorization': `Bearer ${access_token}`
              }
          }
      );
      return response.data; // Return the data directly
  } catch (error) {
      console.error("Error fetching issues:", error);
      throw error; // Rethrow the error to handle it in the component
  }
}

// Getting PR Data For Sayandip
async function getPullRequests4(access_token) {
  try {
      const response = await axios.get(
          "http://144.24.100.37:5000/repos/sayandip-ghosh/Blog-Server-Side/pulls",
          {
              headers: {
                  'Authorization': `Bearer ${access_token}`
              }
          }
      );
      return response.data; // Return the data directly
  } catch (error) {
      console.error("Error fetching pull requests:", error);
      throw error; // Rethrow the error to handle it in the component
  }
}

// Getting Issues Data
async function getIssues4(access_token) {
  try {
      const response = await axios.get(
          "http://144.24.100.37:5000/repos/sayandip-ghosh/Blog-Server-Side/issues",
          {
              headers: {
                  'Authorization': `Bearer ${access_token}`
              }
          }
      );
      return response.data; // Return the data directly
  } catch (error) {
      console.error("Error fetching issues:", error);
      throw error; // Rethrow the error to handle it in the component
  }
}

// Getting PR Data For Sahil
async function getPullRequests5(access_token) {
  try {
      const response = await axios.get(
          "http://144.24.100.37:5000/repos/Sahil-047/notion-clone/pulls",
          {
              headers: {
                  'Authorization': `Bearer ${access_token}`
              }
          }
      );
      return response.data; // Return the data directly
  } catch (error) {
      console.error("Error fetching pull requests:", error);
      throw error; // Rethrow the error to handle it in the component
  }
}

// Getting Issues Data
async function getIssues5(access_token) {
  try {
      const response = await axios.get(
          "http://144.24.100.37:5000/repos/Sahil-047/notion-clone/issues",
          {
              headers: {
                  'Authorization': `Bearer ${access_token}`
              }
          }
      );
      return response.data; // Return the data directly
  } catch (error) {
      console.error("Error fetching issues:", error);
      throw error; // Rethrow the error to handle it in the component
  }
}

// Getting PR Data For Muskaan
async function getPullRequests6(access_token) {
  try {
      const response = await axios.get(
          "http://144.24.100.37:5000/repos/muskaand26-msit/my-blog-app/pulls",
          {
              headers: {
                  'Authorization': `Bearer ${access_token}`
              }
          }
      );
      return response.data; // Return the data directly
  } catch (error) {
      console.error("Error fetching pull requests:", error);
      throw error; // Rethrow the error to handle it in the component
  }
}

// Getting Issues Data
async function getIssues6(access_token) {
  try {
      const response = await axios.get(
          "http://144.24.100.37:5000/repos/muskaand26-msit/my-blog-app/issues",
          {
              headers: {
                  'Authorization': `Bearer ${access_token}`
              }
          }
      );
      return response.data; // Return the data directly
  } catch (error) {
      console.error("Error fetching issues:", error);
      throw error; // Rethrow the error to handle it in the component
  }
}

export { getAccessToken, getUserData, getPullRequests, getIssues, getPullRequests1, getIssues1, getPullRequests2, getIssues2, getPullRequests3, getIssues3, getPullRequests4, getIssues4, getPullRequests5, getIssues5, getPullRequests6, getIssues6 };