A+B# [1.两数之和](https://leetcode.cn/problems/two-sum/description/)

<div style="display:flex;">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E9%9A%BE%E5%BA%A6-%E7%AE%80%E5%8D%95-%2351b8b8?style=flat">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E6%95%B0%E7%BB%84-%23b1b3b8?style=flat">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E5%93%88%E5%B8%8C%E8%A1%A8-%23b1b3b8?style=flat">
</div>

## 题目描述

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *`target`* 的那 **两个** 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

**示例 1：**

```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

**示例 2：**

```
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

**示例 3：**

```
输入：nums = [3,3], target = 6
输出：[0,1]
```

**提示：**

- `2 <= nums.length <= 104`
- `-109 <= nums[i] <= 109`
- `-109 <= target <= 109`
- **只会存在一个有效答案**

**进阶**：你可以想出一个时间复杂度小于 `O(n2)` 的算法吗？

## 答案

### 解法一：暴力解法

简单粗暴，两层循环，遍历所有情况看哪两个数相加等于目标和，如果符合则直接输出对应数值下标即可。

```java
public int[] twoSum(int[] nums, int target) {
  for (int i = 0; i < nums.length; i++) {
    for (int j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return new int[]{i, j};
      }
    }
  }
  return new int[]{};
}
```

时间复杂度：O(𝑛2)，空间复杂度：O(1)。

### 解法二：哈希表

在上面的解法中，针对第二层循环，我们可以换个理解方式：

```java
for (int j = i + 1; j < nums.length; j++) {
 int sub = target - nums[i];
  if(nums[j] == sub) {
    ...
  }
}
```

第二层循环无非就是遍历所有的元素，找出哪个元素等于 `sub = target - nums[i]`，时间复杂度为 𝑂(𝑛)。那么有没有一种方法，不用遍历就可以找到元素里有没有等于 `sub` 的呢？<strong style="color:#ae3520;">哈希表！！！</strong>我们可以把数组中的每个元素作为哈希表的 Key，元素下标作为哈希表的 Value。这样就只需要判断哈希表中是否存在 `sub` 的 Key 即可，如果找到目标值，则返回 `sub` 的下标以及 𝑖 即可。

```java
public int[] twoSum(int[] nums, int target) {
  HashMap<Integer, Integer> map = new HashMap<>();
  for (int i = 0; i < nums.length; i++) {
    int sub = target - nums[i];
    if (map.containsKey(sub)) {
      return new int[]{map.get(sub), i};
    }
    map.put(nums[i], i);
  }
  return new int[]{};
}
```

时间复杂度 𝑂(𝑛)，空间复杂度 𝑂(𝑛)，其中 𝑛 是数组 `nums` 的长度。