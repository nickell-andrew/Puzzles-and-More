//Using the JavaScript language, have the function KnightJumps(str) 
//read str which will be a string consisting of the location of a knight 
//on a standard 8x8 chess board with no other pieces on the board. The 
//structure of str will be the following: "(x y)" which represents the 
//position of the knight with x and y ranging from 1 to 8. Your program 
//should determine the number of spaces the knight can move to from a 
//given location. For example: if str is "(4 5)" then your program should 
//output 8 because the knight can move to 8 different spaces from 
//position x=4 and y=5. 

// Advanced challenges are worth 15 points and you are not timed for 
//them. Use the Parameter Testing feature in the box below to test your 
//code with different arguments.

function KnightJumps(str) { 

//assume board represented by an 8x8 2d array
//squares are given coords, note they are 1-8 while our array indices 
  //will be 0-7

//additionally, the given coords will be a string, we want to chop
//off parens and separate via the space to get the substrings that will
//form our x and y coords

//our algorithm will find all 8 moves the knight can make
//from it's current location 

//and then figure out which are in bounds

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
KnightJumps(readline());                            















                            
                            
                            
  
