tests:
	docker-compose exec app bash -c "unset EARTHQUAKE_API_URL; yarn test-watch"
lint:
	docker-compose exec app bash -c "unset EARTHQUAKE_API_URL; yarn lint"
