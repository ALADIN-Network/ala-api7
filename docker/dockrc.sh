
function alacli() {
  docker-compose exec kalad alacli -u http://alanoded:8888 --wallet-url http://localhost:8900 "$@"
}

function kalad() {
  docker exec docker_alanoded_1 kalad "$@"
}

function pkill() {
  docker exec docker_alanoded_1 pkill "$@"
}
