const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const strapiToken = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

const fetchAPI = async (endpoint, options = {}) => {
  const defaultOptions = {
    headers: {
      Authorization: `Bearer ${strapiToken}`,
      "Content-Type": "application/json",
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  const response = await fetch(`${strapiUrl}${endpoint}`, mergedOptions);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }

  return response.json();
};

// ABOUT PAGE DESCRIPTION
export const getDescriptionContent = async () => {
  const dataAbout = await fetchAPI("/api/about?fields[0]=description");
  return dataAbout.data.description;
};

// ABOUT PAGE CONTENT
export const getAboutContent = async () => {
  const dataAbout = await fetchAPI("/api/about?fields[0]=content");
  return dataAbout.data.content;
};

// ABOUT PAGE CONTENT STUDIO
export const getAboutStudioContent = async () => {
  const dataAbout = await fetchAPI("/api/about?fields[0]=studio");
  return dataAbout.data.studio;
};

// MISSION
export const getMissionContent = async () => {
  const dataMission = await fetchAPI("/api/mission?fields[0]=content");
  return dataMission.data.content;
};

// PRIVACY POLICY
export const getPrivacyPolicy = async () => {
  const dataPrivacy = await fetchAPI(
    "/api/privacy?fields[0]=date&fields[1]=content"
  );
  return dataPrivacy.data;
};

// TERMS AND CONDITIONS
export const getTermsContent = async () => {
  const dataTerms = await fetchAPI(
    "/api/terms-of-use?fields[0]=date&fields[1]=content"
  );
  return dataTerms.data;
};

// SIDEBAR LATEST
export const getLatestArticles = async (limit = 5) => {
  const data = await fetchAPI(
    `/api/articles?fields[0]=title&fields[1]=date&fields[2]=slug&populate[cover]=*&sort[0]=date:desc&pagination[limit]=${limit}`,
    {
      cache: "no-store",
    }
  );
  return data.data;
};
