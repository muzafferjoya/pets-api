#!/bin/bash

for ((i=1; i<=100; i++)); do
  curl -X POST https://pets-api.tekdinext.com/api/pets -H "Content-Type: application/json" -d '{
    "name": "Pet'$i'",
    "species": "Species'$i'",
    "breed": "Breed'$i'",
    "age": '$i',
    "owner": "669de3158aeae7132c73c946"
  }'
  echo "Created pet $i"
done
