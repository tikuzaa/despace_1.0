import axios from 'axios';

async function getAccessToken() {
    const code = new URLSearchParams(window.location.search).get('code');

    const res = await axios.post(
        "https://despaceapi.hackerspacemsit.in/login/oauth/access_token",
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
        "https://despaceapi.hackerspacemsit.in/user",
        {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        }
    );
    return userResponse.data; // Return user data
}

// Getting PR Data For Debangan- Quiz Frontend
async function getPullRequests(access_token) {
    try {
        const response = await axios.get(
            "https://despaceapi.hackerspacemsit.in/repos/Hackerspace2023/Quiz-App-Frontend/pulls",
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

// Getting Issues Data for Debangan
async function getIssues(access_token) {
    try {
        const response = await axios.get(
            "https://despaceapi.hackerspacemsit.in/repos/Hackerspace2023/Quiz-App-Frontend/issues",
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

// Getting PR Data For Bidisha- Quiz Backend
async function getPullRequests1(access_token) {
  try {
      const response = await axios.get(
          "https://despaceapi.hackerspacemsit.in/repos/Hackerspace2023/Quiz-app-Backend/pulls",
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

// Getting Issues Data for Bidisha
async function getIssues1(access_token) {
  try {
      const response = await axios.get(
          "https://despaceapi.hackerspacemsit.in/repos/Hackerspace2023/Quiz-app-Backend/issues",
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

// Getting PR Data for Muskaan- Blog Frontend
async function getPullRequests2(access_token) {
  try {
      const response = await axios.get(
          "https://despaceapi.hackerspacemsit.in/repos/Hackerspace2023/blog_frontend/pulls",
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

// Getting Issues Data for Muskaan
async function getIssues2(access_token) {
  try {
      const response = await axios.get(
          "https://despaceapi.hackerspacemsit.in/repos/Hackerspace2023/blog_frontend/issues",
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

// Getting PR Data For Sayandip- Blog Backend
async function getPullRequests3(access_token) {
  try {
      const response = await axios.get(
          "https://despaceapi.hackerspacemsit.in/repos/Hackerspace2023/Blog-app-server/pulls",
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

// Getting Issues Data for Sayandip
async function getIssues3(access_token) {
  try {
      const response = await axios.get(
          "https://despaceapi.hackerspacemsit.in/repos/Hackerspace2023/Blog-app-server/issues",
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

// Getting PR Data For Sayan- Portfolio
async function getPullRequests4(access_token) {
  try {
      const response = await axios.get(
          "https://despaceapi.hackerspacemsit.in/repos/Hackerspace2023/Hackerspace_Portfolio-Flutter-App-Public/pulls",
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

// Getting Issues Data for Sayan
async function getIssues4(access_token) {
  try {
      const response = await axios.get(
          "https://despaceapi.hackerspacemsit.in/repos/Hackerspace2023/Hackerspace_Portfolio-Flutter-App-Public/issues",
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

// Getting PR Data For Sahil- Notion
async function getPullRequests5(access_token) {
  try {
      const response = await axios.get(
          "https://despaceapi.hackerspacemsit.in/repos/Hackerspace2023/notion-clone/pulls",
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

// Getting Issues Data for Sahil
async function getIssues5(access_token) {
  try {
      const response = await axios.get(
          "https://despaceapi.hackerspacemsit.in/repos/Hackerspace2023/notion-clone/issues",
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

// // Getting PR Data For Muskaan
// async function getPullRequests6(access_token) {
//   try {
//       const response = await axios.get(
//           "https://despaceapi.hackerspacemsit.in/repos/muskaand26-msit/my-blog-app/pulls",
//           {
//               headers: {
//                   'Authorization': `Bearer ${access_token}`
//               }
//           }
//       );
//       return response.data; // Return the data directly
//   } catch (error) {
//       console.error("Error fetching pull requests:", error);
//       throw error; // Rethrow the error to handle it in the component
//   }
// }

// // Getting Issues Data
// async function getIssues6(access_token) {
//   try {
//       const response = await axios.get(
//           "https://despaceapi.hackerspacemsit.in/repos/muskaand26-msit/my-blog-app/issues",
//           {
//               headers: {
//                   'Authorization': `Bearer ${access_token}`
//               }
//           }
//       );
//       return response.data; // Return the data directly
//   } catch (error) {
//       console.error("Error fetching issues:", error);
//       throw error; // Rethrow the error to handle it in the component
//   }
// }

export { getAccessToken, getUserData, getPullRequests, getIssues, getPullRequests1, getIssues1, getPullRequests2, getIssues2, getPullRequests3, getIssues3, getPullRequests4, getIssues4, getPullRequests5, getIssues5};