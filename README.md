# Deno-Hello


## Build Image

```
docker build ./ -t deno-helloworld
```

## Run the Container

```
docker container run --rm -p 4040:4040 --mount src=`pwd`,target=/server,type=bind --disable-content-trust deno-helloworld
```

## Check If It's Installed Correctly


enter curl your terminal.
```
curl -v localhost:4040/hello
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 4040 (#0)
> GET /hello HTTP/1.1
> Host: localhost:4040
> User-Agent: curl/7.64.1
> Accept: */*
>
< HTTP/1.1 200 OK
< content-length: 26
< content-type: application/json
<
* Connection #0 to host localhost left intact
{"message":"Hello World!"}* Closing connection 0
```

or

enter url to your web browser.

```
http://localhost:4040/hello
```
<img width="600" src="https://user-images.githubusercontent.com/1821958/99875067-07739600-2c30-11eb-8a62-31c5eb837218.png">

