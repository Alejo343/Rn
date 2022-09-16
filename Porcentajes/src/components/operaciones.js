const onSubmit2 = (num1,num2,setValue,value) => {
    let result;

    if (num1 && num2) {
      result = (num2 * 100) / num1;
    } else {
      result = 0;
    }

    console.log(result);
    setValue({...value, total: result});
}