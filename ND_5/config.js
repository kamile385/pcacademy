module.exports = {
  PORT: 1234,
  CONNECTION_STRING: 'mongodb://localhost:27017/project',
  CONNECTION_STRING_TEST: 'mongodb://localhost:27017/test',
  TOKEN_TEST: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjMGMwYTQyMzU4ZmM3MDRkMDA5ODNmNCIsImVtYWlsIjoiZW1haWxAZW1haWwuY29tIn0sImlhdCI6MTU0NDUxMDkzMX0.V2BVC1RQPXNLu48c-45QTJqKAnzbkJhY7DUVAJh-YJk',
  JWT_SECRET: 'nothing',
  JWT_HEADER_KEY: 'token',
  TELEPHONE_REGEX: '/^[+]3706[0-9]{7}$/',
  EMAIL_REGEX: '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/',
  ID_NUMBER_REGEX: '/^([\d\-]{11})$/'
};
