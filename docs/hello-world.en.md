---
title: Hello world!
type: starter
order: 1
---

# Hello world!

First create a console project in Delphi or Lazarus, save the project with the name you want (in this example, it will be saved as *hashload_horse*). Then install Horse as a dependency on your project, according to the [installation guide](../installation.en).

After Horse is created and installed in your project, include the following code:

===  "Delphi"

    ``` delphi
    uses
      System.SysUtils,
      Horse;

    const
        HORSE_PORT = 9000;

    begin
      THorse.Get('/',
        procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
        begin
          Res.Send('Hello Word!');
        end);

      THorse.Listen(HORSE_PORT,
        procedure(Horse: THorse)
        begin
          Writeln(Format('Server is running on %s:%d', [Horse.Host, Horse.Port]));
        end)
    end.
    ```

===  "Lazarus"

    ``` delphi
    {$MODE DELPHI}{$H+}

    uses
      SysUtils,
      Horse;

    const
      HORSE_PORT = 9000;

    procedure GetHelloWorld(Req: THorseRequest; Res: THorseResponse; Next: TNextProc);
    begin
      Res.Send('Hello Word!');
    end;

    procedure HorseListenCallback(Horse: THorse);
    begin
      Writeln(Format('Server is running on %s:%d', [Horse.Host, Horse.Port]));
    end;

    begin
      THorse.Get('/', GetHelloWorld);
      THorse.Listen(HORSE_PORT, HorseListenCallback);
    end.  
    ```

The application starts a server and listens for connections on port 9000. The application responds with a **Hello, world!** on the route **(/)** to the *client* that made the *request*. For all other paths, it will respond with a **Not Found** message and *status code* **404**

Now, compile and run the application. You will have as a result on the console something like **Server is running on 0.0.0.0:9000**

Then open a browser, type http://localhost:9000/ in the address bar and browse to view the output.

If you were able to view the result in your browser, this is great, your server worked correctly. Now you're ready to evolve on Horse!

See more at: [Understanding routing](../basic-routing.en)

--8<-- "includes/abbreviations.md"