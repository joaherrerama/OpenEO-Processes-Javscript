# openEO Processes JS

This repository contains the based code of implementation for processes specifications. Each process is coded and specified in modules with its test and documentation code.

If you wanna have more information about it, please check the **[Latest Version of the Specification](https://processes.openeo.org)**

# Aim

The repository seeks to analyze the performance of OpenEO Processes in a Browser environment.

# Demo and Performance Analysis 

The link below is still under development
[DEMO](https://github.com/joaherrerama/OpenEO-processes-js/tree/web)

# Processes

The latest version has 11 processes implemented as follow:

### Raster Datacube
* apply
* load_collection
* reduce_dimension
* ndiv

### Raster (TypedArray)
* max
* min
* median
* mode

### On number
* linear_scale_range
* absolute

## NPM 

The function bellow runs under the same workflow - Building, Testing and Packing

# Build 

```
npm build
```

# Testing 

Currently exist 7 unit testing and 4 user cases . These can be find in the test folder and can be compiled through:

```
npm test
```

# Packing 

```
npm pack
```
