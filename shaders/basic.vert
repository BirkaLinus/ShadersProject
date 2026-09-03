#version 330 core

// Vertex shader. What does that mean?
// A vertex shader is responsible for processing each vertex's attributes,
// such as position and color, and passing data to the fragment shader.

layout (location = 0) in vec3 aPosition; // Input vertex position. Meaning, this is the position of the vertex in 3D space.
layout (location = 1) in vec3 aColor; // Input vertex color. This is the color of the vertex.
layout (location = 2) in vec2 aTexCoord; // Input vertex texture coordinate. This is the coordinate used for texturing.
// layout = Specifies the location of the input attribute in the shader.
// In this case, aPosition is at location 0, aColor is at location 1, and aTexCoord is at location 2.

uniform mat4 model; // Model matrix. This matrix transforms the vertex from model space to world space.
uniform mat4 view; // View matrix. This matrix transforms the vertex from world space to camera space.
uniform mat4 projection; // Projection matrix. This matrix transforms the vertex from camera space to clip space.

uniform float time; // Time variable. This can be used to create animations or effects that change over time.


out vec3 vertexColor; // Output variable to pass the vertex color to the fragment shader.
out vec2 vertexUV; // Output variable to pass the vertex texture coordinate to the fragment shader.

void main()
{
    //gl_Position = vec4(aPosition, 1.0); // gl_Position is a built-in variable that holds the final position of the vertex in clip space.

    //Stuff to swap shit around
    vec3 flipped = vec3(aPosition.x, -aPosition.y, aPosition.z); // Flip the y-coordinate of the vertex position.
    vec3 offset = vec3(0.2, 0.0, 0.0);

    //giving an offset to the triangle
    //gl_Position = vec4(aPosition + offset, 1.0); // Transform the vertex position by the model, view, and projection matrices.

    //Flipping the triangle
    //gl_Position = vec4(flipped, 1.0); // Transform the vertex position by the model, view, and projection matrices.

    gl_Position = projection * view * model * vec4(aPosition, 1.0);

    vertexColor = aColor;
    vertexUV = aTexCoord;
}