var singleNumber = function(nums) {
    let sub=0;
    for(let i=0;i<nums.length;i++){
        sub= Math.abs(nums[i]-sub);
    }
    return sub;
};


console.log(singleNumber([4,1,2,1,2]));
