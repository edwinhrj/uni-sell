
frontend-mac:
	cd ui && sudo npm install && npx expo start --ios


frontend:
	cd ui && sudo npm install && npx expo start --ios


backend: 
	poetry install --no-root && cd backend && python3 manage.py runserver