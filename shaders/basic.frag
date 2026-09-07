#version 330 core

// Fragment shader. What do we mean by fragment? A fragment is a pixel on the screen.
// The fragment shader is responsible for determining the color of each pixel on the screen.
// It takes the output from the vertex shader and uses it to determine the final color of each pixel.

in vec3 vertexColor; // "in" means this variable is coming from the vertex shader
in vec2 vertexUV;   // "in" means this variable is coming from the vertex shader
out vec4 FragColor; // "out" means this variable is going to the fragment shader

uniform float time;
float fireSpeed = 0.5f;

float hash(vec2 p)
{
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); //Fake random
}

float smoothNoise(vec2 uv)
{
    vec2 scaledUV = uv * 4.0;
    vec2 cell = floor(scaledUV);
    vec2 fractional = fract(scaledUV);

    float bottomLeft    = hash(cell + vec2 (0.0, 0.0));
    float bottomRight   = hash(cell + vec2 (1.0, 0.0));
    float topLeft       = hash(cell + vec2 (0.0, 1.0));
    float topRight      = hash(cell + vec2 (1.0, 1.0));

    float bottom = mix(bottomLeft, bottomRight, fractional.x);
    float top = mix(topLeft, topRight, fractional.x);
    float result = mix(bottom, top, fractional.y);

    return result;

    //return cell.x / 4.0;  // varies left-to-right (vertical stripes)
    //return cell.y / 4.0;  // varies bottom-to-top (horizontal stripes)
    //return hash(cell);    // varies with BOTH x and y (full grid)
}


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

    //float noise = hash(vertexUV + time);
    //FragColor = vec4(noise, noise, noise, 1.0);

    //test2
    //float noise = smoothNoise(vertexUV);
    //FragColor = vec4(noise, noise, noise, 1.0);

    //test3
    vec2 scrollingUV = vec2(vertexUV.x, vertexUV.y - time * fireSpeed);
    float noise = smoothNoise(scrollingUV);
    FragColor = vec4(noise, noise, noise, 1.0);

    //basic
    //FragColor = vec4(vertexUV, 0.0, 1.0); //Use UV coordinates to color the fragment (RGB, UV) 


    //OLD
    //FragColor = vec4(vertexColor, 1.0);
    //FragColor = vec4(1.0, 0.0, 1.0, 1.0);

}
