---
title: Get Starting
type: starter
order: 1
---

Routing determines how the application will respond to a request from a *client* at an *endpoint*, which would be the URI and a specific method of the HTTP protocol (POST, PUT, GET, DELETE and so on).

On the route, it is possible to have more than one treatment, which will be executed when the route that was requested is the corresponding one.

The route has the following structure:

``` delphi
  THorse.METHOD(PATH, HANDLER);
```

Where:

* `METHOD` is an HTTP request method.
* `PATH` it's a path on the server.
* `HANDLER` is the method (procedure) that will be executed when the route is matched.

The following examples illustrate the definition of simple routes.

Reply with "Hello World!" to whoever requested (*client* who made the *request*):

``` pascal
THorse.Get('/ping',
  procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
  begin
    Res.Send('Hello World!');
  end);
```
Respond to POST request on the root route (/):
``` pascal
THorse.Post('/',
  procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
  begin
    Res.Send('Got a POST request');
  end);
```
Respond to a PUT request to the /user route:
``` pascal
THorse.Put('/user',
  procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
  begin
    Res.Send('Got a PUT request at /user');
  end);
```
Respond to a DELETE request to the /user route:
``` pascal
THorse.Delete('/user',
  procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
  begin
    Res.Send('Got a DELETE request at /user');
  end);
```