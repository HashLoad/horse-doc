---
title: Routing
type: guide
order: 3
---

**Routing** is how an application will respond to a request in an endpoint, which in turn consists of a path and method.

``` delphi
  App.Method('endpoint', Handler);
```

### Methods
The methods are derived from [HTTP methods](https://developer.mozilla.org/en/docs/Web/HTTP/Methods), of which we can use the following:

``` delphi
  // Method GET
  App.Get('/', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Request GET');
    end);
  );

  // Method POST
  App.Post('/', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Request POST');
    end);
  );

  // Method PUT
  App.Put('/', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Request PUT');
    end);
  );

  // Method DELETE
  App.Delete('/', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Request DELETE');
    end);
  );
```

In this example we define all possible methods at the root of the application that is represented by `/`.

### Routes
We have already defined the methods that we can use, but in combination we have to define also where this method will be called, which is the route of this request.

Some examples:
``` delphi
  App.Get('/', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Application Root');
    end);
  );

  App.Get('/contact', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Request on route /contact');
    end);
  );

  App.Get('/foo.bar', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Request on route /foo.bar');
    end);
  );
```

We can also have parameters on the routes:

``` delphi
  App.Get('/users/:id', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Req.Params['id']; // Gets the value entered in the parameter
    end);
  );

  App.Get('/blog/:author/:data/:post', 
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Req.Params['author'];
      Req.Params['data'];
      Req.Params['post'];
    end);
  );
```

### Route Processing
When defining a route, we provide a *procedure* that will be responsible for processing the request. In it, we have access to three parameters: `Req`,` Res` and `Next`.

``` delphi
  App.Get('/',
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('Application Root');
    end);
  );
```

`Req` provides all the information of the request that arrived in the route, such as the request headers, data, parameters, and so on.

``` delphi
  App.Get('/',
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Req.Headers; // Request Header
      Req.Body; // Data sent in the request
      Req.Params; // Request Parameters
    end);
  );
```

`Res` represents the response we will send to the request, so we can define the data, also the [Status Code](https://developer.mozilla.org/en/docs/web/HTTP/Status ) and response header.

``` delphi
  App.Get('/',
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('answer'); // Response data
      Res.Status (200); // OK Status
      Res.Headers; // Response Header
    end);
  );
```

`Next` can call the next procedure in the route processing sequence.

``` delphi
  App.Get('/:name', [
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      if (Req.Params['id'] = 'foo') then
      begin
        Res.Send('bar');
        raise EHorseCallbackInterrupted.Create;
      end
      Next;
    end,
    procedure (Req: THorseRequest; Res: THorseResonse; Next: TProc)
    begin
      Res.Send('fizz');
    end
  ]);
```

Note: If you do not want to continue the procedures, call the `EHorseCallbackInterrupted` exception.
