var n=parseInt(prompt("Enter a number of terms:"));
document.write("Enter a number of terms:"+n);
document.write("<br>");
var n1=0,n2=1,nextTerm;
for(let i=1;i<=n;i++)
{
    document.write(n1+" , ");
    nextTerm=n1+n2;
    n1=n2;
    n2=nextTerm;
}

