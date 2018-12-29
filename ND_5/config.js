module.exports = {
  PORT: 1234,
  CONNECTION_STRING: 'mongodb://localhost:27017/project',
  CONNECTION_STRING_TEST: 'mongodb://localhost:27017/test',
  TOKEN_TEST: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjMjdiNmJlZmVjODFiMjQ3Y2QyMmJkYiIsImVtYWlsIjoicGFzdGFzQHBhc3Rhcy5sdCJ9LCJpYXQiOjE1NDYxMDcxNjJ9.jQKuNc_eOQ3u7AQ0CKfW9uw6JbtQGvHYZuDiqf8PFwY',
  JWT_SECRET: 'nothing',
  JWT_HEADER_KEY: 'token',
  TELEPHONE_REGEX: /^[+]3706[0-9]{7}$/,
  EMAIL_REGEX: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  ID_NUMBER_REGEX: /^([\d\-]{11})$/
};
