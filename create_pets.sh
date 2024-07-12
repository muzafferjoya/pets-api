#!/bin/bash

for ((i=1; i<=100; i++)); do
  curl -X POST http://localhost:3000/api/pets -H "Content-Type: application/json" -d '{
    "name": "Pet'$i'",
    "species": "Species'$i'",
    "breed": "Breed'$i'",
    "age": '$i',
    "owner": "66911c7901fb30a87335a82d"
  }'
  echo "Created pet $i"
done
