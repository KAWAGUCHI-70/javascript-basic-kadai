let num = 15;

//3の倍数の時
if(num % 3  == 0) { 
  console.log('3の倍数です');
}
//5の倍数の時
if(num % 5  == 0) { 
  console.log('５の倍数です');
}

if(num % 5  == 0 && num % 3 == 0) { 
  console.log('３と５の倍数です');
}