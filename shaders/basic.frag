#version 330 core

// Fragment shader. What do we mean by fragment? A fragment is a pixel on the screen.
// The fragment shader is responsible for determining the color of each pixel on the screen.
// It takes the output from the vertex shader and uses it to determine the final color of each pixel.

in vec3 vertexColor; // "in" means this variable is coming from the vertex shader
in vec2 vertexUV;   // "in" means this variable is coming from the vertex shader

out vec4 FragColor; // "out" means this variable is going to the fragment shader


//RGBA
void main()
{
    //Yellow
    //FragColor = vec4(1.0, 1.0, 0.0, 1.0);

    //Dark version
    //FragColor = vec4(vertexColor * 0.2, 1.0);

    //Inverted
    //FragColor = vec4(1.0 - vertexColor, 1.0);

    //Only red channel kept
    //FragColor = vec4(vertexColor.r, 0.0, 0.0, 1.0);

    //red
    //FragColor = vec4(1.0, 0, 0, 1.0);

    //keeping red and green channel
    //FragColor = vec4(vertexColor.r, vertexColor.g, 0, 1);

    /*
    if (vertexColor.r > vertexColor.g && vertexColor.r > vertexColor.b)
    {
        FragColor = vec4(1.0, 0.0, 0.0, 1.0); //Red Third
    }
    else if (vertexColor.g > vertexColor.r && vertexColor.g > vertexColor.b)
    {
        FragColor = vec4(1.0, 1.0, 0.0, 1.0); //YELLOW(remove red vector to get green instead) Third    
    }
    else if (vertexColor.b > vertexColor.r && vertexColor.b > vertexColor.g)
    {
        FragColor = vec4(0.0, 0.0, 1.0, 1.0); //Blue third
    }
    */

    //TEST

    FragColor = vec4(vertexUV, 0.0, 1.0); //Use UV coordinates to color the fragment


    //OLD
    //FragColor = vec4(vertexColor, 1.0);
    //FragColor = vec4(1.0, 0.0, 1.0, 1.0);

}
