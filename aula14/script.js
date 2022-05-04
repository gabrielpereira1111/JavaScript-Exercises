var arr = [8, 2, 3, 9, 1]
console.log(arr.indexOf(1))
arr.push(7)
arr.sort()
console.log(arr)

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
console.log()
arr.forEach(element => {
    console.log(element)
});
console.log()
for(let index in arr){
    console.log(arr[index])
}