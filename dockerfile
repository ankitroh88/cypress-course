FROM cypress/included:latest

RUN mkdir /my-cypress-project

WORKDIR /my-cypress-project

COPY ./package.json .
COPY ./app .
COPY ./cypress .
COPY ./cypress.config.js .

RUN npm install

#RUN npm run dev

#CMD ["npm","run","cy:run"]