FROM cypress/factory

WORKDIR /app

COPY . .

RUN npm ci

CMD ["npm", "run", "test:e2e"]