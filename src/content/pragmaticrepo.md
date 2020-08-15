---
title: 'Pragmatic Repository Structure'
date: '2020-05-26'
tags: ['Infrastructure', 'Microservice', 'OpenApi']
description: 'Does your team actively maintain various sdks or force clients to write their own http integrations? 🙅🏽‍♂️'
draft: false
---

If you're working in a large company, there is a good chance that defining your own repository structure is out of your control.
Or at least, any benefits it may provide would not outweigh the cost of diverging from long-standing company conventions.

However, if you do have some control, allow me to share some advice.

My goal in this article is to make clear, what the benefits are to structuring your repository in the following way.

> Note: I'm going to be using java + gradle as an example

```default
.
├── api.yml                          # Source of truth for the REST apis in this repository
├── build.gradle                     # Defines build steps for compilation, tests, and publish
├── infra                            # Contains definitions of infrastructure (such as k8s, aws, azure, monitors, etc)
├── pipeline.yml                     # Defines the pipeline for this repository
├── src
│   ├── java                         # Source code
│   └── resources                    # Static resources
├── test
│   ├── unit                         # Unit tests for source code
│   └── integration                  # Integration tests for the service (should leverage the java-client)
├── build/generated/src/java         # Generated source code for the service (rest controller, API models, etc)
└── java-client
    ├── build.gradle                 # Defines build steps for the java client
    └── build/generated/src/java     # Generated output from the specification.yml
```

## Benefits

### api.yml

This file is in reference to an [OpenApi specification](https://swagger.io/specification).

This should be one of the first files you create in a new repo.

You can think of the specification.yml as a REST contract that defines what your service is going to expose.

A number of artifacts can be generated from the API specification:

* A client SDK in [various languages](https://github.com/OpenAPITools/openapi-generator/tree/master/docs/generators)
* Documentation in html or [markdown](https://github.com/Mermade/widdershins/blob/master/README.md)
* REST source code for the service
  * For example, there is a Spring plugin that generates a RestController and inner RestMethods

### build.gradle

Specific to my java example, gradle is the build-system in use here.

Dependencies are declared in this file

> check out the new [dependency locking feature](https://docs.gradle.org/current/userguide/dependency_locking.html)

### infra

This directory holds the definition files for the underlying infrastructure that this service needs

For example, if you arre using terraform as the definition language to manage your AWS resources, you may have:

```default
├── environments
│   ├── branch
│   ├── dev
│   ├── prod
│   └── stg
├── modules
│   ├── database
│   ├── permissions
│   ├── queue
│   └── monitors
├── main.tf
└── variables.tf
```

Some may argue that infrastructure should be defined in a separate repository, but you'd lose the following advantages:

* changes to infrastructure and the service get deployed together (one environment at a time)
* ability to rollback the infrastructure and the service at the same time
* code reviews improve when you see how changes in the infrastructure impact the service
* temporary branch environments can be created to test features before merging to the master/main branch.
  * This prevents resources conflicts in using shared infrastructure and allows multiple branch environments to remain isolated

### pipeline.yml

Many dev-ops platforms like [GitHub](https://docs.github.com/en/actions) and [GitLab](https://docs.gitlab.com/ee/ci/pipelines) both allow you to define your pipelines on a per-repo basis.

This file defines how your service gets deployed through your environments, as well as how your service is deployed in a branch environment.

this should also include how to deploy your infrastructure as well as publish any clients that are generated

### src & test

* **java**: The actual source code for your repository
* **resources**: The static resources for your repository
* **integration**: Integration tests that are run in each environment
* **unit**: Unit tests that cover 100% of lines in your repository 🙃

### build/generated/src/java

Source code that is generated from the api.yml for the service

Again, it is much better to rely on the `api.yml` file as the *source of truth*.
If you do this, then there will be no inconsistency between your generated clients and the service's HTTP layer.

### java-client

A java client that is generated from the api.yml file.

This java client *could* be defined in a separate repository, but a few reasons to keep it within your service repo is:

* The service's integration tests would more easily be able to consume the java client and test the service in the exact way your clients would be using it
* The pipeline can publish the client **after** the service completes deployment through production.

## Cons

There aren't many cons that I've run into with this repository structure. Only one stands out to me at this time of writing:

* definition of the pipeline can become large and difficult to maintain
