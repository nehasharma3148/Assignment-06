var n=parseInt(prompt("Enter a 3 digit number:"));
document.write("Enter a 3 digit number:"+n);
document.write("<br>");
var sum=0;
temp=n;
for(let i=1;i<=3;i++)
{
    r=temp%10;
    sum+=r**3;
    temp=parseInt(temp/10);
    

}
if(n==sum)
{
    document.write("Armstrong number");
}
else{
    document.write("Not Armstrong number");
}