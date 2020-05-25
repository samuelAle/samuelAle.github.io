---
title: 'Modern Http Clients'
date: '2020-05-25'
tags: ['Http', 'Microservice', 'REST', 'OpenApi']
description: 'Does your team maintain various sdks or force client to write their own http integrations? No more'
draft: true
---

Before jumping into my opinionated guide to client generation, I'd first like to take a moment to explain breifly, what an http client *is*.
In order to define this, let's break it down into two separate definitions (as silly as it may seem).

### What is HTTP

[HTTP](https://www.w3schools.com/whatis/whatis_http.asp) is a protocol / procedure that web services follow to send and receive data from one another.

```mermaid
graph LR
    A(Client: Your Browser on google.com) -- Http Request --> B(Service: Google's Datacenter)
    B -- Http Response --> A
```

In the broader software industry, services typically communicate with each other via HTTP.
(alternatives being RCP, AMQP, WebSockets, etc)

While HTTP does well to explain where services should request & send the data, it does not do a good job of explaining exactly how Company X formats their data.
For this reason, software developers invented additional specifications on top of HTTP to help describe the data being sent / received.

The most common/popular architectural style of using HTTP is called REST (REpresentational State Transfer).

RESTful services leverage HTTP and build upon it to `receive` / process data effeciently.
There are many conventions and best practices to follow in order to build a well behaved RESTful service.

It can be daunting to started and follow best practices, but luckily there are many free frameworks that are available to help you get started. One of which is OpenApi.

### What is a client

A client, in this context, is any application that communicates with a service over some protocol, like HTTP.

It should behoove service owners to ensure that their clients are set up for success to communicate with their service.

Clients care about the following:

* In what environments (locations) does your service exist?
* What are the endpoints / HTTP paths for these environments?
* What RESTful APIs exist, and what input do they accept?
* What do the API responses look like?
* What is the expected latency for a given API?
* Should I perform any client-side timeouts or rate limiting?
* When should I perform a retry for any given API?
* How do I authenticate myself with your service?
* How do I serialize / deserialize these json strings?
* What input limits or formats are required?
* What form of trace ID do you accept?
* What are your SLAs for a given API?

### What is an HTTP client

An HTTP client is a library, written in a given language (i.e. java), that assists in RESTful http communiccation with a given service.
The http client should be published by the maintainers of the service it communicates with.
These libraries should answer some of the concerns listed above and provide hints/guidance for the rest.

> Note: An HTTP client can and should also be used by the service owner in integration tests

## Ways to create HTTP client

At a high level, there are 2 main options for creating HTTP clients.

1. Manually
2. Using code generation

Here is a pro/cons list to going with the `Manual` approach

| PROS                                        | CONS                                                       |
| ----                                        | ----                                                       |
| You have fine-grained control over the code | You must update the code for each API change               |
|                                             | You must implement libraries for each language you support |
|                                             | You increase the risk of introducing bugs                  |

### How to generate an HTTP client

There are many tools available for code generation.

A very popular one for generating HTTP clients is called OpenAPI

### How to configure an HTTP client

From the list of what clients care about, here are the questions that OpenAPI clients solve:

* In what environments does your service exist?
* What are the endpoints / HTTP paths for these environments?
  * The library should understand what system variables exist and should select the correct endpoint based on whether ENV=DEV/STG/PROD
* What RESTful APIs exist, and what input do they accept?
* What do the API responses look like?
  * OpenAPI clients are generated with the API models defined in the specification file.
  * See the braindump if you don't know what the `specification` file is.
* What is the expected latency for a given API?
  * Ideally, the OpenAPI spec would have the ability to specify this, but it currently does not.
  * There is an [open ticket for that](https://github.com/OAI/OpenAPI-Specification/issues/541)
* Should I perform any client-side timeouts or rate limiting?
* When should I perform a retry for any given API?
  * A client library should have these settings preconfigured if they are necessary.
  * Retry logic can be built on a per-response basis by adding a response interceptor (but beware of retry-hell)
* How do I authenticate myself with your service?
* What form of trace ID do you accept?
  * Authentication / Authorization via api-key and oauth are both supported in the OpenAPI specification
  * Custom headers for trace IDs are also possible
* How do I serialize / deserialize these json strings?
* What input limits or formats are required?
  * The client library should annotate the class models as necessary to serialize / deserialize them appropriately
  * The library should also add validation logic on each field to handle input validation for you.

### [WIP] How to generate HTTP clients

Ideally, we would have a single repository where your API specification, service and client would live.

However, with limitations in our gitlab pipelines we are only able to produce one artifact per repository.

Therefore, we must split this into 3 repositories:

1. A specification repository
2. A service repository
3. A client repository

When the specification repository is updated, and merged, the build will trigger the pipelines for the client and the service.

Gitlab's [multi-project pipelines](https://docs.gitlab.com/ee/ci/multi_project_pipelines.html) can be used to accomplish this.
