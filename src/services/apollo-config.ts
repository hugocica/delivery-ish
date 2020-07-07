import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://api.code-challenge.ze.delivery/public/graphql',
});

const firstHalf = 'AIzaSyB9pej4JRGzL5EVI';
const secondHalf = '7snJYyTdXcMMJy322o';

export const googleAPIToken = firstHalf + secondHalf;
