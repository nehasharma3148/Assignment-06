var n=parseInt(prompt("Enter a number:"));
document.write("Enter a number:"+n);
document.write("<br>");
var sum=0;
for(let i=1;i<=n;i++)
{
        sum+=i;
}
document.write("Sum of "+n+" Natural is: "+sum);
