Max,Min=map(int,input().split())
sum=0
for i in range(Min,Max+1):
    if i%2==0:
        sum+=i
        i+=1
print("sum= ",sum)