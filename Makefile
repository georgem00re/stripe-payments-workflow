
backend-install-dependencies:
	NVM_DIR="$${HOME}/.nvm" && . "$${NVM_DIR}/nvm.sh" && cd nodejs-backend && nvm use && npm install

backend-start:
	NVM_DIR="$${HOME}/.nvm" && . "$${NVM_DIR}/nvm.sh" && cd nodejs-backend && nvm use && npm start
