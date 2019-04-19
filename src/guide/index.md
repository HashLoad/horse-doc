---
title: Introduction
type: guide
order: 2
---

## What is Horse?

Horse is a **framework** for building web applications. As a main library, it is easy to adopt and integrate with other existing libraries or projects.

## First steps

The simplest way to test Horse is by installing. Feel free to install it and follow up with us for a few basic examples.

In the [Installation](installation.html) topic you will see how to install Horse.

## Basic notions

At the core of Horse is a system that allows us to declaratively map * HTTP * routes using a very simple syntax:

``` delphi
var
  App: THorse;
begin
  App: = THorse.Create(9000);

  App.Get('/ping',
    procedure (Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('pong');
    end);

  App.Start;
end;
```

We've just created our first Horse server!

## Ready for More?

We've briefly introduced the Horse - the rest of this guide will delve into other advanced features at a much greater level of detail, so read everything!