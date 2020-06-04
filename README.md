After deployment, update the stack with correct `EC2ID` and `TOKEN` parameter values:

```
aws cloudformation update-stack --stack-name ec2-control-Stack \
  --use-previous-template --capabilities CAPABILITY_IAM --parameters \
  ParameterKey=EC2ID,ParameterValue=i-0123456789abcdef \
  ParameterKey=TOKEN,ParameterValue=your-token-goes-here
```