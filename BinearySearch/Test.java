import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        int l = 0, r = arr.length - k;
        while (l < r) {
            int m = l + (r - l) / 2;

            // Handle out-of-bound check
            if (m + k >= arr.length) break;

            if (x - arr[m] > arr[m + k] - x)
                l = m + 1;
            else
                r = m;
        }

        List<Integer> res = new ArrayList<>();
        for (int i = l; i < l + k && i < arr.length; i++) {
            res.add(arr[i]);
        }

        return res;
    }
}

public class Test {
    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5};

        Solution s = new Solution();
        List<Integer> result = s.findClosestElements(arr, 4, 3);

        System.out.println("Closest elements: " + result);
    }
}
