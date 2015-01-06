/**
 * Turf is a modular GIS engine written in JavaScript. It performs geospatial
 * processing tasks with GeoJSON data and can be run on a server or in a browser.
 *
 * @module turf
 * @summary GIS For Web Maps
 */
module.exports = {
  isClockwise: require('turf-is-clockwise'),
  isolines: require('turf-isolines'),
  isobands: require('turf-isobands'),
  merge: require('turf-merge'),
  convex: require('turf-convex'),
  within: require('turf-within'),
  concave: require('turf-concave'),
  count: require('turf-count'),
  erase: require('turf-erase'),
  variance: require('turf-variance'),
  deviation: require('turf-deviation'),
  median: require('turf-median'),
  min: require('turf-min'),
  max: require('turf-max'),
  aggregate: require('turf-aggregate'),
  flip: require('turf-flip'),
  simplify: require('turf-simplify'),
  sum: require('turf-sum'),
  average: require('turf-average'),
  bezier: require('turf-bezier'),
  tag: require('turf-tag'),
  size: require('turf-size'),
  sample: require('turf-sample'),
  jenks: require('turf-jenks'),
  quantile: require('turf-quantile'),
  envelope: require('turf-envelope'),
  square: require('turf-square'),
  midpoint: require('turf-midpoint'),
  buffer: require('turf-buffer'),
  center: require('turf-center'),
  centroid: require('turf-centroid'),
  combine: require('turf-combine'),
  distance: require('turf-distance'),
  explode: require('turf-explode'),
  extent: require('turf-extent'),
  bboxPolygon: require('turf-bbox-polygon'),
  featurecollection: require('turf-featurecollection'),
  filter: require('turf-filter'),
  grid: require('turf-grid'),
  inside: require('turf-inside'),
  intersect: require('turf-intersect'),
  linestring: require('turf-linestring'),
  nearest: require('turf-nearest'),
  planepoint: require('turf-planepoint'),
  point: require('turf-point'),
  polygon: require('turf-polygon'),
  reclass: require('turf-reclass'),
  remove: require('turf-remove'),
  tin: require('turf-tin'),
  union: require('turf-union'),
  bearing: require('turf-bearing'),
  destination: require('turf-destination'),
  hex: require('turf-hex'),
  kinks: require('turf-kinks'),
  pointOnSurface: require('turf-point-on-surface')
};
