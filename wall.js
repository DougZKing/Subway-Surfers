
function wall()
{
  // Now create an array of positions for the cube.

  const positions = [
    // Front
    -5.0, 10.0, 6.0,
    -5.0, -10.0, 6.0,
    5.0, -10.0, 6.0,
    5.0, 10.0, 6.0,

    //Right
    5.0, -10.0, 6.0,
    5.0, 10.0, 6.0,
    5.0, 10.0, -6.0,
    5.0, -10.0, -6.0,

    //Back
    5.0, 10.0, -6.0,
    5.0, -10.0, -6.0,
    -5.0, -10.0, -6.0,
    -5.0, 10.0, -6.0,

    //Left
    -5.0, -10.0, -6.0,
    -5.0, 10.0, -6.0,
    -5.0, 10.0, 6.0,
    -5.0, -10.0, 6.0,

    //Top
    -5.0, 10.0, 6.0,
    5.0, 10.0, 6.0,
    5.0, 10.0, -6.0,
    -5.0, 10.0, -6.0,

    //Bottom
    -5.0, -10.0, 6.0,
    5.0, -10.0, 6.0,
    5.0, -10.0, -6.0,
    -5.0, -10.0, -6.0,
  ];


  // This array defines each face as two triangles, using the
  // indices into the vertex array to specify each triangle's
  // position.

  const indices = [
    0, 1, 2, 0, 2, 3,
    4, 5, 6, 4, 6, 7,
    8, 9, 10, 8, 10, 11,
    12, 13, 14, 12, 14, 15,
    16, 17, 18, 16, 18, 19,
    20, 21, 22, 20, 22, 23,
    24, 25, 26, 24, 26, 27,
    28, 29, 30, 28, 30, 31,
    32, 33, 34, 32, 34, 35,
  ];

  // Now set up the colors for the faces. We'll use solid colors
  // for each face.

  const faceColors = [
    [0.48, 0.03, 0.007, 1.0],
    [0.48, 0.03, 0.007, 1.0],
    [0.48, 0.03, 0.007, 1.0],
    [0.48, 0.03, 0.007, 1.0],
    [0.48, 0.03, 0.007, 1.0],
    [0.48, 0.03, 0.007, 1.0],
  ];

  // Convert the array of colors into a table for all the vertices.

  var colors = [];

  for (var j = 0; j < faceColors.length; ++j) {
    const c = faceColors[j];

    // Repeat each color four times for the four vertices of the face
    colors = colors.concat(c, c, c, c);
  }

  return {
		'indices' : indices,
		'vertexCount' : 36,
		'positions' : positions,
    'colors' : colors,
		'rotation'  : 0.05,
		'translate' : [-17, 0, -55],
	}
}
