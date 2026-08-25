#version 330 core

// Vertex shader. What does that mean?
// A vertex shader is responsible for processing each vertex's attributes,
// such as position and color, and passing data to the fragment shader.

layout (location = 0) in vec3 aPosition; // Input vertex position. Meaning, this is the position of the vertex in 3D space.
layout (location = 1) in vec3 aColor; // Input vertex color. This is the color of the vertex.
// layout = Specifies the location of the input attribute in the shader.
// In this case, aPosition is at location 0 and aColor is at location 1.

out vec3 vertexColor; // Output variable to pass the vertex color to the fragment shader.

void main()
{
    gl_Position = vec4(aPosition, 1.0); // gl_Position is a built-in variable that holds the final position of the vertex in clip space.
    vertexColor = aColor;
}
