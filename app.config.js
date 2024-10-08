import "dotenv/config";

export default ({ config }) => {
  return {
    ...config,
    extra: {
      firebaseApiKey: process.env.FIREBASE_AUTH_TOKEN,
    },
  };
};
