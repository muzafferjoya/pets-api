## Firstly, Create Owner using this

```
curl -X POST http://localhost/api/owners \
-H "Content-Type: application/json" \
-d '{
  "name": "zoya",
  "email": "zoya@gmail.com",
  "phone": "123-456-8860",
  "address": "123 Main St, RTGH, IN"
}'
```

## Create Pet using Owner ID

```
curl -X POST http://ab5cdd01c18f843698c46983f5171542-1489826022.us-east-2.elb.amazonaws.com/api/pets \
-H "Content-Type: application/json" \
-d '{
  "name": "Catty",
  "species": "Cat",
  "breed": "Golden Retriever",
  "age": 3,
  "owner": "66c88e671f775e54f46753cc"
}'
```

## Get Owner Lists

```
http://localhost/api/owners/
```

## Gets Pets Lists

```

http://localhost/api/pets
```









