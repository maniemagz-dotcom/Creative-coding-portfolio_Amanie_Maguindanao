# Experiment 1: Loops and Variables 

## [Link to Live Version]()

## Documentation

**Inspiration and Description:**
In this experiment, I explored the relationship between structured repetition and variables. The goal was to combine both logics of a grid with shapes that react differently to the program's state. I was inspired by the in-class demo in lectures 1 and 2 for the code. For the colors and shapes, I was inspired specifically by the blue chromis fish eating a white frozen cube. With those inspirations and goals, I utilized a nested for-loop to create the background texture and integrated a global variable initialized with random().

**Technical Progress:**
The foundation of this piece is the nested loop that iterates through the X and Y axes and random(), which modifies the position of a variable. By using a spacing variable of 50, I created a consistent grid of light blue ellipses inside the loop to act as a background (sea bubbles), while the circle, rectangle, and triangle were placed outside the loop to depict the blue chromis fish eating a white frozen cube. To satisfy the Task 1 extension, I declared a let pos and assigned it a random value between 200 and 300 in the setup() that controls the horizontal position of the circle and vertical position of the rectangle, causing the shapes outside the loop to change with every refresh.

**Reflection:**
The most significant "cause and effect" discovery was how both spacing and pos variables dictate the visual of the piece. When the spacing is small, the ellipses overlap to create a complex texture. 

![My Cause Image](exp_1_2.png)

When the sketch is refreshed and the spacing is increased to 80, the piece becomes more minimalist and has a sea bubble-like texture. 

![My Effect Image](exp_1-1.png)

One problem I encountered was ensuring the triangle remained balanced to depict the fins of the fish when the pos variable changed. I learned that by "pinning" two corners of the triangle to fixed coordinates and only allowing one corner to be controlled by the pos variable. This experiment taught me how a small amount of code can generate a variety of outcomes.

**Word Count: 330 words** 