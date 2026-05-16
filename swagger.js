const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE 341 Contacts API Documentation',
    description: 'Week 2 Assignment'
  },
    host: 'cse341-contacts-fpwa.onrender.com', //Render URL
    schemes: ['http']    
};

const outputFile = './swagger-output.json';

//Endpoint is server.js because routes are listed there
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);