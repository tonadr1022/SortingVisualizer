const selectionSort = (nums: number[]) => {
    console.log(nums)
    // iterate through array
    for (let i = 0; i < nums.length; i++) {
// for each iteration, find the min and select it
        let currMinIndex = i+1;
        let currMin = nums[currMinIndex];
        // find the min remaining element
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] < nums[currMinIndex]) {
                currMin = nums[j];
                currMinIndex = j;
            }
        }
        // swap
        if (currMin < nums[i]) {
            const temp = nums[i];
            nums[i] = nums[currMinIndex];
            nums[currMinIndex] = temp;
        }
    }
    console.log(nums)
    return nums
}
export default selectionSort;
// const selectionSort = (nums: number[]) => {
//     console.log(nums)
//     // iterate through array
//     for (let i = 0; i < nums.length; i++) {
// // for each iteration, find the min and select it
//         let currMinIndex = i+1;
//         let currMin = nums[currMinIndex];
//         // find the min remaining element
//         for (let j = i+1; j < nums.length; j++) {
//             if (nums[j] < nums[currMinIndex]) {
//                 currMin = nums[j];
//                 currMinIndex = j;
//             }
//         }
//         // swap
//         if (currMin < nums[i]) {
//             const temp = nums[i];
//             nums[i] = nums[currMinIndex];
//             nums[currMinIndex] = temp;
//         }
//     }
//     console.log(nums)
//     return nums
// }
// export default selectionSort;