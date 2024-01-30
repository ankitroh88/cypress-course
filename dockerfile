FROM cypress/included:latest

RUN mkdir /my-cypress-project

WORKDIR /my-cypress-project

COPY ./cypress .

RUN npm install

CMD ["npm","run","cy:run"]