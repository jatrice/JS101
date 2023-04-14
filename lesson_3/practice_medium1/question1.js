// For this practice problem, write a program that outputs
// The Flintstones Rock! 10 times, with each line indented
// 1 space to the right of the line above it. The output
// should start out like this:

const str = 'The Flintstones Rock!';

for (let padding = 1; padding <= 10; padding += 1) {
  console.log(' '.repeat(padding) + str);
}