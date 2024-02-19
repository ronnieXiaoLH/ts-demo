const arr = [1, 2, 3] as const

const arr2: readonly number[] = [1, 2, 3]

// 只读数组不允许修改数组和数组的元素
// arr.push(4)
// arr[1] = 22

// arr2.push(4)
// arr2[1] = 22

console.log(arr)

export {}
