var THREE = global.THREE = require('three');

// Allow cross-origin images to be loaded.

// This should not be on `THREE.Loader` nor `THREE.ImageUtils`.
// Must be on `THREE.TextureLoader`.
if (THREE.TextureLoader) {
  THREE.TextureLoader.prototype.crossOrigin = 'use-credentials';
}

// This is for images loaded from the model loaders.
if (THREE.ImageLoader) {
  THREE.ImageLoader.prototype.crossOrigin = 'use-credentials';
}

// In-memory caching for XHRs (for images, audio files, textures, etc.).
if (THREE.Cache) {
  THREE.Cache.enabled = true;
}

// TODO: Eventually include these only if they are needed by a component.
require('three/examples/js/loaders/OBJLoader');  // THREE.OBJLoader
require('three/examples/js/loaders/MTLLoader');  // THREE.MTLLoader
require('three/examples/js/BlendCharacter');  // THREE.BlendCharacter
require('three/examples/js/loaders/ColladaLoader');  // THREE.ColladaLoader
require('../../vendor/VRControls');  // THREE.VRControls
require('../../vendor/VREffect');  // THREE.VREffect

// This is for images loaded from the model loaders.
// This is for images loaded from the model loaders.
THREE.ColladaLoader.prototype.crossOrigin = 'use-credentials';
THREE.MTLLoader.prototype.crossOrigin = 'use-credentials';
THREE.OBJLoader.prototype.crossOrigin = 'use-credentials';

module.exports = THREE;
