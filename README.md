## Dev Setup
* `touch .env` 
  * provide all env variables used in `app.ts`
* `sudo docker-compose up --build`



## API
API will return JSON object that the widget will use to display.

`GET /items`
```json
[
  { "id": "GvYMVE_YHr4hQRuyMcXz8", "item": "Pfizer", "available": true },
  { "id": "YXDvhhpa02HV64VMAlHjs", "item": "rapid testing kit", "available": true }
]
```

## Adding new items
`POST /items`

```json
{ "item": "Moderna", "available": true }
```

### Update existing item
`POST /items/GvYMVE_YHr4hQRuyMcXz8`
```json
{ "item": "Pfizer vaccine", "available": false }
```

### Removing item
`DELETE /items/YXDvhhpa02HV64VMAlHjs`


### Server Sent Events
When add, update or remove happens, it will update all the screens.

