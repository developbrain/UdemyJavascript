// JavaScript program to rotate an array by
// d elements
 
/*Fuction to get gcd of a and b*/
function gcd( a, b){
    if (b == 0)
        return a;
    else
        return gcd(b, a % b);
}
 
/*Function to left rotate arr[] of siz n by d*/
function leftRotate(arr, d, n){
    /* To handle if d >= n */
    d = d % n;
    let g_c_d = gcd(d, n);
    for (let i = 0; i < g_c_d; i++) {
        /* move i-th values of blocks */
        let temp = arr[i];
        let j = i;
 
        while (1) {
            let k = j + d;
            if (k >= n)
                k = k - n;
 
            if (k == i)
                break;
 
            arr[j] = arr[k];
            j = k;
        }
        arr[j] = temp;
    }
}
 
// Function to print an array
function printArray(arr, size){
    for (let i = 0; i < size; i++)
        console.log(arr[i] +" ");
}
 
/* Driver program to test above functions */
let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
let n = arr.length;
// Function calling
leftRotate(arr, 5, n);
printArray(arr, n);

//Time complexity : O(n) 
//Auxiliary Space : O(1)