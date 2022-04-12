let steps =(N) => {
for (let i = 1; i <= N ; i++){
   console.log (`"${'#'.repeat(i) + ' '.repeat(N-i)}"`);
}    
} 

steps(4);