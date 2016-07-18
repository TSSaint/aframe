---
title: <a-collada-model>
type: primitives
layout: docs
parent_section: primitives
---

> COLLADA is not recommended for distributing over the web in production due to its large size. Check out using the [glTF component](https://github.com/xirvr/aframe-gltf) instead. You can convert from COLLADA to glTF using [the converter](https://cesiumjs.org/convertmodel.html).

The COLLADA model primitive displays a 3D COLLADA model created from a 3D modeling program or downloaded from the web. It is an entity that maps the `src` attribute to the [collada-model component](../components/collada-model.md).

## Example

```html
<a-scene>
  <a-assets>
    <a-asset-item id="tree" src="tree.dae">
  </a-assets>

  <!-- Using the asset management system. -->
  <a-collada-model src="#tree"></a-collada-model>

  <!-- Defining the URL inline. Not recommended but more comfortable for web developers. -->
  <a-collada-model src="tree.dae"></a-collada-model>
</a-scene>
```

## Attribute

Note that the COLLADA model primitive inherits [common attributes](./common-attributes.md).

| Attribute | Component Mapping | Default Value |
|-----------|-------------------|---------------|
| src       | collada-model.src | null          |
