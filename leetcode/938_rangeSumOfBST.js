/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    if (!root) {
        return 0;
    }

    let sum = 0;
    const checkNode = (node) => {
        if (node.val >= L && node.val <= R) {
            sum += node.val;
        }
        if (node.right !== null) {
            checkNode(node.right);
        }
        if (node.left !== null) {
            checkNode(node.left)
        }
    }

    checkNode(root);

    return sum;
};