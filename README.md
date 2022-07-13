# Renormalization

Live at [https://dataseyo.github.io/renormalization/](https://dataseyo.github.io/renormalization/)

Renormalization is a technique from statistical mechanics and high energy physics that has recently been exported into other fields in physics and even biology. This app shows the process of block spin renormalization (nicely illustrated in [Wilson Scientific American](https://www.semanticscholar.org/paper/Problems-in-Physics-with-many-Scales-of-Length-Wilson/e6707e93334cd17d854875687354b7b8c17f0c63)) by way of a slightly modified majority rule, where:

 - a random grid of blocks with two spin values is generated
 - in step (1), the grid is sliced into groups of 4 blocks, whose spin values are averaged and replaced by the majority spin (or by a random spin if there's a tie) 
 - as the user continues to click the "coarse grain" button, step (1) is repeated until only one block remains, and a new random grid is generated
 
The app is unfinished. Future plans: options for replacing +/- spins with colored blocks. Other renormalization techniques illustrated. More accurately mapping out the block spin technique and including relevant observables from the ising model. About page. Integration with ArXiv API to display renormalization papers (for fun). 
