# ArrayOps
An implementation of intersection, difference, symmetric difference and union.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
I wrote this as part of working on other projects. The use for creating this project came up so often that its creation was inevitable. There was a need for these *Array* operations in JavaScript/ Typescript. So, here's a good option to have that functionality.

## Technologies Used

Originally written as a function in JavaScript, it has since been completely rewritten as a class using Typescript.

## Features

* Get the *intersection* of the arrays.
* Get the *difference* of the arrays.
* Get the *symmetric difference* of the arrays.
* Get the *union* of the arrays.

## Setup

Just import the class into your project.

## Usage

Instantiate an instance of the ArrayOps class.
```
const ops: ArrayOps<number> = new ArrayOps<number>(A, B);
```
, where A and B are arrays, of numbers, in this case.
```
const arrayInt: number[] = ops.intersection();
```
Get the intersection of the arrays.
```
const arrayDiff: number[] = ops.difference();
```
Get the *difference* of the arrays.
```
const arraySymmDiff: number[] = ops.symmDifference();
```
Get the *symmetric difference* of the arrays.
```
const arrayUnion: number[] = ops.union();
```
Get the *union* of the arrays.
## Project Status

At this point, the code is viewed to be completed.
## Room for Improvement
The project works as it should, so the only improvement is if there are changes to Typescript.
## Contact

Feel free to contact me @michaelrjamesjr on twitter.
