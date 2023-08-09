require("dotenv").config({
  path: `.env`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  trailingSlash: "never",
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-google-spreadsheets',
    //   options: {
    //     credentials: {
    //       type: 'service_account',
    //       project_id: process.env.PROJECT_ID,
    //       private_key_id: process.env.PRIVATE_KEY_ID,
    //       private_key: process.env.PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
    //       client_email: process.env.CLIENT_EMAIL,
    //       client_id: '',
    //       auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    //       token_uri: 'https://oauth2.googleapis.com/token',
    //       auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    //       client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.PROJECT_ID}%40appspot.gserviceaccount.com`,
    //     },
    //   }
    // },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '1EgZbxlPqe1ErEjAeAFKuQpKm1c0CjeQ9DrWkZnXUqOM',
        credentials: require('./google-credentials.json')
      }
    },
    {
      resolve: "gatsby-source-google-docs",
      options: {
        // https://drive.google.com/drive/folders/FOLDER_ID
        folder: "1t0WhlWgL1Aijcaq1LuQ3DMeUosO3__OL",
        createPages: true,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-images"],
      },
    },
  ],
}
