/**
 * @description: 1051. 高度检查器 
 * @author: PresByter
 * @date   : 2020/08/08 11:28:36
 * @latest : 2020/08/08 11:28:36
 * @param {number[]} nums 参数描述 e.g. 
 * @return {boolean} 返回结果描述 e.g. 
 * @see https://leetcode-cn.com/problems/height-checker/
 */
/**
 * 1051. 高度检查器
学校在拍年度纪念照时，一般要求学生按照 非递减 的高度顺序排列。

请你返回能让所有学生以 非递减 高度排列的最小必要移动人数。

注意，当一组学生被选中时，他们之间可以以任何可能的方式重新排序，而未被选中的学生应该保持不动。

 

示例：

输入：heights = [1,1,4,2,1,3]
输出：3 
解释：
当前数组：[1,1,4,2,1,3]
目标数组：[1,1,1,2,3,4]
在下标 2 处（从 0 开始计数）出现 4 vs 1 ，所以我们必须移动这名学生。
在下标 4 处（从 0 开始计数）出现 1 vs 3 ，所以我们必须移动这名学生。
在下标 5 处（从 0 开始计数）出现 3 vs 4 ，所以我们必须移动这名学生。
示例 2：

输入：heights = [5,1,2,3,4]
输出：5
示例 3：

输入：heights = [1,2,3,4,5]
输出：0
 

提示：

1 <= heights.length <= 100
1 <= heights[i] <= 100
 */
function heightChecker(heights: number[]): number {
    // const target = JSON.parse(JSON.stringify(heights)).sort()
    const target = [...heights].sort((a, b) => a - b)
    let sum = 0, i = 0, len = heights.length
    while (i < len) {
        (heights[i] !== target[i]) && sum++
        i++
    }
    return sum
    // function sortHeights(a: number, b: number) {
    //     return a - b;
    // }
    // let arr = [...heights];
    // arr.sort(sortHeights);
    // var sortnumber = 0;
    // for (var i = 0; i < arr.length; i++) {
    //     if (heights[i] != arr[i]) {
    //         sortnumber++;
    //     }

    // }
    // return sortnumber
};
// console.log(heightChecker([5, 1, 2, 3, 4]));
// console.log(heightChecker([1, 1, 4, 2, 1, 3]));
console.log(heightChecker([10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7]));
