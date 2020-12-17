---
title: Introduction
type: guide
order: 2
---

## What is Horse?

Horse is a **framework** for building web applications. As the main library, it is easy to adopt and integrate with other existing libraries or projects.

## First Steps

The simplest way to test Horse is by installing. Feel free to install it and accompany us with some basic examples.

In the topic [Installation](installation.html) you will see how to install Horse.

## Basic Notions

At the heart of Horse is a system that allows us to declaratively map *HTTP* routes using a very simple syntax:

``` delphi
uses Horse;

begin
  THorse.Get('/ping',
    procedure(Req: THorseRequest; Res: THorseResponse; Next: TProc)
    begin
      Res.Send('pong');
    end);

  THorse.Listen(9000);
end.
```

We just created our first Horse server!

## Ready for More?

We introduced Horse briefly - the rest of this guide will delve into other advanced features in a much greater level of detail, so read on!