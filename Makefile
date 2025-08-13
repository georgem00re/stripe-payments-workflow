
nodejs-backend-install:
	NVM_DIR="$${HOME}/.nvm" && . "$${NVM_DIR}/nvm.sh" && cd nodejs-backend && nvm use && npm install

nodejs-backend-start:
	NVM_DIR="$${HOME}/.nvm" && . "$${NVM_DIR}/nvm.sh" && cd nodejs-backend && nvm use && npm start

postgres-database-start:
	cd postgres-database && docker compose up --build

react-frontend-install:
	NVM_DIR="$${HOME}/.nvm" && . "$${NVM_DIR}/nvm.sh" && cd react-frontend && nvm use && npm install

react-frontend-start:
	NVM_DIR="$${HOME}/.nvm" && . "$${NVM_DIR}/nvm.sh" && cd react-frontend && nvm use && npm start
